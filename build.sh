#!/bin/sh

set -ex

cargo build --target wasm32-unknown-unknown

wasm-bindgen target/wasm32-unknown-unknown/debug/wasm_game_of_life.wasm --target web --out-dir ./www/public
