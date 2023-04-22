import styled from 'styled-components'

import Banner from '../components/banner/banner'
import * as Main from '../../Global/Main.styles'

const MarginElem = styled.div`
  height: 5000px;
  width: 100%;
`

const Home = () => {
  var fileSource = `https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png`
  fileSource = `//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682277000&Signature=FVBLGFTrYdkdxTxkAvMsgWlbyDIrlmR9zEwAUnQ-ajEOGqX1lJ6MwIRnK2SxTUhLBOyul-inODL1oQ3CF~GotBgG41~56TEfMstW8G79bsHLZyquKXPIXjoIQDDEBcXjpCUH1XZrRp1KHtx2FOVuudLey4ZUSoUNVTv5fu-mDR6oZmQGgW5NfxLYfDtKy1PMlifCuQGWHfy8uY9Q~HbRDzGRlvD7KQYMxq-UIkvMB1RLJCmC-rUbnsKrUFVymFm-1TrkmRgA5cQUBO9Jaur1DOcuxL1alBXQUc~uQ4USHXDtMIwtZ1o4luN6A929xuVCD06l9YzKeAGweKd7niN-iA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

  return(
    <>
      <Banner source={fileSource} type={'video'}/>
      <Main.Container>
        <Main.Content>

        </Main.Content>
      </Main.Container>
      
      <MarginElem></MarginElem>
    </>
  )
}

export default Home