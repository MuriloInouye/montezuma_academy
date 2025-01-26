import React from "react"
import { Container } from "./style"



interface ILogo {
    color: "1" | "2" | "3"
}

export const Logo = ({color}: ILogo) => {
    return (
        <Container color={color}>
            <h2>MONTEZUMA <br/>ACADEMY</h2>    
        </Container>
    )
}