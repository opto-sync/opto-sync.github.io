# Opto Sync marketing site

Astro source for [https://opto-sync.github.io/](https://opto-sync.github.io/).

Local-first synchronization with durable IndexedDB/SQLite queues and a schema-driven reconciliation contract across client and server runtimes.

## Product boundary

The merge cores reconcile JSON; transport, authentication, and authorization remain separate system boundaries.

## Local validation

```sh
npm ci --ignore-scripts
npm test
npm run check
npm run build
```

GitHub Pages publishes only the tested `dist/` artifact from `main`. Dependencies are locked and all third-party workflow actions are pinned to immutable commits.
