import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js"
import { AuthenticationHandlers } from "../../grpc/protos/authentication/Authentication"
import { LoginRequest__Output } from "../../grpc/protos/authentication/LoginRequest"
import { LoginResponse } from "../../grpc/protos/authentication/LoginResponse"
import { LogoutRequest__Output } from "../../grpc/protos/authentication/LogoutRequest"
import { LogoutResponse } from "../../grpc/protos/authentication/LogoutResponse"
import { SignupRequest__Output } from "../../grpc/protos/authentication/SignupRequest"
import { SignupResponse } from "../../grpc/protos/authentication/SignupResponse"

const authenticationHandlers: AuthenticationHandlers = {
  login: function (
    call: ServerUnaryCall<LoginRequest__Output, LoginResponse>,
    callback: sendUnaryData<LoginResponse>
  ): void {
    callback(null, { token: "aoiwerowier", status: "Success" })
  },
  logout: function (
    call: ServerUnaryCall<LogoutRequest__Output, LogoutResponse>,
    callback: sendUnaryData<LogoutResponse>
  ): void {
    throw new Error("Function not implemented.")
  },
  signUp: function (
    call: ServerUnaryCall<SignupRequest__Output, SignupResponse>,
    callback: sendUnaryData<SignupResponse>
  ): void {
    throw new Error("Function not implemented.")
  },
}
export { authenticationHandlers }
