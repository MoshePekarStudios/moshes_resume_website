import styled from "styled-components";
import bgImg from './assets/background.jpg'

const Background = styled.div`
    background-image:url(${bgImg});
    height:100vh;
    width:100vw;
    background-repeat: none;
    background-size: cover;
`

export default Background