//obj2.js
const students =[
    {sno:'001', sname:"최해주", engScore:80, mathScore:85},
    {sno:'002', sname:"김채민", engScore:82, mathScore:90},
    {sno:'003', sname:"최다예", engScore:84, mathScore:92}
]

const member = new Member('', 0, 0);
member.makeHtml(students);
member.showPage(document.getElementById('show'));