function getData(event) {
  event.preventDefault();
  const email = document.getElementById("R_email").value;
  const NewPassword = document.getElementById("R_password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const tarjous = document.getElementById("tarjous").checked;
  if (!email || !NewPassword || !confirmPassword) {
    alert("Täytä kaikki kentät!");
    return;
  }
  if (NewPassword !== confirmPassword) {
    alert("Salasanat eivät täsmää!");
    return;
  }
  if (NewPassword.length < 6) {
    alert("Salasanan tulee olla vähintään 6 merkkiä pitkä!");
    return;
  } else {
    UserData = {
      email: email,
      Password: NewPassword,
      tarjous: tarjous,
    };
    localStorage.setItem("UserData", JSON.stringify(UserData));
    window.location.href = "../index.html";
  }
}
function SignIn(event) {
  event.preventDefault();
  const email = document.getElementById("K_email").value;
  const password = document.getElementById("K_password").value;
  if (!email || !password) {
    alert("Täytä kaikki kentät!");
    return;
  }
  window.location.href = "../index.html";
}
