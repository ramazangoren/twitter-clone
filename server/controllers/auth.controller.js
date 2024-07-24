const signup = async (req, res) => {
  res.json({ data: "sign up controller" });
};
const login = async (req, res) => {
  res.json({ data: "login controller" });
};
const logout = async (req, res) => {
  res.json({ data: "log out controller" });
};

export { signup, login, logout };
