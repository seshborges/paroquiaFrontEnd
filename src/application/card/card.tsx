import styled from "styled-components"
import { css } from "@emotion/css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardsMain = styled.div`
  width: 100%;

  .swiper{
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  /* max-width: 250px; */
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(${props => props.theme.contrast}, 0.2);
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
  background-color: rgba(${props => props.theme.background});
  color: rgba(${props => props.theme.contrast}, 1);
  color: white;
  cursor: pointer;

  position: relative;

  transition-duration: 0.2s;
  transition-property: transform, box-shadow;

  :hover{
    transform: translateY(-5px);
    box-shadow: 0px 8px 50px 0px rgba(0, 0, 0, 0.4);
  }

  z-index: 1;
  flex: 1;
`

const CardContent = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

const CardUpside = styled.div`
  height: 65%;
  overflow: hidden;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ::after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-clip: border-box;
    top: 0px;
    left: 0px;
    z-index: -1;
    opacity: 1;
    transform: scale(2);
  }
  /* border-radius: 16px; */
`

const CardDownside = styled.div`
  padding: 16px;
  /* margin-top: 16px; */
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 4px;

  .cardTitle{
    font-size: 24px;
    font-weight: 700;
  }

  .cardDesc{
    font-size: 14px;
    opacity: 0.8;
  }

  .cardDescDesc{
    font-size: 12px;
    opacity: 0.5;
    font-weight: 800;
    margin-top: 12px;
  }
`

const Card = (props: any) => {
  const objectParam = props.sendTo

  return(
    <>
      <CardsMain>
        <Swiper
          slidesPerView={6}
          spaceBetween={2}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {
            objectParam.map((el: any, i: number)=>
              <SwiperSlide key={i}>
                <CardContainer key={i}>
                  <CardContent>
                    <CardUpside className={css`
                      ::after{
                        background-image: url(${el.background});
                        background-position: center;
                        background-size: 100%;
                        filter: blur(30px);
                      }
                    `}>
                      <img src={el.background} />
                    </CardUpside>
                    <CardDownside>
                      <div className="cardTitle">
                        <span>{el.title}</span>
                      </div>
                      <div className="cardDesc">
                        <span>{el.desc}</span>
                      </div>
                      <div className="cardDescDesc">
                        <span>{el.tipo} - {el.tamanho}</span>
                      </div>
                    </CardDownside>
                  </CardContent>
                </CardContainer>
              </SwiperSlide>
          )}
        </Swiper>
      </CardsMain>
    </>
  )
}

export default Card