import { NextRequest } from "next/server";
import { myPOST } from "./apiRoutesForServer";
import { RegisterReq, RegisterResp } from "./user-management-common/register";
import { ApiResp } from "./user-management-common/apiRoutesCommon";

const executeRegister = async (req: RegisterReq): Promise<ApiResp<RegisterResp>> => {
    const resp: RegisterResp = {
        type: 'success'
    }
    return resp;
}

export async function POST(req: NextRequest) {
    return myPOST<RegisterReq, RegisterResp>(req, executeRegister);
}
