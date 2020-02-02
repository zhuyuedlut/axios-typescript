import { AxiosRequestConfig } from './types/index'

export function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config
  let request = new XMLHttpRequest()
  request.open(method.toLocaleUpperCase(), url, true)
  request.send(data)
}
