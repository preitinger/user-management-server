import { NextRequest, NextResponse } from "next/server";
import { ApiResp } from "./user-management-common/apiRoutesCommon";

export async function apiPOST<MyReq, MySuccessResp>(request: NextRequest, executor: (req: MyReq) => Promise<ApiResp<MySuccessResp>>): Promise<NextResponse<ApiResp<MySuccessResp>>> {
    type MyResp = ApiResp<MySuccessResp>;

    let myReq: MyReq;
    try {
        myReq = await request.json();
    } catch (reason) {
        console.log('exception in json(): ', reason, 'end of exception in json()');
        const resp: MyResp = {
            type: 'error',
            error: JSON.stringify(reason)
        }
        return NextResponse.json(resp);
    }

    try {
        const mySuccessResp = await executor(myReq);
        // console.log('length of stringified response: ', JSON.stringify(mySuccessResp).length);
        // console.log('returning result from executor: ', JSON.stringify(mySuccessResp));
        return NextResponse.json(mySuccessResp);
    } catch (reason) {
        console.error('caught in executor: ', reason);
        const resp: MyResp = {
            type: 'error',
            error: JSON.stringify(reason)
        }
        return NextResponse.json(resp);
    }
}
