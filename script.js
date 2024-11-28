const dropdown = document.getElementById("userDropDown");

function ajoute() {
  const arrayUsers = JSON.parse(localStorage.getItem("users"));
  arrayUsers.forEach((element, index) => {
    document.getElementById("users-list").innerHTML += `
        <li class="list-item">
                    <p class="item-text">
                        ${element.name}
                    </p>
                    <p class="item-email">
                        ${element.email}
                    </p>
                    <button class="delete-btn" onclick="deleteUser(${index})">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </li>`;
  });
}

ajoute();

function toggleDropDown() {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}

function saveUser() {
  const name = document.querySelector("#nameInput");
  const email = document.querySelector("#emailInput");

  const user = {
    name: name.value,
    email: email.value,
  };

  console.log(user);

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
}
function deleteUser(index) {
  const arrayUsers = JSON.parse(localStorage.getItem("users"));
  arrayUsers.splice(index, 1);

  localStorage.setItem("users", JSON.stringify(arrayUsers));

  const elements = document.querySelectorAll(".list-item");

  elements[index].remove();
}
