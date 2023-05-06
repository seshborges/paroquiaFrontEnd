import styled, { ThemeContext } from "styled-components";
import axios from "axios"
import * as Main from '../../../Global/Main.styles'
import { useEffect, useState, useContext, useMemo } from "react";

import SideLeft from './sides/sideLeft'
import SideRight from './sides/sideRight'
import Player from './player/videoPlayer'
import { useParams, useLocation, redirect, useNavigate } from "react-router-dom";

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

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}


const Videos = () => {
  // const [enableAmbience, setEnableAmbience] = useState(false)
  // const themeContext = useContext(ThemeContext)

  // const ambience = () => {
  //   if(themeContext.name == 'Light'){
  //     setEnableAmbience(false)
  //   }else{
  //     setEnableAmbience(true)
  //   }
  // }
  
  // useEffect(()=>{
  //   ambience()
  // }, [themeContext])

  // const [player, setPlayer] = useState<string>()

  // fetch("http://localhost:3423/assistir")
  // .then(data => {
  //   console.log(data.status)
  // }).catch(err => {
  //   console.log(err)
  // })

  const [loadedVideo, setLoadedVideo] = useState(false)
  const [videoInfos, setVideoInfos] = useState({})

  const navigate = useNavigate()

  let query = useQuery();
  const videoUrl = query.get("q")

  const setUrl = `http://localhost:3423/assistir?q=${videoUrl}`

  useEffect(()=> {
    if(!videoUrl) {
      navigate("/")
      return
    }

    axios.get(`http://localhost:3423/assistir/infos?q=${videoUrl}`)
      .then(res => {
        setLoadedVideo(true)
        setVideoInfos(res.data)
      })
      .catch(err => {
        setLoadedVideo(false)
        navigate("/")
      })
  }, [])

  return(
    <>
      <VideoContainer>
        {
          loadedVideo &&
          <Player url={setUrl} infos={videoInfos}/>
        }
      </VideoContainer>
      <Container>
        <ContainerContent>
          <SideLeft infos={videoInfos}/>
          <SideRight/>
        </ContainerContent>
      </Container>
    </>
  )
}

export default Videos