import axios from 'axios'
import styled from 'styled-components'

const NoticiasContainer = styled.div`
  width: 100%;
` 

const NoticiasContent = styled.div`
  --gap: 16px;
  @media screen and (max-width: 1024px) {
    --gap: 8px;
  }
  max-width: 100%;
  display: flex;
  aspect-ratio: 16 / 6;
  width: 100%;
  gap: var(--gap);

  .gridElements{
    gap: var(--gap);
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    aspect-ratio: 6 / 3;
    .gridElements{
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    aspect-ratio: 6 / 4;
  }

  .mainElement{
    flex: 1;
    width: 100%;
    height: 100%;
    font-size: 20px;

    .news-text{
      padding: 24px !important;
    }
  }

  .ele{
    border-radius: 8px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    color: white;
    cursor: pointer;

    ::after{
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%);
      opacity: 0.9;
      content: '';
      display: block;
      z-index: 2;
    }

    .news-img{
      z-index: 1;
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .news-text{
      z-index: 3;
      position: absolute;
      bottom: 0px;
      padding: 16px;
    }
  }
`

const Noticias = (props: any) => {
  const data = props.data

  axios.get("")

  return(
    <NoticiasContainer>
      <NoticiasContent>
        <div className="mainElement">
          <div className="ele">
            <div className="news-img">
              <img src="https://images.a12.com/source/files/c/305206/CORRIDA-MAE-APARECIDA-576128_640-427-0-0.jpg"/>
            </div>
            <div className="news-text">
              <div className="news-text--title">
                <span>Inscrições para Corrida Mãe Aparecida 2023 começam nesta quinta-feira (20)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gridElements">
          <div className="ele">
            <div className="news-img">
              <img src="https://images.a12.com/source/files/c/305206/CORRIDA-MAE-APARECIDA-576128_640-427-0-0.jpg"/>
            </div>
            <div className="news-text">
              <div className="news-text--title">
                <span>Inscrições para Corrida Mãe Aparecida 2023 começam nesta quinta-feira (20)</span>
              </div>
            </div>
          </div>
          <div className="ele"></div>
          <div className="ele"></div>
          <div className="ele"></div>
        </div>
      </NoticiasContent>
    </NoticiasContainer>
  )
}

export default Noticias