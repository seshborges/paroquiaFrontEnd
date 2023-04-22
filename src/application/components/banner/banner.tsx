import styled from "styled-components"

import { Parallax, Background } from 'react-parallax';

const BannerContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  color: white;
  /* overflow: hidden; */

  img, video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const Banner = (props: any) => {
  const fileSource = props.source
  const fileType = props.type

  if(!fileSource){
    throw new Error(`Defina um file source ao banner: source={'//'}`)
  }

  if(!fileType){
    throw new Error(`Defina um tipo ao banner: source={'video' ou 'img'}`)
  }

  var videoSrc = `//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682277000&Signature=FVBLGFTrYdkdxTxkAvMsgWlbyDIrlmR9zEwAUnQ-ajEOGqX1lJ6MwIRnK2SxTUhLBOyul-inODL1oQ3CF~GotBgG41~56TEfMstW8G79bsHLZyquKXPIXjoIQDDEBcXjpCUH1XZrRp1KHtx2FOVuudLey4ZUSoUNVTv5fu-mDR6oZmQGgW5NfxLYfDtKy1PMlifCuQGWHfy8uY9Q~HbRDzGRlvD7KQYMxq-UIkvMB1RLJCmC-rUbnsKrUFVymFm-1TrkmRgA5cQUBO9Jaur1DOcuxL1alBXQUc~uQ4USHXDtMIwtZ1o4luN6A929xuVCD06l9YzKeAGweKd7niN-iA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

  return(
    <BannerContainer>
      <Parallax strength={500} style={{ height: '100%', width: '100%' }}>
        <Background className='custom-bg'>
          <img src={fileSource} alt="" />
        </Background>
      </Parallax>
    </BannerContainer>
  )
}

export default Banner