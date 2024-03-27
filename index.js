// Write your solution in this file!
const employee = {
  name: "",
  streetAddress: "",
};
function updateEmployeeWithKeyAndValue(employee, name, value) {
  const newEmployee = { ...employee };
  newEmployee[name] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
  employee[name] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, name) {
  const deleteProperty = { ...employee };
  delete deleteProperty[name];
  return deleteProperty;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
  delete employee[name];
  return employee;
}
