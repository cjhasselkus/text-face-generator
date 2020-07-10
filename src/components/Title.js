import React from 'react'
import * as S from './styles/AppStyles'
import { COLORS } from './styles/styleVars'

const colors = [
  COLORS.pink,
  COLORS.orange,
  COLORS.teal,
  COLORS.gray.medium,
  COLORS.yellow,
  COLORS.green,
]

function EmotionForm(props) {
  return (
    props.text.split('').map((letter, i) => (
      <S.Title key={i} color={colors[i % colors.length]}>{letter}</S.Title>
    ))
  )
}

export default EmotionForm
