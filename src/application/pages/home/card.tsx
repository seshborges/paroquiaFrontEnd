import styled from 'styled-components'
import parse from 'html-react-parser';

const MainCards = styled.div`
  display: flex;
  gap: 40px;
`

const CardContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 22px;
  height: 360px;

  .card-left, .card-right{
    flex: 1;
  }

  .card-left{
    width: 100%;

    .card-image{
      border-radius: 8px;
      overflow: hidden;
      height: 100%;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .card-right{

    display: flex;
    flex-direction: column;

    .card-header{
      margin-top: 16px;
      opacity: 0.7;
      margin-bottom: 16px;
      width: fit-content;
      font-size: 14px;
      ::after{
        content: '';
        display: block;
        width: 40%;
        margin-top: 8px;
        height: 1px;
        background-color: rgba(${props => props.theme.contrast}, 0.5);
      }
    }

    .card-title{
      font-size: 24px;
      margin-bottom: 14px;
    }

    .card-content{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card-content span{
      font-size: 14px;
      opacity: 0.7;

      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;

      strong{
        font-weight: 700;
      }

      sub{
        font-weight: 500;
      }

      
    }

    .card-actions{
      position: relative;
      bottom: 28px;
    }
  }
`

const Card = (props: any) => {
  const cards = props.cards

  return (
    <>
      <MainCards>
        {
          cards.map((el: any, i: number) => 
            <CardContainer key={i}>
              <div className="card-left">
                <div className="card-image">
                  <img src={el.img} alt="" />
                </div>
              </div>
              <div className="card-right">
                <div className="card-header">
                  <span>{el.header}</span>
                </div>
                <div className="card-title">
                  <span>{el.titulo}</span>
                </div>
                <div className="card-content">
                  <span>{parse(el.content)}</span>
                  <div className="card-actions">
                    {el.button && <button className='button-styled01'>{el.button}</button>}
                    {el.button2 && <button className='button-styled02'>{el.button2}</button>}
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