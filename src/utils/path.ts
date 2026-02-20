export const prefixPath = (path: string): string => {
    const isProd = process.env.NODE_ENV === 'production'
    const basePath = '/BM-SMILE'

    // Return absolute path as is if it already starts with the base path or is an external URL
    if (path.startsWith(basePath) || path.startsWith('http') || !path.startsWith('/')) {
        return path
    }

    // Prefix with basePath in production
    return isProd ? `${basePath}${path}` : path
}
