import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    background: ${props => props.containerStyle.bgcolor === '' ? 'red' : props.containerStyle.bgcolor};
    color: ${props => props.containerStyle.fcolor === '' ? 'red' : props.containerStyle.fcolor};
    text-decoration: ${props => props.containerStyle.dcolor === '' ? 'red' : props.containerStyle.dcolor};
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
`

export const TabBar = styled.div`
    height: ${props => props.tabBarStyle.height || '10vh'};
    width: ${props => props.tabBarStyle.width || '100%'};
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: space-evenly;
    align-items: center;
    overflow-x: visible;
    overflow-y: visible;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Trigger = styled.div`
    background: ${props => props.tabStyle.bcolor || 'white'};
    height: auto;
    min-height: fit-content;
    min-width: fit-content;
    margin: 1em;
    padding: 1em 2em;
    border-radius: 25px;
    display: flex;
    flex: ${props => props.tabStyle.grow === false ? '1 1 auto' : '0 1 auto' };
    justify-content: ${props => props.tabStyle.titleAlign};
    align-items: center;
    border: 1px solid;
    cursor: pointer;
    z-index: 0;
    &.active {
        overflow: visible;
        text-transform: uppercase;
        height: 101%;
        min-height: 2em;
        border-bottom: none;
        z-index: 99;
        border-radius: 0px;
        flex: 1 1 auto;
        background: ${props => props.tabStyle.acolor};
        justify-content: ${props => props.tabStyle.titleAlignActive};
    }
    transition: all .25s ease-in-out;
`

export const ActiveContainer = styled.div`
    background: ${props => props.activeComponentStyle.bgcolor};
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    justify-content: ${props => props.activeComponentStyle.justifyContent};
    align-items: ${props => props.activeComponentStyle.alignItems};
    border: 1px solid;  
`