import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
`

const ControlesTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 8px;
  margin-bottom: 8px;
  position: relative;

  input{
    -webkit-appearance: none;
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

      transition: .1s;
    }
  }

  .background{
    height: 3px;
    background-color: rgba(${props=>props.theme.default.primary});
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

  :hover{
    .background, .background2{
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
`

// 

const UsePlayer = ($videoPlayer: any, $progressBar: any) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percent: 0,
    progressBarValue: 0,
    videoCurrentTime: 0,
    videoDuration: 0,
    end: false
  })

  useEffect(()=>{
    playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
  }, [playerState.playing])

  function togglePlay(){
    setPlayerState({ 
      ...playerState, 
      playing: !playerState.playing
    })
  }

  function timeUpdate(){
    const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 1000

    setPlayerState({
      ...playerState,
      percent: currentPercentage,
      videoCurrentTime: $videoPlayer.current.currentTime,
    })
  }

  function changeVideoTime(event: any){
    const inputValue = event.target.value
    $videoPlayer.current.currentTime = $videoPlayer.current.duration / 1000 * inputValue

    if(playerState.end){
      setPlayerState({
        ...playerState,
        percent: inputValue,
        progressBarValue: inputValue / 10,
        playing: true
      })
    }else{
      setPlayerState({
        ...playerState,
        percent: inputValue,
        progressBarValue: inputValue / 10,
      })
    }
  }

  function setVideoDuration(){
    setPlayerState({
      ...playerState,
      videoDuration: $videoPlayer.current.duration
    })
  }

  useEffect(()=>{
    var value = ($progressBar.current.value-$progressBar.current.min)/($progressBar.current.max-$progressBar.current.min) * 100
    setPlayerState({
      ...playerState,
      progressBarValue: value
    })

    if(playerState.percent == 1000){
      setPlayerState({
        ...playerState,
        playing: false,
        end: true
      })
    }

  }, [playerState.percent])

  // utilizáveis

  function timeConversion(d: any) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var H = h + ":";
    var M = m + ":";
    var S = s + '';

    if(h < 10) {
      H = '';
    }

    if(s < 10) {
      S = '0' + s;
    }

    if(isNaN(h)){
      H = ''
      M = '0:'
      S = '00'
    }

    return H + M + S;
  }

  return {
    playerState,
    togglePlay,
    timeUpdate,
    changeVideoTime,
    timeConversion,
    setVideoDuration
  }
}

const Player = (props: any) => {
  const playerUrl = props.url

  const $videoPlayer = useRef(null)
  const $progressBar = useRef(null)
  const {
    playerState,
    togglePlay,
    timeUpdate,
    changeVideoTime,
    timeConversion,
    setVideoDuration
  } = UsePlayer($videoPlayer, $progressBar)

  return(
    <PlayerContainer>
      <div className="video">
        <video 
          ref={$videoPlayer}
          src={playerUrl}
          onTimeUpdate={timeUpdate}
          onLoadedMetadata={setVideoDuration}
        >
        </video>

        <Controles>
          <ControlesTop>
            <input 
              ref={$progressBar}
              type="range" 
              min={0} 
              max={1000} 
              onChange={changeVideoTime}
              value={playerState.percent}
            />
            <div style={{width: playerState.progressBarValue+'%'}} className="background"></div>
            <div className="background2"></div>
          </ControlesTop>

          <ControlesBottom>
            <div className="left">
              <button onClick={togglePlay}>
                <span className="material-symbols-outlined"> {playerState.playing ? 'pause' : 'play_arrow'}</span>
              </button>
              <button>
                <span className="material-symbols-outlined"> volume_up </span>
              </button>
              <div className="time">
                <span className="timeCount">{timeConversion(playerState.videoCurrentTime)}</span>
                <span> / </span>
                <span className="timeCount">{timeConversion(playerState.videoDuration)}</span>
              </div>
            </div>
          </ControlesBottom>
        </Controles>

      </div>
    </PlayerContainer>
  )
}

export default Player