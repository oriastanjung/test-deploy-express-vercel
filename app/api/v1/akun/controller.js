const { StatusCodes } = require("http-status-codes");
const {
  createAkun,
  gantiStatusAkun,
  resetPassword,
  AkunSekolah,
} = require("../../../services/mongoose/akun");
const Akun = require("./model");
// create

const createCMSAkun = async (req, res, next) => {
  try {
    const result = await createAkun(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const gantiStatusAkunCMS = async (req, res, next) => {
  try {
    const result = await gantiStatusAkun(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const gantipasswordAkunCMS = async (req, res, next) => {
  try {
    const result = await resetPassword(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const result = await Akun.find();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};
const getAllUserSekolahDanDinas = async (req, res, next) => {
  try {
    const result = await Akun.find();
    const result1 = await AkunSekolah.find();
    res.json({ data: [...result, ...result1] });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createCMSAkun,
  gantiStatusAkunCMS,
  gantipasswordAkunCMS,
  getAllUser,
  getAllUserSekolahDanDinas
};
