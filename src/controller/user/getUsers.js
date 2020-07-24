import User from '../../models/user.model'

export const getUsers = async() => {
    return await User.find();
};