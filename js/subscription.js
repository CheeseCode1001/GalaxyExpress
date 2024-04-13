function sendSubscription() {

  var email = document.getElementById("mail").value;

  var mesageBody =
    "Subcribtion mesage From" + "<p> </p>" + "<br/> Email" + "<span> :  </span>" + email;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "galaxyexpressdrop@gmail.com",
    Password: "2F4F526AF7E349871F663420885EB73EF75A",
    To: "galaxyexpressdrop@gmail.com",
    From: "galaxyexpressdrop@gmail.com",
    Subject: "Subscription message to Galaxy Express",
    Body: mesageBody,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: " Successfully",
        text: "Your Subscription was successfull",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Subscrbtion failed!... try again later",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  });
}

// 2F4F526AF7E349871F663420885EB73EF75A
// galaxyexpressdrop@gmail.com