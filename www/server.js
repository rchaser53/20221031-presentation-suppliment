const express = require('express')
const app = express();

app.use(express.static('./public', {
  setHeaders: (res) => {
    res.setHeader('cache-control', 'no-store');
  }
}));
app.use(express.static('./entry', {
    setHeaders: (res) => {
      res.setHeader('cache-control', 'no-store');
    }
  }));

app.listen(3000, () => {
    console.log('listen server at port 3000')
})