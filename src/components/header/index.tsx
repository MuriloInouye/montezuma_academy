import React from "react"
import { Container, ContainerColor } from "./style"
import Logo from "../logo"

export const Header = () => {
    return (
        <ContainerColor>
            <Container>
                <Logo color="1"/>
                <nav>
                    <a href="#EncountersInfos" className="anchors">Encontros</a>
                    <a href="#AboutMentor" className="anchors">Sobre o mentor</a>
                    <a href="#SellingSection" className="anchors">Promoção</a>
                    <a href="www.google.com" id="stripeRedirect">Quero Fazer Parte</a>
                </nav>
            </Container>
        </ContainerColor>
    )
}