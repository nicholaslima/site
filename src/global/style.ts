import { createGlobalStyle } from 'styled-components';

const preto = 'rgb(18, 18, 20)';
const cinza = 'rgb(168, 168, 179)';


export default createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    body{
        background-color:${ preto };
    }

    button{ 
        cursor: pointer;
    }

    li{ 
        text-decoration: none;
    }

`;