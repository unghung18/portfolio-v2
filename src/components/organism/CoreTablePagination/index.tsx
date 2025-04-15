import CoreInput from '@/components/atoms/CoreInput'
import { toastError } from '@/toast'
import { TRANSLATE } from '@/routes'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import {
  Box,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  Typography,
} from '@mui/material'
import { map, transform } from 'lodash'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface Props {
  page: number
  size: number
  totalPages: number
  onChangePagination: (val: any) => void
}

const CoreTablePagination = (props: Props) => {
  const { page, size, totalPages, onChangePagination } = props
  const [rowPerPages, setRowPerPages] = useState(size ?? 10)
  const [currentPage, setCurrentPage] = useState(page + 1)
  const { t } = useTranslation(TRANSLATE.COMMON)

  const pageSizeOptions = [10, 20, 50, 100]

  const { control, getValues, setValue } = useForm({
    defaultValues: {
      jump_to_page: page + 1,
    },
  })

  useEffect(
    () => {
      setValue('jump_to_page', currentPage)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPage]
  )

  useEffect(() => {
    setCurrentPage(page ? page + 1 : 1)
  }, [page])

  useEffect(() => {
    if (size) {
      setRowPerPages(size)
    }
  }, [size])

  return (
    <Box className='flex flex-wrap items-center justify-between flex-1 gap-10 mt-20'>
      <div className='flex items-center'>
        <Typography variant='body2'>{t('table.paginationNumber')}</Typography>
        <Select
          sx={{
            minHeight: 0,
            paddingTop: '4px',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          value={size}
          onChange={(e: any) =>
            onChangePagination({ page: 0, size: e.target.value })
          }
        >
          {map(pageSizeOptions, (option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Box>
        <Pagination
          color='primary'
          onChange={(e, value) => {
            setCurrentPage(value)
            onChangePagination({
              size: rowPerPages,
              page: value - 1,
            })
          }}
          siblingCount={1}
          page={currentPage ?? 1}
          count={totalPages}
          showFirstButton
          showLastButton
          renderItem={(item) => {
            return (
              <PaginationItem
                slots={{
                  last: KeyboardDoubleArrowRightIcon,
                  first: KeyboardDoubleArrowLeftIcon,
                }}
                {...item}
              />
            )
          }}
        />
      </Box>
      <Box className='flex items-center'>
        <Typography className='pr-8' variant='body2'>
          {t('table.jumpToPage')}
        </Typography>
        <CoreInput
          variant='outlined'
          control={control}
          type='number'
          name='jump_to_page'
          onKeyPress={(ev: any) => {
            if (ev.key === 'Enter') {
              const toPage = getValues('jump_to_page')
              if (toPage <= totalPages && toPage > 0) {
                onChangePagination({
                  size: rowPerPages,
                  page: toPage - 1,
                })
                setCurrentPage(toPage)
              } else {
                toastError(t('table.no_exist_page'))
              }
            }
          }}
          onBlur={() => setValue('jump_to_page', currentPage)}
          className='w-28 text-sm'
          InputProps={{
            style: {
              height: '35px',
              minHeight: '35px',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default React.memo(CoreTablePagination)
