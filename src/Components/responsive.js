import { css } from 'styled-components';

export const i12 = (props) => {
  return css`
    @media only screen and (max-width: 390px) {
      ${props}
    }
  `;
};

export const tablete = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};
