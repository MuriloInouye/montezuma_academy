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
                    <a href="https://wa.me/5511985911590?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Montezuma%20Academy%20e%20tenho%20interesse%20na%20mentoria!" target="_blank" id="stripeRedirect">Quero Fazer Parte</a>
                </nav>
            </Container>
        </ContainerColor>
    )
}