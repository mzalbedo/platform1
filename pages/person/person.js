const AV = require('../../utils/av-weapp-min.js');
const Todo = require('../../model/todo.js');
// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    draft: "",
    todos: [],

  },
  onReady: function() {


    //从服务器查询
    console.log("onReady is start");
    new AV.Query(Todo).find().then(todos => this.setData({
      todos
    }).catch(console.error));
  },
  updateDraft: function({
    detail: {
      value
    }
  }) {
    //测试
    // console.log('updtaeDraft');
    //console.log(value);

    this.setData({
      draft: value
    });
    //注意这里帮定数据要一定月wxml 一样 否则输入框里的值回不来
  },
  addTodo: function() {
    console.log('addTodo');
    // 查看用户登陆状态
    console.log(AV.User.current());

    //向服务器添加数据
    const todo = new Todo({
      content: this.data.draft,
      done: false,
    });
    //设置ACL 建立用户系统 这里设置权限 让不同人看到自己写的东西
    const acl = new AV.ACL();
    acl.setPublicReadAccess(false);
    acl.setPublicWriteAccess(false);
    acl.setReadAccess(AV.User.current(), true);
    acl.setWriteAccess(AV.User.current(), true);
    //ACL连接到todo
    todo.setACL(acl);
    //添加到网络服务器
    //添加刷新功能
    todo.save().then(
      todo => {
        this.setData({
          todos: [...this.data.todos, todo],
          //输入框置空
          draft: "",
        });

      },



    ).catch(console.error);
  },
})