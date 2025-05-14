import React, { useState } from "react"
import { Container, ContainerColor, MainContentDiv } from "./style"

import { BsCalendar4Event } from "react-icons/bs"
import { FiClock } from "react-icons/fi"
import { BsMicrosoftTeams } from "react-icons/bs"
import Logo from "../logo"
import { IoCheckmarkOutline } from "react-icons/io5"


export const SellingSection = () => {
    const [paymentMethod, setPaymentMethod] = useState("avista");

    const linkAvista = "https://www.asaas.com/c/fnsjdputrd1m5y4b";
    const linkParcelado = "https://www.asaas.com/c/t9eyb8la77edcvhs";

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <ContainerColor id="Promocao">
            <Container>
                <MainContentDiv>
                    <div className="leftDiv">
                        <Logo color="2"/>
                        <p>Próxima turma <br />11 de Junho</p>
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
                            <p>10x de</p>
                            <h2>R$ <span>139</span>,90</h2>
                            <p>ou R$: 1251,00 à vista</p>
                            <p id="pixDiscount">(10% de desconto no pix)</p>
                        </div>
                        <div className="bottomDiv">
                            <div className="paymentOptions">
                                <input
                                    id="avista"
                                    type="radio"
                                    value="avista"
                                    checked={paymentMethod === "avista"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <label htmlFor="avista">
                                    À vista
                                </label>
                                <input
                                    id="parcelado"
                                    type="radio"
                                    value="parcelado"
                                    checked={paymentMethod === "parcelado"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <label htmlFor="parcelado">
                                    Parcelado
                                </label>
                            </div>
                            <p>
                                Na compra de uma mentoria, <br />
                                inscreva mais uma pessoa sem custo <br /> adicional
                            </p>
                            <a href={paymentMethod === "avista" ? linkAvista : linkParcelado} target="_blank">Quero transformar meu negócio</a>
                        </div>
                    </div>
                </MainContentDiv>
            </Container>
        </ContainerColor>
    )
}