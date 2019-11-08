const { server } = require('./server.js');

const port = process.env.port || 7000;
server.listen(port, () => {
    console.log(`Server started on port ${port}!`)
})