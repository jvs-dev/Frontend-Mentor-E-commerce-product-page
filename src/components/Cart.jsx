import React, { useState } from 'react'
import styled from 'styled-components'

const CartContainer = styled.div`
    position: absolute;
    top: 70px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 16px);
    padding: 20px 0px;
    height: auto;
    background: var(--White);
    border-radius: 10px;
`
const CartTitle = styled.h1`
    color: var(--Very-dark-blue);
    font-family: 'Kumbh Sans', sans-serif;
    width: 100%;
    padding: 0px 30px;
    margin: 0px;    
    font-size: 16px;
`

const CartItenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
    padding: 20px 20px 0px 20px;
    min-height: 170px;
`

const CartEmpty = styled.p`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: var(--Dark-grayish-blue);
    margin: 0px;
    height: 100%;    
    text-align: center;
`

const TrashBtn = styled.button`
    background: transparent;
    color: var(--Dark-grayish-blue);
    padding: 5px;
    cursor: pointer;
    img {
        object-fit: cover;
    }
`

const ItemImg = styled.img`
    height: 52px;
    width: 52px;
    object-fit: cover;
    border-radius: 5px;
`

const ItemName = styled.p`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--Dark-grayish-blue);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
`

const ItemValue = styled.p `
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--Dark-grayish-blue);
    span {
        margin-left: 6px;
        font-weight: 700;
        color: var(--Black);
    }
`

const CheckoutBtn = styled.button`
    background: var(--Orange);
    color: var(--Very-dark-blue);
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    margin: 26px 0px 10px 0px;
    padding: 15px 0px;
    cursor: pointer;
`

const CartItem = (props) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <ItemImg src="./image-product-1-thumbnail.jpg" alt="" />
            <div>
                <ItemName>Fall Limited Edition Sneakers</ItemName>
                <ItemValue>$125.00 x {props.count}<span>${Number(125 * props.count).toFixed(2)}</span></ItemValue>
            </div>
            <TrashBtn type="button" onClick={()=> props.setCount(0)}><img src="./icon-delete.svg" alt="" /></TrashBtn>
        </div>
    )
}

const Cart = (props) => {
    
    return (
        <CartContainer>
            <CartTitle>Cart</CartTitle>
            <div style={{ marginTop: "20px", background: "var(--Grayish-blue)", height: "1px", width: "100%" }} />
            <CartItenContainer style={{justifyContent: `${props.total == 0 ? "center" : "flex-start"}`}}>
                {props.total == 0 ? <CartEmpty>Your cart is empty.</CartEmpty> : <CartItem count={props.total} setCount={props.setTotal} />}
                {props.total != 0 ? <CheckoutBtn type='button'>Checkout</CheckoutBtn> : null}
            </CartItenContainer>
        </CartContainer>
    )
}

export default Cart
