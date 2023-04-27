import styled, { ThemeContext } from "styled-components";

import * as Main from '../../Global/Main.styles'
import { useEffect, useState, useContext } from "react";

import SideLeft from './videos/sideLeft'
import SideRight from './videos/sideRight'
import Player from './videos/videoPlayer'

const VideoContainer = styled.div`
  width: 100%;
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
  const [enableAmbience, setEnableAmbience] = useState(false)
  const themeContext = useContext(ThemeContext)

  const ambience = () => {
    if(themeContext.name == 'Light'){
      setEnableAmbience(false)
    }else{
      setEnableAmbience(true)
    }
  }
  
  useEffect(()=>{
    ambience()
  }, [themeContext])

  return(
    <>
      <VideoContainer>
        <Player url={"//cdn-cf-east.streamable.com/video/mp4/6t0ncx.mp4?Expires=1682877240&Signature=G1am~7toFxZ60udWqmEm9IM2Pkn1vN4EpHke1DhFLbXKHZ5RDSqzkAZNPIgDVD1R947eCgg4PpHcXUIGoUNc56KR8oVGLCioDk~K~wKkp~CJwK8mPjad-IPlZaD6lYTS52JZb0zYV1uzAAqRtpbHQSlDLRvTNlhBdz8qckCcm9gtxOY10-HWlzcBj9-aQyuZJKlOaEMC2tn6msakvoIjP0FBtThubE78euPA9nkXqEsrg~dP3-QqSI~qOela7ynBaBQlkgBF8euoC81-Eqa8rmcnrPu6rACe0oIdXJ3ZdcDDJ4rWl9BKycgjM0VBKqTc6OcnkB1K2pwQc8BeUy29eg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"}/>
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