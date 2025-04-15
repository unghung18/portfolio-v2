import { PageResponse } from '@/service/type'

export type RequestParams = {
  GET: {
    page: number
    size: number
    activated: boolean
  }
}

export type Org = {
  id: number
  code: string
  name: string
  isDefault: boolean
  type: string
}

export type Response = {
  GET: PageResponse<Org[]>
}
