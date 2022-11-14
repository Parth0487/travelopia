var userHelper = require("../helpers/user.helper");
const responseHelper = require("../utils/response.helper");

class Users {
  // Adds a record into the database
  async addRecord(req, res) {
    try {
      // We can add a validator to validate the incoming body object (Use JOI)

      // Validate if the email exsts or not
      let alreadyExistItem = await userHelper.findByEmail(req.body.email);

      if (alreadyExistItem && alreadyExistItem.length) {
        throw "EMAIL_ALREADY_EXISTS";
      } else {
        let item = await userHelper.addRecord(req.body);
        responseHelper.success(res, "SUCCESS", item);
      }
    } catch (error) {
      console.log("ERROR: ", error);
      responseHelper.error(res, error, {});
    }
  }

  // Fetches the total records
  async getRecords(req, res) {
    try {
      let items = await userHelper.getRecords();
      responseHelper.success(res, "SUCCESS", items);
    } catch (error) {
      console.log("ERROR: ", error);
      responseHelper.error(res, error, {});
    }
  }
}

module.exports = new Users();
