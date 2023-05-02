import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section style={{ marginTop: '60px' }}>
      <div
        className="container-fluid py-4"
        style={{
          marginTop: '60px',
          backgroundImage: 'url(https://wallpapercave.com/wp/wp5250027.jpg)',
        }}
      >
        <div className="container">
          <div className="row">
            <img
              className="rounded-3 w-50 mx-auto"
              alt="coverpic"
              src="img/icons/logo-01.png"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid py-3">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="pt-2" style={{ color: '#655DBB' }}>
              ติดต่อ
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
