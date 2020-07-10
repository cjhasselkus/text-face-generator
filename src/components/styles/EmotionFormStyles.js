import styled from 'styled-components'
import { COLORS, FONTS } from './styleVars'
import { darken, lighten } from 'polished'

export const FormGroup = styled.form`
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
   display: block;
   flex: 7;
   height: 25px;
   padding: 15px;
   margin-top: 20px;
   border: none;
   border-radius: 2px;
   font: ${FONTS.body};
   color: ${COLORS.gray.dark};
   background: ${COLORS.gray.light};
   transition: all .25s cubic-bezier(.02, .01, .47, 1);
   ::placeholder {
     color: ${COLORS.gray.medium};
   }

   &:focus {
      outline: none;
      background: ${darken(0.01, COLORS.gray.light)};
      box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1),
                  inset 3px 3px 5px rgba(0, 0, 0, 0.08);

      ::placeholder {
        color: ${COLORS.grayMedium};
      }
   }
`

export const SubmitButton = styled.button`
  flex: 1;
  font: ${FONTS.label};
  margin: 20px 0 0 10px;
  border-radius: 2px;
  border: none;
  background-color: ${COLORS.teal};
  color: ${COLORS.white};
  text-transform: uppercase;
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  float: right;

  &:hover {
    background-color: ${darken(0.1, COLORS.teal)};
  }

  &:focus {
    outline: none;
  }
`
