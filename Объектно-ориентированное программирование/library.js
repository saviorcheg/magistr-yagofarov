class Exam {
    _arr = [];  // исходный массив объектов из файла
    _tmp = [];  // его клон для хранения временных результатов
    constructor(file_name, field) {
        this._arr = require(file_name); // исходный массив объектов
        this.restore(); // клонирование _arr в _tmp
    }
    restore = () => {
        function deepCopy(src) {
            let target = Array.isArray(src) ? [] : {};
            for (let key in src) {
              let v = src[key];
              if (v) {
                if (typeof v === "object") {
                  target[key] = deepCopy(v);
                } else {
                  target[key] = v;
                }
              } else {
                target[key] = v;
              }
            }          
            return target;
        }
        this._tmp = deepCopy(this._arr)
        return this._tmp;
    }
    select = (...fields) => {
        // выбрать из объектов в массиве только определённые поля
        this._tmp = JSON.parse(JSON.stringify(this._arr, fields));
        return this._tmp;
    }
    orderByRec = (fields, directs) => { 
        const sorting = (a, b, fields, direct) => { 
            let res = 0; 
            const fieldArr = fields.split("."); 
            let field = fieldArr.shift(); 
            if (fieldArr.length > 0) { // если ещё есть поля
                res = sorting(a[field], b[field], fieldArr.join("."), direct); 
            } else { //иначе сортируем
                res = a[field] > b[field] ? 1 : -1; 
            }  
            return direct == "desc" ? -res : res; 
        }; 
 
        const arrRecursion = (arr, fields, directs) => { 
            if (fields.length == 0) { 
                return arr; 
            } 
            const path = fields.shift(); // что сортируем
            const direct = directs.shift(); // как сортируем
            console.log(path);
            console.log(direct);
            arr.sort((a, b) => { 
                return sorting(a, b, path, direct); 
            }); 
            return arrRecursion(arr, fields, directs); 
        }; 
        this._tmp = arrRecursion(this._tmp, fields, directs); 
        return this._tmp; 
    };
    insert = (obj) => {
        this._tmp = this._arr;
        this._tmp.push(obj);
        return this._tmp;
    }
    update = (id, key, value) => {
        this._tmp = this._arr;

        const newPosts = this._tmp.map((post) => (
            post.id === id
              ? { ...post, lastName: value } // Меняет только lastName
              : post
          ));

        return newPosts;
    }
    delete = (num) => {
        this._tmp = this._arr;
        this._tmp.splice(num, 1);
        return this._tmp;
    }
}

module.exports = {
    Exam
}