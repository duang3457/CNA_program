const db = wx.cloud.database();
var myVlu="";

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
	updateData(){
		//必须加一定索引
		//update更新指定索引值
		// db.collection("demolist").where({
		// 	email: "vfrf"
		// }).update({
		// 	data:{
		// 		email: "ZY"
		// 	}
		// }).then(res=>{
		// 	console.log(res)
		// })
		//set设置完只保留set设置的值，清空除_id\_openid之外的值
	// 	db.collection("demolist").doc("f18e14fa651d3b2800e4ecb0094a0cec").set({
	// 		data:{
	// 			email: "ZY"
	// 		}
	// 	}).then(res=>{
	// 		console.log(res)
	// 	})
	// },

	db.collection("demolist").doc("f18e14fa651d3b2800e4ecb0094a0cec").set({
		data:{
			email: "ZY"
		}
	}).then(res=>{
		console.log(res)
	})
},

	delData(){
		db.collection("demolist").doc("233d1379651d4e8505493df17901899c")
		.remove()
		.then(res=>{
			console.log(res)
		})
	},

	//控制台直接添加的数据（没有openid）无法写
	//只能写自身openid的记录
	//该云数据库权限已改成任何人可以读
	myInput(res){
		console.log(res)
		var vlu = res.detail.value;
		myVlu = vlu;
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})