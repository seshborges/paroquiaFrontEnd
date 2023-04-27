import { useState } from "react";
import styled from "styled-components";

const VideoFeedBack = styled.div`
  user-select: none;

  button{
    background-color: rgba(${props => props.theme.contrast}, 0.1);
    width: 40px;
    height: 40px;
    /* padding: 22px; */
    border-radius: 8px;
    overflow: hidden;

    transition: .2s;
    transition-property: width;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    :hover{
      background-color: rgba(${props => props.theme.contrast}, 0.2);
    }

    .text{
      transition: 0s;
      transition-property: opacity, position;
      position: absolute;
      opacity: 0;
      font-weight: 600;
      top: -1px;
    }
  }
  
  .selected{
    background-color: rgba(${props => props.theme.default.primary}, 1) !important;
    color: white;
    width: 90px;
    padding-right: 8px;

    .text{
      position: relative;
      opacity: 1;
    }
  }
`

const Feedback = () => {
  const [buttonAct, setButton] = useState(false)

  const toggleButton = () => {
    setButton(!buttonAct)
  }

  return (
    <VideoFeedBack>
      <button className={buttonAct ? 'selected selectedMain' : ''} onClick={toggleButton}><span className="material-symbols-outlined"> favorite </span> <span className="text">Gostei</span></button>
    </VideoFeedBack>
  )
} 

export default Feedback