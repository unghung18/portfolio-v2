import { CoreBreadcrumbs } from '@/components/atoms/CoreBreadcrumbs'
import PageContainer from '@/components/organism/PageContainer'
import { MENU_URL } from '@/routes'
import { DashboardCustomize } from '@mui/icons-material'
import { CircularProgress, IconButton, Typography } from '@mui/material'
import '@cyntler/react-doc-viewer/dist/index.css'
import dynamic from 'next/dynamic'
import { getTenantIdToken } from '@/config/token'

export const BC = () => {
  return <CoreBreadcrumbs
    isShowDashboard={false}
    breadcrumbs={[
      {
        title: (
          <div className="flex gap-4 items-center">
            <IconButton>
              <DashboardCustomize fontSize="small" />
            </IconButton>
            <Typography>Trang chủ</Typography>
          </div>
        ),
        pathname: MENU_URL.DASHBOARD,
      },
    ]}
  />
}


const { PDFView, DocView, PptxView } = {
  PDFView: dynamic(
    () =>
      import('../Top/PdfView').then(
        (component) => component.PDFView,
      ),
    { ssr: false, loading: () => <CircularProgress /> },
  ),
  DocView: dynamic(
    () =>
      import('../Top/DocView').then(
        (component) => component.DocView,
      ),
    { ssr: false, loading: () => <CircularProgress /> },
  ),
  PptxView: dynamic(
    () =>
      import('../Top/PptxView').then(
        (component) => component.PptxView,
      ),
    { ssr: false, loading: () => <CircularProgress /> },
  ),
}


export const Top1 = () => {
  return (
    <PageContainer title={<BC />}
    >
      <div className="flex flex-col gap-10 justify-center items-center mt-10 h-500">
        <DocView
          url={`https://upload-service.dev.apusplatform.com/api/v1/folders/driver-storage/4b11b529-7ebb-44b9-88e2-79d8af0f0bec.docx?tenantId=${getTenantIdToken()}`} />
      </div>
    </PageContainer>
  )
}


export const Top2 = () => {
  return (
    <PageContainer title={<BC />}
    >
      <div className="flex flex-col gap-10 justify-center items-center mt-10 h-500">
        <PDFView
          url={'https://upload-service.dev.apusplatform.com/api/v1/folders/driver-storage/8b538588-cae3-4d3a-bc3e-0ffe8a6dcac5.pdf'} />
      </div>
    </PageContainer>
  )
}

export const Top3 = () => {
  return (
    <PageContainer title={<BC />}
    >
      <div className="flex flex-col gap-10 justify-center items-center mt-10 h-500">
        <PptxView
          url={`https://upload-service.dev.apusplatform.com/api/v1/folders/driver-storage/fa51edcb-c0ab-49ea-9817-17c0c5dc8004.pptx?tenantId=${getTenantIdToken()}`} />
      </div>
    </PageContainer>
  )
}