class AuthController {
  async registerController(req, res) {
    res.status(201).json(req.body.username);
  }

  async failRegisterController(req, res) {
    res.status(403).json({ message: "User already exist" });
  }

  async loginController(req, res) {
    res.json(req.user);
  }

  async failLoginController(req, res) {
    res.status(401).json({ message: "Invalid credentials" });
  }
 
  async logoutController(req, res) {
    const user = req.user.username
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.send(`See you soon, ${user}`);
    });
  }
}

const authController = new AuthController();
export default authController;
