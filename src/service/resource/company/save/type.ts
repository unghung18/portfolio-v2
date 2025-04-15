export type RequestBody = {
  SAVE: {
    id?: number | null
    code: string
    name: string
    logo: string | null
    phone: string
    email: string
    address: string
    taxCode: string
    countryId: number | null
    languageId: number | null
    description?: string
    timezone: string
    currencyId: number | null
    secondaryCurrencyIds: number[]
    thousandSeparator: string | null
    decimalSeparator: string | null
    floatRounding?: number | null
    roundingMethod: string
    activated: boolean
    cityId: number | null
    districtId: number | null
    wardId: number | null
    bankAccounts: {
      bankId: number
      bankOrgId: number
      accountNumber: string
      accountHolder: string
    }[]
    dateType: string
  }
  GET: {
    id: number
  }
}
