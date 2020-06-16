export default [
    {
        name: 'home',
        title: '首页',
        path: '/'
    },
    {
        name: 'nav1',
        title: '导航1',
        children: [
            {
                name: 'nav11',
                title: '导航1-1',
                path: 'nav1-1',
            },
            {
                name: 'nav12',
                title: '导航1-2',
                path: 'nav1-2',
            }
        ]
    }
]