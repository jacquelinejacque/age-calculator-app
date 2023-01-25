
function calculateAge() {
    var y1=document.getElementById('fromYear').value;
    var m1=document.getElementById('fromMonth').value;
    var d1=document.getElementById('fromDate').value;

    var date=new Date();
    var d2=date.getDate();
    var m2=date.getMonth() +1;
    var y2=date.getFullYear();
    var month=[31,28,31,30,31,30,31,31,30,31,30,31];

    if (d1>d2) {
        d2=d2-month[m2-1];
        m2=m2-1;
    }
    if (m1>m2) {
        m2+=12;
        y2-=1;
    }
    var y=y2-y1;
    var m=m2-m1;
    var d=d2-d1;
    document.getElementById('result').innerHTML="Your age is: "+y+" years "+ m+" months "+d+" days";
}