const { isEmail } = require("validator");
module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    userid: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: (value) => isEmail(value),
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: String,
    contact: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isLoggedIn: Boolean,
    uuid: String,
    accesstoken: String,
    coupens: [],
    bookingRequests: [],
  });
  userSchema.pre("save", function (next) {
    this.username = this.first_name + this.last_name;
    next();
  });
  const User = mongoose.model("user", userSchema);

  User.insertMany([
    {
      userid: 1,
      email: "a@b.com",
      first_name: "user1",
      last_name: "user1",
      username: "test",
      contact: "9898989898",
      password: "test@123",
      role: "user",
      isLoggedIn: false,
      uuid: "",
      accesstoken: "",
      coupens: [
        {
          id: 101,
          discountValue: 101,
        },
        { id: 102, discountValue: 102 },
      ],
      bookingRequests: [
        {
          reference_number: 29783,
          coupon_code: 101,
          show_id: 1003,
          tickets: [1, 3],
        },
        {
          reference_number: 19009,
          coupon_code: 201,
          show_id: 1002,
          tickets: [1],
        },
      ],
    },
    {
      userid: 2,
      email: "p@q.com",
      first_name: "user2",
      last_name: "user2",
      username: "user",
      contact: "9898989898",
      password: "user@123",
      role: "admin",
      isLoggedIn: false,
      uuid: "",
      accesstoken: "",
      coupens: [
        {
          id: 103,
          discountValue: 103,
        },
        {
          id: 104,
          discountValue: 104,
        },
      ],
      bookingRequests: [
        {
          reference_number: 29783,
          coupon_code: 101,
          show_id: 1003,
          tickets: [1, 3],
        },
        {
          reference_number: 19009,
          coupon_code: 201,
          show_id: 1002,
          tickets: [1],
        },
      ],
    },
  ]);

  return User;
};
