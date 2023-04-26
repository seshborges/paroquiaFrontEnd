import styled from "styled-components";

import * as Main from '../../Global/Main.styles'
import { useEffect, useState } from "react";

import SideLeft from './videos/sideLeft'
import SideRight from './videos/sideRight'

const VideoContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  max-height: 60vh !important;

  ::after{
    background-color: rgba(${props=>props.theme.default.primary});
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    display: block;
    opacity: 0.1;
    z-index: -1;
    border-radius: 100%;
    filter: blur(100px);
  }
  

  video{
    max-width: 100%;
    height: 100%;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContainerContent = styled.div`
  width: 1700px;
  margin-top: 24px;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  
  @media screen and (max-width: 1700px) {
    width: 100%;
    padding: 0px 22px;
  }

  @media screen and (max-width: 890px) {
    flex-direction: column;
    padding: 0px 22px;
  }
`

const Videos = () => {
  return(
    <>
      <VideoContainer>
        <video autoPlay muted src="//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682715840&Signature=LAz2GTrJSSlDoWCqUiZtAiJUCZyH5fuuwskIge9MK6dN79NHz7l7Zpk55lwmaMeTxKMLjpZzeJlfgAs7IeaRTNUTORN1PMp02zXoooLmLl2uTT1tYmg4OYWVf3~6khfC9jX~6jeAcdVbZBUjZMoluMr61p5EIztdjz0Mk0U8YIBmp2rDMSMFvLg2JqDPEwppopXQzxcd2rtaYqjO6O8jXolVmAYvDAYThswrXj4DiG86r-jmNlHEDZBdbOETIeEFOYd5iwAUIRexk~vFWAQNXl2uKClGpuZVIPjKYphkl~vGkp-PFKLPN3l3MSE4j95kjfogk63ZoqJNWJ014BdWQQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"></video>
      </VideoContainer>
      <Container>
        <ContainerContent>
          <SideLeft/>
          <SideRight/>
        </ContainerContent>
      </Container>
    </>
  )
}

export default Videos