
const app = require('./server.js');

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
