function sendMail(){
    var params = {
        name: document.getElementById("name").value,
    
        message: document.getElementById("message").value
    };

    const serviceID = "service_rhf4mpo";   
    const templateID = "template_4obrqx8"; 
    
    emailjs.send(serviceID, templateID, params)
      .then(res => {
      ;
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
        const popup = document.getElementById("success-popup");
        popup.classList.add("show");
  
       
        setTimeout(() => {
          popup.classList.remove("show");
        }, 3000);
      })
      .catch(err => {
        console.log("FAILED...", err);
        alert("Message failed to send. Try again.");
      });
}

