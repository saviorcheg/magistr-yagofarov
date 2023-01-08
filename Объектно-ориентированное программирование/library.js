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
    orderBy = (fields, directs) => {
        this._tmp = this._arr;
        const comparator = (a, b, fields, directs) => {
            let dict = { 'asc': +1, 'desc': -1 };
            let d = dict[directs[0]], f = fields[0];
        
            // 1 точка останова - должна возвращать ответ
            if ((fields.length === 1) || (a[f] !== b[f])) {
                return d * (a[f] > b[f]? +1: -1); 
            }
            // 2 шаг рекурсии - вызов функции с оставшимися пар-ми для сортировки
            return comparator(a, b, fields.slice(1,), directs.slice(1,));
        }
        
        const orderBy = (fields, directs) => {
            return this._tmp.sort((a,b) => comparator(a,b,fields,directs));
        }
        return orderBy(fields, directs);
    }
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