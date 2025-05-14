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

        img {
            width: 162px;
            height: 90px;
        }

        h2 {
            font-size: 2rem;
            color: var(--color-white);
            font-weight: 400;
        }

        > p {
            color: var(--color-yellow-main);
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
            #pixDiscount {
                font-size: 0.75rem;
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
                text-align: center;
                color: var(--color-black);
                font-weight: 700;
                font-size: 0.85rem;

                background-color: var(--color-yellow-main);
                border-radius: 30px;
            }
        }
    }

    .paymentOptions {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-bottom: 15px; 

        input[type="radio"] {
            display: none; // Hide the actual radio button
        }

        label {
            padding: 7px 15px;
            border: 1px solid var(--color-yellow-main);
            border-radius: 20px;
            color: var(--color-white);
            cursor: pointer;
            transition: background-color 0.3s ease;
            text-align: center;
        }

        input[type="radio"]:checked + label {
            background-color: var(--color-yellow-main);
            color: var(--color-black);
            font-weight: bold;
            padding: 7px 13px;
        } 
    }

    @media (max-width: 1400px) {
        width: 63%;
    }

    @media (max-width: 1200px) {
        width: 67%;
    }
    
    @media (max-width: 1100px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 74%;
    }
    @media (max-width: 940px) {
        width: 80%;
    }

    @media (max-width: 850px) {
        width: 85%;
    }
    
    @media (max-width: 760px) {
        width: 90%;
    }
    
    @media (max-width: 720px) {
        width: 95%;
    }

    @media (max-width: 720px) {
        .leftDiv {
            h2 {
                font-size: 1.5rem;
            }

            > p {

            }

            ul {
                li {
                    p {
                        font-size: 0.85rem;
                    }

                    svg {

                    }
                }
            }
        }
        
        .rightDiv {
            header {

                h2 {
                    font-size: 2rem;
                }

                h3 {
                    font-size: 1.25rem;
                }

            }
            .priceDiv {
                #pixDiscount {
                    font-size: 0.35rem;
                }
                
                p {

                }

                h2 {
                    font-size: 2rem;

                    span {
                        font-size: 2.75rem;
                    }
                }

            }
            .bottomDiv {
                p {
    
                }
    
                a {
                    padding: 11px 18px;
                    font-size: 0.75rem;
                }
            }
        }

    }
    @media (max-width: 615px) {
        width: 80%;
        flex-direction: column;
        gap: 40px;
        .leftDiv {
            text-align: center;
            max-width: 95%;
            h2 {
                font-size: 2rem;
            }

            > p {
                font-size: 1.15rem;
            }

            ul {
                li {
                    p {
                        font-size: 1.15rem;
                    }

                    svg {

                    }
                }
            }
        }
        
        .rightDiv {
            max-width: 80%;
            header {

                h2 {
                    font-size: 2rem;
                }

                h3 {
                    font-size: 1.25rem;
                }

            }
            .priceDiv {
                p {

                }

                h2 {
                    font-size: 2rem;

                    span {
                        font-size: 2.75rem;
                    }
                }
            }
            .bottomDiv {
                p {
    
                }
    
                a {
                    padding: 11px 18px;
                    font-size: 0.75rem;
                }
            }
        }

    }
    
    @media (max-width: 500px) {
        width: 85%;
        flex-direction: column;
        gap: 40px;
        .leftDiv {
            text-align: center;
            max-width: 95%;
            h2 {
                font-size: 1.75rem;
            }

            > p {
                font-size: 1rem;
            }

            ul {
                li {
                    p {
                        font-size: 1rem;
                    }

                    svg {

                    }
                }
            }
        }
        
        .rightDiv {
            max-width: 85%;
            header {

                h2 {
                    font-size: 1.75rem;
                }

                h3 {
                    font-size: 1rem;
                }

            }
            .priceDiv {
                p {

                }

                h2 {
                    font-size: 1.75rem;

                    span {
                        font-size: 2.5rem;
                    }
                }
            }
            .bottomDiv {
                p {
    
                }
    
                a {
                    padding: 9px 15px;
                    font-size: 0.65rem;
                }
            }
        }

    }

    @media (max-width: 500px) {
        width: 90%;
        flex-direction: column;
        gap: 40px;
        .leftDiv {
            text-align: center;
            max-width: 95%;
            h2 {
                font-size: 1.75rem;
            }

            > p {
                font-size: 1rem;
            }

            ul {
                li {
                    p {
                        font-size: 1rem;
                    }

                    svg {

                    }
                }
            }
        }
        
        .rightDiv {
            max-width: 90%;
            header {

                h2 {
                    font-size: 1.75rem;
                }

                h3 {
                    font-size: 1rem;
                }

            }
            .priceDiv {
                p {

                }

                h2 {
                    font-size: 1.75rem;

                    span {
                        font-size: 2.5rem;
                    }
                }
            }
            .bottomDiv {
                p {
    
                }
    
                a {
                    padding: 9px 15px;
                    font-size: 0.65rem;
                }
            }
        }

    }
`