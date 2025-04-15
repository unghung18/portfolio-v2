import { BaseResponse } from '@/service/type'

export type CurrencyRateDetail = {
  id: number
  companyId: number
  company: string
  currencyId: number
  currency: string
  activated: boolean
  updatedAt: string
  rateLines: RateLine[]
}

export interface RateLine {
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

export type Response = {
  GET: BaseResponse<CurrencyRateDetail>
}

export type RequestBody = {
  GET: {
    companyId?: number
  }
}
