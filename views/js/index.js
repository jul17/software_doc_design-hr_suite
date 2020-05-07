// Utils
const getById = (id) => document.getElementById(id);

let allEmployeess = [];
let isInEditMode = false;

// Main elements
let addButton = getById("add-button");

const employeesListContainer = getById("employee-list");

// Form input elements
const new_first_name = getById("first_name");
const new_last_name = getById("last_name");
const new_email = getById("email");


const renderItem = (values) => {
  return `
  <li class="employee-item" id="${values.id}">
    <div class="field">${values.first_name}</div>
    <div class="field">${values.last_name}</div>
    <div class="field">${values.email}</div>
    <button class="filed-edit" onClick="onItemEditClick('${values.id}')">Edit</button>
    <button class="filed-delete" onClick="onItemDeleteClick('${values.id}')">Delete</button>
  </li>
  `;
};

const clearInputs = () => {
  new_first_name.value = "";
  new_last_name.value = "";
  new_email.value = "";
};

const clearContainer = () => {
  employeesListContainer.innerHTML = "";
};

const renderAllItems = async () => {
  clearContainer();

  const employees = await Api.fetchAllEmployees();

  employees.forEach((employee) => {
    employeesListContainer.insertAdjacentHTML("afterbegin", renderItem(employee));
  });
};

const switchEditAddMode = (isEdit, id) => {
  addButton.innerHTML = isEdit ? "Edit" : "Add";
  isInEditMode = isEdit;

  const updatedButton = addButton.cloneNode(true);
  addButton.parentNode.replaceChild(updatedButton, addButton);
  addButton = updatedButton;

  addButton.addEventListener(
    "click",
    isEdit ? () => onSubmitEditClicked(id) : onAddItemClick
  );
};

const onItemEditClick = (id) => {
  const foundEmployees = allEmployeess.find((employee) => +id === +employee.id);

  new_first_name.value = foundEmployees.first_name;
  new_last_name.value = foundEmployees.last_name;
  new_email.value = foundEmployees.email;

  switchEditAddMode(true, id);
};

const onItemDeleteClick = (id) => {
  Api.deleteEmployee(id);

  renderAllItems();
};

const onAddItemClick = () => {
  const item = {
    first_name: new_first_name.value,
    last_name: new_last_name.value,
    email: new_email.value,
  };

  Api.uploadEmployee(item);

  clearInputs();

  renderAllItems();
};

const onSubmitEditClicked = (id) => {
  const updatedItem = {
    first_name: new_first_name.value,
    last_name: new_last_name.value,
    email: new_email.value,
  };

  Api.editEmployee(id, updatedItem);

  clearInputs();

  renderAllItems();

  switchEditAddMode(false);
};

addButton.addEventListener("click", onAddItemClick);
renderAllItems();
