import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';


const MainConteudo = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;


function PageDefault(props){
    return (
        <> {/* <React.Fragment>  = Para retirar as divs e só deixar as Tags necessárias */}
            <Menu/>
                <MainConteudo>
                    {props.children} {/* props.children - Para ser exibido os elementos filhos do componente PageDefault */}
                </MainConteudo>
            <Footer/>
        </>
    )
}

export default PageDefault;