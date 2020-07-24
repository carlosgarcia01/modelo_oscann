import UserType from '../../models/user_type.model'

export const getUserType = async(id) => {
    const userTypeReturn = await UserType.findOne({ "id_user_type": id });
    return userTypeReturn;
};