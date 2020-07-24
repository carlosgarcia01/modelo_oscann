import { connect } from "./database";
import { updateUserType } from "./controller/user_type/updateUserType";

connect();

async function main() {
    try {
        const userType = {
            name: "Admin",
        };
        const savedUserType = await updateUserType("5f1b1268449ba036e83ae44b", userType);
        console.log(savedUserType);
        return savedUserType;
    } catch (err) {
        console.log(err);
    }
}

main();