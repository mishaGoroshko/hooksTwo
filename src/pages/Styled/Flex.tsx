import React, {ReactElement, ReactNode} from 'react';
import styled from 'styled-components'

const StyledFlex = styled.div<FlexType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content:  ${props => props.justifyContent || 'stretch'};
  margin: ${({margin}) => margin || '0'};
`

type FlexType = {
    flexDirection?: string
    alignItems?: string
    justifyContent?: string
    margin?: string
    children: ReactNode
}

export const Flex: React.FC<FlexType> = (props) => {
    return (
        <StyledFlex {...props}/>
    );
}