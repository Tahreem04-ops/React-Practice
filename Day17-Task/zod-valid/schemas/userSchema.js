const { z } = require("zod");

const userSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid Email"),

  age: z
    .number()
    .min(18, "Age must be at least 18")
});

module.exports = userSchema;