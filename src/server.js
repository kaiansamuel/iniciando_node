import http from 'http'
import { jsonBodyHandler } from './middlewares/jsonBodyHandler.js'

const server = http.createServer((req, res) => {
  const { method, url } = req

  jsonBodyHandler(req, res)

  if (method === 'GET' && url === '/products') {
    return Response.end('Lista de Produtos')
  }

  if (method === 'POST' && url === '/products') {
    return res.writeHead(201).end(JSON.stringify(req.body))
  }

  return res.writeHead(404).end('Rota não encontrada!')


})

server.listen(3333, () =>
  console.log('Server running at port 3333'))