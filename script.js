console.log('js running');

$(document).ready(onReady);

function onReady() {
    console.log('jquery running');
    $('#add-employee-button').on('click', addEmployeeButton);
    $('table').on('click', '#delete-button', deleteEmployeeButton);
    $('#total-monthly-salary').on('load', calculateMonthlySalary);

}

let monthlySalary = 100;

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
        <td>${salary}</td>
        <td><button id="delete-button">Delete</button></td>
        </tr>`);

    firstName = $('#first-name-input').val('');
    lastName = $('#last-name-input').val('');
    id = $('#id-input').val('');
    title = $('#title-input').val('');
    salary = $('#annual-salary-input').val('');

    monthlySalary += 100;
    calculateMonthlySalary();

}

function deleteEmployeeButton() {
    $(this).closest('tr').remove();
    monthlySalary -= 50;
    calculateMonthlySalary();
}


function calculateMonthlySalary() {
    $('#total-monthly-salary').text(monthlySalary)
}