import styled from 'styled-components'

import Banner from '../../components/banner/banner'
import HomeLiturgia from './homeLiturgia'
import News from '../../components/news/news'
import * as Main from '../../../Global/Main.styles'

const ButtonOverBanner = styled.div`
  position: relative;
  /* top: 53vh; */
  bottom: 80px;
  margin-bottom: -40px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;

  button{
    cursor: pointer;
    background: transparent;
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.4);
    color: white;

    :hover{
      opacity: 1;
      border-color: rgba(255, 255, 255, 1);
    }
  }
`

const Container1 = styled.div`
  
`

const Home = () => {
  var fileSource = `https://www.arquidiocesedegoiania.org.br/uploads/matriz-de-trindade-e-reaberta-apos-longa-reforma-053231286.jpg`

  return(
    <>
      <div className="banner">
        <Banner source={fileSource} type={'img'} gradient/>
        <ButtonOverBanner>
          <a href='/videos?q=2'><button className='button-styled01'>Assistir sobre a história da paróquia</button></a>
        </ButtonOverBanner>
      </div>

      <Main.Container>
        <Main.Content>
          <Container1>
            <News />
          </Container1>
          <HomeLiturgia/>
        </Main.Content>
      </Main.Container>
      
      <Main.MarginElem/>
    </>
  )
}

export default Home