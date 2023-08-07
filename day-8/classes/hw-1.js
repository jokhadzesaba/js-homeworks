class Validator {
  isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  isDomain(domain) {
    return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain);
  }
  isDate(date) {
    return /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])\.\d{4}$/.test(date);
  }
  isPhone(number) {
    return /^(?:\+995\s?)?(?:5\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/.test(number); //georgian number +995 not necessary
  }
}
const validator = new Validator();
console.log(validator.isDate("2020.05.20"));