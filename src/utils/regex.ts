export const regex = {
  positiveNumber: /^\d*(\.\d+)?$/,
  positiveIntegerNumber: /^\d+$/,
  positiveDecimalNumber: /^\d*\.\d+$/,

  // between -90 and 90
  latitude: /^-?([0-8]?[0-9]|90)(\.[0-9]{1,10})?$/,

  // between -180 and 90
  longitude: /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})?$/,

  email: /\S+@\S+\.\S+/,

  // xxx.xxx.xxx-xx
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,

  // xx.xxx.xxx/xxxx-xx
  cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,

  // xxxxx-xxx
  postal_code: /^[0-9]{5}-[0-9]{3}$/,

  // yyyy-MM-dd
  date: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,

  // HH:MM 24hr format
  time24: /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/,

  // HH:MM 12hr format
  time12: /^(0?[1-9]|1[0-2]):[0-5][0-9]$/,

  // Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
  passwordStrengthComplex:
    /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,

  // Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
  passwordStrengthModerate:
    /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,

  // url with http(s) protocol
  url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#()?&//=]*)/,

  // whatsapp +55xxxxxxxxxx
  whatsapp: /^\+?[1-9][0-9]{7,14}$/,

  // phone (DDD) 99999-9999
  phone: /\(([0-9]{2})\)\s?([0-9]{4,5})-([0-9]{4})$/,

  // file with pdf extension
  filePdf: /^(\w*)(.pdf)/,

  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi,
}
