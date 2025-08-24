import React from "react";

const Order = ({ orderId, status }) => {
  return (
    <div>
     
      <strong>Заказ #{orderId}:</strong> - {status}
    </div>
  );
};
export default Order;
