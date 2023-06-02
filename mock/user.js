const Mock = require('mockjs')

Mock.mock('/api/user/login', 'post', req => {
    const data = JSON.parse(req.body).body
    return {
        header: {
            code: 0,
        },
        body: {
            userId: '001',
            name: data.name,
            avatar: 'https://p3-passport.byteimg.com/img/user-avatar/bbe6093b806139ffe4ab0c627ac356e2~100x100.awebp'
        }
    }
})

Mock.mock('/api/user/logout', 'get', () => {
    return {
        header: {
            code: 0,
        },
        body: {},
    }
})