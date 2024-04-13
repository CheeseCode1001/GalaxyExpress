
function sendMail() {

  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("email").value;
  var userPhone = document.getElementById("phone").value;
  var userMessage = document.getElementById("message").value;

  var mesageBody =
     "Feedback/Queries mesage From" + "<p> </p>" +
    "<br/> Name" + '<span> :  </span>' + userName +
    "<br/> Email" + '<span> :  </span>' + userEmail +
    "<br/> Phone" + '<span> :  </span>' + userPhone +
    "<br/> Message" + '<span> :  </span>' + userMessage;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "galaxyexpressdrop@gmail.com",
    Password: "2F4F526AF7E349871F663420885EB73EF75A",
    To: "galaxyexpressdrop@gmail.com",
    From: "galaxyexpressdrop@gmail.com",
    Subject: "Feed back message to Galaxy Express",
    Body: mesageBody,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: " Successfully",
        text: "Your Feedback Has been successfully sent",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!... try again later",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  });
   
}
