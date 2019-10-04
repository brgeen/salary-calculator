console.log('js running');

$(document).ready(onReady);

function onReady() {
    console.log('jquery running');
    $('#add-employee-button').on('click', addEmployeeButton);

}

function addEmployeeButton() {
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#annual-salary-input').val();

    console.log(firstName);
    console.log(lastName);
    console.log(id);
    console.log(title);
    console.log(salary);


    firstName = $('#first-name-input').val('');
    lastName = $('#last-name-input').val('');
    id = $('#id-input').val('');
    title = $('#title-input').val('');
    salary = $('#annual-salary-input').val('');



}
