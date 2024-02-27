import { Meta, StoryObj } from "@storybook/react";
import SearchBar from ".";

/**
 * Componente de barra de pesquisa, utilizado para fazer pesquisas pelo usuário.
 */
const meta: Meta<typeof SearchBar> = {
    title: 'DESIGN SYSTEM/SearchBar',
    component: SearchBar,
    tags: [ 'autodocs' ],
    parameters: {
    layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ 
                width: '600px', 
                display: 'flex', 
                justifyContent: "center", 
                alignItems: "center"
            }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        theme: {
            control: 'inline-radio',
        },
        value: {
            control: {
                disable: true,
            }
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    
}

/**
 * Variação de tema. "light".
 */
export const Light: Story = {
    args: {
        theme: 'light',
    }
}

/**
 * Variação de tema. "light".
 */
export const jade: Story = {
    args: {
        theme: 'jade',
    }
}