export const prefixPath = (path: string): string => {
    // Keep external URLs and non-root paths as-is.
    if (path.startsWith('http') || !path.startsWith('/')) {
        return path
    }

    return path
}
