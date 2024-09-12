const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

exports.checkId = (req, res, next, val) => {
  if (Number(req.params.userId) > users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  next();
};

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: users,
  });
};

exports.getUser = (req, res) => {
  const id = Number(req.params.userId);
  const data = users.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data,
  });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/../data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: newUser,
      });
    }
  );
};
