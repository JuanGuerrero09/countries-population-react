export function getRandomElement(list:any[]){
    const index = Math.floor((list.length - 1)*Math.random())
    return list[index]
}