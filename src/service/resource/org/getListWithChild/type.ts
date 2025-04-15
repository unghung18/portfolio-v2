import { CommonObject, PageResponse } from '@/service/type'

export type Org = {
  id: number
  code: string
  name: string
  level: number
  typeOfOrganization: string
  parent: CommonObject
  activated: true
}

export type Response = {
  GET: PageResponse<Org[]>
}

export type RequestBody = {
  GET: {
    search?: string
    page: number
    size: number
    activated?: boolean
    parentId?: number | null
    typeOfOrganization?: string | null
  }
}
