import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Herodiv = styled.div`
  background: url('../images/BG_Hero_img.png');
  background-color: #01020F;
  height: 920px;
  width: 100%;
  position: relative;
  overflow: hidden;
`
const HeroGroup = styled.div`
  margin: 0 auto;
  padding: 150px 50px;
  text-align: center;
`
const Header = styled.h1`
  color: rgba(255,255,255, 0.8);
  font-family: 'Source Code Pro', monospace;
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 700px) {
    font-size: 16px;
}
`

const Header2 = styled.h2`
  color: #4700BA;
  font-family: 'Source Code Pro', monospace;
  font-size: 30px;

  @media (max-width: 700px) {
    font-size: 25px;
}
`

const MainImage = styled.img`
  width: 1000px;
  position: absolute;
  left: -9999px;
  right: -9999px;
  margin: auto;

  @media (max-width: 700px) {
    width: 100%;
}
`



const Hero = ({ siteTitle }) => (
    <Herodiv>
      <HeroGroup>
        <Header>{'<Ready… Set… Develop! />'}</Header>
        <Header2>{'{Web Apps}'}</Header2>
        <div>
          <MainImage src={require('../images/Glowing_Laptop.png')} />
        </div>
      </HeroGroup>}
    </Herodiv>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
