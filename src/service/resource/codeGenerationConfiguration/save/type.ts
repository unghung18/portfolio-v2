export type GenerateCodeMap = {
  id?: number | null
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

export type RequestBody = {
  SAVE: {
    id?: number | null
    code: string
    applyType: string
    name: string
    fullCode: string
    isActive: boolean
    bizAppId: number | null
    featureId: number | null
    apiId: number | null
    generateCodeMap: GenerateCodeMap[]
  }
  GET: {
    id: number
  }
}
