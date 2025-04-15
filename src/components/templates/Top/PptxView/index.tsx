import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import '@cyntler/react-doc-viewer/dist/index.css'
import { PRIMARY } from '@/helper/colors'
import { getCmsToken } from '@/config/token'

type Props = {
  url: string
}

export const PptxView = ({ url }: Props,
) => {
  const docs = [
    {
      uri: url,
      fileType: 'pptx',
      fileName: 'fileName.pptx',
    },

  ]

  return <div className={'h-full w-full'}>
    <DocViewer
      documents={docs}
      prefetchMethod="GET"
      requestHeaders={{
        Authorization: `Bearer ${getCmsToken()?.accessToken}`,
      }}
      pluginRenderers={DocViewerRenderers}
      style={
        { height: 1000 }
      }
      theme={{
        primary: PRIMARY,
        secondary: '#ffffff',
        tertiary: '#5296d899',
        textPrimary: '#ffffff',
        textSecondary: '#5296d8',
        textTertiary: '#00000099',
        disableThemeScrollbar: false,
      }}
    />
  </div>
}
