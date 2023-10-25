//<Function 4>
document.getElementById('saveBtn').onclick = function(e){
    //console.log(e.target);
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    

    function Member(name, age, height){
        this.name= name;
        this.age= age;
        this.height =height
        this.showInfo = function () {
            return ` 이름은 ${this.name}이고 나이는 ${this.age}입니다. `;
        }
    }

    
    const mem = new Member(name,age,height);

    function makeTr(member ={
        name,
        age,
        height,
        showInfo
    }){
        if(member.name==null||member.age==null||member.height==null){
            window.alert("값 입력")
        }


        let html=''
        html += '<tr>'
        html += '<td>'+member.name +'</td>';
        html += '<td>'+member.age +'</td>';
        html += '<td>'+member.height +'</td>';
        html += '<td>'+member.showInfo() +'</td>';
        html += '<td><button id="delBtn" onclick ="this.parentElement.parentElement.romove()">삭제</button></td>'
        html += '</tr>'
        return html;
    }
    let str = "";
    str += makeTr(mem);
    
    let list =document.getElementById('list');
    list.innerHTML += str;
    //function Member()..., makeTr(member).

    document.getElementById('name').value="";
    document.getElementById('age').value="";
    document.getElementById('height').value="";
    document.getElementById('name').focus();

}

