import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import styles from '../styles/Footer.module.css'; // Import the CSS file



const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-muted mt-3"
      style={{ backgroundColor: "#655DBB", zIndex: 10, position: "relative", paddingTop: "20px", width: "100%" }}
    >

      <Container>
        <Row className="mt-3">
          <Col lg={3} sm={12} className="mb-2">
            <a href="/" className="text-white h2" style={{ textDecoration: 'none' }}>
              AniSphere
            </a>
            <p className="mt-1 text-white">
              © 2023 Copyright:
              {' '}
              <a href="/" className="text-white">
                AniSphere.com
              </a>
            </p>
          </Col>
          <Col lg={1} sm={6} className="mb-2">
            <h6 className="text-uppercase text-white fw-semibold mb-2">
              ข้อมูล
            </h6>
            <ul className="list-unstyled mb-4">
              <li><a className="text-white-50" href="#">เกี่ยวกับ</a></li>
              <li><a className="text-white-50" href="#">ติดต่อ</a></li>
              <li><a className="text-white-50" href="#">คำสั่งซื้อ</a></li>
            </ul>
          </Col>
          <Col lg={2} sm={6} className="mb-2">
            <h6 className="text-uppercase text-white fw-semibold mb-2">
              Social Media
            </h6>
            <ul className="list-unstyled mb-4">
              <li><a className="text-white-50" href="#">Facebook</a></li>
              <li><a className="text-white-50" href="#">Instagram</a></li>
              <li><a className="text-white-50" href="#">Twitter</a></li>
            </ul>
          </Col>
          <Col lg={3} sm={12} className="mb-2">
            <h6 className="text-uppercase text-white fw-semibold mb-2">แจ้งเตือน</h6>
            <p className="text-white">ให้เราส่งอีเมลหาคุณเมื่อมีโปรโมชั่น และสินค้าใหม่เพิ่มเข้าคลัง</p>
            <div className={`input-group mb-3 col-auto ${styles['input-group']}`}>
              <input type="email" className="form-control form-control-sm border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
              
            </div>
            <button className="btn btn-light border shadow-0 rounded-pill" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                เข้าร่วม
              </button>
          </Col>
          <Col lg={3} sm={12} className="mb-2">
            <h6 className="text-uppercase text-white fw-semibold mb-2">สถานที่</h6>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.8669806330306!2d100.61506021350546!3d14.039551812069982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2801cc4ec2aff%3A0xbfec6d0816ab0b14!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiB4Lij4Li44LiH4LmA4LiX4Lie!5e0!3m2!1sth!2sth!4v1681585366732!5m2!1sth!2sth" width="100%" height="" style={{ border: '0', borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>
      <Container className="text-center text-md-start pt-4 pb-4">
        <p>2022 AniSphere All rights reserverd</p>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
          </p>
      </Container>
    </footer>
  );
};

export default Footer;