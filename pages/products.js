import { useEffect, useState } from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';

const Products = () => {
  const { setProduct } = useStateContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "product"]`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setProduct(product);
  };

  return (
    <div className="products">
      {products.map((product) => (
        <Link key={product._id} href={`/product/${product.slug.current}`}>
          <div className="product-card" onClick={() => handleProductClick(product)}>
            <img src={urlFor(product.image[0])} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;