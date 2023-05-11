import axios from 'axios'
import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContainerContent = styled.div`
  width: 1670px;
  margin-top: 24px;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  
  @media screen and (max-width: 1700px) {
    width: 100%;
    padding: 0px 22px;
  }

  @media screen and (max-width: 890px) {
    flex-direction: column;
    padding: 0px 22px;
  }
`

const PesquisaContainer = styled.div`

`

const PesquisaContent = styled.div`

`

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const Pesquisa = () => {
  const [usuarios, setUsuarios] = useState([])
  const [noticias, setNoticias] = useState([])
  const [videos, setVideos] = useState([])

  let query = useQuery()
  const videoUrl = query.get("q")

  axios.get(`http://localhost:3423/pesquisa?q=${videoUrl}`)
  .then(res => {
    setUsuarios(res.data.users)
    setNoticias(res.data.news)
    setVideos(res.data.videos)
  })
  .catch(err => {
    console.log(err)
  })

  return(
    <Container>
      <ContainerContent>
        <PesquisaContainer>
          <PesquisaContent>
            {
              usuarios.length > 0 && 
              <span>Usuarios</span>
            }
            {
              noticias.length > 0 && 
              <span>Notícias</span>
            }
            {
              videos.length > 0 && 
              <span>Vídeos</span>
            }
          </PesquisaContent>
        </PesquisaContainer>
      </ContainerContent>
    </Container>
  )
}

export default Pesquisa