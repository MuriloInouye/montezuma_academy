import React from "react"
import { Container, ContainerColor, MainContentDiv } from "./style"

import { BsCalendar4Event } from "react-icons/bs"
import { FiClock } from "react-icons/fi";
import { BsMicrosoftTeams } from "react-icons/bs";
import Logo from "../Logo";
import { IoCheckmarkOutline } from "react-icons/io5";


export const SellingSection = () => {
    return (
        <ContainerColor id="SellingSection">
            <Container>
                <MainContentDiv>
                    <div className="leftDiv">
                        <h2>MONTEZUMA <br />ACADEMY</h2>
                        <p>Próxima turma <br />06 de Dezembro</p>
                        <ul>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Qualidades da mentoria</p>
                            </li>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Qualidades da mentoria</p>
                            </li>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Qualidades da mentoria</p>
                            </li>
                            <li>
                                <IoCheckmarkOutline />
                                <p>Qualidades da mentoria</p>
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
                            <h2>R$ <span>365</span>,66</h2>
                            <p>ou R$: 997,00 à vista</p>
                        </div>
                        <div className="bottomDiv">
                            <p>
                                Na compra de uma mentoria, <br />
                                inscreva mais uma pessoa sem custo <br /> adicional
                            </p>
                            <a href="">Quero transformar meu negócio</a>
                        </div>
                    </div>
                </MainContentDiv>
            </Container>
        </ContainerColor>
    )
}