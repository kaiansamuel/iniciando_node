import { parseRoutePath } from './utils/parseRoutePath.js'
import { Database } from '../database.js'

export const routes = [
    {
        method: 'GET',
        path: '/products',
        controller: ({ req, res, database }) => {
            const products = database.select('products')
            return res.end('Lista de Produtos!')
        },
    },
    {
        method: 'POST',
        path: '/products',
        controller: ({ req, res, database }) => {
            const { name, price } = req.body

            database.insert('products', { name, price })
            return res.writeHead(201).end()
        },
    },
    {
        method: 'DELETE',
        path: '/products/:id',
        controller: ({ req, res }) => {
            return Response.end('Produto removido com ID: ' + req.params.id)
        }
    }
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}))