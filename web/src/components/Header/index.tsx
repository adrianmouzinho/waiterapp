import logo from '../../assets/images/logo.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <span>Acompanhe os pedidos dos clientes</span>
        </div>

        <img src={logo} alt="Logo WAITERAPP" />
      </Content>
    </Container>
  );
}
