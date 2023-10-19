// components/xzs-product-item/xzs-product-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{
        picUrl:"",
        _id:"",
        type:"",
        title:"",
        name:"",
        value:"",
        clickNum:"",
        strTime:""
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickPro(e){
      // let id = e.currentTarget.dataset.id;
      // wx.navigateTo({
      //   url: '/pages/proDetail/proDetail?id='+id
      // })
      console.log(e);
    }
  }
})
