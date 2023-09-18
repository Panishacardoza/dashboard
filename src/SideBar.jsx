import React from "react";
import "./styles/SideBar.css";
import DashboardLogo from "./assets/Dashboard.svg";
import LabTestLogo from "./assets/LabTest.svg";
import AppointmentLogo from "./assets/Appointment.svg";
import MedicineOrderLogo from "./assets/MedicineOrder.svg";
import SettingLogo from "./assets/Setting.svg";
import PaymentLogo from "./assets/Payment.svg";
import HelpLogo from "./assets/Help.svg";
const SideBar = () => {
  return (
    <>
      {/* Logo */}
      <div className='sidebar'>
        <h1 className='logo'>Medico Sale</h1>
        <div>
          <img className='icon' src={DashboardLogo} alt='dasahboard' />
          <a>Dashboard</a>
        </div>
        <div>
          <img className='icon' src={LabTestLogo} alt='lab-test' />
          <a>Lab Test</a>
        </div>
        <div>
          <img className='icon' src={AppointmentLogo} alt='' />
          <a>Appointment</a>
        </div>
        <div>
          <img className='icon' src={MedicineOrderLogo} alt='' />
          <a>Medicine Order</a>
        </div>
        <div>
          <img className='icon' src={PaymentLogo} alt='' />
          <a>Payment</a>
        </div>
        <div>
          <img className='icon' src={SettingLogo} alt='' />
          <a>Settings</a>
        </div>
        <div className='help'>
          <img className='icon' src={HelpLogo} alt='' />
          <a>Help</a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
