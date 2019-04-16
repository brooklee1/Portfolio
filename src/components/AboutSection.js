import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const AboutWrapper = styled.div`
  background-color: #01020f;
  display: grid;
  grid-template-columns: 60% 10% 30%;
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

const ImagePortfolio = styled.img`
  z-index: 40;
  max-width: 300px;
  width: 300%;
`

const SocialFollow = styled.div`
  background: rgb(27, 0, 147);
  background: linear-gradient(
    164deg,
    rgba(27, 0, 147, 1) 0%,
    rgba(89, 9, 121, 1) 28%,
    rgba(110, 4, 150, 1) 42%,
    rgba(191, 0, 66, 1) 93%
  );
`

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
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </About>
      </AboutGroup>
      <ImagePortfolio src={require("../images/Portfolio_Img.png")} />
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
