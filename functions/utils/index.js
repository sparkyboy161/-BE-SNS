module.exports.customFunction = {
  isEmpty: function (string) {
    if (string.trim() === "") return true;
    else return false;
  },
  isEmail: function (email) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(regEx)) return true;
    else return false;
  },
};
