import React from "react";
import { ThemeProvider } from "styled-components";


const Theme = ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const themes = {
    standard: {
        name: 'standard',
        border: '.5px solid',
        containerBG: 'rgba(255,255,255,.25)',
        fontColor: 'rgba(0,0,0)',
        tabBarBG: 'rgba(255,255,255)',
        tabBorder: 'rgba(255,255,255,.25)',
        tabBorderRadius: false,
        tabBG: 'rgba(255,255,255)',
        activeTabFontColor: 'rgba(255,255,255)',
        activeTabBG: 'rgba(100,100,100)',
        activeBG: 'rgba(100,100,100)',
        activePadding: 0,
        transitions: true,
    },
    light: {
        name: 'light',
        border: '.5px solid',
        containerBG: 'rgba(255,255,255)',
        fontColor: 'rgba(0,0,0)',
        tabBarBG: 'rgba(255,255,255,.1)',
        tabBorder: 'rgba(255,255,255,.25)',
        tabBorderRadius: true,
        tabBG: 'rgba(0,0,0,.1)',
        activeTabFontColor: 'rgba(255,255,255,.25)',
        activeTabBG: 'rgba(255,255,255)',
        activeBG: 'rgba(255,255,255)',
        activePadding: 0,
        transitions: true,
    },
    browser: {
        name: 'browser',
        border: '.5px solid',
        containerRadius: 25,
        fontColor: 'rgba(0,0,0)',
        tabBarBG: 'rgba(255,255,255,.1)',
        tabBorder: 'rgba(255,255,255,.25)',
        tabBorderRadius: true,
        tabBG: 'rgba(255,255,255)',
        activeTabFontColor: 'rgba(255,255,255,.25)',
        activeTabBG: 'rgba(0,0,0,.1)',
        activeBG: 'rgba(0,0,0,.1)',
        tabAlign: 'flex-start',
        activePadding: 0,
        transitions: false,
    },
}