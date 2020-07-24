import UserType from '../../models/user_type.model'

export const updateUserType = async(id, user_type, ) => {
    return await UserType.findByIdAndUpdate(id, user_type, { new: true });
};