import { BaseResponse, PageResponse } from '@/service/type'

export type CurrencyRate = {
  id: number
  companyId: number
  companyCode: string
  companyName: string
  currencyId: number
  currency: string
  activated: boolean
}

export type CompanyCurrencyRate = {
  id: number
  currencyRateId: number
  currencySourceId: number
  currencySourceCode: string
  currencySourceName: string
  buyingRate: number
  updateType: string
  sellingRate: number
  calculation: string
  bankId: number | null
  bank: any
  updatedAt: string
}

export type CurrencyRateHistory = {
  id: number
  currencyRateId: number
  currencySourceId: number
  currencySourceCode: string
  currencySourceName: string
  buyingRate: number
  updateType: string
  sellingRate: number
  calculation: string
  bankId: number
  bank: string
  updatedAt: string
}[]

export type CurrencyHistory = {
  id: number
  currencyRateId: number
  currencySourceId: number
  currencySourceCode: string
  currencySourceName: string
  buyingRate: number
  updateType: string
  sellingRate: number
  calculation: string
  bankId: number
  bank: string
  updatedAt: string
}

export type CheckHaveCurrencyRate = {
  haveSecondary: boolean
  secondaryCurrency: string
  secondaryCurrencyId: number
  companyId: number
}

export type Response = {
  GET: PageResponse<CurrencyRate[]>
  COMPANY_GET: PageResponse<CompanyCurrencyRate[]>
  COMPANY_RATE_HISTORY: BaseResponse<CurrencyRateHistory[]>
  CURRENCY_HISTORY: PageResponse<CurrencyHistory[]>
  CHECK_HAVE_CURRENCY_RATE: BaseResponse<CheckHaveCurrencyRate>
}

export type RequestBody = {
  GET: {
    search?: string | null
    page: number
    size: number
  }
  COMPANY_GET: {
    page: number
    size: number
    companyId: number
    updateType: 'AUTOMATIC' | 'HANDMADE' | null
  }
  COMPANY_RATE_HISTORY: {
    currencyRateId: number
    updatedAt?: string
  }
  CURRENCY_HISTORY: {
    currencySourceId: number
    page: number
    size: number
  }
}

export type RequestParams = {
  PUT: {
    id: number
    activated: boolean
  }
  CHECK_HAVE_CURRENCY_RATE: {
    companyId: number
    secondaryCurrencyId: number
  }
}
