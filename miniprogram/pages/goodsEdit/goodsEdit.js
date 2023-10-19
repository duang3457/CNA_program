// pages/goodsEdit/goodsEdit.js
const db=wx.cloud.database();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    goodsList:[
      { title:"商品名称示例1",
        desc:"示例描述1",
        pic:"这里放图片1URL"},
      { title:"商品名称示例2",
        desc:"示例描述2",
        pic:"这里放图片2URL"}
    ],
    goodsNam:"",

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
    this.getData()
  },

  //得到数据库中的值
  //放入onLoad里
  getData(){
    console.log(this.data.goodsList);
    db.collection('goodsList').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条

      console.log(res.data);
      
      // this.setData({
      //   goodsNam: goodsNam
      // })
    })
  },
  //添加进数据库
  // addData(){
  //   let goodsName = this.data.goodsNam;
  //   let arr = this.data.listArr;
  //   db.collection('goodsList').add({
  //     // data 字段表示需新增的 JSON 数据
  //     data: {
  //       description: "learn cloud database",
  //       due: new Date("2018-09-01"),
  //       tags: [
  //         "cloud",
  //         "database"
  //       ],
  //       location: new db.Geo.Point(113, 23),
  //       done: false
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  // },


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