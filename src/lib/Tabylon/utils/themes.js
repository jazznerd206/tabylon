import React from "react";
import { ThemeProvider } from "styled-components";


const Theme = ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const themes = {
    standard: {
        border: '.5px solid',
        fontColor: 'rgba(0,0,0)',
        activeTabFontColor: 'rgba(255,255,255)',
        containerBG: 'rgba(255,255,255,.25)',
        tabBarBG: 'rgba(255,255,255)',
        tabBG: 'rgba(255,255,255)',
        activeTabBG: 'rgba(100,100,100)',
        tabBorder: 'rgba(255,255,255,.25)',
        tabBorderRadius: false,
        activeBG: 'rgba(100,100,100)',
        activePadding: 0,
        transitions: true,
    },
    light: {
        fontColor: 'rgba(0,0,0)',
        activeTabFontColor: 'rgba(255,255,255)',
        containerBG: 'rgba(255,255,255)',
        tabBarBG: 'rgba(255,255,255)',
        tabBG: 'rgba(255,255,255)',
        activeTabBG: 'rgba(100,100,100)',
        tabBorder: 'rgba(255,255,255,.25)',
        tabBorderRadius: false,
        activeBG: 'rgba(100,100,100)',
        activePadding: 0,
        transitions: true,
    },
    browser: {

    },
}