const validateUsername = (input) => {
  const regexUsername = /[a-z]{8}/;
  return regexUsername.test(input);
}

const validataPassword = (input) => {
  const regrexPassword = /[\w\W\d]{8}/;
  return regrexPassword.test(input);
}

console.log(validateUsername('zeronull'));
console.log(validateUsername('useroke'));
console.log(validataPassword('qazW_123'));