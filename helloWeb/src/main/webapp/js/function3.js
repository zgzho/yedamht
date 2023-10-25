//function3.js

function Member(name, age, height) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `이름은 ${this.name}이고 나이는 ${this.age}입니다,`;
    }
}
var myName = 'Hong';
const member = new Member('홍길동', 20, 123.4);
console.log(member.showInfo());

const members = [
    new Member('홍길동', 18, 123.3),
    new Member('김길동', 19, 124.3),
    new Member('박길동', 20, 125.3),

]

members.forEach(function (item) {
    console.log(item.showInfo());
})

let str = null;
//함수 :table 생성
function makeTable(memberAry = []) {
    str += '<table border = "1"><thead><tr>'
    str += '<th>이름</th><th>나이</th><th>키</th><th>기타</th></tr></thedad>'
    str += '<tbody>'
    members.forEach(function (item) {
        str += `<tr><td> ${item.name} </td><td> ${item.age}  </td><td>${item.height} </td><td>${item.showInfo()}</td></tr>`;
    })
    str+= '</tbody></thead>'

    return str;
}
//makeTable(members);
let show = document.getElementById('show');
show.innerHTML = makeTable(members);
