import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        height: 24px;
        width: 24px;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center; /* usar esse ao inves de usar justfy-content e align-content. ja faz as duas funcoes */

  margin: -200px 0;
  width: 100%;

  form {
    margin: 64px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 16px;
      font-size: 20px;
      text-align: left;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 20px;
  position: relative;

  align-self: center;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 36px;
    height: 36px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.4, '#ff9000')};
    }
  }
`;
