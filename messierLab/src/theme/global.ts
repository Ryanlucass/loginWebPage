import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol{
        padding: 0;
        list-style: none;
        margin: 0;
    }
    li{  
        list-style: 0;
    }
    body, input, textarea, button {
        font-family: 'inter', sans-serif;
        font-weight: 400;
    }
`;

