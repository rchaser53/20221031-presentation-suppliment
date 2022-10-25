#!/bin/sh

set -ex

cargo build --release --target wasm32-unknown-unknown

wasm-bindgen target/wasm32-unknown-unknown/release/wasm_sample.wasm --target web --out-dir ./www/public
