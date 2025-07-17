const asyncHandler = require('../../utils/programming/asyncHandler');
const customError = require('../../utils/error/customError');
const { db } = require('../../configurations/db_config');

module.exports = {
    Login: asyncHandler(async (req, res) => {
        const { _id, project_name } = req.project;
        const { email, password } = req.body;

        const user = await db.collection(`${project_name}-${_id}`).findOne({ email: email });

        if(password != user.password) {
            throw new customError('Invalid Credentials', 403);
        }

        res.status(200).json({
            success: true,
            message: 'Login',
            user
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