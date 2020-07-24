import UserType from '../../models/user_type.model'

export const deleteUserType = async(id_user_type) => {
    return await UserType.findByIdAndDelete(id_user_type)
};