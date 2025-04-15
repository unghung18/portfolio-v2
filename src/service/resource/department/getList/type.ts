import { PageResponse } from '@/service/type'

export type Department = {
  id: number
  code: string
  name: string
  parent: {
    id?: number | undefined
    name: string
  }
  activated: true
  departments: Department[]
}

export type Response = {
  GET: PageResponse<Department[]>
}

export type RequestBody = {
  GET: {
    page?: number | null
    size?: number | null
    search?: string | null
  }
}

export type DepartmentSelect = {
  id: number
  code: string
  name: string
}
