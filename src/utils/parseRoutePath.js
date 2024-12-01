export function parseRoutePath(path) {
    const routeParamametersRegex = /:([a-zA-Z]+)/g

    const withParams = path.replaceAll(routeParamametersRegex, "(?<$1>[a-x0-9-_]+)")

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

    return pathRegex
}