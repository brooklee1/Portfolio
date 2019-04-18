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

const IFrame = styled.iframe`
  /* transform: scale(0.7); */
  width: 100%;
  height: 90vh;
  border: 0;
  overflow: hidden;
`

const SocialImg1 = styled.div`
  position: absolute;
  top: 30%;
  transform: translateY(-30%);
  right: 17%;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.05, 1.05);
    /* transition: all 0.2s ease-in-out; */
  }
`
const SocialImg2 = styled.img`
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  right: 12%;
`

const SocialImg3 = styled.img`
  position: absolute;
  top: 55%;
  transform: translateY(-55%);
  right: 11%;
`

const SocialImg4 = styled.img`
  position: absolute;
  top: 67%;
  transform: translateY(-67%);
  right: 14%;
`

const AboutSection = ({ siteTitle }) => (
  <AboutWrapper id="About">
    <AboutGroup>
      <Title>{"<About/>"}</Title>
      <IFrame
        src="https://carbon.now.sh/embed/?bg=rgba(1%2C2%2C15%2C1)&t=night-owl&wt=bw&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=Class%2520Brooklee_Watters%2520extends%2520Component%2520%257B%250A%2520%250A%25C2%25B7%25C2%25B7%252F%252F%2520Love%2520a%2520good%2520challenge%2520and%2520subscribe%2520to%2520the%2520KISS%2520method%250A%25C2%25B7%25C2%25B7%252F%252F%2520Always%2520expanding%2520my%2520skill%2520set.%250A%250A%25C2%25B7%25C2%25B7constructor()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7this.name%2520%253D%2520%25E2%2580%2598Brooklee%2520Watters%25E2%2580%2599%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7this.email%2520%253D%2520%25E2%2580%2598brooklee.wilson%2540gmail.com%25E2%2580%2599%250A%25C2%25B7%25C2%25B7%257D%250A%250A%25C2%25B7%25C2%25B7workExperience()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7return%2520%255B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2018-now'%2520%253A%2520%25E2%2580%2598Web%2520Dev%252FDesigner%2520at%2520Ultradent%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2018-now%25E2%2580%2599%253A%2520%25E2%2580%2598Teacher%2520Aide%2520(web%2520course)%2520at%2520Trillogy%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2017-2018%25E2%2580%2599%253A%2520%25E2%2580%2598Web%2520Dev%252FAnalyst%2520at%2520CrossRoads%2520Tech%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2012-2017%25E2%2580%2599%253A%2520'Graphic%2520Designer%2520at%2520DigiDocs%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%255D%250A%25C2%25B7%25C2%25B7%257D%250A%250A%25C2%25B7%25C2%25B7education()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7return%2520%255B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2017-2018'%253A%2520'Google%2520Developer%2520Challenge%2520Scholarship%2520-%2520Mobile%2520Web%2520Specialist'%2520%257D%252C%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2012-2014'%253A%2520'Wy%25C5%25BCsza%2520Szko%25C5%2582a%2520Biznesu%2520w%2520D%25C4%2585browie%2520G%25C3%25B3rniczej%2520-%2520mgr%2520IT'%2520%257D%252C%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2008-2012'%253A%2520'Wy%25C5%25BCsza%2520Szko%25C5%2582a%2520Technologii%2520Informatycznych%2520w%2520Katowicach%2520-%2520in%25C5%25BC.%2520IT'%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%255D%250A%25C2%25B7%25C2%25B7%257D%250A%250A%25C2%25B7%25C2%25B7skills()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7return%2520%255B%2520'HTML%252FCSS%252FJS'%252C%2520%25E2%2580%2598React.js'%252C%2520'jQuery'%252C%2520'Node.js'%252C%2520'Bootstrap%252FTailwind%252FMaterial'%252C%2520'SASS'%252C%2520'npm%252Fyarn'%252C%2520'GIT'%252C%2520'Firebase%252C%2520'MySQL'%252C%2520'Photoshop'%252C%2520'Illustrator'%252C%2520'Sketch'%252C%2520'UX%252FUI'%252C%255D%250A%25C2%25B7%25C2%25B7%257D%250A%257D"
        sandbox="allow-scripts allow-same-origin"
      />
      <About />
    </AboutGroup>
    <ImagePortfolio src={require("../images/Portfolio_Img.png")} />
    <SocialFollow>
      <SocialImg1>
        <a href="https://codepen.io/brooklee/" target="_blank">
          <img src={require("../images/CodePen_Logo.svg")} />
        </a>
      </SocialImg1>

      <SocialImg2 src={require("../images/Git_Logo.png")} />
      <SocialImg3 src={require("../images/dribbble-ball-mark.svg")} />
      <SocialImg4 src={require("../images/Behance_Logo.svg")} />
    </SocialFollow>
  </AboutWrapper>
)

export default AboutSection
