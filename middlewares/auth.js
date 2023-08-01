function ensureToken(req, res, next) {
  const bearerHeader = req.header["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).send("Sin Autorización");
  }
}
