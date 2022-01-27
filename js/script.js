const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$(document).ready(() => {
  const name = $('#name');
  const email = $('#email');
  const phone = $('#phone');
  const company = $('#company');
  const message = $('#message');
  const send = $('#send');
  const reset = $('#reset');

  let phone_focused = false;

  phone.focus(function () {
    phone_focused = true;
  });

  phone.keypress(function (e) {
    phone_focused = true;
    if ($(this).val().length <= 8 && $(this).val().length <= 10) {
      $('#phone-error').show();
    } else {
      $('#phone-error').hide();
      phone.removeClass('red');
      phone.removeClass('border-red');
    }
  });

  $('#form-id').submit(function (e) {
    e.preventDefault(); //Prevent the form on sending
    //Add event listener on form and not on btn click
    if ($('#name').val().trim() === '') {
      //Check if empty string
      $('#name').attr('placeholder', "First name can't be empty"); //Change attribute
      $('#name').val(''); //Remove the value so that youll see the new attribute
      $('#name').addClass('red'); //Add a class so that placeholder will be red.
      name.addClass('border-red');
    } else {
      name.removeClass('red');
    }
    if (email.val().trim() === '') {
      //Check if empty string
      email.attr('placeholder', 'Write an Email (example@mail.com)'); //Change attribute
      email.val(''); //Remove the value so that youll see the new attribute
      email.addClass('red'); //Add a class so that placeholder will be red.
      email.addClass('border-red');
    } else if (!email.val().match(emailRegex)) {
      $('#email-error').show();
    } else if (email.val().length > 0 && email.val().match(emailRegex)) {
      email.removeClass('red');
      email.removeClass('border-red');
      $('#email-error').hide();
    }
    if (phone.val().trim() === '') {
      //Check if empty string
      phone.attr('placeholder', 'Write Your Phone number'); //Change attribute
      phone.val(''); //Remove the value so that youll see the new attribute
      phone.addClass('red'); //Add a class so that placeholder will be red.
      phone.addClass('border-red');
    } else {
      phone.removeClass('red');
      phone.removeClass('border-red');
      $('#phone-error').toggle();
    }
    if (company.val().trim() === '') {
      //Check if empty string
      company.attr('placeholder', 'Write Your Company Name'); //Change attribute
      company.val(''); //Remove the value so that youll see the new attribute
      company.addClass('red'); //Add a class so that placeholder will be red.
      company.addClass('border-red');
    } else {
      company.removeClass('red');
    }
    if (message.val().trim() === '') {
      //Check if empty string
      message.attr('placeholder', 'Write Your Message'); //Change attribute
      message.val(''); //Remove the value so that youll see the new attribute
      message.addClass('red'); //Add a class so that placeholder will be red.
      message.addClass('border-red');
    } else {
      message.removeClass('red');
    }
  });
});
