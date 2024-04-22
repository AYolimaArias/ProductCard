/* eslint-disable react/prop-types */
export default function CartInformation({ name, price, total }) {
  return (
    <div className="information">
      <p className="total-product">
        {name}(${price}x) ${total}
      </p>
    </div>
  );
}
