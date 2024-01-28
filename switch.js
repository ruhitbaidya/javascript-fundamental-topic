function greadSummer(summer){
    var datafind;
    switch (true) {
        case summer >= 1 && summer <= 2 :
            datafind ="grimsho kal";
            break;
        case summer >= 3 && summer <= 4:
            datafind="borsha kal ";
            break;
        case summer >= 5 && summer <= 6:
            datafind="sorot kal";
            break;
        case summer >= 7 && summer <= 8:
            datafind="hemonto kal"
            break;
        case summer >= 9 && summer <= 10:
            datafind="hemonto kal"
            break;
        case summer >= 11 && summer <= 12:
            datafind="hemonto kal"
            break;
        default:
            datafind='invalid number'
            break;
    }
    return datafind;

}

var summerfind = greadSummer(13)
console.log(summerfind)