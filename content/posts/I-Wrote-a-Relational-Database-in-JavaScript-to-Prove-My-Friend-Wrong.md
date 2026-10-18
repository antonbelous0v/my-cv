---
title: "I Wrote a Relational Database in JavaScript to Prove My Friend Wrong"
date: 2026-10-04
excerpt: "A tiny relational database where C++ starts V8 and the engine is plain JavaScript. No Node.js in production. Written mostly to prove a friend wrong."
---

## Why

I made this mostly to prove my friend wrong: yes, you can write basically anything in JavaScript. Almost anything 😂

I also wanted to show that you can embed JS pretty much anywhere. Literally even in your kettle. You just have to love this language enough ❤️

## What it is

MyDB (JSDB) is a tiny relational database. C++ starts V8 and talks to the OS. The actual database is written in JavaScript. No Node.js in production. Full source is at [github.com/antonbelous0v/JSDB](https://github.com/antonbelous0v/JSDB).

```text
Operating system
    ↓
C++ host runtime
    ↓
V8
    ↓
JavaScript database engine
```

It is not trying to beat PostgreSQL or SQLite. I just wanted to build the interesting parts myself and see how far JavaScript could go.

## What is inside

The storage layer is a real one: fixed-size 8 KiB pages, checksummed pages and WAL records, slotted heap pages with row identifiers, a clock-based no-steal buffer pool, binary tuple and catalog formats, B+Tree primary and secondary indexes, and a write-ahead log with LSNs and durable commits.

On top of that sits a full SQL pipeline: lexer, parser, binder, logical planner, physical planner, and executor. It speaks `CREATE TABLE`, `DROP TABLE`, `CREATE INDEX`, `DROP INDEX`, `INSERT`, `UPDATE`, `DELETE`, and `SELECT`, with `PRIMARY KEY`, `UNIQUE`, `NOT NULL`, and `FOREIGN KEY` constraints. Inner joins, filtering, ordering, limits, and aggregates (`COUNT`, `SUM`, `MIN`, `MAX`, `AVG`), over sequential and index scans, with `EXPLAIN` and `EXPLAIN ANALYZE` and prepared statements with positional parameters.

Transactions are MVCC: tuple versions, snapshot visibility, one-writer many-reader isolation, write-conflict detection, checkpoints, and WAL recovery. `VACUUM table_name` compacts the heap and reuses slots without breaking a snapshot.

Then there is everything around it: an interactive shell with metrics and page and WAL inspection, a multi-client TCP server with isolated transaction sessions, a versioned binary protocol with typed row metadata, exclusive database-file locking across processes, a local web UI with SSH port-forwarding, fault injection points, fuzz targets, and benchmarks.

The project implements the core machinery needed for ACID:

- Atomicity through explicit transactions, rollback actions, MVCC versions, and WAL transaction records.
- Consistency through schema validation, relational constraints, page invariants, and checksums.
- Isolation through transaction snapshots, MVCC visibility rules, and write-conflict detection.
- Durability through write-ahead logging, `fsync`, page LSNs, checkpoints, and persistent storage.

## Running some SQL

A small transfer between two accounts:

```sql
CREATE TABLE accounts (
    id BIGINT PRIMARY KEY,
    balance BIGINT NOT NULL
);

INSERT INTO accounts VALUES (1, 1000);
INSERT INTO accounts VALUES (2, 1000);

BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;

SELECT id, balance FROM accounts ORDER BY id;
```

```text
1 | 900
2 | 1100
```

The same thing can run over TCP or through a small web UI, and a Node.js client sits on top of the versioned binary protocol. It builds on macOS, Linux, and Windows. The only real non-JavaScript dependency is a V8 build, plus a C++20 compiler, CMake, and Ninja.

## Benchmarks

These numbers are from one Apple Silicon machine using a Release build and Node.js 24 for the benchmark host. Each result is the median of five runs. They are a local reference, not a universal score: storage hardware, V8 version, filesystem behavior, and background load all matter.

The suite used 2,000 rows unless another count is shown:

| Workload | Result |
| --- | ---: |
| B+Tree insert, 100,000 entries | 3,956,003 ops/s |
| B+Tree lookup, 100,000 entries | 3,802,974 ops/s |
| Bulk insert in one transaction | 15,267 ops/s |
| Indexed point read | 115,990 ops/s |
| Indexed point reads in one transaction | 155,811 ops/s |
| Prepared indexed point read | 472,864 ops/s |
| Sequential predicate scan | 6,158 ops/s |
| Bounded range query | 31,416 ops/s |
| Aggregate scan | 3,144 ops/s |
| Transactional update | 6,184 ops/s |
| Autocommit write | 184 commits/s |
| Commit latency p50 | 5.511 ms |
| Commit latency p95 | 6.971 ms |
| Commit latency p99 | 8.527 ms |
| Checkpoint | 5.614 ms |
| Reopen database | 24.213 ms |
| First indexed read after reopen | 6.036 ms |

Read-only queries do not write to the WAL or call `fsync`. Keeping a batch inside one explicit transaction is still faster, because it also avoids setting up a new snapshot for every query.

## So yeah

JavaScript in a database today, JavaScript in a kettle tomorrow ❤️
