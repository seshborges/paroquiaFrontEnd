import styled from "styled-components";

import Preview from './videos/previewCard'
import * as Main from '../../Global/Main.styles'
import { useEffect, useState } from "react";

const VideoContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  max-height: 60vh;

  video{
    max-width: 100%;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContainerContent = styled.div`
  width: 1700px;
  padding: 22px;
  padding-left: 0px;
  display: flex;
  gap: 24px;

  /* Side */

  .sideLeftContainer{
    flex: 1;

    .videoTitle h1{
      font-size: 28px;
    }

    .videoDescription{
      font-size: 14px;
      opacity: 1;
      padding: 16px;
      border-radius: 8px;
      max-width: 100%;
      margin-top: 16px;
      background-color: rgba(${props => props.theme.contrast}, 0.1);
    }
    
    .videoFeedback{
      border: 1px solid rgba(${props => props.theme.contrast}, 0.3);
      width: fit-content;
      border-radius: 24px;
      margin-top: 16px;
      overflow: hidden;
      height: 40px;
      
      display: flex;
      
      button{
        padding: 8px 16px;
        padding-right: 8px;
        padding-left: 14px;
        display: flex;
        align-items: center;

        user-select: none;

        .material-symbols-outlined{
          font-size: 22px;
        }

        :hover{
          background-color: rgba(${props=>props.theme.contrast}, 0.1);
        }

        
        
        .text{
          margin-left: 8px;
          font-size: 12px;
          position: relative;
          font-weight: 600;
          top: -1px;
          
          transition: .3s;
          transition-property: width, visibility;
          
          visibility: hidden;
          opacity: 0;
          width: 0px;
        }
      }

      button:nth-child(1){
        border-right: 1px solid rgba(${props => props.theme.contrast}, .3);
      }
      
      .selected{
        background-color: rgba(${props => props.theme.contrast}, 1) !important;
        color: rgba(${props => props.theme.background}, 1);
        
        .text{
          display: block;
          visibility: visible;
          width: 50px;
          opacity: 1;
          text-align: left;
        }
      }

      .selectedMain{
        background-color: rgba(${props => props.theme.default.primary}, 1) !important;
        color: white;
      }
    }
  }

  .sideRightContainer{
    box-sizing: border-box;
    margin-top: 16px;
    width: fit-content;

    display: flex;
    justify-content: right;
  }
  
  @media screen and (max-width: 1700px) {
    width: 100%;
  }
`

const PreviewContainer = styled.div`
  
`

const data = [
  {
    img: 'https://img.freepik.com/fotos-gratis/renderizando-um-fundo-futurista-abstrato-com-luzes-brilhantes-de-neon-azul-e-laranja_181624-19807.jpg',
    title: 'Lorem Ipsum',
    desc: 'Paróquia Divino Pai Eterno',
    date: 'há 2 horas'
  }
]

const Videos = () => {

  const [buttonAct, setButton] = useState(false)
  const [buttonAct2, setButton2] = useState(false)

  const toggleButton = () => {
    setButton(!buttonAct)
    setButton2(false)
  }

  const toggleButton2 = () => {
    setButton2(!buttonAct2)
    setButton(false)
  }

  return(
    <>
      <VideoContainer>
        <video autoPlay muted src="//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682715840&Signature=LAz2GTrJSSlDoWCqUiZtAiJUCZyH5fuuwskIge9MK6dN79NHz7l7Zpk55lwmaMeTxKMLjpZzeJlfgAs7IeaRTNUTORN1PMp02zXoooLmLl2uTT1tYmg4OYWVf3~6khfC9jX~6jeAcdVbZBUjZMoluMr61p5EIztdjz0Mk0U8YIBmp2rDMSMFvLg2JqDPEwppopXQzxcd2rtaYqjO6O8jXolVmAYvDAYThswrXj4DiG86r-jmNlHEDZBdbOETIeEFOYd5iwAUIRexk~vFWAQNXl2uKClGpuZVIPjKYphkl~vGkp-PFKLPN3l3MSE4j95kjfogk63ZoqJNWJ014BdWQQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"></video>
      </VideoContainer>
      <Container>
        <ContainerContent>
          <div className="sideLeftContainer">
            <div className="videoTitle">
              <h1>Vídeo Massa</h1>
            </div>
            <div className="videoDescription">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!</p>
            </div>
            <div className="videoFeedback">
              <button className={buttonAct ? 'selected selectedMain' : ''} onClick={toggleButton}><span className="material-symbols-outlined"> thumb_up </span> <span className="text">Gostei</span></button>
              <button className={buttonAct2 ? 'selected' : ''} onClick={toggleButton2}><span className="material-symbols-outlined"> thumb_down </span> <span className="text">Não Gostei</span></button>
            </div>
          </div>
          <div className="sideRightContainer">
            <PreviewContainer>
              <Preview data={data} />
            </PreviewContainer>
          </div>
        </ContainerContent>
      </Container>
    </>
  )
}

export default Videos