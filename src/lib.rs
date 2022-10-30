mod utils;

use wasm_bindgen::prelude::*;
use utils::set_panic_hook;

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    set_panic_hook();
    Ok(())
}

#[wasm_bindgen]
pub fn fib(n: i32) -> i32 {
    if n < 2 {
        n
    } else {
        fib(n - 1)  + fib(n - 2)
    }
}
