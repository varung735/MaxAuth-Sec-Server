const asyncHandler = require('../../utils/programming/asyncHandler');
const customError = require('../../utils/error/customError');
const { success } = require('../../utils/error/consoleFonts');

module.exports = {
    Login: asyncHandler(async (req, res) => {
        const { _id } = req.project;

        res.json({
            success: true,
            message: 'Login'
        })
    }),
    Signup: asyncHandler(async (req, res) => {

    }),
    ForgotPassword: asyncHandler(async (req, res) => {

    }),
    ResetPassword: asyncHandler(async (req, res) => {

    }),
    VerifyEmail: asyncHandler(async (req, res) => {

    })
}