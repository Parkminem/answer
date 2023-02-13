import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@/assets/styles/font.css';

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
button {
  font-family: 'Noto Sans KR',sans-serif, '맑은 고딕', 'Malgun Gothic', sans-serif, '돋움', 'Dotum', '굴림', 'Gulim';
}
body {
  font-style:normal;
  font-size:13px; 
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
span, p, h1, h2, h3, h4, h5, h6, strong {
  letter-spacing: -0.04em;
}
`;

export default GlobalStyles;
