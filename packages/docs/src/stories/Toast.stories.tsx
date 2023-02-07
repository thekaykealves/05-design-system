import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@kaka-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    dayOfTheWeek: 'Quarta-feira',
    dayOfMounth: '21 de Outubro',
    hours: 16,
  },
}
