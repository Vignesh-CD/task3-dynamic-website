const cust_id =  document.getElementById("customer-id");
const password = document.getElementById("password");
const cust_error = document.getElementById("cust_id_error");
const pass_error = document.getElementById("pass_error");
const login_form = document.getElementById("login-form");

login_form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let valid = true;

    if (cust_id.value === "") {
        cust_error.style.display = "block";
        cust_error.textContent = "Customer ID is required";
        valid = false;
    } else {
        cust_error.textContent = "";
        cust_error.style.display = "none";
    }

    if (password.value === "") {
        pass_error.style.display = "block";
        pass_error.textContent = "Password is required";
        valid = false;
    } else {
        pass_error.textContent = "";
        pass_error.style.display = "none";
    }

    if (valid) {
        cust_error.style.display = "none";
        pass_error.style.display = "none";
        console.log("Form submitted successfully");
    }
})
cust_id.addEventListener("input", () => {
    if (cust_id.value.trim() !== "") {
        cust_error.style.display = "none";
    }
});

password.addEventListener("input", () => {
    if (password.value.trim() !== "") {
        pass_error.style.display = "none";
    }
});
 function loginUser(e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if(username && password) {

        localStorage.setItem("loggedInUser", username);


        window.location.href = "home.html";
      } else {
        alert("Please enter both username and password.");
      }
    }
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const customerId = document.getElementById("customer-id").value.trim();
  const password = document.getElementById("password").value.trim();

  if (customerId === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }  localStorage.setItem("loggedInUser", customerId);
  window.location.href = "account.html";
});
