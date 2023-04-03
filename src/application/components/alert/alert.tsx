import styled from "styled-components";

const AlertContainer = styled.div`
  position: fixed;
  width: 400px;
  bottom: 22px;
  left: 22px;
  z-index: 1;
  background: rgba(${props => props.theme.background});
  border: 1px solid rgba(${props => props.theme.contrast}, 0.2);
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
  overflow: hidden;
  border-radius: 8px;
  color: rgba(${props => props.theme.contrast}, 1);

  @media screen and (max-width: 1000px) {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`

const AlertContent = styled.div`
  padding: 20px;

  .bottom{
    margin-top: 12px;
    span{
      font-size: 14px;
      opacity: 0.6;
      font-weight: 500;
    }
    button{
      color: rgba(${props => props.theme.contrast}, 1);
      border: 1px solid rgba(${props => props.theme.contrast}, 0.2);
      margin-top: 22px;
      border-radius: 4px;
      padding: 8px 22px;

      :hover{
        opacity: 0.9;
      }
    }

    .buttons{
      display: flex;
      gap: 14px;

      @media screen and (max-width: 1000px) {
        display: flex;
        justify-content: center;
      }
    }

    .permitir{
      background: #109970;
      color: white;
    }
  }
`

const Component = (props: any) => {
  return(
    <AlertContainer>
      <AlertContent>
        <div className="top">
          Uso de Cookies
        </div>
        <div className="bottom">
          <span>
            Utilizamos melhorar a experiência do usuário, 
            permitindo personalização de preferências e armazenamento de informações de login.
          </span>
          <div className="buttons">
            <button className="permitir">
              Aceitar
            </button>
          </div>
        </div>
      </AlertContent>
    </AlertContainer>
  )
}

export default Component