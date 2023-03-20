import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style="light" backgroundColor="#D73035" />

      <Container>
        <CheckCircle />

        <Text size={20} weight="600" color="#FFF" style={{ marginTop: 12 }}>Pedido confirmado</Text>

        <Text color="#FFF" opacity={0.9}>O pedido já entrou na fila de produção!</Text>

        <OkButton onPress={onOk}>
          <Text weight="600" color="#D73035">OK</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
