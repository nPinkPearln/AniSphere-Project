import React from 'react';
import Link from 'next/link';

import { client } from '../../lib/client';
import { Product, Navbar as CustomNavbar } from '../../components';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllProducts = ({ products }) => (
  <div>
    <CustomNavbar />

    <div className="products-heading">
      <h2>สินค้าทั้งหมด</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default AllProducts;
