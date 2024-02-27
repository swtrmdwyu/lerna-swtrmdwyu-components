import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
/**
 * Componente de botão.
 */
const meta: Meta<typeof Button> = {
    title: 'DESIGN SYSTEM/Button',
    component: Button,
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
        },
        theme: {
            control: {
                type: 'inline-radio'
            }
        }
    },
    decorators: [
        (Story) => (
            <div style={{ width: '500px', display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <Story />
            </div>
        ),
    ]
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

/**
 * Cores padrão do botão.
 */
export const Colors: Story = {
    render: () => {
      return (
          <div style={{ 
              display: 'flex', 
              justifyContent: "space-between", 
              alignItems: "center", 
              gap: '1rem',
              width: '100%'
          }}>
            <Button
                label="dark"
                onClick={()=>{}}
                size="full"
                theme="dark"
            />
            <Button
                label="light"
                onClick={()=>{}}
                size="full"
                theme="light"
            />
            <Button
                label="jade"
                onClick={()=>{}}
                size="full"
                theme="jade"
            />
          </div> 
      );
    },
};

/**
 * Variação de cor "Gunmetal".
 * HEX: #F5F5F5.
 */
export const Dark: Story = {
    args: {
        label:'dark',
        theme: 'dark',
    }
}

/**
 * Variação de cor "White Smoke".
 * HEX: #233337.
 */
export const Light: Story = {
    args: {
        label:'light',
        theme: 'light',
    }
}

/**
 * Variação de cor "Jade".
 * HEX: #0DAB76.
 */
export const Jade: Story = {
    args: {
        label:'jade',
        theme: 'jade',
    }
}

/**
 * Tamanhos padrão do botão.
 */
export const Sizes: Story = {
    render: () => {
      return (
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: '1rem'
          }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: "center", 
                alignItems: "center", 
                gap: '2.5rem'
            }}>
                <Button 
                    label="small" 
                    onClick={()=>{}}
                    size="small"
                />
                <Button 
                    label="medium" 
                    onClick={()=>{}}
                    size="medium"
                />
                <Button 
                    label="large" 
                    onClick={()=>{}}
                    size="large"
                />
            </div> 
            <div>
                <Button 
                    label="Full" 
                    onClick={()=>{}}
                    size="full"
                />
            </div>
          </div>
      );
    },
};

/**
 * Variação de tamanho "full" que ocupa toda a largura disponível.
 */
export const Full: Story = {
    args: {
        label:'Full',
        size: 'full',
    },
}

/**
 * Variação de tamanho "large".
 */
export const large: Story = {
    args: {
        label:'large',
        size: 'large',
    }
}

/**
 * Variação de tamanho "medium".
 */
export const Medium: Story = {
    args: {
        label:'medium',
        size: 'medium',
    }
}

/**
 * Variação de tamanho "small".
 */
export const Small: Story = {
    args: {
        label:'small',
        size: 'small',
    }
}




