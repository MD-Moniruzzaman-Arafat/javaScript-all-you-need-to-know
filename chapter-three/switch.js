var date = new Date;
var date1 = date.getDay();
switch (date1) {
    case 0:
        console.log('sunday');
        break;
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    default:
        console.log('hi');
        break;
}