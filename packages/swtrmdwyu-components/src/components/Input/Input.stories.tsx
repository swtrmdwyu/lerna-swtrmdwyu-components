import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

/**
 * Elemento de input. Usado para inserção de dados pelos usuários.
 */
const meta: Meta<typeof Input> = {
    title: 'DESIGN SYSTEM/Input',
    component: Input,
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
                alignItems: "center",
            }}>
            <Story />
          </div>
        ),
    ],
    argTypes: {
        theme: {
            control: 'inline-radio',
        },
        type: {
            control: {
                disable: true,
              },
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
    args: {
        placeholder: "Default",
    }
}

/**
 *  Variação do input sem bordas.
 */
export const Unbordered: Story = {
    args: {
        $bordered: false,
        placeholder: "Unbordered",
    }
}

/**
 *  Variação de tipo. "text".
 */
export const Text: Story = {
    args: {
        type: "text",
        placeholder: "Text",
    }
}

/**
 *  Variação de tipo. "password".
 */
export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Password",
    }
}

/**
 * Variações de cores do input.
 */
export const Themes: Story = {
    render: () => {
      return (
          <div style={{ 
            display: 'flex', 
            justifyContent: "center", 
            alignItems: "center", 
            gap: '1rem',
            width: '100%',
            flexDirection: 'column'
          }}>
            <div style={{ 
                display: 'flex',
                gap: '.5rem',
                width: '100%'
            }}>
            <Input 
                type="text"
                theme="light"
                placeholder="Light Text"
            />
            <Input 
                type="password"
                theme="light"
                placeholder="Light Password"
            />
            </div>
            <div style={{ 
                display: 'flex',
                gap: '.5rem',
                width: '100%'
            }}>
            <Input 
                type="text"
                theme="jade"
                placeholder="Jade Text"
            />
            <Input 
                type="password"
                theme="jade"
                placeholder="Jade Password"
            />
            </div>
          </div> 
      );
    },
};

/**
 *  Variação de tema. "jade".
 */
export const Jade: Story = {
    args: {
        theme: "jade",
        placeholder: "Jade",
    }
}

/**
 *  Variação de tema. "light".
 */
export const Light: Story = {
    args: {
        theme: "light",
        placeholder: "Light",
    }
}
