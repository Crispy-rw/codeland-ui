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

  // Validate Phone input on change
  phone.keydown(function (event) {
    if (event.shiftKey == true) {
      event.preventDefault();
    }

    if (
      (event.keyCode >= 48 && event.keyCode <= 57) ||
      (event.keyCode >= 96 && event.keyCode <= 105) ||
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      event.keyCode == 37 ||
      event.keyCode == 39 ||
      event.keyCode == 46 ||
      event.keyCode == 190
    ) {
      if (testPhoneLen()) {
        $('#phone-error').css('visibility', 'visible');
        phone.addClass('border-red');
        phone.addClass('red');
      } else {
        phone.removeClass('red');
        $('#phone-error').css('visibility', 'hidden');
      }
    } else {
      event.preventDefault();
    }
  });

  $('#reset').on('click', function (evt) {
    evt.preventDefault();
    resetName();
    resetPhone();
    resetCompany();
    resetMessage();
    resetEmail();
  });

  // Validate Form on submit
  $('#send').on('click', function (e) {
    e.preventDefault(); //Prevent the form on sending
    //Add event listener on form and not on btn click
    if (testName()) {
      //Check if empty string
      $('#name').attr('placeholder', "First name can't be empty"); //Change attribute
      $('#name').val(''); //Remove the value so that youll see the new attribute
      $('#name').addClass('red'); //Add a class so that placeholder will be red.
      $('#name').addClass('border-red');
    } else {
      $('#name').removeClass('red');
    }
    if (testEmail()) {
      //Check if empty string
      email.attr('placeholder', 'Write an Email (example@mail.com)'); //Change attribute
      email.val(''); //Remove the value so that youll see the new attribute
      email.addClass('red'); //Add a class so that placeholder will be red.
      email.addClass('border-red');
    } else if (testEmailRegex()) {
      $('#email-error').css('visibility', 'visible');
    } else if (!testEmail() && !testEmailRegex()) {
      email.removeClass('red');
      $('#email-error').css('visibility', 'hidden');
    }
    if (testPhone()) {
      //Check if empty string
      phone.attr('placeholder', 'Write Your Phone number'); //Change attribute
      phone.val(''); //Remove the value so that youll see the new attribute
      phone.addClass('red'); //Add a class so that placeholder will be red.
      phone.addClass('border-red');
    } else if (testPhoneLen()) {
      $('#phone-error').css('visibility', 'visible');
    } else {
      phone.removeClass('red');
      $('#phone-error').css('visibility', 'hidden');
    }
    if (testCompany()) {
      //Check if empty string
      company.attr('placeholder', 'Write Your Company Name'); //Change attribute
      company.val(''); //Remove the value so that youll see the new attribute
      company.addClass('red'); //Add a class so that placeholder will be red.
      company.addClass('border-red');
    } else {
      company.removeClass('red');
    }
    if (testMessage()) {
      //Check if empty string
      message.attr('placeholder', 'Write Your Message'); //Change attribute
      message.val(''); //Remove the value so that youll see the new attribute
      message.addClass('red'); //Add a class so that placeholder will be red.
      message.addClass('border-red');
    } else {
      message.removeClass('red');
    }
    if (
      !testCompany() &&
      !testEmail() &&
      !testEmailRegex() &&
      !testMessage() &&
      !testPhone() &&
      !testPhone() &&
      !testName()
    ) {
      alert(
        `Name: ${name.val()} \n Phone: ${phone.val()} \n Email: ${email.val()} \n Company: ${company.val()} \n Message: ${message.val()}`
      );
      resetName();
      resetPhone();
      resetCompany();
      resetMessage();
      resetEmail();
    }
  });

  //Reset function
  function resetName() {
    name.removeClass('red');
    name.removeClass('border-red');
    name.val('');
    name.attr('placeholder', 'Name'); //Change attribute
  }

  function resetMessage() {
    message.removeClass('red');
    message.removeClass('border-red');
    message.val('');
    message.attr('placeholder', 'Message'); //Change attribute
  }

  function resetPhone() {
    phone.removeClass('red');
    phone.removeClass('border-red');
    phone.val('');
    phone.attr('placeholder', 'Phone'); //Change attribute
    $('#phone-error').css('visibility', 'hidden');
  }

  function resetCompany() {
    company.removeClass('red');
    company.removeClass('border-red');
    company.val('');
    company.attr('placeholder', 'Company'); //Change attribute
  }

  function resetEmail() {
    email.removeClass('red');
    email.removeClass('border-red');
    email.val('');
    email.attr('placeholder', 'Email'); //Change attribute
    $('#email-error').css('visibility', 'hidden');
  }

  function testName() {
    if (name.val().trim() === '') return true;
    else return false;
  }

  function testCompany() {
    if (company.val().trim() === '') return true;
    else return false;
  }

  function testMessage() {
    if (message.val().trim() === '') return true;
    else return false;
  }

  function testEmail() {
    if (email.val().trim() === '') {
      return true;
    } else {
      return false;
    }
  }

  function testEmailRegex() {
    if (!email.val().match(emailRegex)) {
      return true;
    } else {
      return false;
    }
  }

  function testPhone() {
    if (phone.val().trim() === '') {
      return true;
    } else {
      return false;
    }
  }

  function testPhoneLen() {
    if (
      phone.val().length >= 0 &&
      (phone.val().length < 7 || phone.val().length > 9)
    ) {
      return true;
    } else {
      return false;
    }
  }
});
