import styled from 'styled-components'

import Banner from '../components/banner/banner'

import * as Main from '../../Global/Main.styles'

const MarginElem = styled.div`
  height: 5000px;
  width: 100%;
`

const InfoContainer = styled.div`
  width: 100%;
`

const InfoContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    gap: 16px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

const Info = styled.div`
  display: flex;
  height: 400px;
  flex: 1;

  @media screen and (max-width: 1200px) {
    /* background-color: red; */
    flex-direction: column;
  }

  .infoLeft{
    flex: 1;
    height: 100%;
    background-color: blue;
    overflow: hidden;

    border-radius: 8px;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .infoRight{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 32px;

    button{
      padding: 10px 22px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background-color: rgba(${props => props.theme.main});
      color: white;
    }
  }

  .infoRightHeader{
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

const Margin = styled.div`
  margin-top: 5000px;
`

const Page = () => {
  const fileSource = `https://cdn-cf-east.streamable.com/video/mp4/6i21s6.mp4?Expires=1682283960&Signature=mkHFgaHPhvb9xeJerlaWaZCS~qZGtIkkIMp6fSrJVF3L2bJLIb3HDrd8vPZMBHjWFsgHRwnQnMzBGMbBWz3hlzm-kO1JWGEhMDH4dJhfgNDwfS9FGjQMpWc2fO55kJC4cXeHr0VScBjbeUAbmCiHIt~tDiLWBMqvJxYGdDAjlstHI38lsBBDJvuOKUoj0zCmXaWcw7-vzBMI5SxMB~AuEv26CKEbv8JSCs-x25sG9TfMsIAEFTrSg2~u2IRBAVrVmP9KaFTVaB9IkbthIrOiyah-SH9tz80nlUEN0AKae-~vyMXxO8NvHwF5pMOrvIUf6laSNbSx4Zn7HDZTvPayHQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ`

  return(
    <>
      <Banner source={fileSource} type={'video'}/>
      <Main.Container>
        <Main.Content>
          <InfoContainer>
            <InfoContent>

              <Info>
                <div className="infoLeft">
                  <img src="data:image/png;base64,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" alt="" />
                </div>
                <div className="infoRight">
                  <div className="infoRightHeader">
                    <span>Lorem ipsum dolor</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto sit velit, illo quos culpa quidem possimus eos. Esse voluptate minus quo assumenda nihil corporis sint exercitationem eos ducimus suscipit?</span>
                  </div>
                  <div className="infoRightBottom">
                    <button>Leia Mais</button>
                  </div>
                </div>
              </Info>

              <Info>
                <div className="infoLeft">
                  <img src="data:image/png;base64,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" alt="" />
                </div>
                <div className="infoRight">
                  <div className="infoRightHeader">
                    <span>Lorem ipsum dolor</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto sit velit, illo quos culpa quidem possimus eos. Esse voluptate minus quo assumenda nihil corporis sint exercitationem eos ducimus suscipit?</span>
                  </div>
                  <div className="infoRightBottom">
                    <button>Leia Mais</button>
                  </div>
                </div>
              </Info>

            </InfoContent>
          </InfoContainer>
        </Main.Content>
      </Main.Container>
      <Margin/>
    </>
  )
}

export default Page