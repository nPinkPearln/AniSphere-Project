import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import styles from '../../styles/ProductDetails.module.css';




const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const [miniImageIndex, setMiniImageIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  const prevMiniImage = () => {
    setMiniImageIndex((prevIndex) => prevIndex - 1);
  }

  const nextMiniImage = () => {
    setMiniImageIndex((prevIndex) => prevIndex + 1);
  }

  const visibleImages = image?.slice(miniImageIndex, miniImageIndex + 4);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container d-flex align-items-center">
        {miniImageIndex > 0 && (
          <button
          className={`btn btn-sm btn-outline-secondary ms-2 ${styles.arrowButton}`}
          onClick={prevMiniImage}
          style={{ width: '64px', height: '64px', display: miniImageIndex > 0 ? 'block' : 'none' }}
        >
          <AiOutlineLeft />
        </button>
                )}
        {visibleImages.map((item, i) => (
          <img 
            key={i}
            src={urlFor(item)}
            className={i === index ? 'small-image selected-image' : 'small-image'}
            onMouseEnter={() => setIndex(miniImageIndex + i)}
          />
        ))}
        {miniImageIndex + 5 < image?.length && (
          <button
  className={`btn btn-sm btn-outline-secondary ms-2 ${styles.arrowButton}`}
  onClick={nextMiniImage}
  style={{ width: '64px', height: '64px', display: miniImageIndex + 4 < image?.length ? 'block' : 'none' }}
>
  <AiOutlineRight />
</button>
        )}
      </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>รายละเอียด: </h4>
          <p>{details}</p>
          <p className="price">{price} บาท</p>
          <div className="quantity">
            <h3>จำนวน:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>เพิ่มลงตะกร้า</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>ซื้อเลย</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>สินค้าเพิ่มเติม</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails