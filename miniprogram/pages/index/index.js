const db = wx.cloud.database();



Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		dataObj: "11"
	},

	getData(){
		// db.collection("demolist").doc("233d1379651cb24b053a6e633e8f869b").get({
		// 	success:res=>{
		// 		console.log(res)
		// 		this.setData({
		// 			dataObj: res.data
		// 		})
		// 	}
		// })
		db.collection("demolist").doc("233d1379651cb24b053a6e633e8f869b").get()
		.then(res=>{
			this.setData({
				dataObj: res.data,
			}),
			console.log(this.data.dataObj),
			console.log(res)
		})
	},

	addData(){
		wx.showLoading({
			title: '数据加载中...',
			mask: true
		})
		db.collection("demolist").add({
			data: {
				name: "qwe",
				tele: "dec",
				email: "vfrf"
			}
		}).then(res=>{
			console.log(res)
			wx.hideLoading()
		})
	},

	//提交表单添加进数据库
	btnSub(res){
		// console.log(res)
		//第一种最笨的方法
		// var name = res.detail.value.name;
		// var tele = res.detail.value.tele;
		// var email = res.detail.value.email;
		// console.log(name, tele, email)

		//第二种方法解构
		// var {name, tele, email} = res.detail.value;
		// db.collection("demolist").add({
		// 	data: {
		// 		name: name,
		// 		tele: tele,
		// 		email: email
		// 	}
		// }).then(res=>{
		// 	console.log(res)
		// })
		// console.log(name, tele, email)

		//第三种方法直接传对象
		var resvalue = res.detail.value
		console.log(resvalue)
		db.collection("demolist").add({
			data: resvalue
		}).then(res=>{
			console.log(res)
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		
	}
})