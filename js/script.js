$(document).ready(() => {
  const name = $('#name');
  const email = $('#email');
  const phone = $('#phone');
  const company = $('#company');
  const message = $('#message');
  const send = $('#send');
  const reset = $('#reset');

  $('#form-id').submit(function (e) {
    e.preventDefault(); //Prevent the form on sending
    //Add event listener on form and not on btn click
    if ($('#name').val().trim() === '') {
      //Check if empty string
      $('#name').attr('placeholder', "First name can't be empty"); //Change attribute
      $('#name').val(''); //Remove the value so that youll see the new attribute
      $('#name').addClass('red'); //Add a class so that placeholder will be red.
    } else {
      name.removeClass('red');
    }
    if (email.val().trim() === '') {
      //Check if empty string
      email.attr('placeholder', 'Write an Email (example@mail.com)'); //Change attribute
      email.val(''); //Remove the value so that youll see the new attribute
      email.addClass('red'); //Add a class so that placeholder will be red.
    } else {
      email.removeClass('red');
    }
    if (phone.val().trim() === '') {
      //Check if empty string
      phone.attr('placeholder', 'Write Your Phone number'); //Change attribute
      phone.val(''); //Remove the value so that youll see the new attribute
      phone.addClass('red'); //Add a class so that placeholder will be red.
    } else {
      phone.removeClass('red');
    }
    if (company.val().trim() === '') {
      //Check if empty string
      company.attr('placeholder', 'Write Your Company Name'); //Change attribute
      company.val(''); //Remove the value so that youll see the new attribute
      company.addClass('red'); //Add a class so that placeholder will be red.
    } else {
      company.removeClass('red');
    }
    if (message.val().trim() === '') {
      //Check if empty string
      message.attr('placeholder', 'Write Your Company Name'); //Change attribute
      message.val(''); //Remove the value so that youll see the new attribute
      message.addClass('red'); //Add a class so that placeholder will be red.
    } else {
      message.removeClass('red');
    }
  });
});
