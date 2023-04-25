import styled from "styled-components";

import * as Main from '../../Global/Main.styles'

const VideoContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  video{
    background-color: red;
    aspect-ratio: 16 / 9;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContainerContent = styled.div`
  width: 1700px;
  background-color: red;
  @media screen and (max-width: 1700px) {
    width: 100%;
  }
`

const Videos = () => {
  fetch("//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682277000&Signature=FVBLGFTrYdkdxTxkAvMsgWlbyDIrlmR9zEwAUnQ-ajEOGqX1lJ6MwIRnK2SxTUhLBOyul-inODL1oQ3CF~GotBgG41~56TEfMstW8G79bsHLZyquKXPIXjoIQDDEBcXjpCUH1XZrRp1KHtx2FOVuudLey4ZUSoUNVTv5fu-mDR6oZmQGgW5NfxLYfDtKy1PMlifCuQGWHfy8uY9Q~HbRDzGRlvD7KQYMxq-UIkvMB1RLJCmC-rUbnsKrUFVymFm-1TrkmRgA5cQUBO9Jaur1DOcuxL1alBXQUc~uQ4USHXDtMIwtZ1o4luN6A929xuVCD06l9YzKeAGweKd7niN-iA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ")
  .then(res => console.log(res))
  .catch(err =>  console.log(err))

  return(
    <>
      <VideoContainer>
        <video autoPlay muted src="//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682277000&Signature=FVBLGFTrYdkdxTxkAvMsgWlbyDIrlmR9zEwAUnQ-ajEOGqX1lJ6MwIRnK2SxTUhLBOyul-inODL1oQ3CF~GotBgG41~56TEfMstW8G79bsHLZyquKXPIXjoIQDDEBcXjpCUH1XZrRp1KHtx2FOVuudLey4ZUSoUNVTv5fu-mDR6oZmQGgW5NfxLYfDtKy1PMlifCuQGWHfy8uY9Q~HbRDzGRlvD7KQYMxq-UIkvMB1RLJCmC-rUbnsKrUFVymFm-1TrkmRgA5cQUBO9Jaur1DOcuxL1alBXQUc~uQ4USHXDtMIwtZ1o4luN6A929xuVCD06l9YzKeAGweKd7niN-iA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"></video>
      </VideoContainer>
      <Container>
        <ContainerContent>
          <h1>Vídeo Massa</h1>
        </ContainerContent>
      </Container>
    </>
  )
}

export default Videos