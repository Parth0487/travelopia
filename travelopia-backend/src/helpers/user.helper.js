let Users = require("../models/user.model");

class Userhelper {
  async addRecord(body) {
    let item = await Users.create({ ...body });
    return item.toJSON();
  }

  async getRecords() {
    return await Users.find({}).sort({ _id: -1 });
  }

  async findByEmail(email) {
    return await Users.find({ email });
  }
}

module.exports = new Userhelper();
