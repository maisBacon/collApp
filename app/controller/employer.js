function SayHello(req, res, next) {
  throw new Error('Errou !!!!');
  // res.status(200).send({ messagem: 'foi' });
  next();
}

module.exports = SayHello;
