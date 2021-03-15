
let unitNumber = {
   0 : 'zero',   1: 'one',    2: 'two',    3: 'three',  4: 'four',  5: 'five',    
   6: 'six',     7: 'seven',  8: 'eight',  9: 'nine',  10: 'ten',
   11: 'eleven',  12: 'twelve',  13: 'thirteen',  14: 'fourteen',  15: 'fifteen',
   16: 'sixteen',  17: 'seventeen',  18: 'eighteen',   19: 'nineteen',  20: 'twenty',      
   30: 'thirty',  40: 'forty',  50: 'fifty',  60: 'sixty',  70: 'seventy',  80:'eighty', 
   90:'ninety'
 }
module.exports = function toReadable (number) {
   let remainder10 = number%10;
   let remainder100 = number%100;
   let result="";
  
   if (number < 100) {
      if ((number < 20)||(number%10 === 0)) {
        result = unitNumber[number];
      } else {
           result = unitNumber[(number - remainder10)] + ' ' + unitNumber[remainder10];
      } 
    } else {
      if (number%100 === 0) {
             result = unitNumber[(number/100)] + ' hundred';
       } else if ((number%100 < 20)||((number%100)%10) === 0) {
              result = unitNumber[((number - remainder100)/100)] + ' hundred ' + unitNumber[(remainder100)];
         } else {
              result = unitNumber[((number - remainder100)/100)] + ' hundred ' + unitNumber[(remainder100 - remainder100%10)] + ' ' + unitNumber[remainder100%10];
         }
   }
  return result;    
}
