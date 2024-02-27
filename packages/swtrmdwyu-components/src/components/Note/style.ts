import styled from "styled-components";

export const NoteContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 0px 41px -23px rgba(0,0,0,0.08);
    display: flex;
    height: auto;
    max-height: 200px;
    margin-bottom: 1rem;
    padding: 1.5rem;
    position: relative;
    width: calc(100% - 3rem);
`;

export const PreviewContainer = styled.div`
    font-family: var(--sp-primary-font);
    color: var(--sp-gunmetal);

    img {
        width: 0.9rem;
    }

    h2 {
        font-size: 1.16rem;
        font-weight: 700;
        opacity: 0.7;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.9rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        width: 75%;
    }
`;

export const NoteDate = styled.span`
    font-family: var(--sp-secondary-font);
    font-size: .7rem;
    font-weight: 700;
    position: absolute;
    bottom: .8rem;
    right: 1.5rem;
    opacity: .6;
`;