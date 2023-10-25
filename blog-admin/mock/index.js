export default [
    {
        url: "api/checkCode",
        method: "get",
        statusCode: 200,
        response:{
            code:200,
            message:"验证码",
            data:{
                content:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCA"
            }
        }

    },
    {
        url: "/mock/login", // 模拟登录的链接
        method: "get", // 请求方式
        timeout: 3000, // 超时时间
        statusCode: 200, // 返回的http状态码
        response: { // 返回的结果集
            code: 200,
            message: "登录",
            data: {
                content: "登录成功"
            },
        },
    },
  {
        url: "/mock/getMenuList", // 模拟登录的链接
        method: "get", // 请求方式
        timeout: 3000, // 超时时间
        statusCode: 200, // 返回的http状态码
        response: { // 返回的结果集
            code: 200,
            message: "获取菜单",
            data: {
                content: "获取菜单成功"
            },
        },
    },
]