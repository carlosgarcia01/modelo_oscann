import User from '../../models/user.model'

export const deleteUser = async(id_user) => {
    return await User.findByIdAndDelete(id_user)
};