import deafaultAvatar from './assets/default-avatar.jpeg';
import { AvatarImage } from './style';

export interface AvatarProps {
    /**
     * Define o tamaho do avatar.
     */
    size?: 'small' | 'medium' | 'large',
    /**
     * Define se o avatar possui borda.
     */
    $bordered?: boolean,
    /**
     * Recebe a url da imagem de dp avatar.
     */
    src?: string,
    /**
     * Pode atribuir uma função ao avatar.
     */
    onClick?: () => void
}

export default function Avatar({ 
    size = 'medium', 
    $bordered = false, 
    src =  deafaultAvatar
}: AvatarProps) {

    return(
        <AvatarImage 
            size={size}
            $bordered={$bordered}
            src={src}
        />
    );
}