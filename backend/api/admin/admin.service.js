const adminModel = require("./admin.model.js") ;

module.exports = {
  create: (data) => {
    return adminModel.Admin.create(data);
  },
  list: (email) => {
    return adminModel.Admin.findOne({ email: email });
  },
  updateToken: (token) => {
    return adminModel.Admin.findOneAndUpdate({ token: token });
  }
};
