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
		}
	}
})