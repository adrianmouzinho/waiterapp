import styled from 'styled-components';

export const Container = styled.header`
  background-color: #D73035;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.375rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }

    span {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 0.375rem;
    }
  }
`;
