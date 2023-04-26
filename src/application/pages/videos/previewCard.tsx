import styled from "styled-components";

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ContainerPreview = styled.div`
  display: flex;
  width: 400px;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 890px) {
    width: 100%;
  }

  .container-preview--img{
    flex: 1;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
    width: 180px;

    img{
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  
  .container-preview--texts{
    display: flex;
    flex-direction: column;
    padding: 16px;
    padding-top: 0px;
    box-sizing: border-box;

    .container-preview--texts-top{ 
      display: flex;
      flex-direction: column;
      gap: 8px;

      font-weight: 500;

      .preview--texts-title{
        font-size: 14px;
        margin-bottom: 4px;
        font-weight: 700;
        width: 170px;
        overflow: hidden;
      }

      .preview--texts-description{
        opacity: 0.8;
        font-size: 12px;
      }
    }

    .preview--texts-date{
      font-size: 12px;
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    .container-preview--img{
      width: 100%;
    }

    .container-preview--texts{
      margin-top: 12px;
      padding-left: 0px;
    }
  }
`

const Preview = (props: any) => {
  const data = props.data

  return(
    <>
      <PreviewContainer>
        { 
          data &&
          data.map((el: any, i: any)=>
            <ContainerPreview key={i}>
              <div className="container-preview--img">
                <img src={el.img} alt="" />
              </div>
              <div className="container-preview--texts">
                <div className="container-preview--texts-top">
                  <div className="preview--texts-title">
                    <span>{el.title}</span>
                  </div>
                  <div className="preview--texts-description">
                    <span>{el.desc}</span>
                  </div>
                  <div className="preview--texts-date">
                    <span>{el.date}</span>
                  </div>
                </div>
              </div>            
            </ContainerPreview> 
          )
        }
      </PreviewContainer>
    </>
  )
}

export default Preview