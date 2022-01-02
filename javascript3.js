let johnage = 19;
let johnjob = 'yazilimci';
if (johnage >= 18) {
    console.log('bira icebilir')
} else {
    console.log("Meyvesuyu icebilir")
} // if ile karsilastirma yaptik 
johnage>=18 ?  console.log('bira icebilir') : console.log("Meyvesuyu icebilir")
//uclu operator ile karsilastirma yaptik
johnage=40
switch (true) {
    case johnage< 13:
        console.log('john cocuk')
        break;
        case johnage <= 20:
        console.log('john genctir')
        break;
        case johnage <=30:
            console.log('yetiskin')
        break;
    default: console.log ('yaslidir')
        break;
}
johnjob = 'kaportaci'
switch (johnjob) {
    case 'yazilimci': console.log(`john ${johnjob}`)
        
    break;
    case 'ogretmen': console.log(`john ${johnjob}`)
        
    break;
    case 'doktor': console.log(`john ${johnjob}`)
        
    break;
    default: console.log('issiz')
    break;
}