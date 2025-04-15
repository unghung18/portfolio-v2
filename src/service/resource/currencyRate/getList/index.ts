import { authResourceApi } from '@/config/auth'
import { defaultOption } from '@/config/reactQuery'
import { useQuery } from 'react-query'
import { RequestBody, RequestParams, Response } from './type'

// currency rate
export const getCurrencyRateList = async (
  params: RequestBody['GET']
): Promise<Response['GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/currency-rate/list',
    params,
  })
  return data
}

export const useQueryGetCurrencyRateList = (
  params: RequestBody['GET'],
  options?: any
) => {
  return useQuery<Response['GET']>(
    ['/api/v1/currency-rate/list', params],
    () => getCurrencyRateList(params),
    { ...defaultOption, ...options }
  )
}

// company rate history

export const getCompanyRateHistory = async (
  params: RequestBody['COMPANY_RATE_HISTORY']
): Promise<Response['COMPANY_RATE_HISTORY']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/currency-rate-line/company-rate-history',
    params,
  })
  return data
}

export const useQueryGetCompanyRateHistory = (
  params: RequestBody['COMPANY_RATE_HISTORY'],
  options?: any
) => {
  return useQuery<Response['COMPANY_RATE_HISTORY']>(
    ['/api/v1/currency-rate-line/company-rate-history', params],
    () => getCompanyRateHistory(params),
    { ...defaultOption, ...options }
  )
}

// currency history

export const getCurrencyHistory = async (
  params: RequestBody['CURRENCY_HISTORY']
): Promise<Response['CURRENCY_HISTORY']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/currency-rate-line/currency-history',
    params,
  })
  return data
}

export const useQueryGetCurrencyHistory = (
  params: RequestBody['CURRENCY_HISTORY'],
  options?: any
) => {
  return useQuery<Response['CURRENCY_HISTORY']>(
    ['/api/v1/currency-rate-line/currency-history', params],
    () => getCurrencyHistory(params),
    { ...defaultOption, ...options }
  )
}

// company currency rate

export const getCompanyCurrencyRateList = async (
  params: RequestBody['COMPANY_GET']
): Promise<Response['COMPANY_GET']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/currency-rate-line/list',
    params,
  })
  return data
}

export const useQueryGetCompanyCurrencyRateList = (
  params: RequestBody['COMPANY_GET'],
  options?: any
) => {
  return useQuery<Response['COMPANY_GET']>(
    ['/api/v1/currency-rate-line/list', params],
    () => getCompanyCurrencyRateList(params),
    { ...defaultOption, ...options }
  )
}

export const changeStatusCurrencyRateCompany = async (
  params: RequestParams['PUT']
): Promise<any> => {
  const { data } = await authResourceApi({
    method: 'put',
    url: '/api/v1/currency-rate/change-status',
    params,
  })
  return data
}

export const checkHaveCurrencyRate = async (
  params: RequestParams['CHECK_HAVE_CURRENCY_RATE']
): Promise<Response['CHECK_HAVE_CURRENCY_RATE']> => {
  const { data } = await authResourceApi({
    method: 'get',
    url: '/api/v1/currency-rate-line/check-line',
    params,
  })
  return data
}
