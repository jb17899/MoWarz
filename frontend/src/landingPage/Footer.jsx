import React from "react";
import "./Footer.css";
export default function Footer(){
    return (
<div class="container-fluid vals-footer">
  <footer class="pt-5">
    <ul class="nav justify-content-center border-bottom pb-3" style={{gap:"20px"}}>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted change-color ">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted change-color ">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted change-color ">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted change-color ">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted change-color ">About</a></li>
    </ul>
    <p class="text-center text-muted change-color pt-2 ">© 2022 Company, Inc</p>
  </footer>
</div>
    )
}