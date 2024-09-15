const db = require('./../models');

const User = db.userModel;

exports.checkId = async (req, res, next, val) => {
  const users = await User.findAll({});

  if (Number(req.params.userId) > users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  next();
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});

    res.status(200).json({
      status: 'success',
      result: users.length,
      data: users,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = Number(req.params.userId);
    const user = await User.findOne({ where: { user_id: id } });

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await User.update(req.body, { where: { user_id: id } });

    res.status(201).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.userId;
    await User.destroy({ where: { user_id: id } });

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', error: err.message });
  }
};
