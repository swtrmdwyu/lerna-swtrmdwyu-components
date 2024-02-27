import styled from "styled-components";
import { ButtonProps } from ".";

const sizes = {
    small: {
        width: '6rem',
    },
    medium: {
        width: '8rem',
    },
    large: {
        width: '12rem',
    },
    full: {

        width: '100%',
    },
}

export const StyledButton = styled.button<ButtonProps>`
    background-color: ${(props: ButtonProps) => props.theme === 'jade' ? 'var(--sp-jade)' : props.theme === 'dark' ? 'var(--sp-gunmetal)' : 'var(--sp-white-smoke)'};
    border: ${(props: ButtonProps) => props.theme === 'jade' ? '1px solid var(--sp-jade)' : '1px solid var(--sp-gunmetal)'};
    border-radius: 14px;
    color: ${(props: ButtonProps) => props.theme ===  'dark' ? 'var(--sp-white-smoke)' : 'var(--sp-gunmetal)'};
    font-size: ${(props: ButtonProps) => props.size ===  'small' ? '.6rem' : '.9rem'};
    font-family: var(--sp-primary-font);
    font-weight: 700;
    height: ${(props: ButtonProps) => props.size === 'large' ? '3rem' : 'auto'};
    padding: ${(props: ButtonProps) => props.size === 'full' ? '.7rem 0' : '.5rem 1rem'};
    text-transform: uppercase;
    width: ${(props: ButtonProps) => props.size ? sizes[props.size].width : '100%'};

    &:active {
        transform: scale(.99);
    }
`;