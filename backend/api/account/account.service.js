const accountModel = require("./account.model");

module.exports = {
  create: (data) => {
    return accountModel.Account.create(data);
  },
  list: (data) => {
    return accountModel.Account.findOne(data);
  },
  updateToken: (token) => {
    return accountModel.Account.findOneAndUpdate({ token: token });
  },
  find: ({}) => {
    return accountModel.Account.find({});
  },
  findOne: (data) => {
    return accountModel.Account.findOne(data);
  },
  findById: (id) => {
    return accountModel.Account.findById(id);
  },
  findByIdAndUpdate: (id, req) => {
    return accountModel.Account.findByIdAndUpdate(id, req);
  }
};
