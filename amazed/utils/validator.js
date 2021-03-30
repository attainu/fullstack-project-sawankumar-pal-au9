import validator from 'validator';

export const checkEmail = (str) => {
    return str && validator.isEmail(str);
  }

export const checkNumber = (num) => {
    return num && validator.isNumeric(num)
}

export const checkString = (str) => {
    return str && validator.isAlpha(str)
}