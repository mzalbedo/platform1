const AV = require('../../utils/av-weapp-min.js');
const Todo = require('../../model/todo.js');
// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    draft:"",
    todos:[],
    
  },
  onReady:function(){
    console.log("onReady is start");
    new AV.Query(Todo).find().then(todos => this.setData({ todos}).catch(console.error));
  },
  updateDraft: function({
    detail: {
      value
    }
  }) {
    console.log('updtaeDraft');
    console.log(value);
    this.setData({
      draft: value
    });
    //注意这里帮定数据要一定月wxml 一样 否则输入框里的值回不来
  },
  addTodo: function() {
    console.log('addTodo');
    new Todo({
      content: this.data.draft,
      done: false,
    }).save().then(console.log).catch(console.error);
  },
})