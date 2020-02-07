import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types/index'
import { parseHeader } from './helpers/headers'

export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const { data = null, url, method = 'get', headers, responseType } = config
    let request = new XMLHttpRequest()
    request.open(method.toLocaleUpperCase(), url, true)
    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = parseHeader(request.getAllResponseHeaders())
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
    }
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)
  })
}
