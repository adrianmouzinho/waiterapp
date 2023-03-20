import { useState } from 'react';
import { toast } from 'react-toastify';

import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalOpen(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedOrder(null);
  }

  async function handleChageOrderStatus() {
    try {
      setIsLoading(true);

      const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

      await api.patch(`/orders/${selectedOrder?._id}`, { status });

      toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);

      onChangeOrderStatus(selectedOrder!._id, status);
      setIsLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCancelOrder() {
    try {
      setIsLoading(true);

      await api.delete(`/orders/${selectedOrder?._id}`);

      toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);

      onCancelOrder(selectedOrder!._id);
      setIsLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Board>
      <OrderModal
        visible={isModalOpen}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChageOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button key={order._id} type="button" onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} {order.products.length > 1 ? 'itens' : 'item'}</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
