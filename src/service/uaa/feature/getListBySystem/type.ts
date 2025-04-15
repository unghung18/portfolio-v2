import { PageResponse } from '@/service/type'

type Feature = {
  id: number
  name: string
  code: string
  description: string
  isActive: boolean
  apis: [
    {
      id: number
      name: string
      code: string
      endpoint: string
      method: string
      serviceId: number
      description: string
      isActive: boolean
      isAuthorized: boolean
      viewType: string
    }
  ]
}

export type Response = {
  GET: PageResponse<Array<Feature>>
}

export type RequestBody = {
  GET: {
    // name?: string
    // code?: string
    systemId?: number | null
    // isActive?: boolean | null
    // page: number
    // size: number
  }
}
