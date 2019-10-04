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

    $('table').append(`<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td><button class="delete-button">Delete</button></td>
        </tr>`);
    
    firstName = $('#first-name-input').val('');
    lastName = $('#last-name-input').val('');
    id = $('#id-input').val('');
    title = $('#title-input').val('');
    salary = $('#annual-salary-input').val('');

}
