import styled from 'styled-components'

const AuthContainer = styled.div`
  background: rgba(${props => props.theme.background});
  width: 100%;
  height: 100vh;
`

const Form = styled.div`

`

const Auth = () => {
  return(
    <AuthContainer>
      <Form>
        
      </Form>
    </AuthContainer>
  )
}

export default Auth