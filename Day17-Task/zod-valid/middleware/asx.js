const userSchema = require("../schemas/userSchema");

const validateUser = (req, res, next) => {

  const result = userSchema.safeParse(req.body);

  if (!result.success) {

    return res.status(400).json({
      success: false,
      errors: result.error.issues
    });

  }

  req.body = result.data;

  next();

};

module.exports = validateUser;