import styled, {css} from "styled-components"

interface IContainer {
    color: "1" | "2" | "3"
}

export const Container = styled.header<IContainer>`
    img {
        height: 70px;
        width: 128px;
    }
`