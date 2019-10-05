console.log('js running');

$(document).ready(onReady);

function onReady() {
    console.log('jquery running');
    $('#add-employee-button').on('click', addEmployeeButton);
    $('table').on('click', '.delete-button', deleteEmployeeButton);
    $('#total-monthly-salary').on('load', calculateMonthlySalary);

}

let monthlySalary = 0;

function addEmployeeButton() {
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#annual-salary-input').val();

    $('table').append(`<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td class="salary">${salary}</td>
        <td><button class="delete-button">Delete</button></td>
        </tr>`);

    monthlySalary += parseInt(salary);

    firstName = $('#first-name-input').val('');
    lastName = $('#last-name-input').val('');
    id = $('#id-input').val('');
    title = $('#title-input').val('');
    salary = $('#annual-salary-input').val('');

    calculateMonthlySalary();

}

function deleteEmployeeButton() {

    
    let deleteSalary = $(this).closest('td').prev().text() //need to figure out DOM traversal
    console.log(deleteSalary);
    $(this).closest('tr').remove();
    
    
    
    calculateMonthlySalary();
}


function calculateMonthlySalary() {
    let annualSalary = monthlySalary / 12;
    $('#total-monthly-salary').text(annualSalary.toFixed(2));
}

