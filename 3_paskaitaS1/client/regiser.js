//atvaizdavimas
fetch("http://localhost:3000/products")
  .then((resp) => resp.json())
  .then((response) => {
    const usersList = document.querySelector("ul");
    // response = [{user: "Milk", price: 2}]
    response.forEach((users) => {
      const li = document.createElement("li");
      // sukuriamas tekstas iš dviejų dalių name ir price
      li.textContent = `${users.name} - ${users.surname} - ${users.city} ${users.postcode} - ${users.email} `;
      usersList.append(li);
    });
  });

const registerBtn = document.getElementById("addUser");
registerBtn.addEventListener("click", () => {
  const user = document.querySelector("input[name='user']").value;
  

  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: name, surname, city, email, phone}), // siunciamas JSON formatu body
  }).then(() => {
    location.reload();
  });
});