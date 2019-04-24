import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Prism from "prismjs"
import "../global/css/prism.css"

Prism.highlightAll()

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  position: relative;
  /* height: 100vh; */
  height: auto;
  scroll-snap-align: start;

  @media (max-width: 860px) {
    height: auto;
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  margin: 10px 50px;
  padding-top: 50px;

  @media (max-width: 700px) {
    margin: 10px 15px;
  }
`

const Title2 = styled.h2`
  margin: 10px 50px;
  padding-top: 50px;
  text-align: center;

  @media (max-width: 700px) {
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
  max-width: 400px;
  width: 300%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20%;

  @media (max-width: 2000px) {
    right: 20%;
  }

  @media (max-width: 1730px) {
    max-width: 300px;
    right: 15%;
  }

  @media (max-width: 860px) {
    display: none;
  }
`

const SocialFollowWrapper = styled.div`
  justify-items: center;
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

const SocialFollow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-items: center;

  @media (max-width: 445px) {
    grid-template-columns: repeat(2, auto);
  }
`

const IFrame = styled.iframe`
  /* transform: scale(0.7); */
  width: 100%;
  height: 90vh;
  border: 0;
  overflow: hidden;
`

const SocialImg1 = styled.div`
  z-index: 41;
  position: absolute;
  top: 35%;
  /* transform: translateY(-35%); */
  right: 19%;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2, 1.2);
  }

  @media (max-width: 1730px) {
    top: 29%;
    /* transform: translateY(-35%); */
    right: 17%;
  }

  @media (max-width: 860px) {
    position: static;
  }
`
const SocialImg2 = styled.img`
  position: absolute;
  top: 43%;
  /* transform: translateY(-43%); */
  right: 16%;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2, 1.2);
  }

  @media (max-width: 1730px) {
    top: 41%;
    /* transform: translateY(-43%); */
    right: 11%;
  }

  @media (max-width: 860px) {
    position: static;
  }
`

const SocialImg3 = styled.img`
  position: absolute;
  top: 55%;
  /* transform: translateY(-55%); */
  right: 16%;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2, 1.2);
  }

  @media (max-width: 1730px) {
    top: 55%;
    /* transform: translateY(-55%); */
    right: 11%;
  }

  @media (max-width: 860px) {
    position: static;
  }
`

const SocialImg4 = styled.img`
  z-index: 42;
  position: absolute;
  top: 65%;
  /* transform: translateY(-65%); */
  right: 19%;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2, 1.2);
  }

  @media (max-width: 1730px) {
    top: 65%;
    /* transform: translateY(-65%); */
    right: 17%;
  }

  @media (max-width: 860px) {
    position: static;
  }
