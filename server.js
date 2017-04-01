const createServer = require('http').createServer;
const parse = require('url').parse;
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req, res) => {
    const pathname = parse(req.url, true).pathname;
    const query = parse(req.url, true).query;

    // console.log(Object.keys(req));
    req.headers["Access-Control-Allow-Origin"] = "*";
    req.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
    const moviePattern = /^\/m\/[1-9]+[0-9]*$/;
    const pagePattern = /^\/p\/[1-9]+[0-9]*$/;

    if (moviePattern.test(pathname)) {
      
      query.id = parseInt(pathname.replace(/^\/m\//g, ""));
      console.log(query.id);

      app.render(req, res, '/movie', query);
    } else if (pagePattern.test(pathname)) {
      query.page = parseInt(pathname.replace(/^\/p\//g, ""));
      console.log(query.page);

      app.render(req, res, '/page', query);
    } else {
      handle(req, res)
    }
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000 _(:з」∠)_')
  })
})
