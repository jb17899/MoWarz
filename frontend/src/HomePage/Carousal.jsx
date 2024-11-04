import React from "react";
export default function Carousal(props){
    if(props.keys=="1"){
    return (
      <div class="carousel-item active">
      <div className="darkening"></div>
      <div className="img">
        <img src={props.img} alt=""/>
        </div>
        <div class="container">
          <div class="carousel-caption text-start">
          <h1 class="display-4 fw-bold text-body-emphasis titles">{props.title}</h1>
          <div className="row">
            <div className="col-md-1">
              <p className="shade text-center">HD</p>
            </div>
            <div className="col-md-1">
              <p className="border text-center rounded-5">R</p>
            </div>
            <div className="col-md-1 d-flex" style={{gap:"4px"}}>
            <i class='bx bxs-star'></i><p>7</p>
            </div>
            <div className="col-md-1 ps-0">
              <p>2024</p>
            </div>
            <div className="col-md-1 ps-0">
              <p className="col-md-12">115 min</p>
            </div>
            <div className="col-md-1">
              Comedy
            </div>
            <div className="col-md-1">
              Action
            </div>
            <div className="col-md-1">
              Crime
            </div>
  
  
          </div>
            <p class="opacity-75">{props.para}</p>
            <div className="buttons">
            <p><a class="btn btn-lg btn-primary" href="#">{props.link}</a></p>
            <p className="book">Bookmark</p>
            </div>
          </div>
        </div>
      </div>
    );}
    else{
      return (
        <div class="carousel-item">
        <div className="darkening"></div>
        <div className="img">
          <img src={props.img} alt=""/>
          </div>
          <div class="container">
            <div class="carousel-caption text-start">
            <h1 class="display-4 fw-bold text-body-emphasis titles">{props.title}</h1>
            <div className="row">
              <div className="col-md-1">
                <p className="shade text-center">HD</p>
              </div>
              <div className="col-md-1">
                <p className="border text-center rounded-5">R</p>
              </div>
              <div className="col-md-1 d-flex" style={{gap:"4px"}}>
              <i class='bx bxs-star mt-1 '></i><p className="">7</p>
              </div>
              <div className="col-md-1 ps-0">
                <p>2024</p>
              </div>
              <div className="col-md-1 ps-0">
                <p className="col-md-12">115 min</p>
              </div>
              <div className="col-md-1">
                Comedy
              </div>
              <div className="col-md-1">
                Action
              </div>
              <div className="col-md-1">
                Crime
              </div>
    
    
            </div>
              <p class="opacity-75">{props.para}</p>
              <div className="buttons">
              <p><a class="btn btn-lg btn-primary" href="#">{props.link}</a></p>
              <p className="book">Bookmark</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  