import { useEffect, useState } from "react";
import Product from "./Product";

type ProductSummary = {
  id: number;
  title: string;
};

function ProductsList() {
  const [products, setProducts] = useState<ProductSummary[]>([]);

  useEffect(() => {
    const handleFetchProducts = async () => {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    };

    handleFetchProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.id} title={product.title} />
      ))}
    </div>
  );
}

export default ProductsList;
