import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import styled from 'styled-components'
import Slider from './components/Slider'
import Cart from './components/Cart'
import Menu from './components/Menu'


const ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding: 0px 0px 40px 0px;
  box-sizing: border-box;  
  @media only screen and (min-width: 950px) {
    padding: 0px 40px 40px 40px;
  }
  `

const ItemMark = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  color: var(--Dark-grayish-blue);
  margin: 20px 0px;
  padding: 0px 20px;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  `

const ItemDescription = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--Very-dark-blue);
  margin: 0px;
  padding: 0px 20px;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  @media only screen and (min-width: 950px) {
    color: var(--Dark-grayish-blue);
    font-weight: 500;
  }
  `
const ItemTitle = styled.h1`
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;  
  color: var(--Black);
  margin: 0px 0px 18px 0px;
  padding: 0px 20px;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  @media only screen and (min-width: 950px) {
    font-size: 36px;
  }
  `

const ItemPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px;
    margin: 25px 0px 0px;
    box-sizing: border-box;
    @media only screen and (min-width: 950px) {
      flex-direction: column;
    }
`

const ItemPrice = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 28px;
  line-height: 100%;
  font-weight: 700;
  color: var(--Black);
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    line-height: 100%;
    padding: 6px 8px;
    border-radius: 7px;
    margin-left: 14px;
    background: var(--Black);
    color: var(--White);
  }
  @media only screen and (min-width: 950px) {
    justify-content: flex-start
  }
  `
const ItemOldPrice = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--Dark-grayish-blue);
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  text-align: right;
  text-decoration: line-through;
  @media only screen and (min-width: 950px) {
    margin-top: 14px;
    text-align: left;
  }
  `

const CartContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  padding: 10px;
  margin: 25px 0px 0px;
  background: var(--Light-grayish-blue);
  border-radius: 10px;
  @media only screen and (min-width: 950px) {
    margin: 0px 0px 0px;
    max-width: 150px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
`

const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  box-sizing: content-box;
  margin: 0px;
  width: 16px;
  height: 16px;      
  padding: 9px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;    
  }
  `

const RemoveToCart = styled.button`
display: flex;
align-items: center;
justify-content: center;
background: transparent;
border: none;
cursor: pointer;
outline: none;
box-sizing: content-box;
margin: 0px;
width: 16px;
height: 16px;      
padding: 9px;
img {
  width: 100%;
  height: auto;
  object-fit: cover;    
}
`

const CartInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--Black);
  text-align: center;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;  
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    margin: 0;
  }
  &::-webkit-textfield-decoration-container {
    -webkit-appearance: none;
  }
  &::-webkit-textfield-decoration {
    -webkit-appearance: none;
  }
  &::-webkit-textfield-decoration-button {
    -webkit-appearance: none;
  }
  `

const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--Orange);
  color: var(--Very-dark-blue);
  gap: 8px;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 8px 0px 0px 0px;
  width: calc(100% - 40px);  
  padding: 16px 0px;
  border-radius: 12px;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  img{
    fill: var(--Very-dark-blue);
    width: 16px;
    height: 16px;
    object-fit: cover;
    margin-right: 10px;
  }
  @media only screen and (min-width: 950px) {
    margin: 0px 0px 0px;
  }
  `

const FormatterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    @media only screen and (min-width: 950px) {
        flex-direction: row;
        gap: 40px;
        padding: 40px;
        max-width: 950px;
    }
  `

const FormatterBuyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    @media only screen and (min-width: 950px) {
      flex-direction: row;
      gap: 20px;
      height: 55px;
    }
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  `

function App() {

  const [count, setCount] = useState(1)
  const [total, setTotal] = useState(localStorage.getItem("itemCount") == null ? 0 : localStorage.getItem("itemCount"))
  const [cartShow, setCartShow] = useState(false)
  const [menuShow, setMenuShow] = useState(false)

  useEffect(() => {
    localStorage.setItem("itemCount", `${total}`)
  }, [total])

  return (
    <>
      <ItemSection>
        {menuShow && <Menu menuShow={menuShow} setMenuShow={setMenuShow} />}
        <Header cartShow={cartShow} setCartShow={setCartShow} setMenuShow={setMenuShow} />
        {cartShow && <Cart total={total} setTotal={setTotal} />}
        <FormatterDiv>
          <Slider images={["./image-product-1.jpg", "./image-product-2.jpg", "./image-product-3.jpg", "./image-product-4.jpg"]} />
          <ContentDiv>
            <ItemMark>Sneaker Company</ItemMark>
            <ItemTitle>Fall Limited Edition Sneakers</ItemTitle>
            <ItemDescription>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</ItemDescription>
            <ItemPriceContainer>
              <ItemPrice>$125.00<span>50%</span></ItemPrice>
              <ItemOldPrice>$250.00</ItemOldPrice>
            </ItemPriceContainer>
            <FormatterBuyDiv>
              <CartContainerDiv>
                <RemoveToCart type='button' onClick={() => setCount(count > 1 ? count - 1 : 1)}><img src="icon-minus.svg" alt="minus" /></RemoveToCart>
                <CartInput type="number" name="" id="" value={count} onChange={(e) => { setCount(e.target.value > 0 ? e.target.value : 0) }} />
                <AddToCart type='button' onClick={() => setCount(count + 1)}><img src="./icon-plus.svg" alt="plus" /></AddToCart>
              </CartContainerDiv>
              <CartButton type="button" onClick={() => setTotal(count)}><img src="./icon-cart.svg" alt="cart" />Add to cart</CartButton>
            </FormatterBuyDiv>
          </ContentDiv>
        </FormatterDiv>
      </ItemSection>
    </>
  )
}

export default App
