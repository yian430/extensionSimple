var app = new Vue({
	el: '#app',
	data: {
		
	},
	beforeCreate() {
		
	},
	beforeMount() {
		
	},
	beforeDestroy() {
		
	},
	methods: {
		setCookie() {
			// chrome.cookies.getAll({
			// }, (cookies) => {
			// 	url: "https://blog.csdn.net/"
			// 	cookies.forEach(item => {
			// 		console.log(item)
			// 	})
			// })
			chrome.cookies.set({
				url: 'https://blog.csdn.net/',
				name: 'yian430',
				value: 'yian430',
				httpOnly: true
			})
			// chrome.cookies.remove({
			// 	url: "https://blog.csdn.net/",
			// 	name: 'yian430'
			// })
		},
		changeCookie() {
			chrome.cookies.set({
				url: 'https://blog.csdn.net/',
				name: 'yian430',
				value: '3141592653589'
			})
		},
		alertCookie() {
			const cookie = chrome.cookies.get({
				url: 'https://blog.csdn.net/',
				name: 'yian430'
			}, (cookie) => {
				alert(cookie.value);
			});
		},
		newTab() {
			chrome.tabs.create({
				url: 'https://www.baidu.com'
			}, () => {
				
			})
		},
		newAndDestoryTab() {
			chrome.tabs.create({
				url: 'https://www.baidu.com'
			})
			chrome.tabs.remove(3, () => {
				
			})
		},
		tabids() {
			
				// 获取所有的页签
				chrome.tabs.getAllInWindow(null, function(tabs){
					for (var i = 0; i < tabs.length; i++) {
						// 在控制台打印出页签的tabid
						console.log(tabs[i].id);
						// 通过tabid向每一个页签发送消息
						chrome.tabs.sendMessage(tabs[i].id, {type: 'xxx'});
					}
				});
			

		}
	}
})