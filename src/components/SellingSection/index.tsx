import React from "react"
import { Container, ContainerColor, MainContentDiv } from "./style"

import { BsCalendar4Event } from "react-icons/bs"
import { FiClock } from "react-icons/fi"
import { BsMicrosoftTeams } from "react-icons/bs"
import Logo from "../logo"
import { IoCheckmarkOutline } from "react-icons/io5"


export const SellingSection = () => {
    return (
        <ContainerColor id="Promocao">
            <Container>
                <MainContentDiv>
                    <div className="leftDiv">
                        <Logo color="2"/>
                        <p>Próxima turma <br />23 de Abril</p>
                        <ul>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Aulas práticas ao vivo</p>
                            </li>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Networking com os demais alunos</p>
                            </li>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Troca de experiências</p>
                            </li>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Acesso ao conteúdo por 12 meses</p>
                            </li>
                        </ul>
                    </div>
                    <div className="rightDiv">
                        <header>
                            <h2>Investimento</h2>
                            <h3>Promoção especial!</h3>
                        </header>
                        <div className="priceDiv">
                            <p>3x de</p>
                            <h2>R$ <span>399</span>,99</h2>
                            <p>ou R$: 999,00 à vista</p>
                        </div>
                        <div className="bottomDiv">
                            <p>
                                Na compra de uma mentoria, <br />
                                inscreva mais uma pessoa sem custo <br /> adicional
                            </p>
                            <a href="https://wa.me/5511985911590?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Montezuma%20Academy%20e%20tenho%20interesse%20na%20mentoria!" target="_blank">Quero transformar meu negócio</a>
                        </div>
                    </div>
                </MainContentDiv>
            </Container>
        </ContainerColor>
    )
}