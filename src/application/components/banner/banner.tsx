import styled from "styled-components"

import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax"

const BannerContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  z-index: -1;
  color: White;
  overflow: hidden;

  ::after{
    background: black;
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Banner = (props: any) => {
  const fileSource = props.source

  if(!fileSource){
    throw new Error(`Defina um file source ao background: source={'//'}`)
  }

  var videoSrc = `//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682277000&Signature=FVBLGFTrYdkdxTxkAvMsgWlbyDIrlmR9zEwAUnQ-ajEOGqX1lJ6MwIRnK2SxTUhLBOyul-inODL1oQ3CF~GotBgG41~56TEfMstW8G79bsHLZyquKXPIXjoIQDDEBcXjpCUH1XZrRp1KHtx2FOVuudLey4ZUSoUNVTv5fu-mDR6oZmQGgW5NfxLYfDtKy1PMlifCuQGWHfy8uY9Q~HbRDzGRlvD7KQYMxq-UIkvMB1RLJCmC-rUbnsKrUFVymFm-1TrkmRgA5cQUBO9Jaur1DOcuxL1alBXQUc~uQ4USHXDtMIwtZ1o4luN6A929xuVCD06l9YzKeAGweKd7niN-iA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

  return(
    <BannerContainer>
      <ParallaxProvider>

        <ParallaxBanner style={{ height: '100%' }}>
          <ParallaxBannerLayer speed={-40} expanded={true} style={{ height: '170%' }}>
            {/* <img style={{ height: '100%' }} src="https://curtamais.com.br/uploads/conteudos/d1e1482ea0b75a82c130e897c40dcc9a.jpeg" /> */}
            <video autoPlay muted src={videoSrc}></video>
          </ParallaxBannerLayer>
        </ParallaxBanner>

      </ParallaxProvider>
    </BannerContainer>
  )
}

export default Banner