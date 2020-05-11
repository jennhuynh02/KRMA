// need more work

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTreasureInput(data) {
  let errors = {};

  data.treasureUrl = validText(data.treasureUrl) ? data.treasureUrl : "";

  if (Validator.isEmpty(data.treasureUrl)) {
    errors.treasureUrl = "Please add sometime nice";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}