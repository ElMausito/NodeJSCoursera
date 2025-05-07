let userRol="admin";
let accesLevel;

if(userRol==="admin"){
    accesLevel="full access granted";
} else if(userRol==="Manager"){
    accesLevel="limited access granted";
} else {
    accesLevel="no access granted";
}

console.log("Access Level: ",accesLevel);

//---------------------------------------
let isLoggedIn = true;
let usermessage;

if(isLoggedIn){
    if(userRol==="admin"){
        usermessage="Welcome Admin";
    } else{
        usermessage="Welcome User";
    }
} else
{
    usermessage="Please log in to access the system";
}  
console.log("User Message: ",usermessage); 

//---------------------------------------
let userType="admin";  
let userCategory;
switch(userType){
    case "admin":
        userCategory="Administrator";
        break;  
    case "Manager":
        userCategory="Manager";
        break;  
    case "Subscriber": 
        userCategory="Subscriber";
        break;  
    default:
        userCategory="Unknown"; 
}
console.log("User Category: ",userCategory);
//---------------------------------------

let isauthenticated=true;
let athenticationstatus= isauthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status: ",athenticationstatus);
