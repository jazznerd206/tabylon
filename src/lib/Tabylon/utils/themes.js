import React from "react";
import { ThemeProvider } from "styled-components";

const Theme = ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

export const themes = {
    standard: {
        name: 'standard',
        border: '.5px solid',
        containerBorder: true,
        containerBG: 'rgba(255,255,255,.25)',
        fontColor: 'rgba(0,0,0)',
        fontSize: '2em',
        fontSizeActive: '3em',
        tabBarBG: 'rgba(100,100,100)',
        tabBorder: true,
        tabBorderColor: 'rgba(255,255,255,.25)',
        tabBorderRadius: true,
        tabBG: 'rgba(255,255,255)',
        activeTabBorder: true,
        activeTabFontColor: 'rgba(255,255,255)',
        activeTabBG: 'rgba(100,100,100)',
        activeBG: 'rgba(100,100,100)',
        activePadding: 0,
        transitions: true,
        shadow: false,
    },
    light: {
        name: 'light',
        border: '.5px solid',
        containerBorder: false,
        containerBG: 'rgba(255,255,255)',
        fontColor: 'rgba(0,0,0)',
        fontSize: '2em',
        fontSizeActive: '3em',
        tabBarBG: 'rgba(255,255,255)',
        tabBorder: true,
        tabBorderColor: 'rgba(255,255,255,.25)',
        tabBorderRadius: false,
        tabBG: 'rgba(0,0,0,.1)',
        activeTabBorder: true,
        activeTabFontColor: 'rgba(255,255,255,.25)',
        activeTabBG: 'rgba(255,255,255)',
        activeBG: 'rgba(255,255,255)',
        activePadding: 0,
        transitions: true,
        shadow: true,
    },
    browser: {
        name: 'browser',
        border: '.5px solid',
        containerRadius: '25px',
        containerBorder: true,
        fontColor: 'rgba(0,0,0)',
        fontSize: '1em',
        fontSizeActive: '1.2em',
        tabBarBG: 'rgba(238,238,238)',
        tabBorder: false,
        tabBorderColor: 'rgba(255,255,255,.25)',
        tabBorderRadius: true,
        tabBG: 'rgba(255,255,255)',
        activeTabFontColor: 'rgba(0,0,0)',
        activeTabBG: 'rgba(238,238,238)',
        activeBG: 'rgba(238,238,238)',
        activeTabBorder: true,
        tabAlign: 'flex-start',
        activePadding: 0,
        transitions: false,
        shadow: true
    },
}