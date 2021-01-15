import styled from "styled-components";

const sizeSocialButton = 60;
const ExternalLinkSocialButton = styled.a.attrs({ target: "_blank" })`
  width: ${sizeSocialButton}px;
  height: ${sizeSocialButton}px;
  color:var(--third-color);
  font-size:1.4em;
  border-radius: 100%;
  display: flex;
  border:2px solid var(--secondary-color);
  align-items: center;
  justify-content: center;
  margin:20px 0;
  transition:transform .3s;
  will-change:transform;
  z-index:10;
  &:hover {
    transform:scale(1.2);
  }
`
export default ExternalLinkSocialButton;