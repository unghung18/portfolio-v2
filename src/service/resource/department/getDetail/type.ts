import { BaseResponse } from '@/service/type'

type PositionDetail = {
  id: number
  code: string
  name: string
  parent: {
    id?: number | undefined
    name: string
  }
  activated: true
}

export type RequestParams = {
  GET: { departmentId: number }
}

export type Response = {
  GET: BaseResponse<PositionDetail>
}
