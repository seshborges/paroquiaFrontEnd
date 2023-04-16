import styled from "styled-components"

import { Background, Parallax } from 'react-parallax';

const BannerContainer = styled.div`
  width: 100%;
  height: 73.3vh;
  position: relative;
  z-index: -1;
  color: White;
`

const Banner = (props: any) => {
  const bannerText = props.text
  const backgroundType = props.type
  const fileSource = props.source

  if(!backgroundType){
    throw new Error(`Defina um tipo ao background: type={'video' ou 'image'}`)
  }

  if(!fileSource){
    throw new Error(`Defina um file source ao background: source={'//'}`)
  }

  return(
    <BannerContainer>
    </BannerContainer>
  )
}

export default Banner