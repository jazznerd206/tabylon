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
    justify-content: ${props => props.theme.name === 'browser' ? props.tabBarStyle.justifyBrowser : props.tabBarStyle.justify };
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
    transition: ${props => props.theme.transitions === true ? `all .25s ease-in-out` : `all 0s ease-in-out`};
    flex: ${props => props.tabStyle.grow === false ? '1 1 auto' : '0 1 auto' };
    justify-content: ${props => props.theme.name === 'browser' ? 'flex-start' : 'flex-end'};
    background: ${props => props.theme.tabBG};
    color: ${props => props.theme.fontColor};
    border: .5px solid;
    border-top-left-radius: ${props => props.theme.name === 'light' ? '25px' : '0px'};
    border-top-right-radius: ${props => props.theme.name === 'light' ? '25px' : '0px'};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    height: ${props => props.theme.name === 'browser' ? '30%' : 'auto'};
    min-height: fit-content;
    min-width: fit-content;
    /* height: 100%; */
    max-width: ${props => props.theme.name === 'browser' ? '250px' : null};
    margin-top: ${props => props.theme.name === 'browser' ? '0' : '0'};
    margin-right: ${props => props.theme.name === 'browser' ? '0' : '0'};
    margin-bottom: ${props => props.theme.name === 'browser' ? '0' : '0'};
    margin-left: ${props => props.theme.name === 'browser' ? '0' : '0'};
    padding: 1em 2em;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 0;
    &.active {
        justify-content: ${props => props.tabStyle.titleAlignActive};
        background: ${props => props.theme.activeTabBG};
        color: ${props => props.theme.activeTabFontColor};
        height: 105%;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: ${props => props.theme.name === 'browser' ? '0px' : '25px'};
        border-bottom-right-radius: ${props => props.theme.name === 'browser' ? '0px' : '25px'};
        text-transform: uppercase;
        flex: 1 1 auto;
        overflow: visible;
        ${TriggerTitle} {
            color: ${props => props.theme.fontColor};
        }
        &:first-child {
            margin-left: 0;
            border-bottom-left-radius: 0px;
        }
        &:last-child {
            margin-right: 0;
            border-bottom-right-radius: 0px;
        }
    }
`

export const ActiveContainer = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: ${props => props.activeComponentStyle.justifyContent};
    align-items: ${props => props.activeComponentStyle.alignItems};
    background: ${props => props.theme.activeBG};
    padding: ${props => props.theme.activePadding};
    height: 100%;
    width: 100%;
`