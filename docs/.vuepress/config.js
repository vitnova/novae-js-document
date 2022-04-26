const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
	title: 'Novae',
	description: '用以构建界面，开箱即用的JavaScript框架',
    theme: defaultTheme({
        navbar: [{
            text: '指南',
			link: '/guide/'
        },{
            text: '文档',
			link: '/documents/'
        },{
            text: '关于',
			link: '/about/'
        }],
		sidebar: {
			'/documents/': [
				{
					text: '文档',
					collapsible: false,
					children: ['/documents/README.md', '/documents/novae.md', '/documents/components.md', '/documents/utils.md', '/documents/ssr.md', '/documents/router.md', '/documents/accessibility.md', '/documents/load.md'],
				}
			],
			'/guide/': [
				{
					text: '指南',
					collapsible: false,
					children: ['/guide/README.md']
				}
			]
		}
    }),
	plugins: [
		//searchPlugin()
	]	
}