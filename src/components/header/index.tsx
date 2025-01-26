import React from "react"
import { Container, ContainerColor } from "./style"
import { Logo } from "../Logo"

export const Header = () => {
    return (
        <ContainerColor>
            <Container>
                <Logo color="1"/>
                <nav>
                    <a href="" className="anchors">TÓPICO</a>
                    <a href="" className="anchors">TÓPICO</a>
                    <a href="" className="anchors">TÓPICO</a>
                    <a href="www.google.com" id="stripeRedirect">Fazer Parte</a>
                </nav>
            </Container>
        </ContainerColor>
    )
}