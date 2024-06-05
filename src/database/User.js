const User = [
  {
    name: "Brilliant",
    email: "brilliant@gmail.com",
    password: "Password",
  },
];

const checkUser = (password, email) => {
  return User.find((user) => {
    return user.password === password && user.email === email;
  });
};

export { checkUser };
