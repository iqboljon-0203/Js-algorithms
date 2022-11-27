    // let str = 'Just kidding there is still one more';
    // let arr = str.split(" ");
    // let mass = [];
    // for (const item of arr) {
    //     if(item.length>=5){
    //         mass.push(item.split('').reverse().join(''));
    //     }
    //     else{
    //         mass.push(item);
    //     }
    // }
    // console.log( mass.join(' '));
    // function sumStrings(a,b) { 
    //     let num=Number(a);
    //     let num2=Number(b);
    //     return (BigInt(a)+BigInt(b)).toString();        
    //   }
    //   console.log(sumStrings("1","2").toString());
    // #3
    // function findOdd(A) {
    //   let count =0;
    // for(let i=0;i<A.lenght;i++){
    //   let first=A[0];
    //   if(first===A[i+1]){
    //     count++;
    //   }
    // }
    // console.log(count);
    // }
    // findOdd([1,1,1,1,1,1,10,1,1,1,1]);

    // function openOrSenior(data){
    //   data.forEach((element,index) => {
    //     if(element[0]>=55 && element[1]>7){
    //       data[index]="Senior";
    //     }
    //     else{
    //       data[index]="Open";
    //     }
    //   });
    //   console.log(data);
    // }
    // openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);

//     function sum(num) {
//       let arr=[];
//       for(let i =1;i<=num;i++){
//         arr.push(1);
//       }
      
//     }
// sum(3);
// function persistence(num) {
// 	let uzunlik=num.toString().length;
// 	let arr=[];
// 	for(let i=0;i<uzunlik;i++){
// 		let digit=num%10;
// 		num=parseInt(num/10);
// 		arr.push(digit);
// 		num=1;
// 		arr.forEach(item => {
// 		num=num*item;
// 	});
// 	}
	
// 	console.log(num);
// }
// console.log(persistence(999));

// function persistence(num) {
// 	if (num.toString().length === 1) {
// 	  return 0;
// 	}
// 	let multiplication = 1;
// 	var splitStr = num.toString().split("");
// 	for (let i = 0; i < splitStr.length; i++) {
// 	  multiplication *= parseFloat(splitStr[i]);
// 	}
// 	return 1 + persistence(parseFloat(multiplication));
//   }
  
//   console.log(persistence(999));
// function points(games) {
//     let sum=0;
//   games.map((item,index)=>{
//     let every=item.split(':');
//     console.log(every);
//     if(every[0]-every[1]>0){
//         sum+=3;
//     }
//     else if(every[0]-every[1]==0){
//         sum+=1;
//     }
//     else{
//         sum+=0;
//     }
//   });
//   return sum;
// }
// points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]);
// let countSheep = function (num){
//     let str='';
//     if(num===0){
//         return str;
//     }
//     for(let i=1;i<=num;i++){
//         str+=`${i} sheep...`;
//     }
//     return str;
// };
// countSheep(3);
// function order(words){
//     let arr=words.split(' ').sort((a,b)=>a-b);
//     let mass=[];
//     arr=arr.map((item,index,arr)=>{
//         item=item.split('').sort().join('');
//         mass.push(item);
//     });
//     console.log(mass.sort().join(' '));
//     // console.log(arr);
//   }
//   console.log(order("is2 Thi1s T4est 3a"));
// function multiTable(number) {
//     let mass=[];
//     for(let i=0;i<10;i++){
//       mass.push(`${i+1}*${number}=${(i+1)*number}\n`);
//     }
//     console.log(mass.join(' '));
//   }
//   console.log(multiTable(5));






// for (const item of arr) {
//   if (item.length >= 1 && item.length < 5) {
//     mass.push(item);
//   } else if(item.lenght>=5) {
//     for (let i = item.length; i > 0; i--) {
//       let revstr = "";
//       console.log(item);
//       revstr += item[i];
//       console.log(revstr);
//     }
//   }
// }
// console.log(mass);

// function findMissingLetter(array)
// {
//     let str=array.join('');
//     let length=str.length;
//     let code=str.charCodeAt(length-1);  
//     console.log(str.charCodeAt(6));
// }

// console.log(findMissingLetter(['a','b','c','d','f']));

