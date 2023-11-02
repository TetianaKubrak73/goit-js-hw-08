import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function loadFormData() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}
loadFormData();

const throttledSaveFormData = throttle(saveFormData, 500);
emailInput.addEventListener('input', throttledSaveFormData);
messageTextarea.addEventListener('input', throttledSaveFormData);

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailInput.value.trim() || !messageTextarea.value.trim()) {
        alert('Будь ласка, заповніть усі поля форми');
        return;
    }
  localStorage.removeItem('feedback-form-state'); 
  console.log('Form submitted with data:');
  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });
  messageTextarea.value = '';
  emailInput.value = '';
});