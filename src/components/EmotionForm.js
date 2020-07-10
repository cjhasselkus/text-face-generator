import React from 'react'
import * as S from './styles/EmotionFormStyles'

function EmotionForm(props) {
  return (
    <S.FormGroup onSubmit={props.onSubmit}>
      <S.Input
        placeholder={'happy'}
        value={props.value}
        onChange={props.onChange}/>
      <S.SubmitButton type='submit'>Go</S.SubmitButton>
    </S.FormGroup>
  )
}

export default EmotionForm
