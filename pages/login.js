import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Login = () => {
  return (
    <section className="py-5" style={{ marginTop: '60px' }}>
      <div className="container h-100">
        <div className="row">
          <div className="col-12 px-3">
            
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2">
                    <p className="text-center mb-5 mx-1 mx-md-4 mt-4 h1">
                      เข้าสู่ระบบ
                    </p>
                    <form
                      className="mx-1 mx-md-4 needs-validation"
                      noValidate
                      action="http://localhost:3000/"
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email">
                            อีเมล
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            required
                          />
                          <div className="invalid-feedback">
                            โปรดกรอกอีเมล
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="pass">
                            รหัสผ่าน
                          </label>
                          <input
                            type="password"
                            id="pass"
                            className="form-control"
                            required
                          />
                          <div className="invalid-feedback">
                            โปรดกรอกรหัสผ่าน
                          </div>
                        </div>
                      </div>

                      <div className="form-check d-flex mb-3">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="remember"
                        />
                        <label className="form-check-label" htmlFor="remember">
                          จดจำรหัสผ่าน
                        </label>
                      </div>

                      <div className="d-flex mb-3 mb-lg-4 justify-content-center">
                        <button
                          id="btnlogin"
                          type="submit"
                          className="btn btn-purple w-100 btn-lg"
                        >
                          เข้าสู่ระบบ
                        </button>
                      </div>
                      <div className="d-flex mb-3 mb-lg-4 justify-content-center">
                        <a className="text-secondary" href="/product/register">
                          สมัครสมาชิก
                        </a>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center w-50">
                    <img
                      src="\logo-02.ico"
                      className="img-fluid"
                      alt="Logo image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

