import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      background: transparent;
      border: 0;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;


export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-itens {
    margin-top: 1rem;

    .item {
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      gap: 0.75rem;

      & + .item {
        margin-top: 1rem;
      }

      .image-item {
        width: 3rem;
        height: 2.5rem;
        border-radius: 0.375rem;
        background-color: aqua;
        overflow: hidden;

        img {
          height: 100%;
        }
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
      }

      .product-details {
        strong {
          display: block;
        }

        span {
          margin-top: 0.25rem;
          font-size: 0.875rem;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      font-size: 0.875rem;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background-color: #333;
    border-radius: 3rem;
    border: 0;
    color: #fff;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .secondary {
    color: #d73035;
    background: transparent;
    border: 0;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
  }
`;
