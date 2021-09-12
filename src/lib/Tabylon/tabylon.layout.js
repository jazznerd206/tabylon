import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    background: ${props => props.theme.containerBG};
    height: 100%auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    border: ${props => props.containerStyle.border === true ? props.theme.border : 'none'};
`

export const TabBar = styled.div`
    background: ${props => props.theme.tabBarBG};
    height: ${props => props.tabBarStyle.height || '10vh'};
    width: 100%;
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: space-around;
    align-items: center;
    overflow-x: visible;
    overflow-y: visible;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const TriggerTitle = styled.p`
    margin: 0;
    padding: 0;
`

export const Trigger = styled.div`
    background: ${props => props.theme.tabBG};
    color: ${props => props.theme.fontColor};
    height: auto;
    min-height: fit-content;
    min-width: fit-content;
    margin-top: 1em;
    margin-right: 1em;
    margin-bottom: 1em;
    margin-left: 1em;
    padding: 1em 2em;
    border: 1px solid ${props => props.theme.tabBorder};
    border-radius: ${props => props.theme.tabBorderRadius === true ? '25px' : '0px'};
    display: flex;
    flex: ${props => props.tabStyle.grow === false ? '1 1 auto' : '0 1 auto' };
    justify-content: ${props => props.tabStyle.titleAlign};
    align-items: center;
    cursor: pointer;
    z-index: 0;
    &.active {
        background: ${props => props.theme.activeTabBG};
        color: ${props => props.theme.activeTabFontColor};
        overflow: visible;
        text-transform: uppercase;
        height: 100%;
        min-height: 2em;
        border-bottom: none;
        border-radius: ${props => props.theme.tabBorderRadius === true ? '0px' : '25px'};
        flex: 1 1 auto;
        justify-content: ${props => props.tabStyle.titleAlignActive};
        ${TriggerTitle} {
            color: ${props => props.theme.fontColor};
        }
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    transition: all .25s ease-in-out;
`

export const ActiveContainer = styled.div`
    background: ${props => props.theme.activeBG};
    padding: ${props => props.theme.activePadding};
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    justify-content: ${props => props.activeComponentStyle.justifyContent};
    align-items: ${props => props.activeComponentStyle.alignItems};
`