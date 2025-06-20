// Write your solution in this file!
// Step 1: Create the employee object
const employee = {
  name: "Ann",
  streetAddress: "123 Main Street"
};

// Step 2: Non-Destructive Update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Step 3: Destructive Update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Step 4: Non-Destructive Delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Step 5: Destructive Delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
