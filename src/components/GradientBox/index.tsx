import styled, { css } from 'styled-components'

type GradientBoxProps = {
  align?: 'left' | 'right' | 'center'
}

const getDegAlignment = (val?: string) => {
  if (val === 'center') return '0deg'
  else if (val === 'right') return '-90deg'
  else if (val === 'left') return '90deg'
  return '0deg'
}

const GradientBox = styled.div<GradientBoxProps>`
  position: relative;
  background: ${(props) => css`linear-gradient(
    ${getDegAlignment(props.align)},
    var(--secondary-color) 40%,
    var(--tertiary-color) 60%
  )`};
`
GradientBox.defaultProps = {
  align: 'left',
}

export default GradientBox
