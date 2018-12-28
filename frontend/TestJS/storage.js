// 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)

let instance = null
//  单例模式是一种十分常用但却相对而言比较简单的单例模式。
//  它是指在一个类只能有一个实例，即使多次实例化该类，也只返回第一次实例化后的实例对象。
//  单例模式不仅能减少不必要的内存开销, 并且在减少全局的函数和变量冲突也具有重要的意义。
class Storage {
    static getInstance() {
        if (!instance) {
            instance = new Storage()
        }
        return instance
    }
    setStorage(key, value) {
        localStorage.setItem(key, value)
    }

    getStorage(key, value) {
        localStorage.getItem(key)
    }
}

export default Storage.getInstance()
