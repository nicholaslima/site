

import styled from 'styled-components';

const green = 'rgb(4, 211, 97)';
const cinza = 'rgb(168, 168, 179)';
const roxo = 'rgb(0, 0, 238)';
const preto = 'rgb(32, 32, 36)';

export const Container = styled.div`
    padding-top: 25px;
    padding-bottom: 25px;
    width: 100vw;
    
    background-color: ${ preto };
    ul{
        max-width: 850px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        li{ 
            list-style-type: none;
            font-family: Fira Code;
            color: ${ cinza };
            font-weight: 600;
            font-size: 18px;
            &::hover{
                color: #fff;
            }
        }
    }

`