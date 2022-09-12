export const LoginStart = (userCredentials:any) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user:any)=>({
    type: "LOGIN_SUCCESS",
    payload:user,
})

export const LoginFailure = ()=>({
    type: "LOGIN_FAILURE"
})

