import userModel from "../models/user.model.js";

export const createUser = async ({ username, email, password }) => {

    if (!username || !email || !password) {
        throw new Error("All fields are required");
    }

    const hashPassword = await userModel.hashPassword(password);

    try {
        const user = await userModel.create({
            username,
            email,
            password: hashPassword
        });

        return user;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }


}