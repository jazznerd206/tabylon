import React, { useState, useEffect } from 'react'
import { TitleText } from '../../tabylon.layout';

function Title({children, size}) {
    return (
        <TitleText size={size}>
            {children}
        </TitleText>
    )
}

export default Title;
