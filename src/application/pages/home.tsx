import styled from 'styled-components'

import Banner from '../components/banner/banner'
import * as Main from '../../Global/Main.styles'
import { useEffect, useState } from 'react'

import Card from './home/card'
import News from './home/news'

const MarginElem = styled.div`
  height: 5000px;
  width: 100%;
`

const cards = [
  {
    header: 'Santo do Dia',
    titulo: 'São Porfírio, o restaurador da fé de um povo',
    content: 'São Porfírio era um tecelão, de família rica, nascido na Grécia. Aos 25 anos, decidiu viver de modo austero, dedicando-se à solidão e à penitência na região do Rio Jordão. Por causa de sua escolha, contraiu uma doença que o obrigou a mudar-se para Jerusalém, tornando-se mais moderado em sua austeridade. Mesmo doente, conta-se que ele não demonstrava sua realidade e se dedicava a visitar os lugares santos diariamente.',
    button: 'Leia Mais',
    // button2: 'Liturgia Diária',
    img: 'https://i.pinimg.com/564x/e5/9e/f7/e59ef77b3874151ebe4bf738da40f78c.jpg'
  },
  {
    header: 'Santo do Dia',
    titulo: 'São Porfírio, o restaurador da fé de um povo',
    content: `
      <strong>Primeira Leitura</strong>
      <br/>
      <sub>Teste</sub>
      <br/><br/>
      <strong>Salmo</strong>
    `,
    img: 'https://i.pinimg.com/564x/b8/82/aa/b882aae85de06d5c3593382b7fb57fd2.jpg'
  }
]

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
  var fileSource = `https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png`
  fileSource = `//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682715840&Signature=LAz2GTrJSSlDoWCqUiZtAiJUCZyH5fuuwskIge9MK6dN79NHz7l7Zpk55lwmaMeTxKMLjpZzeJlfgAs7IeaRTNUTORN1PMp02zXoooLmLl2uTT1tYmg4OYWVf3~6khfC9jX~6jeAcdVbZBUjZMoluMr61p5EIztdjz0Mk0U8YIBmp2rDMSMFvLg2JqDPEwppopXQzxcd2rtaYqjO6O8jXolVmAYvDAYThswrXj4DiG86r-jmNlHEDZBdbOETIeEFOYd5iwAUIRexk~vFWAQNXl2uKClGpuZVIPjKYphkl~vGkp-PFKLPN3l3MSE4j95kjfogk63ZoqJNWJ014BdWQQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

  const [data, setData] = useState()

  return(
    <>
      <Banner source={fileSource} type={'video'} gradient/>
      <ButtonOverBanner>
        <a href='/videos'><button className='button-styled01'>Assistir sobre a história da paróquia</button></a>
      </ButtonOverBanner>
      <Main.Container>
        <Main.Content>
          <Container1>
            <News data={data} />
          </Container1>
          <Card cards={cards}/>
        </Main.Content>
      </Main.Container>
      
      <MarginElem></MarginElem>
    </>
  )
}

export default Home