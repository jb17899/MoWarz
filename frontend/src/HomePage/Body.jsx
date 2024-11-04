import React,{useState} from "react";
import {array,arrayTwo,arrayThree} from "./movies.js";
import axios from "axios";
import Carousal from "./Carousal.jsx";
import "./Body.css";
var vals = "movies";




function Cards(props){
  const [movie,changeName] = useState("");
  async function sendRequest(event){
    const val = await event.currentTarget.getAttribute("id");
    console.log(val);
    try{
      const response = await axios.post("http://localhost:3001/api/stuff",{withCredentials: false},{params:{
        "requestFor":val
      }});
      window.location.replace("/show");
    }
    catch(err){
      console.log(err);
    }
    }


  return (<div className="col-md-2 d-flex flex-column ls" onClick={sendRequest} id={props.james.name}>
  <div class="card" style={{height: "18rem"}}>
<img src={props.james.img} class="card-img-top" alt="..."/>
</div>
<div className="d-flex justify-content-between pe-5 ss">
<p>{props.james.type}</p>
<p>{props.james.Year}</p>
<p className="sn">{props.james.quality}</p>
</div>
<div className="head">
<h4 className="fw-bold text-emphasis text-light">{props.james.name}</h4>
</div>
</div>);
}
function RowOne(){
  return (
  <div className="row">
    {array.map(element=>{return (<Cards james={element}/>);})}
  
  </div>);
}
function RowTwo(){
  return (
  <div className="row mt-2">
    {arrayTwo.map(element=>{return (<Cards james={element}/>);})}
  
  </div>);
}
function RowThree(){
  return (
    <div className="row mt-2">
      {arrayThree.map(element=>{return (<Cards james={element}/>);})}
    
    </div>);
}
export default function Body(){
  function getJson(){

  }
    return (
      <>
<div id="myCarousel" class="carousel slide mb-6 px-5 pt-2" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <Carousal
      keys="1"
      img="25915.jpg"
      title = "Deadpool"
      para = "Deadpool, the irreverent anti-hero, breaks the fourth wall, delivers witty humor, and battles enemies with unconventional tactics and charm."
      link=" Watch Now"/>
      <Carousal
      keys="2"
      img="329624.jpg"
      title = "Black Panther"
      para = "Wakandan king T'Challa defends his nation with advanced tech, honor, and strength, facing challenges to his throne and legacy.Facing internal strife and global threats, he must balance tradition with progress to secure Wakanda's future."
      link="Watch Now"/>
      <Carousal
      keys="3"
      img="37943.jpg"
      title = "IT"
      para = "IT, a horror film based on Stephen King's novel, features a terrifying clown named Pennywise who preys on children's fears.As a group of friends confronts their own fears and traumas, they unite to face the ancient evil lurking beneath their town."
      link="Watch Now"/>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      <div class="px-4 py-5 text-start border-bottom back-black mx-5">
        <div className="row">
    <h1 class="fw-bold heading col-md-2">Recommended</h1>
    <a type="button" class="btns col-md-1 me-3" href='https://dcnoydvdhweymknnhhrz.supabase.co/storage/v1/object/sign/mp4_files/Curse_of_the_Mistwraith__Wurts_Janny___Z-Library_.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtcDRfZmlsZXMvQ3Vyc2Vfb2ZfdGhlX01pc3R3cmFpdGhfX1d1cnRzX0phbm55X19fWi1MaWJyYXJ5Xy5wZGYiLCJpYXQiOjE3MjAxODk0MDcsImV4cCI6MTcyMDc5NDIwN30.rlVY-uzPGSuE6cGb4enlfmfsDjOBL4kjtUlJ8WLF4Ho&t=2024-07-05T14%3A23%3A26.302Z'>MOVIES</a>
    <button type="button" class="btns col-md-1 ">TV SERIES</button>
    </div>
    <div className="recommended pt-4">
     <RowOne/>
     <RowTwo/>
     <RowThree/>
     <div className="table mt-4 p-3">
      <div className="d-flex">
          <h1 className="headings display-6 fw-bold text-body-emphasis p-2 text-white">TOP 9</h1>
          <ul class="nav nav-pills gap-2 p-1 small rounded-5" id="pillNav2" role="tablist" style={{listStyle:"none"}}>
  <li class="nav-item bg-transparent" role="presentation">
    <button class="nav-link active rounded-5 fs-6 mb-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item bg-transparent" role="presentation">
    <button class="nav-link rounded-5 fs-6" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
</ul>

      </div>

     </div>
    </div>

  </div>
  <div class="px-4 py-5 text-start border-bottom back-black mx-5">
        <div className="row">
    <h1 class="fw-bold heading col-md-2">Movies</h1>
    </div>
    <div className="recommended pt-4">
     <RowOne/>
     <RowTwo/>
     <RowThree/>
    </div>

  </div>
  <div class="px-4 py-5 text-start border-bottom back-black mx-5">
        <div className="row">
    <h1 class="fw-bold heading col-md-2">TV Series</h1>
    </div>
    <div className="recommended pt-4">
     <RowOne/>
     <RowTwo/>
     <RowThree/>
    </div>

  </div>
  </>
    )
}