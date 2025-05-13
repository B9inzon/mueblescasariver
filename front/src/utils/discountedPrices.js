export default function discountedPrice(price, discount = 0.15) {
  if (typeof price !== "number" || isNaN(price)) {
    throw new Error("El precio debe ser un número válido");
  }

  if (typeof discount !== "number" || discount < 0 || discount > 1) {
    throw new Error("El descuento debe ser un número entre 0 y 1");
  }

  return price * (1 - discount);
}
