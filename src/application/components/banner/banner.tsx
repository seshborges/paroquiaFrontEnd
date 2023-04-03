import styled from "styled-components"

import { Background, Parallax } from 'react-parallax';

const BannerContainer = styled.div`
  width: 100%;
  height: 73.3vh;
  position: relative;
  z-index: -1;

  .bannerImg{
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* border-radius: 32px; */

    ::after{
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0px;
      width: 100%;
      /* background: linear-gradient(0deg, rgba(${props => props.theme.background},1) 0%, rgba(0,212,255,0) 90%); */
      /* background: rgba(${props =>  props.theme.main}, 0.2); */
    }

    .react-parallax {
      width: 100%;
      height: 100%;
      transform: scale(1.1);
      position: relative;
      filter: brightness(0.4) blur(2px) contrast(1.1);
      position: relative;

      img{
        min-height: 100%;
        width: 100%;
        object-fit: cover;
        
      }

      .react-parallax-background-children{
        height: 100%;
        width: 100%;
      }

      .react-parallax-background {
        height: 110%;
        width: 100%;
      }
    }

    img, video{
      min-height: 100%;
      width: 100%;
      object-fit: cover;
    }

    ::after{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(${props =>  props.theme.main}, 0.2);
    }
  }
`

const ImageBanner = `//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1680488220&Signature=C2Aq-ZE~ipJpCJ9sLNwiJY9lm7vFKek67RjBK4WrnJoyfUGxZq2pzR5b4spypdPx8tLwf3PWYtcpMU8F3uXicA6sc6WVmgW4HZCR5xfY1zEE3kEjDTQAfGlfn-P419cwkK-~R46YWVwJDwRs4qbHIc8t09M1v8T2KehkCrvUVparllk2UQ6dHep0iPQ-fDrSP-KDxgRGPhlIM4O4RIn2SQZgkMCzY5jzHzNIx1sOUHF7JhU53TGTn75M1ouUJ6OrAEzv71UrXMcPofFdP8dr8JU1jfutcwDuMI1vg3Nuz1Z8rZJ2nJ4E5ul3EfKLAkwpyzmc8Y9iY4qS2iNbhN3YvA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

const Banner = (props: any) => {
  const bannerText = props.bannerText

  return(
    <>
      <BannerContainer>
        <div className="bannerImg">
          <Parallax 
            // blur={{ min: -30, max: 30 }}
            // bgImage={ImageBanner}
            strength={600}
          >
            <Background>
              {/* <video autoPlay muted>
                <source src={ImageBanner} type="video/mp4"/>
              </video> */}
              <img src={ImageBanner} />
            </Background> 
          </Parallax>
        </div>
        {
          bannerText &&
          <div className="bannerText">
            
          </div>  
        }
      </BannerContainer>
    </>
  )
}

export default Banner