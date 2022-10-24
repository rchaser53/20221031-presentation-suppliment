const express = require('express')
const app = express();

express.static.mime.types['wasm'] = 'application/wasm'

app.use(express.static('./public', {
  setHeaders: (res) => {
    if (res.req.url.includes('.wasm')) {
        res.setHeader('Content-Type', 'application/wasm');
    }
    res.setHeader('cache-control', 'no-store');
  }
}));
app.use(express.static('./entry', {
    setHeaders: (res) => {
      if (res.req.url.includes('.wasm')) {
          res.setHeader('Content-Type', 'application/wasm');
      }
      res.setHeader('cache-control', 'no-store');
    }
  }));

app.listen(3000, () => {
    console.log(12)
})