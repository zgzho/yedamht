//function2.js
console.log('function2.js')

const member = {
    name:"홍길동",
    age:18,
    height:178.9,
    showInfo: function(){
        return(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`)
    }
}
const member1 = {
    name:"홍길동",
    age:18,
    height:178.9,
    showInfo: function(){
        return(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`)
    }
}
const member2 = {
    name:"홍길동",
    age:18,
    height:178.9,
    showInfo: function(){
        return(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`)
    }
}
const members=[member, member1, member2]
member.showInfo();
//DOM
let show = document.getElementById('show');//table>(thead>tr>th*2)  + (tbody>tr>td*2)  table>tbody>(tr>td*4)*3
//console.log(typeof show);
let str = "";

str += '<table border = 1><thead><tr>'
str += '<th>이름</th><th>나이</th><th>키</th><th>기타</th></tr></thedad>'
str += '<tbody>'
members.forEach(function(item){
    str+= makeTr(item);
})
// for(i=0; i<members.length; i++){
//     str += makeTr(members[i]);
// }
str += '</tbody></table>'
console.log(show);

show.innerHTML = str;

//"<ul><li>Apple</li></ul>";

function makeTr(number ={name, age, height, showInfo}){
    let html = '';
    html += '<tr>';
    html += '<td>' +member.name+'</td>';
    html += '<td>' +member.age+'</td>';
    html += '<td>' +member.height+'</td>';
    html += '<td>' +member.showInfo()+'</td>';
    html += '</tr>';

    return html;
}


console.log(makeTr(member));