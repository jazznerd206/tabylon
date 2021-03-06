import React, { useState, useEffect } from 'react'
import { ActiveContainer } from '../tabylon.layout.js';

function ActiveComponent({activeComponentStyle, activeItem, theme}) {
    
    return (
        <ActiveContainer activeComponentStyle={activeComponentStyle} theme={theme}>
            {activeItem.data}
        </ActiveContainer>
    )
}

ActiveComponent.propTypes = {

}

ActiveComponent.defaultProps = {
    
}

export default ActiveComponent
