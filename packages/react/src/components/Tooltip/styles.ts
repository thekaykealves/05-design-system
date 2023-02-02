import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  fontFamily: '$secondary',
  fontSize: '$sm',
  fontWeight: '$medium',
  width: '200px',
  height: '$5',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  borderRadius: 5,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',

  '&:after': {
    content: ' ',
    position: 'absolute',
    top: '100%',
    left: '50%',
    borderWidth: '10px',
    marginLeft: '-10 px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent',
  },
})
