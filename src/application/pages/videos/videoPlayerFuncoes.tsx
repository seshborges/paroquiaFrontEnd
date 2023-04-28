import { useEffect, useState } from "react";

/* 
  Código escrito por Igor Borges
  https://github.com/seshborges
*/

const UsePlayer = ($videoPlayer: any, $progressBar: any) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percent: 0,
    progressBarValue: 0,
    videoCurrentTime: 0,
    videoDuration: 0,
    videoVolume: 0.2,
  })


  // Sincronizar virtual com real

    useEffect(()=>{
      playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
    }, [playerState.playing])

    useEffect(()=>{
      $videoPlayer.current.volume = playerState.videoVolume
    }, [playerState.videoVolume])

    useEffect(()=>{
      if(isEndedVideo()){
        pauseVídeo()
      }
    }, [playerState.playing, playerState.percent])



  // Setar volume do vídeo
    function setVideoVolume(){
      
    }

  // Iniciar vídeo
    function playVideo(){
      if(!isEndedVideo()){
        setPlayerState({ 
          ...playerState, 
          playing: true
        })
      }
    }
  
  // Pausar vídeo
    function pauseVídeo(){
      setPlayerState({ 
        ...playerState, 
        playing: false
      })
    }

  // Alternador entre play e pause
    function togglePlay(){
      if(playerState.playing){
        pauseVídeo()
      }else{
        playVideo()
      }
    }

  // Alterar state para onde o vídeo real está
    function timeUpdate(){
      const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100

      setPlayerState({
        ...playerState,
        percent: currentPercentage,
        videoCurrentTime: $videoPlayer.current.currentTime,
      })
    }

  // Definir o tempo do vídeo em tempo (segundos)
    function changeVideoTimeSeconds(time: any){
      if(time >= $videoPlayer.current.duration + 1){
        return console.log('oxe')
      }
      $videoPlayer.current.currentTime = time
    }

  // Irá definir o tempo do video em porcentagem
    function changeVideoTimePercentage(time: any){
      changeVideoTimeSeconds($videoPlayer.current.duration / 100 * time)
    }

  // Quando detectar alguma alteração no input progress bar
    function changeProgressBar(event: any){
      const inputValue = event.target.value
      changeVideoTimePercentage(inputValue/10)

      console.log(inputValue)

      setPlayerState({
        ...playerState,
        percent: inputValue/10,
      })
    }

  // Irá definir qual é a duração do vídeo
    function setVideoDuration(){
      setPlayerState({
        ...playerState,
        videoDuration: $videoPlayer.current.duration
      })
    }

  // Utilizáveis

    // Verificar se o vídeo está no final
    function isEndedVideo(){
      var moreThan = $videoPlayer.current.currentTime >= $videoPlayer.current.duration
      if(moreThan || playerState.percent >= 100){
        return true
      }
      return false
    }

    // Converter tempo
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
    timeConversion,
    setVideoDuration,
    changeProgressBar
  }
}

export default UsePlayer