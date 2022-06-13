import Styled from 'styled-components';

export const Form = Styled.form`
    width: 100%;
`

export const Box = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin-bottom: 20px;
        width: 100%;
        padding: 10px;
        border-radius:10px;
        font-size: 1.1rem;
    }
    button {
        background-color: #E8175D;
        border: none;
        text-align: center;
        font-size: 1.1rem;
        color: #fff;
        border-radius: 10px;
        width: 120px;
        padding: 10px 0px;
        cursor: pointer;
        font-weight: 700;
        letter-spacing: 1.5px;
    }

`