const app = require('./app');
const {PORT} = require('./secret');

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})