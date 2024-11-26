import http from 'http'

const server = http.createServer((req, res) => {
  return res.end('Hello World!')
})

server.listen(3333, () =>
  console.log('Server running at port 3333'))
