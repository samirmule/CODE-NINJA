document.getElementById("registerForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    role: document.getElementById("role").value,
    mobile: document.getElementById("mobile").value,
    address: document.getElementById("address").value
  };

  try {
    const res = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registered Successfully ✅");
      window.location.href = "index.html";
    } else {
      alert(data.message);
    }

  } catch {
    alert("Server Error ❌");
  }
});