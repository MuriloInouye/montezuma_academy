import styled, {css} from "styled-components"


export const ContainerColor = styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,1) 12%, rgba(227,167,2,1) 100%);
`

export const Container = styled.div`
    width: 1300px;
    max-width: 100%;
    padding: 200px 0 200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .presentantionDiv {
        position: relative;
        margin-top: -80px;
        h2 {
            font-family: var(--font-family-montserrat);
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: 1px;
            color: var(--color-white);
        }
        
        h3 {
            font-family: var(--font-family-montserrat);
            font-size: 1.25rem;
            font-weight: 400;
            color: var(--color-black);
        }
        
        img {
            position: absolute;
            left: -35px;
            top: 20px;
            margin-top: 10px;
            width: 230px;
            height: 135px;
        }
    }
    
    img {
        width: 381px;
        height: 450px;

    }
    
    .mentorText {
        font-family: var(--font-family-montserrat);
        line-height: 1.5rem;
        max-width: 33%;
        color: var(--color-white);
    }
`