import React from "react"
import { Container } from "./style"
import { Logo } from "../Logo"

export const Header = () => {
    return (
        <Container>
            <Logo/>
            <nav>
                <a href="" className="anchors">TÓPICO</a>
                <a href="" className="anchors">TÓPICO</a>
                <a href="" className="anchors">TÓPICO</a>
                <a href="www.google.com" id="stripeRedirect">Fazer Parte</a>
            </nav>
        </Container>
    )
}