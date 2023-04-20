import styled from 'styled-components'

import Banner from '../components/banner/banner'

const MarginElem = styled.div`
  height: 5000px;
  width: 100%;
`

const Page = () => {
  const fileSource = `https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg`

  return(
    <>
      <Banner source={fileSource} type={'img'}/>
      <MarginElem></MarginElem>
    </>
  )
}

export default Page