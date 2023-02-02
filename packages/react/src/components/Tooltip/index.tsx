import { ComponentProps } from 'react'
import { TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  disponibility: boolean
  date: string
}

export function Tooltip({ disponibility = true, date }: TooltipProps) {
  return (
    <TooltipContainer>
      <span>
        {date} - {disponibility ? 'Disponível' : 'Indisponível'}
      </span>
    </TooltipContainer>
  )
}
