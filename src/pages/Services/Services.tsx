import React from "react";
import "./Services.css";
import {
  GlobalOutlined,
  FileZipOutlined,
  HistoryOutlined,
  DropboxOutlined,
} from "@ant-design/icons";

const Services = () => {
  return (
    <div className="section">
      <div className="service">Services</div>
      <div className="service1"> Check out the great services we offer</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="service_i">
          <GlobalOutlined />
        </div>
        <div className="service_txt">
          <b>Lorem Ipsum</b>
          <br></br>
          <br></br>
          Voluptatum deleniti atque<br></br> corrupti quos dolores et<br></br>{" "}
          quas molestias excepturi <br></br>sint occaecati cupiditate
        </div>
        <div className="service_i">
          <FileZipOutlined />
        </div>

        <div className="service_txt">
          <b>Sed ut perspiciatis</b>
          <br></br>
          <br></br>
          Duis aute irure dolor in<br></br> reprehenderit in voluptate <br></br>
          velit esse cillum dolore eu<br></br>fugiat nulla
        </div>

        <div className="service_i">
          <HistoryOutlined />
        </div>
        <div className="service_txt">
          <b>Magni Dolores</b>
          <br></br>
          <br></br>
          Excepteur sint occaecat <br></br>cupidatat non proident, sunt<br></br>{" "}
          in culpa qui officia deserunt<br></br> mollit anim
        </div>

        <div className="service_i">
          <DropboxOutlined />
        </div>
        <div className="service_txt">
          <b>Nemo Enim</b>
          <br></br>
          <br></br>
          At vero eos et accusamus et <br></br>iusto odio dignissimos<br></br>{" "}
          ducimus qui blanditiis <br></br>praesentium voluptatum
        </div>
      </div>
    </div>
  );
};

export default Services;
