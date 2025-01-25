import React from "react"
import { Container } from "./style"



interface ILogo {
    width?: string
    height?: string
}

export const Logo = ({width, height}: ILogo) => {
    return (
        <Container color="1">
            <h2>MONTEZUMA <br/>ACADEMY</h2>    
        </Container>
    )
}