function showPassword() {
  const passwordFieldElement = document.getElementById('password');
  if (passwordFieldElement.type === 'password') {
    passwordFieldElement.type = 'text';
  } else {
    passwordFieldElement.type = 'password';
  }
}
