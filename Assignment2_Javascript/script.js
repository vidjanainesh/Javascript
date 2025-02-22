'use strict';

//Elements
const inputEmpId = document.querySelector('#emp-id');
const inputEmpName = document.querySelector('#emp-name');
const inputEmpDesignation = document.querySelector('#emp-designation');
const inputEmpSalary = document.querySelector('#emp-salary');
const inputEmpAddress = document.querySelector('#emp-address');
const inputEmpEdit = document.querySelector('#edit-emp-id');
const inputEmpDelete = document.querySelector('#delete-emp-id');
const inputEmpSearch = document.querySelector('#search-employee');

const btnSearchEmployee = document.querySelector('#search-button');
const btnAddEmployee = document.querySelector('#add-employee');
const btnViewEmployees = document.querySelector('#view-employees');
const btnIncreaseSalary = document.querySelector('#increase-salary');

const containerApp = document.querySelector('.container');
const containerTable = document.querySelector('#employee-table');
const containerTableBody = document.querySelector('#tbody');

const emp1 = {
    id: 1,
    name: 'Nainesh',
    designation: 'SDE',
    salary: 40000,
    address: 'XXX'
};
const emp2 = {
    id: 2,
    name: 'Dev',
    designation: 'AML',
    salary: 80000,
    address: 'YYY'
};
const emp3 = {
    id: 3,
    name: 'Prajwal',
    designation: 'SE',
    salary: 90000,
    address: 'ZZZ'
};

const allEmployees = [emp1, emp2, emp3];

class Employee {
    constructor(id, name, designation, salary, address){
        this.id = Number(id);
        this.name = name;
        this.designation = designation;
        this.salary = Number(salary);
        this.address = address;
    }
} 



//Functions

const isOnlyLetters = (str) => /^[A-Za-z]+$/.test(str);
const isOnlyNumbers = (str) => str=='' || isNaN(str) ? false : true;


function resetFields() {
    document.querySelector('#emp-id').value = '';
    document.querySelector('#emp-name').value = '';
    document.querySelector('#emp-designation').value = '';
    document.querySelector('#emp-salary').value = '';
    document.querySelector('#emp-address').value = '';
    document.querySelector('#edit-emp-id').value = '';
    document.querySelector('#delete-emp-id').value = '';
    document.querySelector('#search-employee').value = '';
}

const displayEmployees = (emp) => {
     const html = `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.designation}</td>
            <td>${emp.salary}</td>
            <td>${emp.address}</td>
        </tr>
    `;
    containerTableBody.insertAdjacentHTML("beforeend", html);
}

const addEmployee = (id, name, designation, salary, address) => {    
    const emp = new Employee(id, name, designation, salary, address);
    allEmployees.push(emp);
    console.log(allEmployees); 
}
    
const updateEmployee = (id) => {
    const emp = allEmployees.forEach( (curr) => {
        if(curr.id == id) return curr;
    });
}

function retrieveEmployee(id) {
    let emp;   
    allEmployees.forEach( (curr) => {
        if(curr.id === id) emp = curr;
    })
    return emp;
}


//Event Listeners

//Search Employee
btnSearchEmployee.addEventListener('click', function(){
    try {
        // console.log(inputEmpSearch.value);
        if(!isOnlyNumbers(inputEmpSearch.value)) throw new Error("Please enter a valid ID!");

        let emp = retrieveEmployee(Number(inputEmpSearch.value));
        containerTableBody.innerHTML = '';
        displayEmployees(emp);  
        resetFields();    

    } catch (error) {
        console.log(`${error}`);
    }
})

//View Employees
btnViewEmployees.addEventListener('click', function(){
    containerTableBody.innerHTML = '';
    allEmployees.forEach((obj) => displayEmployees(obj));
    resetFields();

});

//Add Employee
btnAddEmployee.addEventListener('click', function(e){
    e.preventDefault();

    try {        
        if(!isOnlyNumbers(inputEmpId.value)) throw new Error("Please enter a valid ID!");
        if(!isOnlyLetters(inputEmpName.value)) throw new Error("Please enter a valid Name!");
        if(!isOnlyLetters(inputEmpDesignation.value)) throw new Error("Please enter a valid Designation!");
        if(!isOnlyNumbers(inputEmpSalary.value)) throw new Error("Please enter a valid Salary!");
        if(!isOnlyLetters(inputEmpAddress.value)) throw new Error("Please enter a valid Address!");

        addEmployee(
            inputEmpId.value,
            inputEmpName.value,
            inputEmpDesignation.value,
            inputEmpSalary.value,
            inputEmpAddress.value,
        );
        resetFields();
        
    } catch (error) {
        console.log(`${error}`);
    }    
})


