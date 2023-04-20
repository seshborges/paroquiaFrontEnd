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

  return(
    <BannerContainer>
      <Parallax strength={500} style={{ height: '100%', width: '100%' }} ex>
        <Background className='custom-bg'>
          <img src={fileSource} alt="" />
        </Background>
      </Parallax>
    </BannerContainer>
  )
}

export default Banner