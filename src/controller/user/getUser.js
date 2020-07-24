import User from '../../models/user.model'

export const getUser = async(id) => {
    const userReturn = await User.findOne({ "id_user": id });
    return userReturn;
};