import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: "components/Button",
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {
        asChield: {
            table: {
                disable: true
            }
        }
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

