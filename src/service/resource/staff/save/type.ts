export type RequestBody = {
  SAVE: {
    id: number
    imageUrl: string
    code: string
    name: string
    firstName: string
    lastName: string
    department: {
      id: number
      name: string
    }
    position: {
      id: number
      name: string
    }
    birthday: string
    gender: string
    phoneNumber: string
    email: string
    activated: boolean
  }
}
