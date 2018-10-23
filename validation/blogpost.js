const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBlogPostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.topics = !isEmpty(data.topics) ? data.topics : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (!Validator.isLength(data.description, { min: 10, max: 300 })) {
    errors.description = 'Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Text field is required';
  }
  if (Validator.isEmpty(data.topics)) {
    errors.topics = 'Text field is required';
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = 'Text field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
