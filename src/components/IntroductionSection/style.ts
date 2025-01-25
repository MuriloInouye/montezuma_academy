import styled, {css} from "styled-components"


export const ContainerColor = styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(227,167,2,1) 12%, rgba(0,0,0,1) 100%);
`

export const Container = styled.div`
    width: 1300px;
    max-width: 100%;
    padding: 100px 0 200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    h1 {

        text-align: center;
        color: var(--color-white);
        font-size: 3.5rem;
        font-weight: 400;
        letter-spacing: 1.3px;
        line-height: 3.5rem;
    }

    .line {
        width: 150px;
        content: "";
        border: 1px solid var(--color-black);
    }

    p {
        text-align: center;
        font-weight: 300;
        font-size: 1.25rem;

        color: var(--color-white);
    }

    .info {
        padding: 7px 20px;

        border-radius: 4px;
        background-color: var(--color-grey-main);
        ul {
            display: flex;

            list-style: none;
            justify-content: space-between;

            li {
                padding: 4px 15px;
                display: flex;
                align-items: center;
                justify-content: center;

                gap: 10px;

                img, svg {
                    color: var(--color-white);
                    font-size: 25px;
                    width: 25px;
                    height: 25px;
                }

                h2 {
                    color: var(--color-white);
                    font-size: 1rem;
                    font-weight: 400;
                }
                
                p {
                    font-size: 0.85rem;
                    font-weight: 100;
                    text-align: left;
                }
            }

            #middle {
                border-right: 1px solid var(--color-white);
                border-left: 1px solid var(--color-white);
            }
        }
    }

    a {
        margin-top: 10px;
        padding: 5px 32px;

        text-decoration: none;
        color: var(--color-white);
        outline: 1px solid var(--color-white);
    }
`