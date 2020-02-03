import { AxiosRequestConfig } from './types/index'
import { xhr } from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
  processConfig(config)
}

function processConfig(config: AxiosRequestConfig): void {
  transformURL(config)
}

function transformURL(config: AxiosRequestConfig): void {
  const { url, params } = config
  buildURL(url, params)
}

export default axios
