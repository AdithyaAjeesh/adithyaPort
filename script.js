let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


let sections=document.querySelectorAll("section");
let  navlinks=document.querySelectorAll("header nav a");
window.onscroll=()=>{
    SpeechRecognitionResult.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let id=sec.getAttribute("id");
        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id+"]").classList.add("active")
            })
        };
    });
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>100);
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.remove("active");
    };
    function sendMail() {  
        var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
          mobile: document.getElementById("mobile").value,
          emailsub: document.getElementById("emailsub").value
        };
      
        const serviceID = "service_nnnehvh";
        const templateID = "template_urz8cvs";
      
          emailjs.send(serviceID, templateID, params)
          .then(res=>{
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              document.getElementById("mobile").value = "";
              document.getElementById("emailsub").value = "";
              console.log(res);
              alert("Your message sent successfully!!");
      
          })
          .catch(err=>console.log(err));
      
      }