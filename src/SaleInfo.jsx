import React from "react";
import "./styles/SaleInfo.css";

// rerendering Sale report
const SaleReport = () => {
  return (
    <div className='sale-report'>
      <input type='checkbox' name='' id='' />
      <p style={{ color: "#0B63F8" }}>#AHGA68</p>
      <p>23/09/2022</p>
      <p>Jacob Marcus</p>
      <p>$100</p>
      <p>$000</p>
      <p>$000</p>
    </div>
  );
};
const SaleInfo = () => {
  const report = [];
  const total = 9;
  // looping
  for (let i = 0; i < total; i++) {
    report.push(<SaleReport key={i} />);
  }
  return (
    <>
      {/* Sale info  */}
      <div className='sale-head'>Sale Information</div>
      <div className='sale-info'>
        <div>
          <h2 className="sale-title">Customer</h2>
          <input
            className='sale-input'
            type='text'
            placeholder='Enter Customer Name'
            id=''
          />
        </div>
        <div>
          <h2 className="sale-title">Invoice Id</h2>
          <input
            className='sale-input'
            type='text'
            placeholder='Enter Invoice ID'
            id=''
          />
        </div>
        <div>
          <h2 className="sale-title">Start Date</h2>
          <input
            className='sale-input'
            type='text'
            placeholder='Start Date'
            id=''
          />
        </div>
        <div>
          <h2 className="sale-title">End date</h2>
          <input
            className='sale-input'
            type='text'
            placeholder='End Date'
            id=''
          />
        </div>
      </div>
      {/* log */}
      <div>
        <div className='sale-report-head'>
          <input type='checkbox' name='' id='' />
          <p>Invoice ID</p>
          <p>Date</p>
          <p>Customer</p>
          <p>Payable Amount</p>
          <p>Paid Amount</p>
          <p>Date</p>
        </div>
        <div>{report}</div>
      </div>
    </>
  );
};

export default SaleInfo;
