export function getRandomElement(list:any[]){
    const index = Math.floor((list.length)*Math.random())
    return list[index]
}