import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const AboutWrapper = styled.div`
  background-color: #01020f;
  display: grid;
  grid-template-columns: 70% 30%;
`

const Title = styled.h2`
  color: #4700ba;
  font-family: "Source Code Pro", monospace;
  font-size: 30px;
  margin: 10px 50px;

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

const ImagePortfolio = styled.img``

const SocialFollow = styled.div``

const SocialImg = styled.img``

const AboutSection = ({ siteTitle }) => (
  <div>
    <AboutWrapper>
      <AboutGroup>
        <Title>{"<About/>"}</Title>
        <About>
          {"Class Brooklee_Watters extends Component {"}
          <br />
          {"··// Love a good challenge and subscribe to the KISS method"}
          <br />
          {"··// Always expanding my skill set."}
        </About>
      </AboutGroup>

      <SocialFollow>
        <SocialImg src={require("../images/Behance_Logo.svg")} />
      </SocialFollow>

      {/* <AboutGroup>
        <About>
          {"Class Brooklee_Watters extends Component {"}
          <br />
          {"··// Love a good challenge and subscribe to the KISS method"}
          <br />
          {"··// Always expanding my skill set."}
        </About>
        <ImagePortfolio />
        <SocialFollow>
          <SocialImg src={require("../images/Behance_Logo.svg")} />
          <SocialImg />
          <SocialImg />
          <SocialImg />
        </SocialFollow>
      </AboutGroup> */}
    </AboutWrapper>
  </div>
)

export default AboutSection
