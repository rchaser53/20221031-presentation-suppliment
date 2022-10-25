mod utils;

use wasm_bindgen::prelude::*;
// use web_sys::{Node};
// use wasm_bindgen::prelude::;
use utils::set_panic_hook;

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    set_panic_hook();
    Ok(())
}

// usizeだと死ぬ、u64だとBigIntにされてしまう
#[wasm_bindgen]
pub fn run(n:u64) -> u64 {
    let mut acc = 0;
    for i in 1..=n {
        acc += collatz(i as u64);
        acc %= 1000000007;
    }
    // println!("{}", acc);
    acc
}

#[wasm_bindgen]
pub fn collatz(mut i: u64) -> u64 {
    let mut cnt = 0;
    while i != 1 {
        cnt += 1;
        if i % 2 == 0 {
            i /= 2;
        } else {
            i *= 3;
            i += 1;
        }
    }
    cnt
}
