export function getCurrentDateTime (){
    const currentDate = new Date;
    return  currentDate.toISOString();
}