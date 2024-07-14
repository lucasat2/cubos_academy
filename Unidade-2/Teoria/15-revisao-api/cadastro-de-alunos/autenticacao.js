async function filtroAutenticacao(req, res, next) { 
  if (!req.query.senha || req.query.senha != "cubos123") {
    res.status(401).json({ mensagem: "A senha não foi informada ou está incorreta" });
  }
  next();
}

module.exports = filtroAutenticacao; 