import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import "./HomeTitle.css"

const TitleAnimatedWrapper = styled.div`
  position: static;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  height: 160px;
  overflow: hidden;

  font-family: "Lato", sans-serif;
  font-size: 35px;
  line-height: 40px;
  color: #ecf0f1;
  text-align: center;
`

const TitleAnimatedContainer = styled.div`
  font-weight: 600;
  overflow: hidden;
  height: 40px;
  padding: 0 20px;

  /* &:before {
    content: "{";
    left: 0;
  }

  &:after {
    content: "}";
    position: absolute;
    right: 0;
  } */

  &:after,
  &:before {
    position: absolute;
    top: 0;

    color: #16a085;
    font-size: 42px;
    line-height: 40px;

    -webkit-animation-name: opacity;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-name: opacity;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`

const TitleUl = styled.ul`
  margin-top: 0;
  padding-left: 20px;
  text-align: left;
  list-style: none;

  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
`

const TitleLi = styled.li`
  line-height: 40px;
  margin: 0;
`

const HomeTitle = ({ siteTitle }) => (
  <TitleAnimatedWrapper>
    <TitleAnimatedContainer>
      <TitleUl>
        <TitleLi>WebApps</TitleLi>
        <TitleLi>UX/UI</TitleLi>
        <TitleLi>MobileApp</TitleLi>
        <TitleLi>Static Sites</TitleLi>
      </TitleUl>
    </TitleAnimatedContainer>
  </TitleAnimatedWrapper>
)

export default HomeTitle
