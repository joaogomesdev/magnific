import type { StoryObj, Meta } from '@storybook/react'
import { HeadingProps, Heading } from '@joaogomesdev-studies/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'This is an Heading',
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          '`h2` will be always the default Heading, but we can change it with `as` tag.',
      },
    },
  },
}
