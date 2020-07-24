import User from '../../models/user.model'

export const getUser = async(id) => {
    const userReturn = await User.findById(id);
    return userReturn;
};