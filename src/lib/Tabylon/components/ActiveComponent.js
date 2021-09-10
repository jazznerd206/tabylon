import React, { useState, useEffect } from 'react'
import { ActiveContainer } from '../tabylon.layout';

function ActiveComponent({activeComponentStyle, activeItem}) {
    return (
        <ActiveContainer activeComponentStyle={activeComponentStyle}>
            {activeItem.data}
        </ActiveContainer>
    )
}

ActiveComponent.propTypes = {

}

ActiveComponent.defaultProps = {
    
}

export default ActiveComponent
