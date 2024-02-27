import sparkleIcon from './assets/sparkle.svg';
import { NoteContainer, NoteDate, PreviewContainer } from './style';
import { format, formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale';

export interface NoteProps {
    /**
     *Atribui o título do card.
     */
    title: string,
    /**
     *Define o conteudo de texto do card.
     */
    content: string,
    /**
     *Define a data da última alteração do card.
     */
    date: Date,
}

export default function Note({ title, content, date } : NoteProps) {
    return (
        <NoteContainer>
            <PreviewContainer>
                <h2><img src={sparkleIcon} /> {title}</h2>
                <p>{content}</p>
            </PreviewContainer>
            <NoteDate>{format(date, 'd MMM, yyyy', { locale: pt })}</NoteDate>
        </NoteContainer>
    );
}