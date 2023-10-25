//object.js

console.log('object start...')

let obj1 ={
    name:'hong',
    age:20
}

//주소참조
let obj2 = obj1; 
console.log(obj1);
console.log("ㅇㅈㅇㅈㅇㅈㅇㅈ");

obj2.age =22;
console.log(obj1);

//복사.
let obj3 = { ...obj1}
obj3.age=24;
console.log(obj1);

class Member{
    // constructor(){
    //     console.log
    // }
    constructor(name, age, height){
        this.name= name;
        this.age=age;
        this.height=height;
    }
    setWeight(weight){
        this.weight=weight;
    }
    getWeight(){
        return this.weight;
    }
    showInfo(){
        return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`
    }
    //학생정보: 학생번호, 이름, 영어 수학
   
   
    makeTr(student={sno,sname,engScore,mathScore}){
        let str ="";
        str += '<tr>'
        str += `<td>${student.sno}</td><td>${student.sname}</td><td>${student.engScore}</td><td>${student.mathScore}</td>`
        str+= '</tr>'
        return str;
        //tr>td*4
    }
    makeHtml(studAry=[]){
       // let str ="";
       //str+='<table border = "1"><thead><tr>'
       // str+='<th>학생번호</th><th>학생이름</th><th>영어점수</th><th>수학점수</th></tr></thead>'
       // str+='<tbody>'
       // students.forEach(function(item){
         //   str+= `<tr><td>${sno}</td><td>${sname}</td><td>${item.engScore}</td><td>${item.mathScore}</td></tr>`
        //})
       // str+='</tbody></thead>'
        
        let table ='<table border = "1"><tbody>';
        let obj =this;
        table += studAry.reduce(function(acc,stud) {
			return acc + obj.makeTr(stud)
		}, '');
        table +='</tbody></table>'
        this.html= table;
    
    }
    showPage(dom){
        //innerHtml t속성에 html 저장
        //let show = document.getElementById('show');
        dom.innerHTML = this.html;
    }
}
const mem1= new Member('홍길동',20,156.7);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게:',mem1.getWeight());