`

class AboutSection extends React.Component {
  componentDidMoun() {
    Prism.highlightAll()
  }

  render() {
    return (
      <AboutWrapper id="About">
        <AboutGroup>
          <Title>
            <span className="purpleH2">{"<"}</span>About
            <span className="purpleH2">{"/>"}</span>
          </Title>
          <pre className="language-javascript">
            <code className="language-javascript">{`Class Brooklee_Watters extends Component {
 
 ··// Love a good challenge and subscribe to the KISS method
 ··// Always expanding my skill set.
 
 ··constructor() {
 ····this.name = ‘Brooklee Watters’
 ····this.email = ‘brooklee.wilson@gmail.com’
 ··}
 
 ··workExperience() {
 ····return [
 ······{ '2018-now' : ‘Web Dev/Designer at Ultradent’ }
 ······{ '2018-2019’: ‘Teacher Aide (web course) at Trillogy’ }
 ······{ '2017-2018’: ‘Web Dev/Analyst at CrossRoads Tech’ }
 ······{ '2012-2017’: 'Graphic Designer at DigiDocs’ }
 ····]
 ··}
 
 ··education() {
 ····return [
 ······{ '2017-2017’: ‘University of Utah Coding Bootcamp’ },
 ······{ '2010-2012’: ‘Associates Graphic Design’ },
 ····]
 ··}
 
 ··skills() {
 ····return [ 'HTML/CSS/JS', ‘React.js', 'jQuery', 'Node.js', 
 'Bootstrap/Tailwind/Material', 'SASS', 'npm/yarn', 'GIT', 
 'Firebase', ‘MongoDB’, 'MySQL', 'Photoshop', 'Illustrator', 
 'Sketch', 'UX/UI',]
 ··}
 }`}</code>
          </pre>
          {/* <IFrame
        src="https://carbon.now.sh/embed/?bg=rgba(1%2C2%2C15%2C1)&t=dracula&wt=bw&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=Class%2520Brooklee_Watters%2520extends%2520Component%2520%257B%250A%2520%250A%25C2%25B7%25C2%25B7%252F%252F%2520Love%2520a%2520good%2520challenge%2520and%2520subscribe%2520to%2520the%2520KISS%2520method%250A%25C2%25B7%25C2%25B7%252F%252F%2520Always%2520expanding%2520my%2520skill%2520set.%250A%250A%25C2%25B7%25C2%25B7constructor()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7this.name%2520%253D%2520%25E2%2580%2598Brooklee%2520Watters%25E2%2580%2599%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7this.email%2520%253D%2520%25E2%2580%2598brooklee.wilson%2540gmail.com%25E2%2580%2599%250A%25C2%25B7%25C2%25B7%257D%250A%250A%25C2%25B7%25C2%25B7workExperience()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7return%2520%255B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2018-now'%2520%253A%2520%25E2%2580%2598Web%2520Dev%252FDesigner%2520at%2520Ultradent%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2018-2019%25E2%2580%2599%253A%2520%25E2%2580%2598Teacher%2520Aide%2520(web%2520course)%2520at%2520Trillogy%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2017-2018%25E2%2580%2599%253A%2520%25E2%2580%2598Web%2520Dev%252FAnalyst%2520at%2520CrossRoads%2520Tech%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2012-2017%25E2%2580%2599%253A%2520'Graphic%2520Designer%2520at%2520DigiDocs%25E2%2580%2599%2520%257D%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%255D%250A%25C2%25B7%25C2%25B7%257D%250A%250A%25C2%25B7%25C2%25B7education()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7return%2520%255B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2017-2017%25E2%2580%2599%253A%2520%25E2%2580%2598University%2520of%2520Utah%2520Coding%2520Bootcamp%25E2%2580%2599%2520%257D%252C%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%257B%2520'2010-2012%25E2%2580%2599%253A%2520%25E2%2580%2598Associates%2520Graphic%2520Design%25E2%2580%2599%2520%257D%252C%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7%255D%250A%25C2%25B7%25C2%25B7%257D%250A%250A%25C2%25B7%25C2%25B7skills()%2520%257B%250A%25C2%25B7%25C2%25B7%25C2%25B7%25C2%25B7return%2520%255B%2520'HTML%252FCSS%252FJS'%252C%2520%25E2%2580%2598React.js'%252C%2520'jQuery'%252C%2520'Node.js'%252C%2520'Bootstrap%252FTailwind%252FMaterial'%252C%2520'SASS'%252C%2520'npm%252Fyarn'%252C%2520'GIT'%252C%2520'Firebase%252C%2520%25E2%2580%2598MongoDB%25E2%2580%2599%252C%2520'MySQL'%252C%2520'Photoshop'%252C%2520'Illustrator'%252C%2520'Sketch'%252C%2520'UX%252FUI'%252C%255D%250A%25C2%25B7%25C2%25B7%257D%250A%257D"
        sandbox="allow-scripts allow-same-origin"
      /> */}
          <About />
        </AboutGroup>
        <ImagePortfolio src={require("../images/Portfolio_Img.png")} />
        <SocialFollowWrapper>
          <Title2>
            <span className="purpleH2">{"<"}</span>Stalk me
            <span className="purpleH2">{"/>"}</span>
          </Title2>
          <SocialFollow>
            <SocialImg1>
              <a href="https://codepen.io/brooklee/" target="_blank">
                <img src={require("../images/CodePen_Logo.svg")} />
              </a>
            </SocialImg1>

            <a href="https://github.com/brooklee1" target="_blank">
              <SocialImg2 src={require("../images/Git_Logo.svg")} />
            </a>

            <a href="https://dribbble.com/brooklee" target="_blank">
              <SocialImg3 src={require("../images/dribbble-ball-mark.svg")} />
            </a>

            <a href="https://www.behance.net/brookleewilson" target="_blank">
              <SocialImg4 src={require("../images/Behance_Logo.svg")} />
            </a>
          </SocialFollow>
        </SocialFollowWrapper>
      </AboutWrapper>
    )
  }
}

export default AboutSection
