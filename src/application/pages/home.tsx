import styled from 'styled-components'

import Banner from '../components/banner/banner'

const Button = styled.div`
  height: 5000px;
  width: 100%;
`

const Page = () => {
  return(
    <>
      <Banner source={"https://trindade.go.gov.br/wp-content/uploads/2019/10/concurso-675x370.png"}/>
      <Button/>
    </>
  )
}

export default Page