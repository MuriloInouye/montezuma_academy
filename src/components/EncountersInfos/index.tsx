import React from "react"
import { Container, ContainerColor, MainContentContainer } from "./style"

import { BsCalendar4Event } from "react-icons/bs"
import { FiClock } from "react-icons/fi"
import { BsMicrosoftTeams } from "react-icons/bs"
import { FaArrowDown, FaArrowRight } from "react-icons/fa"
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io"
import Logo from "../logo"


export const EncountersInfos = () => {
    return (
        <ContainerColor id="Encontros">
            <Container>
                <h1>Conteúdo</h1>
                <MainContentContainer>
                    <div className="leftDiv">
                        <Logo color="3"/>
                        <p>Aumente o valor de seus serviços de <br />BPO Financeiro, através de uma consultoria <br />mais especializada</p>
                    </div>
                    <div className="rightDiv">
                        <ul>
                            <li>
                                <div className="left">
                                    <p className="numerated">01</p>
                                    <p className="title">Parametrização e Utilização do ERP</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">02</p>
                                    <p className="title">Preparar e Analisar DFC</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">03</p>
                                    <p className="title">Preparar e Analisar DRE</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">04</p>
                                    <p className="title">Controle Orçamentário</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">05</p>
                                    <p className="title">Como Apresentar Resultados</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">06</p>
                                    <p className="title">Modelo de Gestão Estratégica - OKR</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="contactDiv">
                        <p>Alguma dúvida ?<br />Entre em contato conosco</p>
                        <div className="icons">
                            <a href="https://wa.me/5511985911590?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Montezuma%20Academy%20e%20tenho%20interesse%20na%20mentoria!" target="_blank">
                                <IoLogoWhatsapp />
                            </a>
                            <a href="mailto:rodrigo@montezumaacademy.com.br">
                                <IoIosMail id="mail"/>
                            </a>
                        </div>
                    </div>
                </MainContentContainer>
            </Container>
        </ContainerColor>
    )
}