//// TASK 1. Array elementlərinin cəmini / hasilini tapın
// let array = [1,2,3,4,5,6,7,8,9,10];
// let cem = 0;
// let hasil =1;
// for (let index = 0; index < array.length; index++) {
//     cem+=array[index];
// }
// for (let i = 1; i < array.length; i++) {
//     hasil*=array[i]
    
// }
// console.log("cem :"+cem, "hasil :"+hasil);


////TASK 2. Array elementlərinin içində təkrarlanan elementləri silin
// let array=[1,2,2,2,3,3,4,4,5,5,5,5,5,6]
// for (let i = 0; i < array.length; i++) {

//    for (let a =i+1; a < array.length; a++) {
//     if(array[i]==array[a]){
//         array.splice(a, 1);
//         a--;
//     }
//    }
// }

// console.log(array);

//// TASK 3. Array elementlərində ədəd olmayan elementləri silin
// let array = [1, 3,"text" , true, 5 , "text2" , "77"];
// let array2=[];
// for (let index = 0; index < array.length; index++) {
//     if (typeof array[index]=='number') {
//     array2.push(array[index]);
//     }
// }
// console.log(array2);

//// TASK 4. Array elementlərindən maksimum/minimum olanı tapın.

// let array = [100,20,3333,4,566,666,777];
// let max=array[0]; 
// let min=array[0];
// for (let index = 0; index < array.length; index++) {
//         if (array[index]>max){
//             max=array[index];
//         }
//         if(array[index]<min){
//             min=array[index]
//         }
// }
// console.log("max : "+max , "min : "+min);

//// TASK 5. Daxil edilən cumlədəki simvol sayını çıxarın.

// let cumle ="Text text text";
// let count = 0;
// for (let index = 0; index < cumle.length; index++) {
//     count++;
    
// }
// console.log(count);

//// TASK 6. Array elementlerini 2-yə vurub yeni bir array kimi çap edin.

// let array = [2,3,4,5,6];

// let array2=[];

// for (let index = 0; index < array.length; index++) {
    
//     array2.push(array[index]*2);
// }
// console.log(array2);

//// TASK 7. Array elementlərini tərsinə çap edin.

// let array = ["salam", "necesen", "sagol"]
// let newArray= [];
// for (let index = array.length-1; index >=0; index--) {
//     newArray.push(array[index])
// }
// console.log(newArray);
//// TASK 8. Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan
//// JavaScript proqramı yazın.(Massivlərin uzunluqları mütləq eyni olmalıdı)

// let array = [10,20,30,40];
// let array2 = [1,2,3,4];
// let array3 = [];
// for (let index = 0; index < array.length; index++) {
//     // array3.push(array[index]+array2[index])
//     array3[index]=array[index]+array2[index]
// }
// console.log(array3);

//// TASK 9. Sözü tərsinə çevirən program yazın.
// let text = "Salam";
// let text2="";
// for (let index = text.length-1; index >=0 ; index--) {
//     text2+=text[index];
// }
// console.log(text2);

//// TASK 10. Cümlədəki sözlərin yerini tərsinə çevirən program yazın. (salam mənim adım
////leyladır > leyladır adım mənim salam)
// let cumle = "menim adim Fatimedir";
// let array = cumle.split(" ");
// let array2=[];
// for (let index = array.length-1; index >=0; index--) {
//     array2.push(array[index]);
// }
// console.log(array2);

// TASK 11. Daxil edilmiş ədədi sözlə yazan funskiya (Məsinput:1, output : Bir) 0-100 arasi

// let arrayTeklik = ["sifir", "bir", "iki", "uc", "dord", "bes", "alti", "yeddi", "sekkiz", "doqquz"]
// let arrayOnluq = ["on","iyirmi","otuz","qirx", "elli", "altimis", "yetmis", "seksen", "doxsan"]
// let teklik;
// let onluq;
// let eded;
// // let number = +prompt();
// let number = 0;
// teklik=number%10;
// onluq = Math.floor(number/10);
// if (teklik==0 && onluq==0){
//     eded=arrayTeklik[0]
// }
// else if (teklik==0) {
//     eded=arrayOnluq[onluq-1]
// }
// else if(onluq==0){
//     eded=arrayTeklik[teklik]
// }
// else{
//     eded=arrayOnluq[onluq-1]+" "+arrayTeklik[teklik];
// }
// console.log(eded);

//// TASK 12. Verilmiş mətndə sözlərin sayını tapın.

