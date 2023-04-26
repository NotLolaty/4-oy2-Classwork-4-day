const user = localStorage.getItem("user");
const BASE_URL = "htpp://localhost:3000/product";

if (!user) {
  window.location.replace("http://127.0.0.1:5500/admin_login.html");
}

localStorage.removeItem("user");

const postProduct = async () => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