// function isPythagoreanTriple(integers) {
//     let max=Math.max(...integers);
//     let index=integers.indexOf(max);
//     integers.splice(index,1);
//     let sum=0;
//     integers.map(item=>{
//         sum+=Math.pow(item,2);
//     });
//     if(sum===Math.pow(max,2)){
//         return true;
//     }
//     else {
//         return false;
//     }
//   }
//   console.log(isPythagoreanTriple([5, 12, 13]));
// function invert(array) {
//     array.map((item,index)=>{
//         if(item>0){
//             array[index]=-1*array[index];
//         }
//         else{
//             array[index]=-1*array[index];
//         }
//     });
//     return array;
//  }
//  console.log(invert([1,2,-3,4,5]));
// function multiply(a, b)
// {
//     let result=parseInt(a)*parseInt(b);
//     return (result).toString();
// }
// console.log(multiply("0", "03"));
// return (BigInt(a)*BigInt(b)).toString()
//////
// function findMultiples(integer, limit) {
//     let arr=[];
//     for(let i=1;i<=Math.floor(limit/integer);i++){
//         arr.push(i*integer);
//     }
//     return arr;
//   }
//   console.log(findMultiples(5,7));
///////
// function alphanumeric(string){
//         if(string=='')  {
//             return false;
//         }
//         else if(string.includes('_')){
//             return false;
//         }
//         else if(string.includes(' ')){
//             return false;
//         } else if(string.includes('!')){
//             return false;
//         }
//         else{
//             return true;
//         }
//   }
//   console.log( alphanumeric('hRtm!obHL '));
// function feast(beast, dish) {
//     if(beast.charAt(0)===dish.charAt(0) && beast.charAt(beast.length-1)===dish.charAt(dish.length-1)){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(feast("great blue heron", "garlic naan"));
// function domainName(url){
//     console.log(url.split('//')[1]);
//   }
//   console.log(domainName("http://google.com"));
// let snail = function(array) {
//     let arr=[];
//     array.map(item=>{
//         arr.push(...item);
//     });
//     return arr.sort((a,b)=>{
//         return a-b;
//     });
// };

// console.log(snail( [[1,2,3],
//     [10,2,6],
//     [7,8,8]]));

// function moveZeros(arr) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             console.log(arr[i]);
//             arr.splice(i,1);
//             arr.push(0);
//         }
    
//     }
//     return arr;
// }
// console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]));
// const flip=(d, a)=>{
//     if(d==='R'){
//         a.sort((a,b)=>{
//             return a-b;
//         });
//     }else {
//         a.sort((a,b)=>{
//             return b-a;
//         });
//     }
//     return a;
//   };
//   console.log(flip('R', [3, 2, 1, 2]));
// function houseNumbersSum(inputArray) {
//     let sum=0;
//     for(let i=0;i<inputArray.length;i++){
//       sum+=inputArray[i];
//       if(inputArray[i]===0){
//         break;
//       }
//     }
//     return sum;
//   }
//   console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
// function sameCase(a, b){
//     let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let strLittle=str.toLowerCase();
//     if((str.includes(a)===false && strLittle.includes(a)===false)||(str.includes(b)===false && strLittle.includes(b)===false))
//     {
//         return -1;
//     }
//     else if(
//         (a!==a.toLowerCase()||b!==b.toLowerCase())&&(a!==a.toUpperCase()||b!==b.toUpperCase())
//     ){
//         return 0;
//     }
//     else if((a===a.toLowerCase()&&b===b.toLowerCase())||(a===a.toUpperCase()&&b===b.toUpperCase())){
//         return 1;
//     }
//   }
//   console.log(sameCase('a', 'h'));
// var isPP = function(n){
//         let arr=[];
//         if(parseInt(Math.sqrt(n))===Math.sqrt(n)){
//             let main=Math.sqrt(n);
//             arr.push(main,2);
//         }
//         return arr;
// };  
// console.log(isPP(9));
// console.log(isNaN("03323a"));
// var lastDigit = function(str1, str2){  
//     let num=Math.pow(str1,str2);
//     if(num/10===0){
//         return num;
//     }else{
//         return num%10;
//     }
// };
// console.log(lastDigit("2","7"));
// function factorial(n){
//     let answer = 1;
//     let res=-1;
//     if(n<0||n>12){
//       return res;
//     }
//     else if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(let i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   console.log(factorial(10));
////kabisa yili
// ////
// function filtered(a) {
//         let arr=[];
//         a.map(item=>{
//         if(item===Number(item)){
//             arr.push(item);
//         }
//     });
//     return arr;
//   }
//   console.log(filtered([1,2,'a','b']));
// const quarterOf = (month) => {
//     if(month>0&&month<=3){
//         return 1;
//     }else if(month>3&&month<=6){
//         return 2;
//     }else if(month>6&&month<=9){
//         return 3;
//     }else{
//         return 4;
//     }
//   };
// function humanReadable (seconds) {
//     let str='hh:mm:ss';
//     let hour=parseInt(seconds/3600);
//     let minute=parseInt((seconds-(hour*3600))/60);
//     let second=parseInt((seconds-(hour*3600))-(minute*60));
//     if(hour<10){
//         str=str.replace('hh',`0${hour}`);
//     }else{
//         str=str.replace('hh',`${hour}`);
//     }
//     if(minute<10){
//         str=str.replace('mm',`0${minute}`);
//     }else{
//         str=str.replace('mm',`${minute}`);
//     }
//     if(second<10){
//         str=str.replace('ss',`0${second}`);
//     }else{
//         str=str.replace('ss',`${second}`);
//     }
    
