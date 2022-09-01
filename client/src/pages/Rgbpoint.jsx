
 const assignPoints = (totalPrice) => {
    try { let point= {}
    if(totalPrice > 14 && totalPrice < 50){
        
        return  point ={'RGBpoint':63}
    }
    else if(totalPrice > 51 && totalPrice < 125){
        return point ={'RGBpoint':126}
    }
    else if(totalPrice > 126 && totalPrice < 200){
        return point ={'RGBpoint':189}
    }
    else if(totalPrice > 201 && totalPrice < 300){
        return point = {'RGBpoint':252}
    }
    else if(totalPrice > 301 && totalPrice < 400){
        return  point ={'RGBpoint':315}
    }
    else if(totalPrice > 401 && totalPrice < 500){
        return point ={'RGBpoint':378}
    }
    else if(totalPrice > 501 && totalPrice < 600){
        return point ={'RGBpoint':441}
    }
    else if(totalPrice > 601 && totalPrice < 700){
        return point ={'RGBpoint':504}
    }
    else if(totalPrice > 601 && totalPrice < 700){
        return point ={'RGBpoint':567}
    }
    else if(totalPrice > 701 && totalPrice < 800){
        return point ={'RGBpoint':630}
    }
    else if(totalPrice > 801 && totalPrice < 900){
        return point ={'RGBpoint':693}
    }
    else if(totalPrice > 901 && totalPrice < 1000){
        return point ={'RGBpoint':756}
    }
    else if(totalPrice > 1001 && totalPrice < 1100){
        return point ={'RGBpoint':819}
    }
    else if(totalPrice > 1101 && totalPrice < 1200){
        return point ={'RGBpoint':882}
    }
    else if(totalPrice > 1201 && totalPrice < 1300){
        return point ={'RGBpoint':945}
    }
    else if(totalPrice > 1301 && totalPrice < 1400){
        return point ={'RGBpoint':1008}
    }
    else if(totalPrice > 1401 && totalPrice < 1500){
        return point ={'RGBpoint':1071}
    }
    else if(totalPrice > 1501 && totalPrice < 1600){
        return point ={'RGBpoint':1134}
    }
    else if(totalPrice > 1601 && totalPrice < 1700){
        return point ={'RGBpoint':1197}
    }
    else if(totalPrice > 1701 && totalPrice < 1800){
        return point ={'RGBpoint':1260}
    }
    else if(totalPrice > 1801 && totalPrice < 1900){
        return point ={'RGBpoint':1323}
    }
    else if(totalPrice > 1901 && totalPrice < 2000){
        return point ={'RGBpoint':1386}
    }
    else if(totalPrice > 2001 && totalPrice < 2100){
        return point ={'RGBpoint':1449}
    }
} catch (error) {
        console.log(error)
    }
};


export default assignPoints;