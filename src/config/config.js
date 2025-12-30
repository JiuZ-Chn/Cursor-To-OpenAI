module.exports = {
    port: process.env.PORT || 3010,
    proxy:{
        enabled: false,
        url: 'http://127.0.0.1:7890',
    },
    cursorClientVersion: process.env.CURSOR_CLIENT_VERSION || "2.2.17",
    //chatMode: 1 // 1 for ask, 2 for agent, 3 for edit
};
