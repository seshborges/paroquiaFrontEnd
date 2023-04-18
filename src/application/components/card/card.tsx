import styled from 'styled-components'

const MainCards = styled.div`
  display: flex;
  gap: 22px;

  @media screen and (max-width: 1200px){
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const CardContainer = styled.div`
  
`

const CardContent = styled.div`

`

const Card = (props: any) => {
  const cardItems = props.items
  
  return(
    <>
      <MainCards>
        {
          cardItems.map((el: any, i: any) => 
            <CardContainer>
              <CardContent>
                
              </CardContent>
            </CardContainer>
          )
        }
      </MainCards>
    </>
  )
}

export default Card