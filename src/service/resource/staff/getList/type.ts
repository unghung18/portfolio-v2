import { PageResponse } from '@/service/type'

export type Staff = {
  id: number
  code: string
  name: string
  phoneNumber: string
  email: string
  position: {
    id: number
    name: string
  }
  department: {
    id: number
    name: string
  }
  activated: boolean
  url: string
  gender: string
}

export type Response = {
  GET: PageResponse<Staff[]>
}

export type RequestBody = {
  GET: {
    page?: number
    size?: number 
    search?: string 
  }
}
