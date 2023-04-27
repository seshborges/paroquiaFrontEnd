import { useState } from "react";
import styled from "styled-components";

import LikeFeedback from "./videoFeedback";
import ComentFeedback from "./comentarios"

const SideContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  .videoTitle h1{
    font-size: 20px;
  }

  .videoDescription{
    font-size: 14px;
    opacity: 1;
    padding: 16px;
    border-radius: 8px;
    max-width: 100%;
    font-weight: 500;
    background-color: rgba(${props => props.theme.contrast}, 0.1);

    button{
      font-weight: 700;
      margin-top: 16px;
      padding-left: 0px;
      user-select: none;

      :hover{
        text-decoration: underline;
      }
    }

    p{
      line-height: 18px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    @media screen and (max-width: 890px) {
      p{
        -webkit-line-clamp: 2;
      }
    }

    .open{
      p{
        -webkit-line-clamp: 999 !important;
      }
    }

    
    /* margin-bottom: 16px; */
  }

  .feedback {
    display: flex;
    align-items: center;
    gap: 16px;
    user-select: none;
    margin-top: 8px;
    width: 100%;

    .textComentarios{
      font-size: 14px;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0px 16px;
      cursor: pointer;
      background-color: rgba(${props => props.theme.contrast}, 0.1);
      border-radius: 8px;
      white-space: nowrap;
    }

    @media screen and (max-width: 890px) {
      ::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        position: relative;
        background-color: rgba(${props => props.theme.contrast}, 0.2);
      }
    }
  }
`

const Side = () => {
  const [desc, setDesc] = useState(false)

  const toggleDesc = () => {
    setDesc(!desc)
  }

  return (
    <SideContainer>
      <div className="videoTitle">
        <h1>Vídeo Massa</h1>
      </div>
      <div className="videoDescription">
        <div className={desc ? 'open' : 'close'}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus, itaque dolore facere cum consectetur, 
            magnam corporis eum consequatur veniam amet similique dignissimos dolorem tempora possimus hic velit rem quibusdam!
          </p>
          <button onClick={toggleDesc}>{desc ? 'Mostrar menos' : 'Mostrar mais' }</button>
        </div>
      </div>
      <div className="feedback">
        <LikeFeedback/>
        <span className="textComentarios">99 Comentários</span>
      </div>
      <ComentFeedback/>
    </SideContainer>
  )
} 

export default Side