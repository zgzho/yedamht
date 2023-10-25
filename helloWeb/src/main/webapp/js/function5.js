//fc5
let sum1 = 0;
[10, 20, 30].forEach(function(num){
	sum1 +=num;//consumer : 매개값 소진, 반환값 없음
})
console.log('forEach:',sum1);

sum1 =0 ;
sum1=[10,20,30].reduce(function(acc,item,idx){
	//console.log(acc,item,idx);
	return acc+ item;
},0);
console.log('reduce:',sum1);

function sum(a=0,b=0,...args){//argumenters.
	console.log(args);
	let result = 0;
	result = a+b;
	args.forEach(function(num){result+=num});
	return result;
}


console.log(sum(10,20,30,40,50,60));//arguments


const numAry =[4,2,6,9,1,7];
let max =0;


// max=numAry.reduce((acc, item)=>{
// 	if(max<item){
// 		max=item;
// 	}
// 	return acc;
// },0);


max = numAry.reduce((acc, item) => acc>item?acc:item);
console.log('최대값:',max)
console.log('dkdkkdkdkd');