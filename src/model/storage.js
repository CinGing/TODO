var storage = {
    set(key,value){
        localStorage.setItem(key, JSON.stringify(value))
    },
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key){
        localStorage.removeItem(key)
    },
    clearAll(){
        localStorage.clear()
    },
    setId(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    getId(key){
        return JSON.parse(localStorage.getItem(key))
    }
}

export default storage