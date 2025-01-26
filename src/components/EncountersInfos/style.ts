import styled, {css} from "styled-components"


export const ContainerColor = styled.div`
    width: 100%;
    background: var(--color-black);
`

export const Container = styled.div`
    width: 1300px;
    max-width: 100%;
    padding: 100px 0 200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    h1 {
        color: var(--color-yellow-main);
        font-size: 3rem;
    }
    
`

export const MainContentContainer = styled.div`
    position: relative;

    padding: 30px 30px;
    width: 70%;
    max-width: 95%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-grey-main);

    .leftDiv {
        display: flex;
        flex-direction: column;
        gap: 30px;

        p {
            color: var(--color-white);
            font-size: 1.1rem;
            font-weight: 300;
        }
    }

    .rightDiv {
        width: 50%;
        ul {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 15px;
            
            list-style: none;

            li {
                cursor: pointer;

                padding: 10px 5px;
                display: flex;
                justify-content: space-between;

                border-bottom: 1px solid var(--color-white);
                
                .left {
                    display: flex;
                    gap: 13px;

                    .numerated {
                        color: var(--color-yellow-main);
                        font-weight: 500;
                    }
                    
                    .title {
                        color: var(--color-white);
                        font-size: 0.95rem;
                        font-weight: 400;
                    }
                    
                }

                button {
                    background: none;

                    color: var(--color-white);
                    font-size: 0.85rem;
                }
            }
        }
    }

    .contactDiv {
        width: 47%;
        padding: 20px 15px;

        position: absolute;
        bottom: -40px;
        left: -20px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: var(--color-yellow-main);

        p {
            font-size: 1.1rem;
        }

        .icons {
            display: flex;
            align-items: center;
            gap: 10px;

            a {
                display: flex;
                align-items: center;
                color: var(--color-black);
                font-size: 30px;

                #mail {
                    font-size: 35px;
                }
            }
        }
    }
`