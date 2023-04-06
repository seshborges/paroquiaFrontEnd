import styled from 'styled-components'

const MainCards = styled.div`
  display: flex;
  gap: 22px;

  @media screen and (max-width: 1200px){
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const CardContainer = styled.div`
  width: 270px;
  height: auto;
  background: rgba(${props => props.theme.contrast}, 0.025);
  border: 1px solid rgba(${props => props.theme.contrast}, 0.3);
  border-radius: 8px;
  overflow: hidden;

  cursor: pointer;

  @media screen and (max-width: 1200px) {
    box-sizing: border-box;
    width: 100%;
    /* border: 0px; */
  }


  transition: 0.1s;
  transition-property: transform;

  :hover{
    transform: translateY(-5px);
  }

  .cardImage{
    width: 100%;
    height: 300px;
    /* border-radius: 8px; */
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cardContent{
    display: flex;
    flex-direction: column;
  }
  
  .cardAuthor{
    display: flex;
    flex-direction: column;
    gap: 12px;

    .name{
      font-size: 22px;
    }

    .city{
      opacity: 0.4;
      font-weight: 500;
    }
  }

  .cardBottom{
    /* margin-top: 8px; */
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 22px;
    gap: 32px;

    .cardMessage{
      opacity: 0.7;
    }

    .cardDate{
      opacity: 0.3;
    }
  }
`

const Card = (props: any) => {
  const cardItems = props.items
  
  return(
    <>
      <MainCards>
        {
          cardItems.map((el: any, i: any) => 
            <CardContainer>
              <div className="cardContent">
                <div className="cardTop">
                  {  
                    el.image &&
                    <div className="cardImage">
                      <img src={el.image} alt="" />
                    </div>
                  }
                </div>
                <div className="cardBottom">
                  <div className="cardAuthor">
                    <div className="name">
                      <span>{el.name}</span>
                    </div>
                    <div className="city">
                      <span>{el.city}</span>
                    </div>
                  </div>
                  <div className="cardMessage">
                    <span>{el.message}</span>
                  </div>
                  <div className="cardDate">
                    <span>{el.date}</span>
                  </div>
                </div>
              </div>
            </CardContainer>
          )
        }
      </MainCards>
    </>
  )
}

export default Card