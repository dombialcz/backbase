export const URLconfig = {
    protocol : "https://",
    user : "candidatex",
    password : "qa-is-cool",
    url : "qa-task.backbasecloud.com",
    apiurl : "https://qa-task.backbasecloud.com/api/users"
};

export const mainpageurl = `${URLconfig.protocol}${URLconfig.user}:${URLconfig.password}@${URLconfig.url}`;

export const APIconfig = {
    protocol : "https://",
    authorization : "Basic Y2FuZGlkYXRleDpxYS1pcy1jb29s",
    url : "qa-task.backbasecloud.com/api",
    port : "",
    users : "/users"
};

export const apiurlusers = `${APIconfig.protocol}${APIconfig.url}${APIconfig.port}${APIconfig.users}`;
