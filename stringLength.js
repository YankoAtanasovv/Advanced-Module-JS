function stringLength(txt1, txt2, txt3) {
    let totalLength = '';
    let avgLength = '';

    totalLength = txt1.length + txt2.length + txt3.length;
    avgLength = totalLength / 3;


    console.log(totalLength);
    console.log(Math.floor(avgLength));



}

stringLength('chocolate', 'ice cream', 'cake');