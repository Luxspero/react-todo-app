const User = [
  {
    name: "Brilliant",
    email: "brilliant@gmail.com",
    password: "Password",
  },
  {
    name: "Agus Demo",
    email: "demo@gmail.com",
    password: "demo",
  },
];

const checkUser = (password, email) => {
  const user = User.find((user) => {
    return user.password === password && user.email === email;
  });
  if (user) {
    return { name: user.name, email: user.email };
  }
  return null;
};

export { checkUser };