//     return str;
//   }
//   console.log(humanReadable(60));
/////
// function none(arr, fun){
//     arr.map(item=>{
//         return item;
//     });
// }
// console.log([1,2,3,4,5],(item)=>{
//      return item>5;
// });
// function multipleOfIndex(array) {
//     let arr=[];
//     array.map((item,index)=>{
//       if(item%index===0){
//         arr.push(item);
//       }
//     });
//     return arr;
//   }
//   console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
// function findEvenIndex(arr)
// {
//     let all=arr.reduce((a,b)=>a+b,0);
//     if(all===0){
//         return 0;
//     }
//     let result;
//     arr.map((item,index)=>{
//      let sum=0;
//      for(let i=0;i<index;i++){
//             sum+=arr[i];
//      }
//      let end=0;
//      for(let j=index+1;j<arr.length;j++){
//          end+=arr[j];
//      }
//      if(sum===end){
//           result=index;
//      }
//    });
//     return result ??-1;
// }
// console.log(findEvenIndex([0,0,0,0,0]));
// function solution(number){
//     let sum=0;
//     let i=0;
//     while(i<number){
//       if(i%3===0||i%5===0){
//         sum+=i;
//       }
//       i++;
//     }
//     return sum;
//   }
//   console.log(solution(10));
// function validParentheses(s) {
//     let a="()";
//      let b="[]";
//      let c="{}";
//      let flag=true;
//      while(flag){
//          if(s.length==0) break;
//          else if(s.includes(a)||s.includes(b)||s.includes(c)){
//              s=s.replace(a,"");
//              s=s.replace(b,"");
//              s=s.replace(c,"");
//          }
//          else{
//              flag=false;
//          }
//      }
//       return flag
//  }
// function isPalindrome(x) {
//     const string=x.toLowerCase();
//     return string.split("").reverse().join("").toLowerCase()===string;
//  }
//  console.log(isPalindrome( 'Abba'));
// function distinct(nums) {
//     if(nums.length == 0) return 0;
//       let i = 0;
//       for (let j = 1; j < nums.length; j++) {
//           if (nums[j] !== nums[i]) {
//               i++;
//           }
//           else{
//             nums.splice(i,1);
//           }
//       }
//       return nums;
//   }
//   console.log(distinct([ 1, 2,2,3,6,5, 3, 4, 5, 5 ]));
// function getCount(str) {
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.includes('a')){
//             count++;
//             str=str.replace('a',' ');
//         }
//         if(str.includes('e')){
//             count++;
//             str=str.replace('e',' ');
//         }
//         if(str.includes('i')){
//             count++;
//             str=str.replace('i',' ');
//         }
//         if(str.includes('o')){
//             count++;
//             str=str.replace('o',' ');
//         }
//         if(str.includes('u')){
//             count++;
//             str=str.replace('u',' ');
//         }
//     }
//     return count;
// }
// console.log(getCount("abracadabra"));
// function solution(words) {
//     for(let i=0;i<words.length;i++){
//         for(let j=1;j<words.length;j++){
//             console.log(words[j][words[j].length-1]);
//             if(words[i][0]===words[j][words[j].length-1]||words[i][words[i].length-1]===words[j][0]){
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }
//     }
// }

// console.log(solution(["east", "e", "e", "t", "t", "e", "time"]));
// let arr=[1,2,3,4,6,65,66];
// arr=arr.filter((item)=>item>6)
// console.log(arr);
// function fibonacci(arr,num){
//     let start=0;
//     let sum=[...arr];
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//         arr.push(sum)
//     }
//     i=i+1;
//     console.log(arr);
// }
// console.log(fibonacci([1,1,1],10));

// let parenthes = function(s) {
//     let a="()";
//     let b="[]";
//     let c="{}";
//     let flag=true;
//     while(flag){
//         if(s.length==0) break;
//         else if(s.includes(a)||s.includes(b)||s.includes(c)){
//             s=s.replace(a,"");
//             s=s.replace(b,"");
//             s=s.replace(c,"");
//         }
//         else{
//             flag=false;
//         }
//     }
//      return flag
// };
// console.log(parenthes('({)}[]'));
// function swap (string) {
//     let arr=['a','i','u','o','e'];
//     for(let i=0;i<arr.length;i++){
//         let big=arr[i].toUpperCase();
//         string=string.replaceAll(arr[i],big);
//     }
//     return string;
//   }
//   console.log(swap("HelloWorld"))
// function findOdd(arr) {
//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++;
//             }
//         }
//         if(count%2===1){
//             return arr[i];
//         }
//     }
  
