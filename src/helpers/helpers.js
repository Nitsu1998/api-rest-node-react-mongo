import bcrypt from "bcrypt";

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

function isValidPassword(reqPassword, dbPassword) {
  return bcrypt.compareSync(reqPassword, dbPassword);
}

export { hashPassword, isValidPassword };
