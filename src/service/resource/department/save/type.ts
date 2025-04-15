export type RequestBody = {
  SAVE: {
    id: number
    code: string
    name: string
    parent: {
      id?: number | undefined
      name: string
    }
    activated: boolean
  }
}
