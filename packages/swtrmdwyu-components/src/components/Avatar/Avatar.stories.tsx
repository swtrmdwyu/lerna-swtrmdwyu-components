import { Meta, StoryObj } from "@storybook/react";

import defaultAvatar from './assets/default-avatar.jpeg'
import Avatar from ".";

/**
 * Componente usado para a imagem de avatar do perfil de usuário.
 */
const meta: Meta<typeof Avatar> = {
    title: 'DESIGN SYSTEM/Avatar',
    component: Avatar,
    tags: [ 'autodocs' ],
    parameters: {
    layout: 'centered',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        }
    }
}

export default meta;

type Story  = StoryObj<typeof meta>;

export const Default: Story = {

}

/**
 * Avatar de perfil estilizado com borda.
 */
export const Bordered: Story = {
    args: {
        size: 'medium',
        $bordered: true,
        src: defaultAvatar,
    }
}

/**
 * Variações pradão de tamanho do avatar.
 */
export const Sizes: Story = {
    render: () => {
      return (
          <div style={{ 
            display: 'flex', 
            justifyContent: "center", 
            alignItems: "center", 
            gap: '3rem',
            width: '100%'
          }}>
            <Avatar 
                size="small"
            />
            <Avatar 
                size="medium"
            />
            <Avatar 
                size="large"
            />
          </div> 
      );
    },
};

/**
 * Menor variação de tamanho padrâo. "small".
 */
export const Small: Story = {
    args: {
        size: 'small',
        $bordered: false,
        src: defaultAvatar,
    }
}

/**
 * Variação média de tamanho padrâo. "medium".
 */
export const Medium: Story = {
    args: {
        size: 'medium',
        $bordered: false,
        src: defaultAvatar,
    }
}

/**
 * Maior variação de tamanho padrâo. "large".
 */
export const Large: Story = {
    args: {
        size: 'large',
        $bordered: false,
        src: defaultAvatar,
    }
}
