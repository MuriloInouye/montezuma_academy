import React from "react"
import { Container, ContainerColor } from "./style"

import MentorImg from "../../assets/rodrigo.png"
import LogoControladoria from "../../assets/logo-controladoria.png"
import Image from "next/image"

export const AboutMentor = () => {
    return (
        <ContainerColor id="AboutMentor">
            <Container>
                <div className="presentantionDiv">
                    <h2 className="name">Rodrigo Montezuma</h2>
                    <h3>CEO Controladoria Digital</h3>
                    <a href="">
                        <Image src={LogoControladoria} alt="Logo Controladoria Digital"/>
                    </a>
                </div>
                <Image src={MentorImg} alt="Imagem do Mentor"/>
                <p className="mentorText">
                    Olá, sou o Rodrigo Montezuma, Fundador e CEO da Controladoria Digital, uma startup que já ajudou mais de 4.000 empresas a melhorar a gestão financeira. Tenho 52 anos, esposo da Maira e Pai dos incríveis Pedro (meu sócio), João Vitor e Ana Julia. Antes de virar empresário, fui executivo de finanças por mais de 30 anos, trilhando uma carreira sólida desde a base até alcançar posições de CFO e CEO em grandes empresas. Meu propósito e sonho grande é reduzir a taxa de mortalidade das empresas, preservando empregos, gerando mais prosperidade e melhorando a sociedade que vivemos
                </p>
            </Container>
        </ContainerColor>
    )
}