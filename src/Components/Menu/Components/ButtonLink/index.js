import React from 'react'

//Função transformada em Styled-Component "../../../../Components/Button" </Button>

function ButtonLink(props){
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;