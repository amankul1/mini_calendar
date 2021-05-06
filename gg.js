let d = new Date()
let kyn = d.getDate()
let juma = d.getDay()
kyn = 25;
juma=7;

while(kyn>7){
   kyn=kyn-7;
}
let dat;
let dat1;
// if(kyn<juma){
  
// }
// else{
//    dat = 7 -juma;
//    dat1 = 7 - dat;
// }
dat = 1-kyn;
if(dat<0){
   dat1= dat+7;
}
else{
   dat1 = dat;
}
dat2= 7 - dat1;


console.log(dat2);


