import { AxiosRequestConfig } from './types/index'

export function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  let request = new XMLHttpRequest()
  request.open(method.toLocaleUpperCase(), url, true)
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}
