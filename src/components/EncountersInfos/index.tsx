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
        <ContainerColor id="EncountersInfos">
            <Container>
                <h1>6 Encontros</h1>
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
                                    <p className="title">Parametrização do ERP Omie</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">02</p>
                                    <p className="title">Utilização do ERP</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">03</p>
                                    <p className="title">Preparar e Analisar a DFC</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">04</p>
                                    <p className="title">Preparar e Analisar a DRE</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">05</p>
                                    <p className="title">Planejamento Financeiro</p>
                                </div>
                                <button>
                                    {/* <FaArrowRight /> */}
                                    {/* <FaArrowDown /> */}
                                </button>
                            </li>
                            <li>
                                <div className="left">
                                    <p className="numerated">06</p>
                                    <p className="title">Apresentar Resultados</p>
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
                            <a href="">
                                <IoLogoWhatsapp />
                            </a>
                            <a href="">
                                <IoIosMail id="mail"/>
                            </a>
                        </div>
                    </div>
                </MainContentContainer>
            </Container>
        </ContainerColor>
    )
}