import { NextRequest } from "next/server";
import { myPOST } from "./apiRoutesForServer";
import { RegisterReq, RegisterResp } from "./user-management-common/register";
import { MyResp } from "./apiRoutes";

const executeRegister = async (req: RegisterReq): Promise<MyResp<RegisterResp>> => {
    const resp: RegisterResp = {
        type: 'success'
    }
    return resp;
}

export async function POST(req: NextRequest) {
    return myPOST<RegisterReq, RegisterResp>(req, executeRegister);
}
