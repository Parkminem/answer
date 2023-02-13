import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
  box-sizing: border-box;
}
body,
th,
td,
input,
select,
textarea,
button,
* {
	font-family: 'Noto Sans KR', '맑은 고딕', 'Malgun Gothic', sans-serif, '돋움', 'Dotum', '굴림', 'Gulim';
}
body {
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  cursor:pointer;
  background-color: transparent;
}
button, input {
  border: none; 
  outline:none
}
`;

export default GlobalStyles;
