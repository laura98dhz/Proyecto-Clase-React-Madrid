export default function currentDate() {
    const currentDate = new Date();
    let day = currentDate.getDate();
    if(day<10) {
        day = "0"+day;
    }
    let month = currentDate.getMonth()+1;
    if(month<10) {
        month = "0"+month;
    }
    const year = currentDate.getFullYear();

    const defaultDate = year + "-" + month + "-" + day;
    
    return defaultDate;
}