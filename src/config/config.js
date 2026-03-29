module.exports = {
    port: process.env.PORT || 3010,
    cursorClientVersion: process.env.CURSOR_CLIENT_VERSION || '2.6.21',
    proxy:{
        enabled: false,
        url: 'http://127.0.0.1:7890',
    },
    //chatMode: 1 // 1 for ask, 2 for agent, 3 for edit
};
