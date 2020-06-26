import axios from "axios";


export function userLogin(userlogindto) {
   console.log(userlogindto.email);
   console.log(userlogindto.password);

   

    return axios.post("http://localhost:8081/login", userlogindto, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      });    
} 



export function userRegister(userdetaildto) {

  return axios.post("http://localhost:8081/userdetails", userdetaildto, {
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    });    
} 

export function userForgotPassword(emailid) {

  return axios.get(`http://localhost:8081/userforgotpassword?emailid=${emailid}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }); 
} 

export function setNewUserPassword(setpassworddto,token) {

  return axios.post("http://localhost:8081/setnewuserpassword", setpassworddto, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        token: token

      }
    });
} 

export function modilfyUserdetails(userdetailmodel,token) {

  return axios.put("http://localhost:8081/userupdate", userdetailmodel, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        token: token

      }
    });
} 


