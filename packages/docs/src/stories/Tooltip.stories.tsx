import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@kaka-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    date: '21 de Outubro',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    date: '21 de Outubro',
    disponibility: false,
  },
}
