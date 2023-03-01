
# Sample repo

This repo is a bug reproduction for graphclient. 
Shows how pagination breaks when using multiple sources.


## How to reproduce the issue

```
yarn install
yarn graphclient build
ts-node src/index.ts
```

Uncomment the `graph-network-subgraph` source in `graphclient.yml`, run the above commands again and it works.