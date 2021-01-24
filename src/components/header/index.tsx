


import React from 'react';
import { Container } from './style';



const Header:React.FC =() => {
    return(
        <Container>
            <ul>    
                <li>Home</li>
                <li>Blog</li>
                <li>PortFólio</li>
                <li>skills</li>
                <li>Contacts</li>
            </ul>
        
        </Container>
    )
}

export default Header;