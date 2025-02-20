import userModel from "../models/user.model.js";

export const createUser = async ({ username, email, password }) => {

    if (!username || !email || !password) {
        throw new Error("All fields are required");
    }

    const hashPassword = await user.hashPassword(password);

    try {
        const user = await userModel.create({
            username,
            email,
            password: hashPassword
        });
        console.log(user);
    
        return user;
    } catch (error) {
        throw new Error(error.message);
        
    }


}