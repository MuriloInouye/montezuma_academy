import styled, {css} from "styled-components"

export const ContainerColor = styled.div`
    width: 100%;
    background-color: var(--color-grey-main);
`

export const Container = styled.div`
    width: 1300px;
    max-width: 100%;
    padding: 200px 0 200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const MainContentDiv = styled.div`
    padding: 70px 50px;
    margin: 0 auto;
    width: 60%;
    max-width: 95%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-grey-dark);

    .leftDiv {
        max-width: 50%;

        display: flex;
        flex-direction: column;
        gap: 20px;

        > p {
            color: var(--color-grey-light);
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;

            li {
                display: flex;
                align-items: center;
                gap: 3px;
                p {
                    color: var(--color-white);
                    font-weight: 300;
                }
                svg {
                    color: var(--color-white);
                }
            }
        }
    }
    
    .rightDiv {
        max-width: 50%;
        
        header {
            margin-bottom: 15px;
            text-align: center;
            h2 {
                font-size: 2.25rem;
                color: var(--color-white);
            }
            
            h3 {
                color: var(--color-yellow-main);
                font-weight: 400;
            }
        }
        .priceDiv {
            padding: 5px 0;

            display: flex;
            flex-direction: column;
            align-items: center;

            border-top: 1px solid var(--color-yellow-main);
            border-bottom: 1px solid var(--color-yellow-main);
            p {
                color: var(--color-grey-light);
            }
            h2 {
                font-weight: 400;
                font-size: 2.5rem;
                color: var(--color-white);
                span {
                    font-size: 3rem;
                }
            }

        }

        .bottomDiv {
            margin-top: 20px;

            display: flex;
            flex-direction: column;
            gap: 10px;
            p {
                color: var(--color-white);
                font-size: 0.75rem;
                text-align: center;
            }
            a {
                padding: 13px 20px;

                text-decoration: none;
                color: var(--color-black);
                font-weight: 700;
                font-size: 0.85rem;

                background-color: var(--color-yellow-main);
                border-radius: 30px;
            }
        }
    }
`