import { PageResponse } from '@/service/type'

export type Position = {
  id: number
  code: string
  name: string
  activated: boolean
}

export type Response = {
  GET: PageResponse<Position[]>
}

export type RequestBody = {
  GET: {
    page?: number | null
    size?: number | null
    search?: string | null
  }
}
