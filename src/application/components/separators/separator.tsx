import styled from 'styled-components'

const SeparatorMain = styled.div`

`

const SeparatorStyle1 = styled.div`

`

export const Separator1 = (props: any) => {

  if(!props) {
    throw new Error("Defina um texto: text={'Seu texto aqui'}");
  }

  return(
    <SeparatorMain>
      <SeparatorStyle1>
        <span>
          ${props}
        </span>
      </SeparatorStyle1>
    </SeparatorMain>
  )
}