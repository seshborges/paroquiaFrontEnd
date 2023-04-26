import styled from 'styled-components'

const NoticiasContainer = styled.div`
  width: 100%;
` 

const NoticiasContent = styled.div`
  --gap: 16px;
  @media screen and (max-width: 1024px) {
    --gap: 8px;
  }
  max-width: 100%;
  display: flex;
  aspect-ratio: 16 / 6;
  width: 100%;
  gap: var(--gap);
  margin-bottom: 80px;

  .ele{
    border-radius: 8px;
  }

  .gridElements{
    gap: var(--gap);
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .ele{
      background: red;
    }
  }

  @media screen and (max-width: 768px) {
    aspect-ratio: 6 / 4;
    .gridElements{
      display: none;
    }
  }

  .mainElement{
    flex: 1;
    width: 100%;
    height: 100%;
    .ele{
      background: blue;
      width: 100%;
      height: 100%;
    }
  }
`

const Noticias = (props: any) => {
  const data = props.data

  return(
    <NoticiasContainer>
      <NoticiasContent>
        <div className="mainElement">
          <div className="ele"></div>
        </div>
        <div className="gridElements">
          <div className="ele elemento1"></div>
          <div className="ele elemento2"></div>
          <div className="ele elemento3"></div>
          <div className="ele elemento4"></div>
        </div>
      </NoticiasContent>
    </NoticiasContainer>
  )
}

export default Noticias