//   }
//   console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
// function sameCase(a){
//     let sum=0;
//     a.map(item=>{
//         for(let key in item){
//             if((typeof item[key])==='number'){
//                 sum+=item[key];
//             }
//             if((typeof item[key])==='object'){
//                 item[key].map(item=>{
//                     sum+=item.childAge
//                 })
//             }
//         }
//     })
//     return sum;
// }
// console.log(sameCase([{bill:12,child:[{childAge:10}] },{sam:34,child:[{childAge:13}]}]));
//// Odd and even numbers without "%""
// function oddOrEven(x) {
//   return ( x & 1 ) ? "odd" : "even";
// }
// function sameCase(a){
//         let sum=0;
//         a.map(item=>{
//             let arr=Object.values(item)
//             console.log(arr);
//         })
//         return sum;
//     }
// console.log(sameCase([{bill:12,child:[{childAge:10}] },{sam:34,child:[{childAge:13}]}]));
// function task(n){
//     let str=""
//     if(n%2===1){
//         for(let i=1;i<n;i+=2){
//             str+=str.padStart(i,"*");
//             str+="\n";
//         }
//         for(let j=n;j>=1;j=j-2){
//             str+=str.padStart(j,"*");
//             str+="\n";
//         }
//     }
//     else{
//         return false;
//     }
//     return str;
// }
// console.log(task(5))
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
// function warnTheSheep(queue) {
//     if(queue.length===1||queue[queue.length-1] === "wolf"){
//         return "Pls go away and stop eating my sheep";
//     }
//   for (let i = 0; i < queue.length; i++) {
//     if (queue[i] === "wolf") {
//       let n = queue.length - 1 - i;
//        return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
//     }
//   }
// }
// console.log(warnTheSheep(['sheep', 'sheep', 'wolf']));
////https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return (dadYearsOld-2*sonYearsOld)>0?(dadYearsOld-2*sonYearsOld):(-1)*(dadYearsOld-2*sonYearsOld)
// }
///https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// function digitalRoot(n) {
//     let sum=eval(n.toString().split('').join('+'));
//     let alo=sum.toString().length;
//     if(alo>1){
//         digitalRoot(sum)
//     }
//     else{
//         return sum;
//     }
// }
// console.log(digitalRoot(942));
// function digitalRoot(n) {
//         let sum=eval(n.toString().split('').join('+'));
//         while(sum.toString().length>1){
//             res=eval(sum.toString().split('').join('+'));
//             sum=res;
//         }
//     return sum;
// };
// console.log(digitalRoot(456));
// https://www.codewars.com/kata/59b81886460387d8fc000043/train/javascript
// let reverse=a=>a.slice(0).map(a.pop,a)
// console.log(reverse([1,2,4,5]));
// function encode(n) {
    
// }

// function decode(n) {
  
// }
// function fibonacci(max) {
//     let arr=[0,1];
//     let sum=0;
//     while(sum<max){
//         sum=arr[arr.length-1]+arr[arr.length-2];
//         if(sum<max){
//             arr.push(sum)
//         }
//     }
//     let all=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             all+=arr[i]
//         }
//     }
//     return all;
// }
// console.log(fibonacci(33));
// var solution = function(firstArray, secondArray) {
//     let sum=0;
//     for(let i=0;i<firstArray.length;i++){
//         sum+=(firstArray[i]-secondArray[i])**2;
//     }
//     let result=parseFloat(sum/firstArray.length);
//     return result;
// }
// console.log(solution([10,20,10,2],[10,25,5,-2]));
// function multiply(n, o){
//     // let num=BigInt(n);
//     // let num2=BigInt(o);
//     let result=(n*o)
//     if(result===parseFloat(result)){
//         return `${BigInt(n*o)}`;
//     }
//     else{
//         return `${parseFloat(n*o)}`;
//     }
// }
// console.log(multiply("2.01", "3.0000"));
// function solution(words) {
//     //  for(let i=0;i<words.length;i++){
//          for(let j=1;j<words.length;j++){
//              if(words[0]===words[j][words[j].length-1]){
//                  words[0]+=words[j];
//              }
//          }
//     //  }
//      console.log(words);
//      if(words.length===0){
//         return true;
//       }
//       else{
//         return false; 
//       }
//  }
//  console.log(solution(["east", "e", "e", "t", "t", "e", "time"]));
