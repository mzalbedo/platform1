const AV=require("../utils/av-weapp-min.js");

class Todo extends AV.Object{
  get content(){return this.get("content")}
  set content(value) { return this.set("content",value) }
  get done() { return this.get("done") }
  set done(value) { return this.set("done", value) }

}

AV.Object.register(Todo);
module.exports=Todo;
//以上调用app文件  注意这里是 register 不是 reqister