export type RequestBody = {
  POST: {
    updatedAt: string
    activated: boolean
    rateLines: RateLines[]
  }
}

export interface RateLines {
  currencySourceId: number
  buyingRate: number | null
  updateType: string
  sellingRate: number | null
  calculation: string
  currencyDesId?: number
  bankId: number | null
  updatedAt: string
  currencySourceCode?: string
  currencySourceName?: string
}
