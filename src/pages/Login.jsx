import React from 'react'

const Login = () => {
  return (
    <div>
         <main className="main-content">

<div className="admin">
   <div className="container-fluid">
      <div className="row justify-content-center">
         <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-8">
            <div className="edit-profile">
               <div className="edit-profile__logos">
                  <a href="index.html">
                     <img className="dark" src="img/logo-dark.png" alt=""/>
                     <img className="light" src="img/logo-white.png" alt=""/>
                  </a>
               </div>
               <div className="card border-0">
                  <div className="card-header">
                     <div className="edit-profile__title">
                        <h6>Sign in HexaDash</h6>
                     </div>
                  </div>
                  <div className="card-body">
                     <div className="edit-profile__body">
                        <div className="form-group mb-25">
                           <label for="username">Username or Email Address</label>
                           <input type="text" className="form-control" id="username" placeholder="name@example.com"/>
                        </div>
                        <div className="form-group mb-15">
                           <label for="password-field">password</label>
                           <div className="position-relative">
                              <input id="password-field" type="password" className="form-control" name="password" placeholder="Password"/>
                              <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2">
                              </div>
                           </div>
                        </div>
                        <div className="admin-condition">
                           <div className="checkbox-theme-default custom-checkbox ">
                              <input className="checkbox" type="checkbox" id="check-1"/>
                              <label for="check-1">
                                 <span className="checkbox-text">Keep me logged in</span>
                              </label>
                           </div>
                           <a href="forget-password.html">forget password?</a>
                        </div>
                        <div className="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center">
                           <button className="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn ">
                              sign in
                           </button>
                        </div>
                     </div>
                  </div>
                  {/* <!-- End: .card-body --> */}
                  <div className="px-20">
                     <p className="social-connector social-connector__admin text-center">
                        <span>Or</span>
                     </p>
                     <div className="button-group d-flex align-items-center justify-content-center">
                        <ul className="admin-socialBtn">
                           <li>
                              <button className="btn text-dark google">
                                 <img className="svg" src="img/google-Icon.svg" alt="img" />
                              </button>
                           </li>
                           <li>
                              <button className=" radius-md wh-48 content-center facebook">
                                 <i className="uil uil-facebook-f"></i>
                              </button>
                           </li>
                           <li>
                              <button className="radius-md wh-48 content-center twitter">
                                 <i className="uil uil-twitter"></i>
                              </button>
                           </li>
                           <li>
                              <button className="radius-md wh-48 content-center github">
                                 <i className="uil uil-github"></i>
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="admin-topbar">
                     <p className="mb-0">
                        Don't have an account?
                        <a href="sign-up.html" className="color-primary">
                           Sign up
                        </a>
                     </p>
                  </div>
                  {/* <!-- End: .admin-topbar  --> */}
               </div>
               {/* <!-- End: .card --> */}
            </div>
            {/* <!-- End: .edit-profile --> */}
         </div>
         {/* <!-- End: .col-xl-5 --> */}
      </div>
   </div>
</div>
{/* <!-- End: .admin-element  --> */}

</main>
<div id="overlayer">
<div className="loader-overlay">
   <div className="dm-spin-dots spin-lg">
      <span className="spin-dot badge-dot dot-primary"></span>
      <span className="spin-dot badge-dot dot-primary"></span>
      <span className="spin-dot badge-dot dot-primary"></span>
      <span className="spin-dot badge-dot dot-primary"></span>
   </div>
</div>
</div>
<div className="enable-dark-mode dark-trigger">
<ul>
   <li>
      <a href="#">
         <i className="uil uil-moon"></i>
      </a>
   </li>
</ul>
</div>



    </div>
  )
}

export default Login