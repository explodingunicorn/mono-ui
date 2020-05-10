import 'styled-components';
import Theme from './src/themes/theme.type';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
