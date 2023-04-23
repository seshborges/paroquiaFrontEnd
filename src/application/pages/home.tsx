import styled from 'styled-components'

import Banner from '../components/banner/banner'
import * as Main from '../../Global/Main.styles'

import Card from './home/card'

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

const Home = () => {
  var fileSource = `https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png`
  fileSource = `//cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682277000&Signature=FVBLGFTrYdkdxTxkAvMsgWlbyDIrlmR9zEwAUnQ-ajEOGqX1lJ6MwIRnK2SxTUhLBOyul-inODL1oQ3CF~GotBgG41~56TEfMstW8G79bsHLZyquKXPIXjoIQDDEBcXjpCUH1XZrRp1KHtx2FOVuudLey4ZUSoUNVTv5fu-mDR6oZmQGgW5NfxLYfDtKy1PMlifCuQGWHfy8uY9Q~HbRDzGRlvD7KQYMxq-UIkvMB1RLJCmC-rUbnsKrUFVymFm-1TrkmRgA5cQUBO9Jaur1DOcuxL1alBXQUc~uQ4USHXDtMIwtZ1o4luN6A929xuVCD06l9YzKeAGweKd7niN-iA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

  return(
    <>
      <Banner source={fileSource} type={'video'} gradient/>
      <Main.Container>
        <Main.Content>
          <Card cards={cards}/>
        </Main.Content>
      </Main.Container>
      
      <MarginElem></MarginElem>
    </>
  )
}

export default Home