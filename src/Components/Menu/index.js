import React from 'react';
import Logo from '../../Assets/img/Logo.png'
import './Menu.css'
//import ButtonLink from './Components/ButtonLink'
import Button from '../Button';


function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="HITFLIX Logo" />
            </a>
            
            {/* Antigo  "ButtonLink" */}
            <Button as="a" className="ButtonLink"> {/* Class necessária. Usada em "./Menu.css" */}
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;