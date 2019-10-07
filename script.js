console.log('js running');

$(document).ready(onReady);

function onReady() {
    console.log('jquery running');
    $('#add-employee-button').on('click', addEmployeeButton);
    $('table').on('click', '.delete-button', deleteEmployeeButton);
    $('#total-monthly-salary').on('load', calculateMonthlySalary);
}

let annualSalary = 0;

function addEmployeeButton() {
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#annual-salary-input').val();

    if (firstName.length === 0) {
        $('#first-name-input').attr('placeholder', 'First Name*');
    } else if (lastName.length === 0) {
        $('#last-name-input').attr('placeholder', 'Last Name*');
    } else if (id.length === 0) {
        $('#id-input').attr('placeholder', 'ID*');
    } else if (title.length === 0) {
        $('#title-input').attr('placeholder', 'Title*');
    } else if (salary.length === 0) {
        $('#annual-salary-input').attr('placeholder', 'Annual Salary*');
    } else {

        $('#first-name-input').attr('placeholder', 'First Name');
        $('#last-name-input').attr('placeholder', 'Last Name');
        $('#id-input').attr('placeholder', 'ID');
        $('#title-input').attr('placeholder', 'Title');
        $('#annual-salary-input').attr('placeholder', 'Annual Salary');

        $('table').append(`<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td class="salary">${accounting.formatMoney(salary)}</td>
        <td><button class="delete-button">Delete</button></td>
        </tr>`);

        annualSalary += parseInt(salary);

        firstName = $('#first-name-input').val('');
        lastName = $('#last-name-input').val('');
        id = $('#id-input').val('');
        title = $('#title-input').val('');
        salary = $('#annual-salary-input').val('');

        calculateMonthlySalary();
    }
}

function deleteEmployeeButton() {

    let deleteSalary = $(this).closest('td').prev().text()

    annualSalary -= accounting.unformat(deleteSalary);
    $(this).closest('tr').remove();

    if (annualSalary / 12 < 20000) {
        $('#total-monthly-salary').css('color', 'black');
    }

    calculateMonthlySalary();
}

function calculateMonthlySalary() {
    let monthlySalary = annualSalary / 12;

    if (monthlySalary > 20000) {
        $('#total-monthly-salary').css('color', '#A63841');
    }

    $('#total-monthly-salary').text(accounting.formatMoney(monthlySalary));
}




