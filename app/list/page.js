export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2>Products</h2>
      {상품.map((a) => {
        return (
          <div className="food">
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
