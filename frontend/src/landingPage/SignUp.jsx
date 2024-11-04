import React,{useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Signup.css";
import axios from "axios";
export default function Sign(){
    const [mail,changeMail] = useState("");
    const [password,changePass] = useState("");
function change(event){
    changeMail(event.target.value);

}
function changes(event){
    changePass(event.target.value);
}
    function auths(event){
        const response = axios.post("http://localhost:3001/auth",{withCredentials: false},{params:{
            "email":mail,
            "password":password
          }});
          console.log(response);
          event.preventDefault();

    }
    return (
        <div className="bg-dark-custom">
        <Nav/>
        <div className="container-fluid" data-bs-theme="dark">
        <div className="bg-mains mt-3 pt-5">
<main class="form-signin w-100 mt-5 mx-auto forms">
<body class="d-flex align-items-center mx-auto py-4 mt-5 col-md-6 justify-content-center px-5">
  <form className="col-lg-6 text-center mx-auto my-auto pt-4" onSubmit={auths}>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control w-100" id="floatingInput" placeholder="name@example.com" onChange={change}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control w-100" id="floatingPassword" placeholder="Password" onChange={changes}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>
  </body>
</main>
        </div>
        </div>
        <Footer/>
        </div>
    )
}