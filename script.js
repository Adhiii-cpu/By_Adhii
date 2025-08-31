// Login
function login(event) {
  event.preventDefault();
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "My Adhiiiii" && pass === "Nikitha") {
    window.location.href = "home.html";
  } else {
    alert("Oops! Wrong details Sweetee 💕");
  }
}

// Reply Box
function openReply() {
  document.getElementById("replyBox").style.display = "block";
  document.getElementById("replyBtn").style.display = "none";
}

function saveReply() {
  let reply = document.getElementById("replyText").value;
  if (reply.trim() === "") {
    alert("Please write something 💌");
    return;
  }
  localStorage.setItem("amulReply", reply);
  displayReply();
}

function displayReply() {
  let saved = localStorage.getItem("amulReply");
  if (saved) {
    document.getElementById("replyBox").style.display = "none";
    document.getElementById("replyBtn").style.display = "none";
    document.getElementById("savedReply").innerHTML =
      "<h3>Amul’s Reply 💕</h3><p>" + saved + "</p>";
  }
}
window.onload = displayReply;
