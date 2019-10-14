 #### 查找当前对象最里层的对象
 ```       
findChildItem: function (json) {
    if (json.children.length === 0) {
        return json;
    }
    if (json.muti) {
        var res = this.findChildItem(json.muti)
        if (res != undefined) {
            return res;
        }
    } else {
        var res = this.findChildItem(json.children[0])
        if (res != undefined) {
            return res;
        }
    }
},
```
#### 查找对象的爷爷级
```        
findParentArrItem: function (json, node) {
    if (json.children == node) {
        return json;
    }
    if (json.children != undefined && json.children.length > 0) {
        for (let i = 0; i < json.children.length; i++) {
            var res = this.findParentArrItem(json.children[i], node);
            if (res != undefined) {
                return res;
            }
        }
    }
    if (json.muti) {
        if (json.muti.children != undefined && json.muti.children.length > 0) {
            for (let i = 0; i < json.muti.children.length; i++) {
                var res = this.findParentArrItem(json.muti.children[i], node);
                if (res != undefined) {
                    return res;
                }
            }
        }
    }
},
```   
#### 查找当前对象的父级
```        
findParentItem: function (json, node) {
    for (var i = 0; i < json.length; i++) {
        var _item = json[i];
        if (_item == node) {
            return json;
        }
        if (_item.children != undefined && _item.children.length > 0) {
            var res = this.findParentItem(_item.children, node);
            if (res != undefined) {
                return res;
            }
        }
        if (_item.muti) {
            if (_item.muti.children != undefined && _item.muti.children.length > 0) {
                var res = this.findParentItem(_item.muti.children, node);
                if (res != undefined) {
                    return res;
                }
            }
            if (_item.muti === node) {
                return json
            }
        }
    }
},
```        
#### 查找当前对象
```     
findItem: function (json, id) {
    for (var i = 0; i < json.length; i++) {
        var _item = json[i];
        if (_item.id == id) {
            return _item;
        }
        if (_item.children != undefined && _item.children.length > 0) {
            var res = this.findItem(_item.children, id);
            if (res != undefined) {
                return res;
            }
        }
        if (_item.muti) {
            if (_item.muti.children != undefined && _item.muti.children.length > 0) {
                var res = this.findItem(_item.muti.children, id);
                if (res != undefined) {
                    return res;
                }
            }
            if (_item.muti.id === id) {
                return _item.muti
            }
        }
    }
},
```   
#### 查找muti,转换为数组
```        
findMuti: function (obj, parentAll) {
    var arr = parentAll || []
    if (obj.children && obj.children.length) {
        obj.children.forEach(item=> {
            if (item.muti) {
                var data = JSON.parse(JSON.stringify(item.muti))
                arr.push(data)
            }
            return this.findMuti(item, arr)
        })
    }
    return arr
},
```