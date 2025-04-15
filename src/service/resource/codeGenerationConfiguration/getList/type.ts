import { PageResponse } from '@/service/type'

type CodeGenerationConfiguration = {
  id: number
  code: string
  name: string
  isActive: true
  bizAppId: number
  bizAppName: string
  featureId: number
  featureName: string
  generateCodeMap: [
    {
      id: number
      sequence: number
      type: string
      sequenceData: {
        numberStart: number
        step: number
        cycle: string
        splitter: string
      }
      dateData: {
        formatDate: string
        splitter: string
      }
      textData: {
        content: string
        splitter: string
      }
    }
  ]
}

export type Response = {
  GET: PageResponse<Array<CodeGenerationConfiguration>>
}

export type RequestBody = {
  GET: {
    search?: string | undefined
    bizAppId?: number | null
    featureId?: number | null
    isActive: boolean | null
    page: number
    size: number
  }
}
