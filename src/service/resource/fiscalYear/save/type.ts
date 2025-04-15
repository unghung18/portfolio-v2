export type RequestBody = {
  POST: {
    startFiscalYear: Date | string
    endFiscalYear: Date | string
    isChangeFiscalYear: boolean
    newStartFiscalYear: Date | string
  }
}
