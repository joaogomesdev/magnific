import type { StoryObj, Meta } from '@storybook/react'
import { TextProp, Text } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid deserunt animi, tempore cumque perspiciatis placeat repellendus nobis consequuntur aspernatur quia nihil? Provident fugiat in libero qui itaque molestias doloremque?',
  },
} as Meta<TextProp>

export const Primary: StoryObj<TextProp> = {}
export const CustomTag: StoryObj<TextProp> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
