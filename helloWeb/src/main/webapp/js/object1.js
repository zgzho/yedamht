//obj1.js


Member.prototype.setBloodType= function(bloodType){
    this.bloodType = bloodType;
}
Member.prototype.getBloodType= function(){
    return this.bloodType;
}

const mem2 = new Member('홍길동',22,123.4);
mem2.setBloodType('AB');
console.log(mem2.getBloodType());
console.log(mem2.getBloodType());


String.prototype.turncate= function(){
    console.log(this);
    return this.substring(0,5)
}

let result="helloworld".turncate();
console.log(result);
