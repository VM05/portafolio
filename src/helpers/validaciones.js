export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validate = regex.test(email);
  return validate;
};

export const isFormEmpty = (obj) => Object.values(obj).includes('');
