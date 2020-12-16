## Fast-Stringiy

#### Problem
`JSON.stringify` can be one of the more performance intensive methods used
Node / Express backends. In some cases, significantly, slowing down server performance, in turn leading to issues for the client.

#### Solution
Schema-based Json rendering, such as provided by npm modules like `fast-json-stringify`, can offer a tremendous boost in performance, especially with smaller payloads. Instead of the inefficient recursive calls used by 'JSON.stringify',necessary when the server is unaware of the nature of the payload the method is called on. Mcethods such as the module noted above are more performant in that they can take a more direct route.

Benchmarks, as noted in the `fast-json-stringify` [docs](https://github.com/fastify/fast-json-stringify) can be seen below:

- Machine: EX41S-SSD, Intel Core i7, 4Ghz, 64GB RAM, 4C/8T, SSD.
- Node.js v12.16.2
```
FJS creation x 59,805 ops/sec ±0.23% (91 runs sampled)

JSON.stringify array x 5,330 ops/sec ±0.54% (97 runs sampled)
fast-json-stringify array x 6,995 ops/sec ±0.24% (94 runs sampled)

JSON.stringify long string x 15,108 ops/sec ±0.13% (100 runs sampled)
fast-json-stringify long string x 15,089 ops/sec ±0.15% (98 runs sampled)

JSON.stringify short string x 13,214,696 ops/sec ±0.19% (97 runs sampled)
fast-json-stringify short string x 33,378,500 ops/sec ±0.27% (95 runs sampled)

JSON.stringify obj x 3,172,653 ops/sec ±0.15% (98 runs sampled)
fast-json-stringify obj x 13,537,123 ops/sec ±0.19% (95 runs sampled)
```