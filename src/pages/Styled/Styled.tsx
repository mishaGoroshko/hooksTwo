import React from 'react';
import styled from 'styled-components'
import {Title} from './Title';
import {Flex} from './Flex';

const Container = styled.div`
  font-family: Consolas, serif;
  background: lightgray;
  border-radius: 10px;
  width: 80%;
  min-height: 50vh;
`

const Textarea = styled.textarea`
  color: green;
  font-size: 24px;
  background-color: #000;
  width: 90%;
  height: 50vh;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`

type StyledType = {}

export const Styled: React.FC<StyledType> = () => {
    return (
        <Container>
            <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                <Title color='red'>123</Title>
                <Textarea/>
            </Flex>
        </Container>
    );
}