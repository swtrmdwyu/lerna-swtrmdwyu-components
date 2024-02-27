import { Meta, StoryObj } from "@storybook/react";
import Note from ".";

/**
 * Tipo de card utilizado para exibição das notas feitas pelo usuário.
 */
const meta: Meta<typeof Note> = {
    title: 'DESIGN SYSTEM/Note',
    component: Note,
    tags: [ 'autodocs' ],
    parameters: {
    layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ 
                width: '400px', 
                display: 'flex', 
                justifyContent: "center", 
                alignItems: "center"
            }}>
            <Story />
          </div>
        ),
    ],
}

export default meta;

type Story = StoryObj<typeof meta>;

const note  = {
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet. Ad iure blanditiis est ullam porro eum odio voluptas et voluptas porro sed nihil sequi qui repellendus atque et temporibus modi. Vel accusamus vitae aut sint adipisci ut voluptatem laudantium vel ratione illum ea quos dolores.',
    date: new Date()
}

export const Default: Story = {
    args: {
        title: note.title,
        content: note.content,
        date: note.date
    }
}
