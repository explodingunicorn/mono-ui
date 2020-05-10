import styled, { css } from 'styled-components';
import Button from '../Button/Button';

interface ButtonGroupType {
  variant?: 'spaced' | 'compact'
}

const ButtonGroup = styled.div<ButtonGroupType>(({ variant }) => {
  return css`
    ${Button} {
      margin-left: ${variant === 'spaced' ? 'calc(1em/2)' : 0};

      ${variant === 'compact' && css`
        &:not(:last-child) {
          border-right: none;
        }
      `}
    }
  `;
});

export default ButtonGroup;