import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>ขอบคุณสำหรับคำสั่งซื้อ!</h2>
        <p className="email-msg">ตรวจสอบ email สำหรับใบคำสั่งซื้อ</p>
        <p className="description">
          ถ้าคุณมีคำถาม ติดต่อ email
          <a className="email" href="mailto:anishpere.shop@hotmail.com">
          anishpere.shop@hotmail
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            ซื้อของต่อ
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success