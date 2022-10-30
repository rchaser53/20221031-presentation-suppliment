# How to execute performance test

```sh
# js
$ node calcJs.js

# wasm
$ node calcWasm.js
```

# Environment
- node version v18.12.0
- macOS 12.4
- tip Apple M1 pro

# About Performance test

- Write Fibonacci number function by JavaScript or Wasm
- Execute the Fibonacci number function whose parameters are 20, 30, and 40.
- Result is the average of 30 runs

| n | js(ms) | wasm(ms) |
| --- | --- | --- |
| 20 | 0.107 | 0.046 |
| 30 | 7.678 | 4.218 |
| 40 | 931.407 | 504.520 |

# note
The first run is a bit slow(js-n20 0.968ms, wasm-n20 0.092ms). But this is ms order so I think it's not an important thing for the real environment.When I execute the node script using zsh script, the same thing also happens. I don't know the detail reason(Please tell me this reason why)