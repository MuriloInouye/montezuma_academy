import React from "react"
import { Container, ContainerColor } from "./style"
import Logo from "../logo"

export const Header = () => {
    return (
        <ContainerColor>
            <Container>
                <Logo color="2"/>
                <nav>
                    <a href="#Encontros" className="anchors">Aulas</a>
                    <a href="#SobreOMentor" className="anchors">Sobre o mentor</a>
                    <a href="#Promocao" className="anchors">Promoção</a>
                    <a href="https://w.app/1in2bf" target="_blank" id="stripeRedirect">Quero Fazer Parte</a>
                </nav>
            </Container>
        </ContainerColor>
    )
}