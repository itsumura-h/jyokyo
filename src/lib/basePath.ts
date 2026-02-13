const rawBaseUrl = import.meta.env.BASE_URL || '/'

const basePathPrefix =
  rawBaseUrl === '/' ? '' : rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl

const EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z0-9+.-]*:)?\/\//i

export function getBasePathPrefix() {
  return basePathPrefix
}

export function withBasePath(path: string) {
  if (!path || EXTERNAL_LINK_REGEX.test(path) || path.startsWith('#')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return basePathPrefix ? `${basePathPrefix}${normalizedPath}` : normalizedPath
}

export function stripBasePath(path: string) {
  if (!basePathPrefix) {
    return path || '/'
  }

  if (path === basePathPrefix) {
    return '/'
  }

  if (path.startsWith(`${basePathPrefix}/`)) {
    return path.slice(basePathPrefix.length) || '/'
  }

  return path || '/'
}
