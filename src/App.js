import React from 'react';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import BT3DanLayout from './Components/BaiTapDanLayout/BT3DanLayout'
import EventBinding from './EventBinding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import ExampleGlasses from './RenderWithState/ExampleGlasses';
import Demoprops from './Props/DemoProps';
import ExampleCard from './LiftingUpState/ExampleCard'
import BaiTapGioHang from './BaiTapRedux/BaiTapGioHang/BaiTapGioHang';
import GameBauCua from './GameBauCua';
import GameTaiXiu from './GameTaiXiu';
import FormValidation from './FormValidation';
import QuanLySinhVien from './FormValidation/QuanLySinhVien';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBinding /> */}
      {/* <BT3DanLayout /> */}
      {/* <EventBinding /> */}
      {/* <RenderWithState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <ExampleGlasses /> */}
      {/* <Demoprops /> */}
      {/* <ExampleCard /> */}
      {/* <BaiTapGioHang /> */}
      {/* <GameBauCua /> */}
      {/* <GameTaiXiu /> */}
      {/* <FormValidation /> */}
      <QuanLySinhVien />
    </div>
  );
}

export default App;
