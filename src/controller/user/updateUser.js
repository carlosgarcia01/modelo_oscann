import User from '../../models/user.model'

export const updateUser = async(id, user, ) => {
    return await User.findByIdAndUpdate(id, user, { new: true });
};