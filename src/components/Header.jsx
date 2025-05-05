import React from 'react'
import styled from 'styled-components'

const StlyHeader = styled.header`
    width: 100%;
    background-color: #fff;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;    
    @media only screen and (min-width: 950px) {
        padding: 30px 0px;
        max-width: 1080px;
        border-bottom: solid 2px var(--Light-grayish-blue);
    }
`

const MenuBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 10px;
    box-sizing: content-box;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media only screen and (min-width: 950px) {
        display: none;
    }

`

const Logo = styled.img`
    width: auto;
    height: 19px;
    object-fit: contain;
    margin-bottom: 2px;
`

const CartBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 5px;
    box-sizing: content-box;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const AvatarBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0px;
    box-sizing: content-box;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media only screen and (min-width: 950px) {
        width: 36px;
        height: 36px;
    }
`

const MenuLink = styled.a`
    color: var(--Dark-grayish-blue);
    margin: 0px;
    font-weight: 600;
    &&:hover {
        color: var(--Orange);
    }
`

const MenuNav = styled.nav`
    display: none;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 30px;
    margin: 0px 0px 0px 50px;
    @media only screen and (min-width: 950px) {
        display: flex;
    }
`


const Header = (props) => {
    return (
        <StlyHeader>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MenuBtn type="button" onClick={() => props.setMenuShow(true)}><img src="./icon-menu.svg" alt="menu" /></MenuBtn>
                <Logo src="./logo.svg" alt="Logo" />
            </div>
            <MenuNav>
                <MenuLink href="#">Collections</MenuLink>
                <MenuLink href="#">Men</MenuLink>
                <MenuLink href="#">Women</MenuLink>
                <MenuLink href="#">About</MenuLink>
                <MenuLink href="https://jvs-dev.vercel.app/">Contact</MenuLink>
            </MenuNav>
            <div style={{ display: 'flex', alignItems: 'center', gap: `${window.innerWidth > 950 ? '30px' : '10px'}` }} >
                <CartBtn type="button"><img src="./icon-cart.svg" alt="cart" onClick={() => props.setCartShow(!props.cartShow)} /></CartBtn>
                <AvatarBtn type="button"><img src="./image-avatar.png" alt="" /></AvatarBtn>
            </div>
        </StlyHeader >
    )
}

export default Header
