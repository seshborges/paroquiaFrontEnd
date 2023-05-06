import styled from 'styled-components'

const MainContainer = styled.div`

`

const Banner = styled.div`
  width: 100%;
  height: 500px;
`

const ProfileContainer = styled.div`
  width: 100%;
`

const PageProfile = () => {
  return(
    <>
      <MainContainer>
        <Banner>
          <ProfileContainer>
            <div className="profileContent">

            </div>
          </ProfileContainer>
        </Banner>
      </MainContainer>
    </>
  )
}

export default PageProfile