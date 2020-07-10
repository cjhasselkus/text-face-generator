import styled, { css } from 'styled-components'
import { COLORS, FONTS } from './styleVars'
import { darken, lighten, rgba } from 'polished'

export const Content = styled.div`
   height:100vh;
   width:100%;
   overflow:hidden;
   background-color: ${COLORS.offwhite};
`

export const Container = styled.div`
  width: 50vw;
  height: 500px;
  margin: auto;
  margin-top: 100px;
`

export const Box = styled.div`
  background: #fff;
  box-shadow: 5px 5px 20px rgba(113, 113, 113, 0.1);
  border-radius: 5px;
  padding: 60px 40px 40px 40px;
`

export const Title = styled.span`
  font: ${FONTS.title};
  text-transform: uppercase;
  color: ${(props) => (props.color)};
  letter-spacing: 3px;
}
`

export const Subtitle = styled.div`
   font: ${FONTS.subtitle};
   text-transform: uppercase;
   letter-spacing: 3px;
   color: ${COLORS.gray.dark};
   overflow: hidden;

   &::after {
      content:"";
      display: inline-block;
      height: 0.5em;
      vertical-align: bottom;
      width: 100%;
      margin-right: -100%;
      margin-left: 10px;
      border-top: 0.01vw solid ${COLORS.gray.light};
    }
`

export const Display = styled.div`
  font: ${FONTS.face.large};
  color: ${COLORS.black};
  height: 200px;
  line-height: 200px;
  text-align: center;
  padding-top: 25px;

  -moz-user-select: all;
	-webkit-user-select: all;
	-ms-user-select: all;
	user-select: all;

  &::selection {
  	background: ${lighten(0.3, COLORS.gray.dark)};
  	color: #ffffff;
  }
`
