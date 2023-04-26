import styled from "styled-components";

const Preview = (props: any) => {
  const data = props.data

  return(
    <>
      { 
        data &&
        data.map((el: any, i: any)=>
          <div className="container-preview">
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
              </div>
              <div className="preview--texts-date">
                <span>{el.date}</span>
              </div>
            </div>            
          </div> 
        )
      }
    </>
  )
}

export default Preview