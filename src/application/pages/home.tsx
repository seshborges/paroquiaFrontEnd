import styled from 'styled-components'

// 

import * as separators from '../components/separators/separator'

// 

const MainContainer = styled.main`
  height: 5000px;
  width: 100%;
  background-color: rgba(${props => props.theme.background});
  color: rgba(${props => props.theme.contrast});
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .MainContent{
    width: 1200px;
  }

  .MainWithoutWidth{
    width: 100%;
    background: blue;
  }

  .ContainerCardSaint{
    width: 200px;
    height: 300px;
    background: red;
  }
`

const MainWithoutWidth = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .ContainerCard{
    display: flex;
    justify-content: center;
    gap: 32px;
    width: 100%;
    height: 500px;
    padding: 74px;
    box-sizing: border-box;
  }

  .card{
    display: flex;
  }
  
  .cardImage{
    background: rgba(${props=>props.theme.contrast}, 0.1);
    width: 250px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(${props=>props.theme.contrast}, 0.2);
  }

  .cardRightContent{
    padding: 16px;
  }

  .cardTitle span{
    font-size: 22px;
  }

  .cardDesc{
    margin-top: 16px;
    max-width: 300px;
  }

  .cardDesc span{
    font-size: 16px;
    opacity: 0.5;
    // margin-top: 40px;
  }

  .cardButtons button{

    padding: 12px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-top: 32px;
    border-radius: 8px;
    width: 100px;
    background: rgba(${props=>props.theme.contrast}, 0.05);
    border: 1px solid rgba(${props=>props.theme.contrast}, 0.2);
    color: rgba(${props=>props.theme.contrast});

    transition: 0.2s;
    transition-property: background, color;

    :hover{
      color: white;
      background: rgba(${props=>props.theme.main}, 1);
    }
  }

`

const Page = () => {
  return(
    <>
      <MainWithoutWidth>
        <div className="ContainerCard">
          <div className="card">
            <div className="cardImage">

            </div>
            <div className="cardRight">
              <div className="cardRightContent">
                <div className="cardTitle">
                  <span>Titulo</span>
                </div>
                <div className="cardDesc">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in praesentium amet nulla! Fugiat pariatur facilis doloremque id itaque aliquam aut vel assumenda earum eos natus molestiae, esse, vitae eveniet.
                  </span>
                </div>
                <div className="cardButtons">
                  <button>Leia Mais...</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">

            </div>
            <div className="cardRight">
              <div className="cardRightContent">
                <div className="cardTitle">
                  <span>Titulo</span>
                </div>
                <div className="cardDesc">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in praesentium amet nulla! Fugiat pariatur facilis doloremque id itaque aliquam aut vel assumenda earum eos natus molestiae, esse, vitae eveniet.
                  </span>
                </div>
                <div className="cardButtons">
                  <button>Leia Mais...</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainWithoutWidth>
      <MainContainer>
      </MainContainer>
    </>
  )
}

export default Page