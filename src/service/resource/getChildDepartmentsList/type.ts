import { PageResponse } from '@/service/type'

export type Department = {
  id: number
  code: string
  name: string
  activated: boolean

}

export type Response = {
  GET: PageResponse<Department[]>
}

export type RequestBody = {
  GET: {
    page?: number
    size?: number 
    search?: string 
  }
}
