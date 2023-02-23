const http = require('http')
const port = 3001

const handler = (request, response) => {
    console.log('new user!')
    response.end('hello node')
}

const server = http.createServer(handler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something went wrong')
    }
    console.log('server is running')
})
