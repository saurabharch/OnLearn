const connectDB = require('../mongoose.loader');
const { validateNotEmpty } = require('../../utils/testValidators.utils');

describe('Mongoose Loader Test Suite', () => {
  test('should validate connectDB not empty', () => {
    validateNotEmpty(connectDB);
  });
});