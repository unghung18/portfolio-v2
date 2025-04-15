import React from 'react'
type Props = {
  size?: number
  color?: string
}
const TooltipIcon = (props: Props) => {
  const { color = '#747475', size = 16 } = props
  return (
    <div className='flex items-center justify-center'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Info'>
          <path
            id='Vector'
            d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_2'
            d='M7.5 7.5H8V11H8.5'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_3'
            d='M8 6C8.41421 6 8.75 5.66421 8.75 5.25C8.75 4.83579 8.41421 4.5 8 4.5C7.58579 4.5 7.25 4.83579 7.25 5.25C7.25 5.66421 7.58579 6 8 6Z'
            fill={color}
          />
        </g>
      </svg>
    </div>
  )
}

export default React.memo(TooltipIcon)
