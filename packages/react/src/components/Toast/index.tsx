import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastContainer, ToastHeader } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  dayOfTheWeek: string
  dayOfMounth: string
  hours: number
}

export function Toast({ dayOfTheWeek, dayOfMounth, hours }: ToastProps) {
  return (
    <ToastContainer>
      <ToastHeader>
        <h3>Agendamento realizado</h3>

        <X size={20} />
      </ToastHeader>

      <span>
        {dayOfTheWeek}, {dayOfMounth} às {hours}h
      </span>
    </ToastContainer>
  )
}