// let metn = "bir iki uc.dord bes alti.yeddi sekkiz doqquz on.";
// for (let index = 0; index < metn.length; index++) {
//     metn=metn.replace(".", " ");
// }
// let array=metn.split(" ");
// console.log(array.length-1);

//// TASK 13. Verilmiş cümlədə artıq boşluq simvollarını silin

// let cumle = " verilmis cumledeki      artiq   bosluqlari   silin.     "
// cumle=cumle.split(" ");
// let result ="";
// for (let index = 0; index < cumle.length; index++) {
//     if(cumle[index]!=""){
//         result+=cumle[index]+" "
//     }
// }
// result=result.trim()
// console.log(result);


  //// TASK 14. Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını
////təmin edən proqram yazın
// let metn = "bir iki uc.dord bes alti.yeddi sekkiz doqquz on.";
// for (let index = 0; index < metn.length; index++) {
//     metn=metn.replace(".", " ");
// }
//  let array=metn.split(" ");
//  for (let i = 0; i < array.length; i++) {
//     array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
//  }
//  let yeniMetn=array.join(" ");
//  console.log(yeniMetn);

//// TASK 15. İki arrayın eyniliyini yoxlayın.

// let array1 = [1,2,3,4];
// let array2 = [1,2,3,"4"];
// let eynilik=true;

// if (array1.length!==array2.length) {
//     eynilik=false;
// }
// else {
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i]!==array2[i]) {
//             eynilik=false;
//         }
//     }
// }
// eynilik==true?console.log("eynidir"): console.log("eyni deyil");

//// 16. Array elementlərini sort metodundan istifadə etmədən artma / azalma
//// istiqamətinə görə sıralayın (bubble sort)

// let array = [5,4,6,3,7,2,8];
// for (let i = 0; i < array.length-1; i++) {
//     for (let j = 0; j < array.length-1; j++) {
//         if(array[j]>array[j+1]){
//            let temp = array[j]
//            array[j]=array[j+1];
//            array[j+1]=temp;
//         }
//     }
// }
// console.log(array);

//// TASK 17. İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi
////oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir. Məs:
////Giriş: 3456 Çıxış: 3 4 5 6

// let number= 543532423;
// let array=Array.from(String(number), Number);
// let returnn= array.join(" ");
// console.log(returnn);

//// TASK 18. Verilmiş mətndə təkrarlanan sözlərin sayını tapın

// let metn = "Bu metnin icerisinde uc eded tekrarlanan Soz var. Birinci soz ve ikinci soz."
// for (let index = 0; index < metn.length; index++) {
//         metn=metn.replace(".", " ");
//      }
//      let array=metn.toLowerCase().split(" ");
//      let tekrarsay=[];
//      debugger
//       array.forEach(element => {
       
//         tekrarsay[element]=(tekrarsay[element]|| 0)+1;
//       });
//       console.log(tekrarsay);

//// TASK 19. Tələbələrin məlumatlarını özündə saxlayan object yaradın. İmtahandan
////keçməyən tələbələri objectdən silin.
//console.log("object kecmemishik");

////TASK 20. Verilmiş 2mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə
////əsasən)
// console.log("suali basa dusmedim");

//// TASK 21. İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, 
////aylıq əmək haqqınn hesablanması üçün 22. proqram yazın. Həftəlik 40 saatdan artıq 
////olan iş saatları üçün əmək haqqı 2 qat hesablansın

// let birSaat=10;
// let heftelikSaat=41;
// let emekHaqqi;

// if(heftelikSaat>40){
//     let elaveSaat=heftelikSaat-40;
//     emekHaqqi=((birSaat*40)+(birSaat*2*elaveSaat))*4;
// }
// else{
//     emekHaqqi=birSaat*heftelikSaat*4;
// }
// console.log(emekHaqqi);

//// TASK 23. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.

// let metn= "aztu ADNA  AZTU ADNA aztu";
// let soz = metn.split(" ");
// let yeni;
// for (let i = 0; i < soz.length; i++) {
//     if (soz[i] === "ADNA") {
//         soz[i] = "ADNSU";
//     }
// }
// yeni=soz.join(" ")
// console.log(yeni);


// TASK 24. 3 rəqəmli ədədin rəqəmləri cəmini tapın.
let reqem =777;
let eded=0;
do {
    eded+=reqem%10;
reqem=Math.floor(reqem/10);
} while (reqem!=0);
console.log(eded);