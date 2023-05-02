import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/CustomNavbar.module.css';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const CustomNavbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: '#655DBB' }}>
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo-01.ico" alt="Logo-Anisphere" height="48" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggler" />
        <Navbar.Collapse id="navbarToggler">
          <Nav className="me-auto">
            <Nav.Link href="/">หน้าแรก</Nav.Link>
            <NavDropdown title="หมวดหมู่" id="nav-dropdown">
              <NavDropdown.Item className="me-auto" href="/all-products">หมวดหมู่ทั้งหมด</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="me-auto" href="/all-products">ฟิกเกอร์</NavDropdown.Item>
              <NavDropdown.Item className="me-auto" href="/all-products">พวงกุญแจ</NavDropdown.Item>
              <NavDropdown.Item className="me-auto" href="/all-products">หนังสือการ์ตูน</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">แนะนำสินค้า</Nav.Link>
            <Nav.Link href="#">โปรโมชั่น</Nav.Link>
            <Nav.Link href="#">พอยต์แลกของ</Nav.Link>
            <Nav.Link href="/about">เกี่ยวกับ</Nav.Link>
            <Nav.Link href="/contact">ติดต่อ</Nav.Link>
          </Nav>
          
          <Nav.Item className={styles.spaceRight}>
            <Button className={styles.cartButton} onClick={() => setShowCart(true)}>
              <AiOutlineShopping className="align-bottom" />
              <span>ตะกร้า</span>
              <span className="cart-item-qty">{totalQuantities}</span>
            </Button>
            
          </Nav.Item>
          <NavDropdown
            title={
              <div className={styles.dropdownTitle}>
                <span className="material-symbols-rounded align-bottom">
                  person
                </span>
                <span>บัญชี</span>
              </div>
            }
            id="nav-dropdown1"
          >
          
              <NavDropdown.Item className="me-auto" href="/all-products">บัญชี</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="me-auto" href="/login">เข้าสู่ระบบ</NavDropdown.Item>
              <NavDropdown.Item className="me-auto" href="/register">สมัครสมาชิก</NavDropdown.Item>
            </NavDropdown>
          {showCart && <Cart setShowCart={setShowCart} />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
