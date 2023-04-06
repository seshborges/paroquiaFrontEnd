import styled from 'styled-components'

// 

import * as separators from '../components/separators/separator'

// 

const MainContainer = styled.main`
  height: 5000px;
  width: 100%;
  background-color: rgba(${props => props.theme.background});
  color: rgba(${props => props.theme.contrast});
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .MainContent{
    width: 1200px;
  }
`

const Page = () => {
  return(
    <MainContainer>
      <div className="MainContent">

      </div>
    </MainContainer>
  )
}

export default Page