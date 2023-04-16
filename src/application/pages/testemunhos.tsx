import styled from 'styled-components'
import * as Main from '../../Global/Main.styles'
import Card from '../components/card/card'
import Banner from '../components/banner/banner'

const BannerContainer = styled.div`
  width: 100%;
`

const createCardTeste = [
  {
    // "image": "https://via.placeholder.com/600x400",
    "name": "Lorem Ipsum",
    "city": "Trindade - GO",
    "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum dolor magnam. Doloribus rem sunt, quae libero id ratione quidem minima voluptas repellendus. Corrupti ea, consectetur deserunt officiis dolore nihil?",
    "date": "01/01/2001"
  },
  {
    // "image": "https://via.placeholder.com/600x400",
    "name": "Lorem Ipsum",
    "city": "Trindade - GO",
    "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum dolor magnam. Doloribus rem sunt, quae libero id ratione quidem minima voluptas repellendus. Corrupti ea, consectetur deserunt officiis dolore nihil?",
    "date": "01/01/2001"
  },
]

const Page = () => {
  return(
    <>
      <Main.Container>
        <Main.Content>
          <Banner type="image" fileSource="https://via.placeholder.com/600x400"/>
          <Card items={createCardTeste}/>
        </Main.Content>
      </Main.Container>
    </>
  )
}

export default Page