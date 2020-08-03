import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../Assets/img/Logo.png'
import './Menu.css'
//import ButtonLink from './Components/ButtonLink'
import Button from '../Button';


function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">  {/*  to="", no lugar do href=""  */}
                <img className="Logo" src={Logo} alt="HITFLIX Logo" />
            </Link>
            
            {/* Antigo  "ButtonLink" */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video"> {/* Class necessária. Usada em "./Menu.css" */}
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;