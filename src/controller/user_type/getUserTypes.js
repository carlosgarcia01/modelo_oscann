import UserType from '../../models/user_type.model'

export const getUserTypes = async() => {
    return await UserType.find();
};