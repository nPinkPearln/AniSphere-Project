import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const About = () => {
  return (
    <section>
      <div
        className="container-fluid py-1"
        style={{
          marginTop: 60,
          backgroundImage: 'url(https://wallpapercave.com/wp/wp5250027.jpg)',
        }}
      >
        <div className="col-12 py-4">
        <div className="row">
          <img
            className="rounded-3 w-50 mx-auto"
            alt="coverpic"
            src="/logo-01.ico"
          />
        </div>
        </div>
      </div>
      <div className="container-fluid py-3" style={{ marginTop: 60 }}>
        <div className="container">
          <div className="row align-items-center">
            <h2 className="pt-2" style={{ color: '#655DBB' }}>
              เกี่ยวกับ
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 py-4" style={{ marginBottom: 60 }}>
            <p>
              พวกเรามีความชื่นชอบในการดูอนิเมะเป็นอย่างมาก และรับรู้ถึงความต้องการของผู้คนที่มีความสนใจในอนิเมะ
              ซึ่งเป็นแรงบันดาลใจในการเปิดร้านขายอนิเมะ
            </p>
            <br />
            <p>
              พวกเราวางแผนการทำธุรกิจและการจัดการร้าน โดยคิดค้นหาช่องทางในการเชื่อมโยงกับผู้จัดจำหน่ายที่มีชื่อเสียงในการซื้อสินค้าอนิเมะที่มีคุณภาพ
              และรวบรวมสินค้าในร้านอย่างมีความหลากหลาย เพื่อให้ลูกค้าสามารถเลือกซื้อสินค้าได้อย่างหลากหลาย
            </p>
            <br />
            <p>
              พวกเราจะคอยอัปเดตข่าวสารตลอดเวลา เพื่อติดตามความสนใจของลูกค้าและสินค้าที่เป็นที่นิยม
              อย่างไรก็ตาม ด้วยความพยายามและความสามารถในการจัดการร้านออนไลน์ของเราจะทำอย่างม
                ีประสิทธิภาพ และเป็นที่รู้จักและเป็นที่นิยมในหมู่ผู้คน
            </p>
          </div>
      </div>
    </div>
  </section>
);
};

export default About;
