import React from "react"
import { Container, ContainerColor } from "./style"

import { BsCalendar4Event } from "react-icons/bs"
import { FiClock } from "react-icons/fi";
import { BsMicrosoftTeams } from "react-icons/bs";


export const Introductionsection = () => {
    return (
        <ContainerColor>
            <Container>
                <h1>MENTORIA<br/>CONTROLADORIA NA PRÁTICA</h1>
                <div className="line"/>
                <p>Saiba como implantar uma Controladoria e transformar a gestão financeira do seu negócio</p>
                <div className="info">
                    <ul>
                        <li>
                            <BsCalendar4Event style={{ width: '25px', height: '25px' }}/>
                            <div className="liInfo">
                                <h2>Próxima turma</h2>
                                <p>03 a 06 de Dezembro</p>
                            </div>
                        </li>
                        <div className="infoLine"/>
                        <li id="middle">
                            <FiClock style={{ width: '40px', height: '40px' }}/>
                            <div className="liInfo">
                                <h2>Duração</h2>
                                <p>6 Encontros semanais com 2 horas cada.</p>
                            </div>
                        </li>
                        <div className="infoLine"/>
                        <li>
                            <BsMicrosoftTeams style={{ width: '25px', height: '25px' }}/>
                            <div className="liInfo">
                                <h2>Plataforma</h2>
                                <p>Microsoft Teams Online</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <a href="">Saiba mais</a>
            </Container>
        </ContainerColor>
    )
}