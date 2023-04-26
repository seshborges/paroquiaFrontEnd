import { useState, Component, ReactNode, useEffect } from "react"
import styled from "styled-components"

const AreaComentarios = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Comentario = styled.div`
  display: flex;
  width: 100%;
  
  .comentarioLeft{
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

  .comentarioRight{
    width: 100%;
  }

  .comentarioHeader{
    display: flex;
    align-items: center;
    gap: 8px;

    .separador{
      content: '';
      width: 5px;
      height: 5px;
      background-color: rgba(${props=>props.theme.contrast}, 0.7);
      border-radius: 50%;
    }
  }

  .comentarioTexto{
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    background: rgba(${props=>props.theme.contrast}, 0.1);
    border-radius: 8px;
    margin-top: 8px;
    font-weight: 500;

    span{
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      line-height: 18px;
    }

    .changeSize{
      font-weight: 700;
      margin-top: 16px;
      padding-left: 0px;

      :hover{
        text-decoration: underline;
      }
    }
  }

  .open span{
    -webkit-line-clamp: 999;
  }
`

class MyComponent extends Component<any, any> {
  constructor(props: any){
    super(props);
    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.state = {
      open: false,
      yeah: props.data
    }
  }

  toggleActiveClass(){
    this.setState({
      open: !this.state.open
    });
  }

  render(): ReactNode {
    return(
      <Comentario>
        <div className="comentarioLeft">
          <img src="https://i.pinimg.com/564x/f1/07/db/f107db0c0d45872546555f185523b1cb.jpg" alt="" />
        </div>
        <div className="comentarioRight">
          <div className="comentarioHeader">
            <div className="comentarioUser">
              <span>{this.state.yeah.nome}</span>
            </div>
            <span className="separador"></span>
            <div className="comentarioDate">
              <span>{this.state.yeah.tempo}</span>
            </div>
          </div>
          <div className={this.state.open ? 'open comentarioTexto' : 'comentarioTexto'}>
            <span>
              {this.state.yeah.conteudo}
            </span>
            <button onClick={() => this.toggleActiveClass()} className="changeSize">Mostrar Mais</button>
          </div>
        </div>
      </Comentario>
    )
  }
}

const Comentarios = (props: any) => {
  const data = props.data

  return(
    <AreaComentarios>
      {
        data &&
        data.map((el: any, i: any)=>
          <MyComponent data={el} key={i}/>
        ) 
      }
    </AreaComentarios>
  )
}

export default Comentarios