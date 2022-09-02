
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
    else if(totalPrice > 2101 && totalPrice < 2200){
        return point ={'RGBpoint':1512}
    }
    else if(totalPrice > 2201 && totalPrice < 2300){
        return point ={'RGBpoint':1575}
    }
    else if(totalPrice > 2301 && totalPrice < 2400){
        return point ={'RGBpoint':1638}
    }
    else if(totalPrice > 2401 && totalPrice < 2500){
        return point ={'RGBpoint':1701}
    }
    else if(totalPrice > 2501 && totalPrice < 2600){
        return point ={'RGBpoint':1764}
    }
    else if(totalPrice > 2601 && totalPrice < 2700){
        return point ={'RGBpoint':1827}
    }
    else if(totalPrice > 2701 && totalPrice < 2800){
        return point ={'RGBpoint':1890}
    }
    else if(totalPrice > 2801 && totalPrice < 2900){
        return point ={'RGBpoint':1953}
    }
    else if(totalPrice > 2901 && totalPrice < 3000){
        return point ={'RGBpoint':2016}
    }
    else if(totalPrice > 3001 && totalPrice < 3100){
        return point ={'RGBpoint':2079}
    }
    else if(totalPrice > 3101 && totalPrice < 3200){
        return point ={'RGBpoint':2142}
    }
    else if(totalPrice > 3201 && totalPrice < 3300){
        return point ={'RGBpoint':2205}
    }
    else if(totalPrice > 3301 && totalPrice < 3400){
        return point ={'RGBpoint':2268}
    }
    else if(totalPrice > 3401 && totalPrice < 3500){
        return point ={'RGBpoint':2331}
    }
    else if(totalPrice > 3501 && totalPrice < 3600){
        return point ={'RGBpoint':2394}
    }
    else if(totalPrice > 3601 && totalPrice < 3700){
        return point ={'RGBpoint':2457}
    }
    else if(totalPrice > 3701 && totalPrice < 3800){
        return point ={'RGBpoint':2520}
    }
    else if(totalPrice > 3801 && totalPrice < 3900){
        return point ={'RGBpoint':2583}
    }
    else if(totalPrice > 3901 && totalPrice < 4000){
        return point ={'RGBpoint':2646}
    }
    else if(totalPrice > 4001 && totalPrice < 4100){
        return point ={'RGBpoint':2709}
    }
    else if(totalPrice > 4101 && totalPrice < 4200){
        return point ={'RGBpoint':2772}
    }
    else if(totalPrice > 4201 && totalPrice < 4300){
        return point ={'RGBpoint':2835}
    }
    else if(totalPrice > 4301 && totalPrice < 4400){
        return point ={'RGBpoint':2898}
    }
    else if(totalPrice > 4401 && totalPrice < 4500){
        return point ={'RGBpoint':2961}
    }
    else if(totalPrice > 4501 && totalPrice < 4600){
        return point ={'RGBpoint':3024}
    }
    else if(totalPrice > 4601 && totalPrice < 4700){
        return point ={'RGBpoint':3087}
    }
    else if(totalPrice > 4701 && totalPrice < 4800){
        return point ={'RGBpoint':3150}
    }
    else if(totalPrice > 4801 && totalPrice < 4900){
        return point ={'RGBpoint':3213}
    }
    else if(totalPrice > 4901 && totalPrice < 5000){
        return point ={'RGBpoint':3276}
    }
    else if(totalPrice > 5001 && totalPrice < 5100){
        return point ={'RGBpoint':3339}
    }
    else if(totalPrice > 5101 && totalPrice < 5200){
        return point ={'RGBpoint':3402}
    }
    else if(totalPrice > 5201 && totalPrice < 5300){
        return point ={'RGBpoint':3465}
    }
    else if(totalPrice > 5301 && totalPrice < 5400){
        return point ={'RGBpoint':2268}
    }
    else if(totalPrice > 5401 && totalPrice < 5500){
        return point ={'RGBpoint':3528}
    }
    else if(totalPrice > 5501 && totalPrice < 5600){
        return point ={'RGBpoint':3591}
    }
    else if(totalPrice > 5601 && totalPrice < 5700){
        return point ={'RGBpoint':3654}
    }
    else if(totalPrice > 5701 && totalPrice < 5800){
        return point ={'RGBpoint':3717}
    }
    else if(totalPrice > 5801 && totalPrice < 5900){
        return point ={'RGBpoint':3780}
    }
    else if(totalPrice > 5901 && totalPrice < 5000){
        return point ={'RGBpoint':3843}
    }
    else if(totalPrice > 5001 && totalPrice < 5100){
        return point ={'RGBpoint':3902}
    }//63 x 62
    else if(totalPrice > 5101 && totalPrice < 99999999999999){
        return point ={'RGBpoint':5602}
    }
} catch (error) {
        console.log(error)
    }
};


export default assignPoints;