import styled from 'styled-components'

const FooterContainer = styled.footer`
  margin-top: 80px;
  position: relative;
  bottom: 0px;
  /* background-color: rgba(${
    props=> props.theme.name == 'Light' ? 
      props.theme.default.primary
    :
      '13, 13, 13'
  }, 1); */
  background-color: rgba(13, 13, 13, 1);
  color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 80px;

  @media screen and (max-width: 1700px) {
    padding: 0px 60px;
  }

  @media screen and (max-width: 890px) {
    padding: 0px;
  }

  .footerTop{
    box-sizing: border-box;
    padding: 4px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and (max-width: 890px) {
      padding-bottom: 16px;
      justify-content: center;
      flex-direction: column;
    }

    .footerLogo{
      width: 80px;
      img{
        width: 100%;
      }
    }

    .footerMap{
      display: flex;
      align-items: center;
      gap: 24px;

      button{
        font-weight: 600;
        font-size: 14px;
        opacity: 0.5;

        padding: 12px 16px;
        border-radius: 8px;
        
        :hover{
          opacity: 1;
          /* background: rgba(255, 255, 255, 0.2); */
        }
      }
    }
  }

  .separator{
    position: absolute;
    /* bottom: 0px; */
    left: 0px;
    width: 100%;
    height: 1px;
    content: '';
    background-color: rgba(255, 255, 255, 0.2);
  }

  .footerBottom{
    padding: 40px;
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    gap: 40px;

    .left{
      display: flex;
      align-items: center;
      gap: 24px;

      @media screen and (max-width: 500px) {
        flex-direction: column;
      }
    }

    .right{
      span{
        font-weight: 600;
      }
      button{
        font-weight: 700;
        font-size: 14px;
        :hover{
          text-decoration: underline;
        }
      }
    }

    .direitos{
      opacity: 0.7;
      font-weight: 400;
    }

    @media screen and (max-width: 890px) {
      justify-content: center;
      flex-direction: column;
    }

    .socialMedia{
      display: flex;
      align-items: center;
      gap: 12px;

      ::after{
        left: 0px;
        width: 1px;
        height: 24px;
        margin-left: 16px;
        content: '';
        background-color: rgba(255, 255, 255, 0.2);
      }

      @media screen and (max-width: 500px) {
        ::after{
          display: none;
        }
      }

      button{
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        opacity: 0.7;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .new-tab{
          font-size: 12px;
          position: absolute;
          /* right: 8px; */
          opacity: 0;
          transition: .2s;
          margin-left: 0px;
          transition-property: opacity, margin;
        }

        :hover{
          opacity: 1;
          width: auto;
          .new-tab{
            position: relative;
            margin-left: 8px;
            opacity: 1;
          }
        }
      }

      img{
        width: 20px;
        cursor: pointer;
        filter: invert();
        position: relative;
        top: 1px;
      }
    }
  }

  .direitos{
    display: flex;
    flex-direction: column;
    gap: 4px;

    span{
      opacity: 0.7;
    }

    @media screen and (max-width: 500px) {
      align-items: center;
    }
  }
`

const Footer = () => {
  return(
    <FooterContainer>
      <div className="footerTop">
        <div className="footerLogo">
          <img src="https://cdn.discordapp.com/attachments/1004462680582668341/1014967755092537444/logo.png" />
        </div>
        <div className="footerMap">
          <button>Localização</button>
          <button>Api</button>
        </div>
      </div>
      <div className="separator"></div>
      <div className="footerBottom">
        <div className="left">
          <div className="socialMedia">
            <a target='_blank' href='https://www.youtube.com/@ParoquiaDivinoPaiEterno'>
              <button>
                <img src="https://cdn.discordapp.com/attachments/1004462680582668341/1100936034121949254/youtube_1.png" alt='Youtube'/>
                <span className="material-symbols-outlined new-tab">open_in_new</span>
              </button>
            </a>
            <a target='_blank' href='https://www.youtube.com/@ParoquiaDivinoPaiEterno'>  
              <button>
                <img src="https://cdn.discordapp.com/attachments/1004462680582668341/1100936034461696072/social-038_instagram.png" alt='Instagram'/>
                <span className="material-symbols-outlined new-tab">open_in_new</span>
              </button>
            </a>
            <a target='_blank' href='https://www.youtube.com/@ParoquiaDivinoPaiEterno'>
              <button>
                <img src="https://cdn.discordapp.com/attachments/1004462680582668341/1100936033698316418/social-006_facebook.png" alt='Facebook'/>
                <span className="material-symbols-outlined new-tab">open_in_new</span>
              </button>
            </a>
          </div>
          <div className="direitos">
            <span>Paróquia Divino Pai Eterno</span>
            <span style={{
              fontSize: '12px'
            }}>Arquidiocese de Goiânia</span>
          </div>
        </div>
        <div className="right">
          <span>Desenvolvido por</span>
          <button>Igor Lima</button>
          {/* <span>&</span> */}
          {/* <button>Rafael Tarcísio</button> */}
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer