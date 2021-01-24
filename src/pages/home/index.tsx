
import React from 'react';
import Header from '../../components/header';
import { Container } from './style';
import { DiGitCompare,DiFirebase,DiTerminal,DiCode  } from 'react-icons/di';

const Home: React.FC = () => {
    return(
        <>
        <Header></Header>
        <Container>
            <div className="details">
                <div className=" avatar "></div>
                <p className="description card">
                    <h1>Nicholas Lima</h1>
                    Desenvolvedor web, apaixonado por criar soluções tecnológicas com programação, e resolver os problemas das pessoas. 
                </p>

                
            </div>

            <div className="skills">
                    <h1>Boas Práticas</h1>
                    <ul>
                        <li>
                            <DiCode size="50" color='rgb(4, 211, 97)'></DiCode>
                            <p>clean code</p>
                        </li>
                        <li>
                            <DiTerminal size="50" color='rgb(4, 211, 97)'></DiTerminal>
                            <p>principios SOLID</p>
                        </li>
                        <li>
                            <DiFirebase size="50" color='rgb(4, 211, 97)'></DiFirebase>
                            <p>TDD - testes  automatizados</p>
                        </li>
                    </ul>

                </div>
        </Container>
        </>
    )
}

export default Home;