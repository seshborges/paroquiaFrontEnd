import styled from 'styled-components'
import * as Main from '../../Global/Main.styles'
import Card from '../components/card/card'
import Banner from '../components/banner/banner'

const BannerContainer = styled.div`
  width: 100%;
  height: 50vh;
  // background: red;
`

const BannerContent = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ::after{
    display: block;
    height: 100%;
    width: 100%;
    content: '';
    background: rgba(24, 24, 24, 0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    // opacity: 0.7;
    // display: none;
  }
`

const BannerImg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: -2;
  }
`

const BannerOver = styled.div`
  position: absolute;
  width: 100%
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  color: white;
  .title{
    font-size: 40px;
  }
  button{
    font-size: 16px;
    color: white;
  }
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

const MainContainer = styled.div`
  
`

const ButtonAdd = styled.button`
  background-color: rgba(${props => props.theme.contrast}, 0.1);
  padding: 10px 20px 10px 14px; 
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid rgba(${props=>props.theme.contrast}, 0.2);

  @media screen and (max-width: 1200px){
    width: 100%;
  }

  :hover{
    border: 1px solid rgba(${props=>props.theme.contrast}, 0.4);
  }
`

const Page = () => {
  return(
    <>
      <BannerContainer>
        <BannerContent>
          <BannerImg>
            <img src="https://dummyimage.com/640x360/fff/aaa" />
          </BannerImg>
          <BannerOver>
            <span className='title'>Título</span>
            {/* <button>Button</button> */}
          </BannerOver>
        </BannerContent>
      </BannerContainer>
      <Main.Container>
        <Main.Content>
          <MainContainer>
            <ButtonAdd>

            </ButtonAdd>
            <div className="cardContainer">
              <div className="card"></div>
            </div>
          </MainContainer>
        </Main.Content>
      </Main.Container>
    </>
  )
}

export default Page