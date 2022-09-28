const bcrypt = require('bcrypt');

export const generatePassword = async plaintext => {
  try {
    return await bcrypt.hash(plaintext, 10);
  } catch (e) {
    return null;
  }
};
