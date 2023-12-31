// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <>
        <div className="App">
          <div className="container py-5">
            <div className="row">
              {/* Judul App */}
              <div className="col-12 text-center">
                <h1 className='fw-bold'>FEEDUITEN APPS</h1>
                <hr className='w-75 mx-auto' />
                <h2 className='fw-bold'>Rp. 150.000, -</h2>
                <span className='title-sm'>Sisa uang kamu tersisa 75% lagi</span>
              </div>
            </div>

            {/* Card */}
            <div className="row mt-4">
              <div className="col-6">
                <div className="card-wrapper p-4">
                  <div className="icon-wrapper mb-1">
                    <i className="bi bi-wallet2"></i>
                  </div>
                  <span className="title-sm ">Pemasukan</span>
                  <h3 className='fw-bold'>Rp. 200.000, -</h3>
                  <span className="title-sm text-ungu fw-bold">50</span>
                  <span className="title-sm ">Transaksi</span>
                </div>
              </div>

              <div className="col-6">
                <div className="card-wrapper p-4">
                  <div className="icon-wrapper mb-1">
                    <i className="bi bi-cash-stack"></i>
                  </div>
                  <span className="title-sm ">Pemasukan</span>
                  <h3 className='fw-bold'>Rp. 200.000, -</h3>
                  <span className="title-sm text-ungu fw-bold">50</span>
                  <span className="title-sm ">Transaksi</span>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h4>Ringkasa Transaksi</h4>
                <div className="wrapper-button d-flex">
                  <button className='button btn-ungu px-3 py-2 me-2'>
                    Pemasukan <i class="bi bi-plus-circle-fill"></i>
                  </button>
                  <button className='button btn-pink px-3 py-2'>
                    Pengeluaran <i class="bi bi-dash-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="icon-wrapper">
                    <i className="bi bi-wallet2"></i>
                  </div>

                  <div className="transaction ms-3 d-flex flex-column">
                    <h6 >Menerima Gaji</h6>
                    <span className="title-sm"> 1 July 2022</span>
                  </div>

                </div>
                  <h5 className="text-money-in">Rp.1000.000</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default App;
