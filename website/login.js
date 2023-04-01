var username = document.getElementById("username").value;

if (username == "sander") {
    alert("hello world")
}

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  for (const pair of formData.entries()) {
    console.log(pair)
  }
})