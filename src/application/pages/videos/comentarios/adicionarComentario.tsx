import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AddComentario = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;

  .userProfileImg{
    height: 56px;
    width: 56px;
    min-width: 56px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 16px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .userCommentSpace {
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* align-items: end; */

    .action{
      position: relative;
      margin-top: -20px;
      transition: .3s;
      opacity: 0;
      transition-property: margin-top, opacity;
      z-index: -1;
      overflow: hidden;

      display: flex;
      gap: 8px;

      .cancel{
        background-color: rgba(${props=>props.theme.contrast}, 0.1);
        color: rgba(${props=>props.theme.contrast}, 1);
      }

      .send{
        background-color: rgba(${props=>props.theme.default.primary}, 1);
        color: white;
      }
    }

    .actions{
      margin-top: 16px;
      font-size: 14px;
      opacity: 1;
      z-index: 1;
    }

    textarea{
      box-sizing: border-box;
      width: 100%;
      outline: 0px;
      border: none;
      background: transparent;
      resize: none;
      color: rgba(${props=>props.theme.contrast}, 1);
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      padding: 16px;
      background: rgba(${props=>props.theme.contrast}, 0.1);
      border-radius: 8px;
      overflow-y: hidden;
    }
  }
`

const Comentario = (props: any) => {
  const reRender = props.render

  const [val, setVal] = useState("");
  const textAreaRef = useRef<any>(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e: any) => {
    setVal(e.target.value);
  };

  const sendTo = () => {
    reRender(val)
  }

  const cancel = () => {
    setVal("")
  }

  return (
    <AddComentario>
      <div className="userProfileImg">
        <img src="https://i.pinimg.com/564x/f1/07/db/f107db0c0d45872546555f185523b1cb.jpg" alt="" />
      </div>
      <div className="userCommentSpace">
        <textarea placeholder="Adicionar Comentário" ref={textAreaRef} value={val} onChange={onChange} rows={1}/>

        <div className={val.length >= 1 ? "action actions" : "action"}>
          <button onClick={cancel} className="cancel button-styled01">Cancelar</button>
          <button onClick={sendTo} className="send button-styled01">Enviar</button>
        </div>
      </div>
    </AddComentario>
  )
}

export default Comentario