import UserType from '../../models/user_type.model'

export const getUserType = async(id) => {
    const userTypeReturn = await UserType.findById(id);
    return userTypeReturn;
};