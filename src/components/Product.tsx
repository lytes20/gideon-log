type ProductProps = {
  title: string;
};

function Product({ title }: ProductProps) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default Product;
