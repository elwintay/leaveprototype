const getShift = (team, date) => {
    const startDate = new Date("01/03/2024")
    const endDate = new Date(date)
    let timeDiff = Math.abs(endDate.getTime() - startDate.getTime())
    let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    let shift
    if (team == 'A'){
        if (daysDiff % 4 == 0){
            shift = 'day'
        } else if (daysDiff % 4 == 1){
            shift = 'night'
        } else {
            shift = 'off'
        }
    } else if (team == 'B'){
        if (daysDiff % 4 == 1){
            shift = 'day'
        } else if (daysDiff % 4 == 2){
            shift = 'night'
        } else {
            shift = 'off'
        }
    } else if (team == 'C'){
        if (daysDiff % 4 == 3){
            shift = 'day'
        } else if (daysDiff % 4 == 0){
            shift = 'night'
        } else {
            shift = 'off'
        }
    } else if (team == 'D'){
        if (daysDiff % 4 == 2){
            shift = 'day'
        } else if (daysDiff % 4 == 3){
            shift = 'night'
        } else {
            shift = 'off'
        }
    } else {
        shift = 'No such shift'
    }
    return shift
    
}

const getAllDaysInMonth = (month, year) =>
  Array.from(
    {length: new Date(year, month, 0).getDate()}, // get next month, zeroth's (previous) day
    (_, i) => new Date(year, month - 1, i + 1).getDate()    // get current month (0 based index)
  );


// const dateList = ['04/10/2024', '05/15/2024', '05/26/2024', '07/19/2024', '08/29/2024']
// for (let i=0; i<dateList.length; i++){
//     console.log('A:', getShift('A', dateList[i]), dateList[i])
//     console.log('B:', getShift('B', dateList[i]), dateList[i])
//     console.log('C:', getShift('C', dateList[i]), dateList[i])
//     console.log('D:', getShift('D', dateList[i]), dateList[i])
// }

console.log(getAllDaysInMonth(2, 2023))