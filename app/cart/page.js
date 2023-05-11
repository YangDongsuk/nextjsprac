import { Hello } from "./data";
export default function Cart() {
  let btncolor = "blue";
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Hello />
      <CartItem />
      <CartItem />
      <CartItem />
      <RedBtn btncolor={btncolor} />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function RedBtn(props) {
  return <button style={{ color: props.btncolor }}>redBtn</button>;
}
