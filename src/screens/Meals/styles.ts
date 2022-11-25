import styled from "styled-components/native";

type Props = {
  width: number
  direction: string
}

export const Container = styled.View<Props>`
  width: ${({ width })=> width ? `${width}%` : 'auto'};
  justify-content: space-between;
  flex-direction: ${({direction})=> direction ? direction : 'column' };
  
`

export const Content = styled.View<Props>`
  flex:1;
  flex-direction: column ; 
`