const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: "Something went wrong!!!, Please try again" });

  /* OR
    return res.status(500).json({ msg: err });
    */
};

module.exports = errorHandler;
