import { routes } from '../routes.js'
import { extractQueryFunction } from '../utils/extract_query_params.js'
import { Database } from '../../database.js'

const database = new Database()

export function routeHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url)
    })

    if (route) {
        const routParams = req.url.match(route.path)

        const { query,...params } = routParams.groups
        extractQueryFunction(query)

        req.params = params
        req.query = query ? extractQueryParams(query) : {}

        return route.controller({req, res, database})
    }

    return res.writeHead(404).end('Rota não encontrada')
}