import styled from "styled-components";

export const Box = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Container = styled.div`
    margin: ${props => props.margin};
    padding: 0;
    background: ${props => props.theme.containerBG === undefined ? 'none': props.theme.containerBG};
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    border: ${props => props.theme.containerBorder === true ? props.theme.border : 'none'};
`

export const TabBar = styled.div`
    background: ${props => props.theme.tabBarBG};
    height: ${props => props.tabBarStyle.height || '5em'};
    width: 100%;
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
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
    font-size: ${props => props.size};
`

export const Trigger = styled.div`
    transition: ${props => props.theme.transitions === true ? `all .25s ease-in-out` : `all 0s ease-in-out`};
    flex: ${props => props.tabStyle.grow === false ? '1 1 auto' : '0 1 auto' };
    justify-content: ${props => props.theme.name === 'browser' ? 'space-between' : 'space-around'};
    background: ${props => props.theme.tabBG};
    color: ${props => props.theme.fontColor};
    border: ${props => props.theme.tabBorder === true ? `.5px solid` : 'none'};
    border-top-left-radius: ${props => props.theme.name === 'light' ? '25px' : '0px'};
    border-top-right-radius: ${props => props.theme.name === 'light' ? '25px' : '0px'};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    /* box-shadow: 2px -2px 5px ${props => props.theme.fontColor}; */
    -moz-box-shadow: ${props => props.theme.shadow === true ? '0 4px 4px rgba(0, 0, 0, 0.4)' : 'none'};
    -webkit-box-shadow: ${props => props.theme.shadow === true ? '0 4px 4px rgba(0, 0, 0, 0.4)' : 'none'};
    box-shadow: ${props => props.theme.shadow === true ? '0 4px 4px rgba(0, 0, 0, 0.4)' : 'none'};
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
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    z-index: 0;
    &.active {
        justify-content: ${props => props.tabStyle.titleAlignActive};
        background: ${props => props.theme.activeTabBG};
        color: ${props => props.theme.activeTabFontColor};
        height: ${props => props.theme.name === 'standard' ? '105%' : '100%'};
        border: ${props => props.theme.tabBorder === true ? '.5px solid black' : 'none'};
        /* border-left: ${props => props.theme.name === 'light' ? '.5px solid rgbs(0,0,0,.4)' : 'none'}; */
        /* border-right: ${props => props.theme.name === 'light' ? '.5px solid rgbs(0,0,0,.4)' : 'none'}; */
        border-bottom: none;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: ${props => props.theme.tabBorderRadius === true ? '25px' : '0px'};
        border-bottom-right-radius: ${props => props.theme.tabBorderRadius === true ? '25px' : '0px'};
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        font-variant: small-caps;
        flex: 1 1 auto;
        overflow: visible;
        ${TriggerTitle} {
            color: ${props => props.theme.fontColor};
        }
        &:first-child {
            margin-left: 0;
            border-left: none;
            border-bottom-left-radius: 0px;
        }
        &:last-child {
            margin-right: 0;
            border-right: none;
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

export const TabContainer = styled.div`
    min-height: fit-content;
    min-width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex: ${props => props.tabStyle.grow === false ? '1 1 auto' : '0 1 auto' };
    color: ${props => props.theme.activeTabFontColor};
    padding: 1em 2em;
    color: ${props => props.theme.activeTabFontColor};
    height: ${props => props.theme.name !== 'standard' ? '105%' : '100%'};
    border: ${props => props.theme.tabBorder !== true ? '.5px solid black' : 'none'};
    &:first-child {
        margin-left: 0;
        border-left: none;
        border-bottom-left-radius: 0px;
    }
    &:last-child {
        margin-right: 0;
        border-right: none;
        border-bottom-right-radius: 0px;
    }
    
`

export const TitleText = styled.span`
    font-size: ${props => props.theme.fontSize};
`

export const SubTitleText = styled.span`
    text-transform: none;
    font-variant: small-caps;
    font-size: ${props => props.theme.fontSizeActive};
`

export const TabLink = styled.a`
    text-transform: lowercase;
    font-size: .75em;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: ${props => props.theme.fontColor};
    cursor: pointer;
    &:hover {
        border-bottom: .5px solid;
    }
`

export const CompHolder = styled.div`
    margin: 0;
    padding: 0;
`

export const ContentText = styled.span``