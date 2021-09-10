import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.containerStyle.bgcolor === '' ? 'red' : props.containerStyle.bgcolor};
    color: ${props => props.containerStyle.fcolor === '' ? 'red' : props.containerStyle.fcolor};
    text-decoration: ${props => props.containerStyle.dcolor === '' ? 'red' : props.containerStyle.dcolor};
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;`

export const TabBar = styled.div`
    height: ${props => props.tabBarStyle.height || '10vh'};
    width: ${props => props.tabBarStyle.width || '100%'};
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: space-evenly;
    align-items: center;
`

export const Trigger = styled.div`
    background: white;
    height: auto;
    min-height: 2em;
    margin: 1em;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    flex: ${props => props.tabStyle.grow === undefined ? '1 1 auto' : '0 1 auto' };
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid;
    cursor: pointer;
    &.active {
        text-transform: uppercase;
        height: 101%;
        min-height: 2em;
        border-bottom: none;
        z-index: 99;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        flex: 1 1 auto;
        background: ${props => props.tabStyle.bgcolor === undefined ? 'white' : props.tabStyle.bgcolor};
    }
    transition: all .25s ease-in-out;
`

export const ActiveContainer = styled.div`
    background: ${props => props.activeComponentStyle.bgcolor === undefined ? 'white' : props.activeComponentStyle.bgcolor};
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid;  
`