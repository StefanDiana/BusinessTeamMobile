var validFields = true;

function validateForm() {
  var name_input = document.getElementById("inputName");
  var email_input = document.getElementById("inputEmail");
  var form_subject_input = document.getElementById("inputSubject");
  var form_message_input = document.getElementById("inputMessage");

  validateField(name_input);
  validateField(email_input);
  validateField(form_subject_input);
  validateField(form_message_input);
}

function validateField(field) {
  if (!field.value) {
    field.classList.add('error');
    validFields = false;
  } else {
    field.classList.remove('error');
  }
}

var form = document.getElementById("contact_form");

form.addEventListener('submit', event => {
  event.preventDefault();

  validateForm();

  if (validFields) {
    form.submit();
  }
});
