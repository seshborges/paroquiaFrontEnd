import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import AddComentario from './adicionarComentario'
import ListarComentarios from './listarComentarios'

const VideoFeedBack = styled.div`
  max-width: 100%;
  border-radius: 8px;
  /* background-color: rgba(${props=>props.theme.contrast}, 0.1); */
  margin-top: 16px;
  /* margin-bottom: 200px; */

  /* @media screen and (max-width: 600px){
    position: fixed;
    width: 100%;
    background-color: rgba(${props=>props.theme.background}, 1);
    width: 100%;
    left: 0px;
    margin-top: -24px;
    height: 100%;
    z-index: 10;
    overflow-y: scroll;
  } */
`

const VideoFeedbackContent = styled.div`
  /* padding: 16px; */
  display: flex;
  flex-direction: column;
  gap: 22px;
  box-sizing: border-box;
  /* padding: 22px; */
`

const coment = [
  {
    nome: 'igor lima',
    tempo: 'há 6 dias',
    conteudo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque orci libero, quis pretium mi pulvinar sit amet. Donec fermentum quam ac libero consequat, in egestas lectus mollis. Donec laoreet commodo ultrices. Praesent bibendum quis dolor non auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Sed at sodales ante, eu bibendum risus. Vestibulum posuere varius sapien, non dignissim felis maximus eget. Vivamus molestie molestie orci non sodales. Donec tempus nec enim in mollis.
    Nulla interdum enim ac mi condimentum dignissim. Pellentesque sed urna vel urna ullamcorper efficitur rhoncus eget risus. Pellentesque ligula risus, consectetur in tortor ut, rutrum rutrum dui. Maecenas ex eros, imperdiet ac facilisis id, ornare ac libero. Suspendisse tristique purus in diam sollicitudin, at efficitur diam ullamcorper. Nunc a augue eget est sodales laoreet tempus sollicitudin ex. Integer purus nisl, ornare a condimentum sed, consequat eget leo. Suspendisse pulvinar iaculis mi eget lacinia. Ut ut nulla ut mauris rutrum blandit. Nunc justo arcu, posuere in pretium et, tristique nec mi. Integer dapibus, arcu sit amet sollicitudin posuere, arcu magna viverra nulla, imperdiet ullamcorper enim ligula a leo. Curabitur vehicula nisl vel sem ullamcorper mollis.
    Suspendisse sodales congue metus, sit amet rutrum nibh tincidunt at. Sed ut erat odio. Donec luctus lacinia tincidunt. Sed et augue arcu. Duis sodales metus sapien, in tempus ante convallis quis. Nullam semper non neque luctus tincidunt. Cras vitae velit convallis, volutpat nunc sit amet, consectetur mi. Morbi aliquam risus lobortis, feugiat diam non, lacinia urna. Nulla porta nisi quis nisl luctus, quis dapibus urna fermentum. Mauris id mi nec nisl euismod auctor tristique sit amet dui. Nam eleifend lorem congue nibh placerat pharetra.
    Cras egestas ex ut efficitur volutpat. Suspendisse eros est, semper eu orci sed, laoreet suscipit arcu. Aenean efficitur mattis arcu non tristique. Proin eu nisi sagittis, viverra felis ut, pulvinar justo. Praesent ac metus nec risus placerat pellentesque sed et dui. Nam rhoncus, ligula quis aliquet tincidunt, felis massa viverra ante, non molestie libero nisi et lectus. Aenean ut tempor quam. Etiam mattis, augue vitae iaculis feugiat, ex augue rutrum tellus, sit amet fringilla massa tortor sed lacus. Curabitur feugiat felis non ultricies aliquam.
    Nunc at urna tellus. Mauris augue augue, suscipit a justo quis, vehicula facilisis ex. Praesent tempor ex tincidunt, mollis nibh et, ornare enim. Sed et diam dolor. Praesent vehicula tristique nisl id fermentum. Curabitur non leo in sapien vulputate pulvinar eu non diam. Nam accumsan tortor eget ipsum molestie, at dapibus ante elementum. Nullam volutpat ante nec maximus rhoncus. Donec mollis sit amet ex sit amet molestie. Aenean imperdiet, libero in sagittis iaculis, turpis orci finibus mauris, quis rhoncus diam nisl nec nibh. Aliquam bibendum iaculis ipsum a placerat. Sed at ornare tortor. Donec eget porta eros. Maecenas lacinia justo at semper condimentum. Ut sit amet justo non metus fermentum euismod in ut felis. Vivamus quis efficitur ligula.`,
  }
]



const Feedback = () => {
  const [data, setData] = useState(coment)
  const [effect, setEffect] = useState(false)

  const reRender = (e: any) => {
    var pushEffect = {
      nome: 'Adriano Lima',
      tempo: 'há 10 dias',
      conteudo: e
    }

    coment.push(pushEffect)
    setData(coment)
    setEffect(!effect)
  }


  return (
    <VideoFeedBack>
      <VideoFeedbackContent>
        <AddComentario render={reRender}/>
        <ListarComentarios data={data} />
      </VideoFeedbackContent>
    </VideoFeedBack>
  )
} 

export default Feedback