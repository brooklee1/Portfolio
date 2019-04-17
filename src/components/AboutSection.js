import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const AboutWrapper = styled.div`
  background-color: #01020f;
  display: grid;
  grid-template-columns: 70% 30%;
  position: relative;
  height: 100vh;
  scroll-snap-align: start;
`

const Title = styled.h2`
  color: #4700ba;
  font-family: "Source Code Pro", monospace;
  font-size: 30px;
  margin: 10px 50px;
  padding-top: 50px;

  @media (max-width: 700px) {
    font-size: 25px;
    margin: 10px 15px;
  }
`

const AboutGroup = styled.div`
  margin: 10px 75px;
`

const About = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
`

const ImagePortfolio = styled.img`
  z-index: 40;
  max-width: 300px;
  width: 300%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
`

const SocialFollow = styled.div`
  background: rgb(27, 0, 147);
  background: rgb(27, 0, 147);
  background: linear-gradient(
    164deg,
    rgba(27, 0, 147, 1) 0%,
    rgba(89, 9, 121, 1) 28%,
    rgba(110, 4, 150, 1) 42%,
    rgba(191, 0, 66, 1) 80%,
    rgba(191, 0, 0, 1) 100%
  );
`

const SocialImg = styled.img``

const AboutSection = ({ siteTitle }) => (
  <AboutWrapper id="About">
    <AboutGroup>
      <Title>{"<About/>"}</Title>
      <About>
        {"Class Brooklee_Watters extends Component {"}
        <br />
        {"··// Love a good challenge and subscribe to the KISS method"}
        <br />
        {"··// Always expanding my skill set."}
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volu
      </About>
    </AboutGroup>
    <ImagePortfolio src={require("../images/Portfolio_Img.png")} />
    <SocialFollow>
      <SocialImg src={require("../images/Behance_Logo.svg")} />
    </SocialFollow>
  </AboutWrapper>
)

export default AboutSection
