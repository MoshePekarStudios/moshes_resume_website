import styled from "styled-components";
import bgImg from './assets/background.jpg'

const Background = styled.div`
    background-image:url(${bgImg});
    height:100vh;
    width:100vw;
    background-repeat: none;
    background-size: cover;
    @media only screen and (max-width:1200px){
        height:100%
    }
`

export default Background