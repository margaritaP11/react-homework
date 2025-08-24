import Order from "./Order";

const OrderStatus = ({ orderItems }) => {
  return (
    <div>
      {orderItems &&
        orderItems.map((order, index) => (
          <Order key={index} orderId={order.orderId} status={order.status} />
        ))}
    </div>
  );
};
export default OrderStatus;
