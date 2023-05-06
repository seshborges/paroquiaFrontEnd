import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import UsePlayer from "./videoPlayerFuncoes";

const PlayerContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  max-height: 60vh !important;

  .controls{
    /* position: absolute;
    width: 100%;
    height: 100%; */
  }

  .video{
    position: relative;
    height: 100%;

    video{
      max-width: 100%;
      height: 100%;
    }
  }

`

const Controles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-size: 16px;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,108,255,0) 100%);
  width: 100%;
  height: 100%;
  top: 0px;
  box-sizing: border-box;
  padding: 1vw;
  color: white;
  display: none;
  `

const ControlesTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 8px;
  margin-bottom: 8px;
  position: relative;

  input{
    appearance: none;
    background-color: transparent;
    opacity: 1;
    height: 32px;
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 10;
    border: 0px;
    padding: 0px;
    outline: 0px;
    margin: 0px;

    ::-webkit-slider-thumb{
      -webkit-appearance: none;
      background-color: rgba(${props=>props.theme.default.primary});
      width: 0px;
      height: 0px;
      user-select: none;
      border-radius: 50%;
      background-color: white;
      transition: .1s;
    }
  }

  .background{
    height: 3px;
    /* background-color: rgba(${props=>props.theme.default.primary}); */
    background-color: white;
    position: absolute;
    left: 0;
    z-index: 3;
  }

  .background2{
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 1;
  }

  .background3{
    position: absolute;
    height: 3px;
    background-color: rgba(255, 0, 0, 1);
    z-index: 1;
  }

  :hover{
    .background, .background2, .background3{
      height: 5px;
    }

    input{
      ::-webkit-slider-thumb{
        width: 12px;
        height: 12px;
      }
    }
  }
`

const ControlesBottom = styled.div`
  .left{
    display: flex;
  }
  button{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .time{
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 8px;
    opacity: 0.7;
    .timeCount{
      width: 26px;
    }
  }
  
  .mobileHide{
    display: none;
  }
`

// 


const Player = (props: any) => {
  const playerUrl = props.url
  const playerInfos = props.infos

  const $videoPlayer = useRef(null)
  const $progressBar = useRef(null)

  // const {
  //   playerState,
  //   togglePlay,
  //   timeUpdate,
  //   timeConversion,
  //   setVideoDuration,
  //   changeProgressBar,
  //   setLoadedData
  // } = UsePlayer($videoPlayer, $progressBar)

  
  // verificar se o dispositivo é touch
  const [touch, setTouch] = useState(false)

  useEffect(()=>{
    if(window.matchMedia("(pointer: coarse)").matches) {
      setTouch(true)
    }
  }, [])

  //

  return(
    <PlayerContainer>
      <div className="video">
          <video 
            // ref={$videoPlayer}
            // onTimeUpdate={timeUpdate}
            // onLoadedMetadata={setVideoDuration}
            controlsList="nodownload"
            // onProgress={setLoadedData}
            controls={true}
            autoPlay={true}
            poster={playerInfos.thumbnail}
          >
            <source src={playerUrl} type="video/mp4"></source>
          </video>

        {/* <Controles>
          <ControlesTop>
            <input 
              ref={$progressBar}
              type="range" 
              min={0} 
              max={1000} 
              onChange={changeProgressBar}
              value={playerState.percent*10}
            />
            <div style={{width: playerState.percent+'%'}} className="background"></div>
            <div className="background2"></div>
            <div style={{width: playerState.percentLoaded+'%'}} className="background3"></div>
          </ControlesTop>

          <ControlesBottom>
            <div className="left">
              <button onClick={togglePlay}>
                <span className="material-symbols-outlined"> {playerState.playing ? 'pause' : 'play_arrow'}</span>
              </button>
              <button className={touch ? "mobileHide" : ''}>
                <span className="material-symbols-outlined"> volume_up </span>
              </button>
              <div className="time">
                <span className="timeCount">{timeConversion(playerState.videoCurrentTime)}</span>
                <span> / </span>
                <span className="timeCount">{timeConversion(playerState.videoDuration)}</span>
              </div>
            </div>
          </ControlesBottom>
        </Controles> */}

      </div>
    </PlayerContainer>
  )
}

export default Player