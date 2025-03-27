import React from "react"
import { Container } from "./style"
import Image from "next/image"

import LogoMAPreta from "../../assets/1.png"
import LogoMABranca from "../../assets/2.png"



interface ILogo {
    color: "1" | "2" | "3"
}

const Logo = ({color}: ILogo) => {
    return (
        <Container color={color}>
            {color === "1"?
                <Image src={LogoMAPreta} alt="Montezuma Academy"/>
                :
                <Image src={LogoMABranca} alt="Montezuma Academy"/>
            }
        </Container>
    )
}

export default Logo