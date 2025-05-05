import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
      from {
        transform: translateX(-250px);
      }
      to {
        transform: translateX(-0px);
      }
`;

const opacityIn = keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
`;

const MenuBackground = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background: #000000c3;
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    animation: ${opacityIn} 0.2s ease;
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: var(--White);
    width: 100%;
    max-width: 250px;
    height: 100%;
    padding: 20px;
    animation: ${slideIn} 0.5s ease;
`

const CloseBtn = styled.button`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 5px;
    margin-bottom: 40px;
`

const MenuNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 20px;
`

const MenuLink = styled.a`
    color: var(--Very-dark-blue);
    margin: 0px;
    font-weight: 700;
    &&:hover {
        color: var(--Orange);
    }
`

const Menu = (props) => {

    return (
        <MenuBackground>
            <MenuContainer>
                <CloseBtn type="button" onClick={() => props.setMenuShow(!props.menuShow)}><img src="./icon-close.svg" alt="close" /></CloseBtn>
                <MenuNav>
                    <MenuLink href="#">Collections</MenuLink>
                    <MenuLink href="#">Men</MenuLink>
                    <MenuLink href="#">Women</MenuLink>
                    <MenuLink href="#">About</MenuLink>
                    <MenuLink href="https://jvs-dev.vercel.app/">Contact</MenuLink>
                </MenuNav>
            </MenuContainer>
        </MenuBackground>
    )
}

export default Menu
