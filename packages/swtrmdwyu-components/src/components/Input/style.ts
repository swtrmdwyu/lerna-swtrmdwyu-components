import styled from "styled-components";
import { InputProps } from ".";


const themes = {
    light: "var(--sp-outer-space)",
    jade: "var(--sp-jade)"
}

export const InputContainer = styled.div<InputProps>`
    position: relative;
    width: 100%;

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        padding: 0;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: .8rem;
    }
`;

export const StyledInput = styled.input<InputProps>`
    border: none;
    border-radius: 16px;
    box-shadow: 0 0 0 1px ${(props: InputProps) => 
        props.$bordered && props.theme ?
        themes[props.theme] : 
        'rgba(0,0,0,0)'
    };
    font-family: var(--sp-primary-font);
    height: 2.5rem;
    padding: 0 1rem;
    outline: none;
    transition: box-shadow .3s ease; 
    width: calc(100% - 2rem);

    &::placeholder {
        font-family: var(--sp-primary-font);
    }

    &:focus {
        box-shadow: 0 0 0 2px ${(props: InputProps) => 
        props.theme ?
        themes[props.theme] :
        themes.light
    };
    }
`;