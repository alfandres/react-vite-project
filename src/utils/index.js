
  // Función para calcular el precio total y contar repeticiones
  function getTotalPrice(cartItems, products) {
    let totalPrice = 0;
  
    for (const productId in cartItems) {
      const quantity = cartItems[productId];
      const product = products.find((item) => item.id === parseInt(productId));
      if (product) {
        totalPrice += product.price * quantity;
      }
    }
  
    return totalPrice;
  }
  
  export default getTotalPrice;
  
