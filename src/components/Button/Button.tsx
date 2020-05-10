import styled, { css } from 'styled-components';
import { getContrast } from 'polished';
import defaultTheme from '../../themes/default.theme';

interface ButtonType {
  variant?: 'primary' | 'secondary'
  inverted?: boolean
}

const getForegroundColor = (
  backgroundColor: string,
  color1: string,
  color2: string,
) => {
  const contrast1 = getContrast(color1, backgroundColor);
  const contrast2 = getContrast(color2, backgroundColor);
  if (contrast1 > contrast2) {
    return color1;
  }
  return color2;
};

const Button = styled.button<ButtonType>(
  ({ theme, variant = 'primary', inverted }) => {
    const { palette } = theme;
    const { light, dark } = palette;
    const foreground = inverted
      ? palette[variant]
      : getForegroundColor(palette[variant], light, dark);
    const background = inverted ? 'transparent' : palette[variant];

    return css`
    background-color: ${background};
    border: ${theme.borderWidth} solid ${inverted ? foreground : background};
    color: ${foreground};
    font-size: 1em;
    font-weight: 600;
    outline: none;
    padding calc(1em * 0.5) 1em;
    text-transform: uppercase;

    &:focus {
      text-decoration: underline;
    }
  `;
  },
);

Button.defaultProps = {
  theme: defaultTheme,
  variant: 'primary',
};

export default Button;
