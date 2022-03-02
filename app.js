function sendEmail(){
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "bendercoding@gmail.com",
        Password : "Falcon2013",
        To : 'bendercoding@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact From Portfolio",
        Body : `Name: ${document.getElementById("name")}
        <br>email: ${document.getElementById("email")}
        <br>Message: ${document.getElementById("message")}`
    }).then(
      message => alert(message)
    );
}