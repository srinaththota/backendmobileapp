const { userLogin } = require('../services')
exports.userLogin = async (req, res) => {
    try {
      const result = await userLogin(req.body);
      if (result.status) {
        res.send({ uuid: result.uuid, token: result.token });
      }
      else {
        res.send({ message: result.message })
      }
    }
    catch (e) {
      console.log(e);
      
    }
  };