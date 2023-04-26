import styled from "styled-components";
import Preview from './previewCard'


const SideContainer = styled.div`
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;
  
  display: block;
  /* justify-content: right; */
`

const PreviewContainer = styled.div``

const data = [
  {
    img: 'https://img.freepik.com/fotos-gratis/renderizando-um-fundo-futurista-abstrato-com-luzes-brilhantes-de-neon-azul-e-laranja_181624-19807.jpg',
    title: 'Lorem Ipsum',
    desc: 'Paróquia Divino Pai Eterno',
    date: 'há 2 horas'
  },
  {
    img: 'https://img.freepik.com/fotos-gratis/renderizando-um-fundo-futurista-abstrato-com-luzes-brilhantes-de-neon-azul-e-laranja_181624-19807.jpg',
    title: 'Lorem Ipsum kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    desc: 'Paróquia Divino Pai Eterno',
    date: 'há 2 horas'
  }
]

const Side = () => {
  return(
    <SideContainer>
      <PreviewContainer>
        <Preview data={data} />
      </PreviewContainer>
    </SideContainer>
  )
}

export default Side