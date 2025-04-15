export type bankOrgesDTO = {
  id?: number
  code?: string
  name?: string
}

export type RequestBody = {
  POST: {
    code?: string
    name: string
    description?: string
    activated?: boolean
    bankOrges?: Array<bankOrgesDTO>
    deletebankOrges?: Array<number>
  }
}

export type Response = {
  POST: any
}
