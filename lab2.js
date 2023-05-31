function demo(){
    var res=document.getElementById('res');
    var datetime= new Date();
    var hour=datetime.getHours();
    var min=datetime.getMinutes();
    var sec=datetime.getSeconds();
    var watch=hour+":"+min+":"+sec;
    res.innerHTML=watch;

    var date=datetime.getDate();
    var m=datetime.getMonth();
    var y=datetime.getFullYear();
    var x=Number(m)+1;

    var dayy=datetime.toDateString();
    da.innerHTML=dayy;
    // var dayy=datetime.getDay();
    // da.innerHTML=dayy;
    // if(dayy==3){
    //     var k="Wednesday"
    //     da.innerHTML=k;


    // }



    var see=date+"/"+x+"/"+y;
    d.innerHTML=see;

}

setInterval(demo,1000);


