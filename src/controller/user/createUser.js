import User from "../../models/user.model";

const createUser = async(user) => {
    const newUser = new User(user);
    const userReturn = await newUser.save();
    return userReturn;
};

export default createUser;