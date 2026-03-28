import react from "react";
import './form.css';
import { useState } from "react";
const Formpage=()=>{
const[users, setUsers]=useState({sname:"",semail:"",smobile:"",sPassword:""});

function handleChange(udata){
  setUsers({...users,[udata.target.name]:udata.target.value});
}

const handleSubmit=(udata)=>{
  udata.preventDefault();
  if(!users.sname || !users.semail||  !users.smobile ||  !users.sPassword){
    alert("please enter your correct data");
  }
  else{
    console.log(users);
    alert("Form submitted")
    setUsers({sname:"",semail:"",smobile:"",sPassword:""})

  }
}

return(
  <section>
    <form onSubmit={handleSubmit}>
      <h2>signup form</h2>

      <div className="inputs">
        <label htmlFor="sname">User Name</label>
        <div>
        <input type="text" name="sname" placeholder="entr name" onChange={handleChange}  value={users.sname}></input>
        </div>
      </div>

        <div className="inputs">
        <label htmlFor="sname">User Email</label>
        <div>
        <input type="email" name="semail" placeholder="entr email" onChange={handleChange}  value={users.semail}></input>
        </div>
      </div>

        <div className="inputs">
        <label htmlFor="sname">User Mobile</label>
        <div>
        <input type="tel" name="smobile" placeholder="entr mobile" onChange={handleChange}  value={users.smobile}></input>
        </div>
      </div>

        <div className="inputs">
        <label htmlFor="sname">User Password</label>
        <div>
        <input type="text" name="sPassword" placeholder="entr password" onChange={handleChange}  value={users.sPassword}></input>
        </div>
      </div>

      <div className="inputs">
        <button type="submit">sign up</button>
      </div>
    </form>
  </section>
)

};

export default Formpage;