//obj4.js

const obj ={
	sno:1001,
	sname: '홍길동',
	address:'대구 중구 100번지',
	freinds:[
		{name:'김민수',phone:'010-1111'},
		{name:'최현수',phone:'010-2222'},
	],
	hobbies:[
		'독서','영화보기','여행','요리'
	]
}
obj.addFriend = function(freind){
	this.freinds.push(freind);
}
obj.addFriend({name:'박현수',phone:'010-4444'})

obj.pets=[`고양`,`멍멍`,`멧돼지`]
console.log(obj.pets[2]);
obj.pets[2]
console.log(obj.pets[2]);


console.log('이름: ',obj['sname']);
console.log('친구는',obj.freinds.length,'명입니다');
console.log('첫번째 친구 이름:',obj['freinds'][0].name);
obj['freinds'][1]['phone']='010-3333';
console.log('두번째 친구 연락처:',obj['freinds'][1]['phone']);

obj.hobbies.forEach(hobby => console.log(hobby));