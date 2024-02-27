import styled from "styled-components";
import { AvatarProps } from ".";

const sizes = {
    small: '1.5rem',
    medium: '3.5rem',
    large: '4.5rem',
}


export const AvatarImage = styled.img<AvatarProps>`
    border: ${ (props: AvatarProps) => props.$bordered ? '4px solid var(--sp-gunmetal)' : 'none' };
    border-radius: 50%;
    height: ${ (props: AvatarProps) => props.size ? sizes[props.size] : sizes.medium };
    object-fit: cover;
    width: ${ (props: AvatarProps) => props.size ? sizes[props.size] : sizes.medium };
`;