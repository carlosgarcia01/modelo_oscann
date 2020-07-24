import UserType from "../../models/user_type.model";

const createUserType = async(userType) => {
    const newUserType = new UserType(userType);
    const userTypeReturn = await newUserType.save();
    return userTypeReturn;
};

export default createUserType;