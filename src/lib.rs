mod utils;

use wasm_bindgen::prelude::*;
use web_sys::{Node};
// use wasm_bindgen::prelude::;
use utils::set_panic_hook;

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    set_panic_hook();

    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    
    let p: Node = document.create_element("p")?.into();

    let body = document.body().expect("nya-n");

    // wasm内から直接リクエストを送ることは不可能
    // let response = minreq::get("http://httpbin.org/ip").send().expect("hoge");

    p.set_text_content(Some("afefe"));
    body.append_child(&p).expect("fuwafuwa every day");

    Ok(())
}