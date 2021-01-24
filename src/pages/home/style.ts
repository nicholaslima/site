

import styled from 'styled-components';
import avatar from '../../assets/imgs/avatar.jpg';

const cinza = 'rgb(168, 168, 179)';
const preto = 'rgb(32, 32, 36)';
const green = 'rgb(4, 211, 97)';
const s = '#41414d';

export const Container = styled.div`
    width: 960px;
    margin: 0 auto;

    .details{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .avatar{ 
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 15px;
        border: 5px solid ${ green };
        padding: 15px;
        background-image: url(${ avatar });
        background-size: contain;
        box-sizing: border-box;
        background-repeat: no-repeat;
    }
   
    .description{
        font-size: 18px;
        font-family: Fira Code;
        width: 820px;
        font-weight: 400;
        color: #fff;
        line-height: 35px;
        h1{ 
            font-family: Fira code;
            font-weight: 600;
            color: white;
            color: ${ green };
            margin-bottom: 20px;
        }
    }

    .card{
        border-radius: 10px;
        border-radius: 10px;
        padding: 15px 25px;
        background-color: ${ preto };
        margin: 15px;
        line-height: 35px;
    }

    .skills{
        margin-top: 25px;

        h1{
            color: ${ green };
            font-family: Fira code;
            margin-bottom: 25px;
            color: #8257E5;
            text-align: center;
        }
        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            li{
                display: flex;
                flex-direction: row;
                color: ${ cinza };
                justify-content: space-around;
                align-items: center;
               
                p{
                    font-family: Fira code;
                    font-size: 18px;
                    margin-left: 12px;
                }
            }
        }
    }

`;