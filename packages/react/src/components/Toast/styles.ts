import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  fontFamily: '$default',
  width: '360px',
  backgroundColor: '$gray800',
  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },
})

export const ToastHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h3: {
    margin: 0,
    fontSize: '$xl',
    color: 'white',
    fontWeight: '$bold',
    lineHeight: '$tall',
  },

  svg: {
    color: '$gray200',

    '&:hover': {
      opacity: 0.7,
      cursor: 'pointer',
    },
  },
})
