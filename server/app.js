
const app = require('./server');
const port = process.env.PORT || 3001;
console.log('app is', app)
app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
  });