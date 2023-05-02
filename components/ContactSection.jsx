// components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section style={{ marginTop: '60px' }}>
      <div
        className="container-fluid py-4"
        style={{
          marginTop: '60px',
          backgroundImage:
            'url(https://wallpapercave.com/wp/wp5250027.jpg)',
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

      <div className="container">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.8669806330306!2d100.61506021350546!3d14.039551812069982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2801cc4ec2aff%3A0xbfec6d0816ab0b14!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiB4Lij4Li44LiH4LmA4LiX4Lie!5e0!3m2!1sth!2sth!4v1681585366732!5m2!1sth!2sth"
              width="100%"
              height="400px"
              style={{ border: '0', borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-8 py-4">
            <h2 className="pt-2" style={{ color: '#655DBB' }}>
              AniSphere Bangkok University
            </h2>
            <br />
            <p>
              9/1 หมู่ 5 ถนนพหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง ปทุมธานี 12120
            </p>
            <br />
            <p>
              <strong>TEL:</strong> 090-216-2585
              <br />
              <strong>Open hours :</strong>
              <br />
              <strong>จันทร์ - พฤหัสบดี</strong> — 10:30 - 21:30น.
              <br />
              <strong>ศุกร์</strong> — 10:30 - 22:00น.
              <br />
              <strong>เสาร์ - อาทิตย์, วันหยุดนักขัตฤกษ์</strong> — 10:00 - 22:00น.
              <br />
            </p>
          </div>
          <div className="d-grid col-md-4 py-4">
            <button
              href=""
              type="button"
              className="btn btn-outline-primary"
            >
              <span className="material-symbols-rounded align-bottom">
                rocket_launch
              </span>
              Official Facebook
            </button>
            <br />
            <button
              href=""
              type="button"
              className="btn btn-outline-warning"
            >
              <span className="material-symbols-rounded align-bottom">
                rocket_launch
              </span>
              Official Instagram
            </button>
            <br />
            <button
              href=""
              type="button"
              className="btn btn-outline-info"
            >
              <span className="material-symbols-rounded align-bottom">
                rocket_launch
              </span>
              Official Twitter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
