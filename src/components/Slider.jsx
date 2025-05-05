import React, { useState } from 'react'
import styled from 'styled-components'


const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: auto;
  height: auto;
`

const NextButton = styled.button`
  position: absolute;
  right: 15px;
  background: var(--White);
  color: var(--Black);
  border: none;
  cursor: pointer;
  outline: none;
  padding: 12px;
  box-sizing: content-box;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media only screen and (min-width: 950px) {
    display: none;
  }
`

const PreviousButton = styled.button`
  position: absolute;
  left: 15px;
  background: var(--White);
  color: var(--Black);
  border: none;
  cursor: pointer;
  outline: none;
  padding: 12px;
  box-sizing: content-box;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media only screen and (min-width: 950px) {
    display: none;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media only screen and (min-width: 950px) {
        width: 40vw;
        max-width: 328px;
        aspect-ratio: 1/1;
        border-radius: 12px;
    }
`

const ImagesContainer = styled.div`
  display: none;
  width: 100%;
  max-width: 328px;
  gap: 20px;
  flex-direction: row;
  align-items: center;  
  margin-top: 30px;
  @media only screen and (min-width: 950px) {
    display: flex;
  }
`
const ImageButton = styled.button`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  outline-width: 0px;
  background: transparent;
  overflow: hidden;
  border-radius: 12px;
  border: solid 2px transparent;
  cursor: pointer;
  &&.active {
    border: solid 2px var(--Orange);
  }
  &&.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;        
    z-index: 1;
    background: #ffffffa7;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;    
  } 
`

const Slider = (props) => {

  const [currentImage, setCurrentImage] = useState(0)

  return (
    <SliderContainer>
      <PreviousButton type="button" onClick={() => setCurrentImage(currentImage === 0 ? props.images.length - 1 : currentImage - 1)}><img src="./icon-previous.svg" alt="" /></PreviousButton>
      <Image src={props.images[currentImage]} alt="produto" />
      <NextButton type="button" onClick={() => setCurrentImage(currentImage === props.images.length - 1 ? 0 : currentImage + 1)}><img src="./icon-next.svg" alt="" /></NextButton>
      <ImagesContainer>
        {props.images && props.images.map((el, index) => <ImageButton key={index} className={index == currentImage ? 'active' : null } onClick={()=> setCurrentImage(index)}><img src={el} alt="item image" /></ImageButton>)}
      </ImagesContainer>
    </SliderContainer>
  )
}

export default Slider
