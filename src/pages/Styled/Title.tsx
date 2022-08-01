import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h3`
  color: ${props => props.color || 'white'};
  font-size: 24px;
`

type TitleType = {
    children: string
    color: string
}

export const Title: React.FC<TitleType> = (props) => {
    return (
        <StyledTitle {...props}/>
    );
}