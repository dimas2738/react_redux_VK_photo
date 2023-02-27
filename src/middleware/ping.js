export const ping = function ping(){
    return function (next){
        return function (action){
            console.log(next)
            console.log(action)
            return next(action)
        }
    }
}