import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  const truncatedName = name.length > 20 ? `${name.slice(0, 20)}...` : name;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {truncatedName}
          </p>
          <p className="product-price">{price} บาท</p>
        </div>
      </Link>
    </div>
  )
}

export default Product;
