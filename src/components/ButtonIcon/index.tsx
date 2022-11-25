import React from 'react'
import { Container, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string
  hasIcon?: boolean
  icon?: JSX.Element
  dark?: boolean
}

export function ButtonIcon({ title, icon, dark = true, hasIcon = false, ...rest }:Props ) {
  return (
    <Container 
      dark={dark} 
      {...rest}
    >
      {icon}
      <Title 
        dark={dark}  
        hasIcon={hasIcon}
      >
        {title}
      </Title>
    </Container>
  )
}