import styled, { css } from "styled-components"

import { Parallax, Background } from 'react-parallax';

const BannerContainer = styled.div`
  --tamanho: 55vh;
  width: 100%;
  height: var(--tamanho);
  position: relative;
  color: white;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    --tamanho: 65vh;
  }
  
  img, video{
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }

  .imgADDFilter{
    img, video{
      filter: brightness(0.2);
    }
  }

  .imgADDGradient{
    ::after{
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      display: block;
      bottom: 0px;
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%);
      opacity: 0.9;
    }
  }

  .custom-bg{
    width: 100vw;
    height: calc(var(--tamanho) + 5vh);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

`

const Banner = (props: any) => {
  const fileSource = props.source
  const fileType = props.type
  const filter = props.filter
  const gradient = props.gradient
  const fullSize = props.fullSize

  if(!fileSource){
    throw new Error(`Defina um file source ao banner: source={'//'}`)
  }

  if(!fileType){
    throw new Error(`Defina um tipo ao banner: source={'video' ou 'img'}`)
  }

  var videoSrc = `//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682277000&Signature=FVBLGFTrYdkdxTxkAvMsgWlbyDIrlmR9zEwAUnQ-ajEOGqX1lJ6MwIRnK2SxTUhLBOyul-inODL1oQ3CF~GotBgG41~56TEfMstW8G79bsHLZyquKXPIXjoIQDDEBcXjpCUH1XZrRp1KHtx2FOVuudLey4ZUSoUNVTv5fu-mDR6oZmQGgW5NfxLYfDtKy1PMlifCuQGWHfy8uY9Q~HbRDzGRlvD7KQYMxq-UIkvMB1RLJCmC-rUbnsKrUFVymFm-1TrkmRgA5cQUBO9Jaur1DOcuxL1alBXQUc~uQ4USHXDtMIwtZ1o4luN6A929xuVCD06l9YzKeAGweKd7niN-iA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

  return(
    <BannerContainer>
      <Parallax 
        strength={400} 
        style={{ 
          height: '100%', 
          width: '100%',
        }}
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              zIndex: '1',
              backdropFilter: `blur(8px)`,
              opacity: `${percentage}%`
            }}
          />
        )}
      >
        <Background className={`custom-bg ${filter && 'imgADDFilter'} ${gradient && 'imgADDGradient'}`}>
          {
            fileType == 'video' ?
              <video loop muted autoPlay>
                <source src={fileSource} />
              </video>
            :
              <img src={fileSource} alt=""/>
          }
          
        </Background>
      </Parallax>
    </BannerContainer>
  )
}

export default Banner