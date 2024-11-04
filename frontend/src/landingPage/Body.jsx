import React,{useState} from "react";
import axios from "axios";
import "./Body.css";
function Sections(){
  var [email,changeMail] = useState("");
  function changes(event,value="toZero"){
    if(value=="toZero"){
    changeMail(event.target.value);
    }
    else{
      event.target.value = "";
      changeMail("");
    }
  }
async function submits(event){
  console.log(event);
  event.preventDefault();
  try{
    const response = await axios.post("http://localhost:3001/auth",{withCredentials: false},{params:{
      "requestFor":email
    }});
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
  window.location.href="/signup";
  
}
  return (
<div class="px-4 mt-2 text-center vals d-flex flex-column justify-content-center polygon" data-bs-theme="dark">
  <div className="valsm">
  <h1 class="display-5 fw-bold text-body-emphasis main">MoWarz</h1>
  <p class="lead mb-4 text-white para">Step into a world where stories come alive, emotions run deep, and every frame paints a thousand words. Whether you’re a cinephile seeking the latest releases or a casual viewer in search of cinematic magic, our curated selection awaits.</p>
  </div>
<form class="d-flex pb-5 mb-5 search col-md-5" role="search" onSubmit={submits}>
        <input class="form-control custom-input col-md-7" type="email" placeholder="Give Your email id" aria-label="Search" onChange={changes}/>
        <button class="btn custom-input-button" type="submit">Submit</button>
      </form>

  <div className="image ss">
    <img src="329633.jpg" alt="" width="720"/>
   </div>
</div>
  );
}
export default function Body(){
  async function reroute(event){
    console.log(event.target);
    const response = await axios.post("http://localhost:3001/api/stuff",{withCredentials: false},{params:{
      "requestFor":"homePage"
    }});
    console.log(response.data);
  }
    return (
<div className="container-fluid">
<Sections/>
<div class="px-4 text-center val d-flex flex-column justify-content-center" data-bs-theme="dark">
    <h1 class="display-5 fw-bold text-body-emphasis main">Centered hero</h1>
    <div class="col-lg-6 mx-auto para">
      <p class="lead mb-4 text-white para">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center para">
        <a type="button" href="/home" class="btn btn-red btn-lg px-4 gap-4" >Go to Home Page<i class='bx bx-right-arrow-alt arrow'></i></a>
      </div>
    </div>
  </div>
  <div class="px-4 pt-5 mt-4 text-center d-flex flex-column justify-content-center vals vals-new " data-bs-theme="dark">
    <div className="row back-none ">
      <div className="col-md-5 p-2 ms-5 card pt-2 back-none ss" width="720">
        <img src="37981.jpg" alt="" className="rounded-3"/>
      </div>
      <div className="col-md-5 p-3 back-none">
      <h1 class="display-5 fw-bold text-body-emphasis main back-none text-start ps-3">Centered hero</h1>
      <p class="lead mb-4 text-white para text-start ps-3">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      
      </div>


    </div>
  </div>
  <div class="px-4 pt-5 mt-4 text-center d-flex flex-column justify-content-center vals vals-new " data-bs-theme="dark">
    <div className="row  ">
    <div className="col-md-5 p-3 ms-5 mt-5">
      <h1 class="display-5 fw-bold text-body-emphasis text-start ps-3">Centered hero</h1>
      <p class="lead mb-4 text-white para text-start ps-3">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      
      </div>
      <div className="col-md-5 p-2 ms-5 card pt-2 margin bg-transparent rounded-3 ss" width="720px">
        <img src="37981.jpg" alt="" className="rounded-3"/>
      </div>
    </div>
  </div>
  <div class="px-5 text-center d-flex flex-column justify-content-center vals vals-new pt-5 mt-4" data-bs-theme="dark">
  <div class="containes px-5 pb-1 pt-5 shadow-lg rounded mt-0" id="hanging-icons">
    <h2 class="pb-5 fw-bold text-body-emphasis text-large high">Hanging icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start search">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <i class='bx bx-target-lock svgs'></i>
        </div>
        <div>
          <h3 class="fs-4 fw-bold text-body-emphasis" >Clarified Vision & Target</h3>
          <p >Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-red reduce">
            Primary button
          </a>
        </div>
      </div>
      <div class="col d-flex flex-column align-items-start search">
         <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
      <i class='bx bx-tachometer svgs' ></i>
        </div>
        <div>
        <h3 class="fs-4 fw-bold text-body-emphasis" >High Performance</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-red reduce">
            Primary button
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start search" >
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <i class='bx bx-lock-alt svgs' style={{fontSize:"40px"}} ></i>
        </div>
        <div>
        <h3 class="fs-4 fw-bold text-body-emphasis" >Maintain Security</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-red reduce">
            Primary button
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    )
}