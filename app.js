const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/firstPage.html")
});

app.post("/",function(req,res){
    var sem=(req.body.sem);
    var branch=req.body.branch;
    console.log(sem);
    console.log(branch);
    if(sem==2){
       res.redirect("/firstYear");
    }
    if(sem==4 && (branch=="CS"||branch=="IS")){
        res.redirect("/secondYearCS")
    }if(sem==4 && branch=="EC"){
        res.redirect("/secondYearEC");
    }if(sem==4 && branch=="EE"){
        res.redirect("/secondYearEE");
    }if(sem==4 && branch=="ME"){
        res.redirect("/secondYearME");
    }if(sem==4 && branch=="CV"){
        res.redirect("/secondYearCV");
    }if(sem==6 && branch=="CS"){
        res.redirect("/thirdYearCS");
    }if(sem==6 && branch=="IS"){
        res.redirect("/thirdYearIS")
    }if(sem==6 && branch=="EC"){
        res.redirect("/thirdYearEC")
    }if(sem==6 && branch=="EE"){
        res.redirect("/thirdYearEE")
    }if(sem==6 && branch=="ME"){
        res.redirect("/thirdYearME")
    }if(sem==6 && branch=="CV"){
        res.redirect("/thirdYearCV")
    }
    else{
         res.send(("Enter A Valid Even Sem"));
        
    }

    
});

app.get("/firstYear",function(req,res){

      res.sendFile(__dirname+"/firstYear.html")

});
app.post("/firstYear",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    arrayMarks1(2,S1,S2,S3,S4,S5,S6,S7,S8,psem);
    length=marks.length;
    var sum=calculateMarks(2,marks,length,psem);
    res.render("result",{
        result:sum
    });
    
    // res.send("Marks posted and SGPA="+sum);
 
});

app.get("/secondYearCS",function(req,res){

    res.sendFile(__dirname+"/Second-Year/secondYearCS.html")
});

app.post("/secondYearCS",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    arrayMarks2(4,S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    length=marks.length;
    var sum=calculateMarks(4,marks,length,psem);
    res.render("result",{
        result:sum
    });
});

app.get("/secondYearEC",function(req,res){

    res.sendFile(__dirname+"/Second-Year/secondYearEC.html")
});

app.post("/secondYearEC",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    arrayMarks2(4,S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    length=marks.length;
    var sum=calculateMarks(4,marks,length,psem);
    res.render("result",{
        result:sum
    });
});

app.get("/secondYearEE",function(req,res){

    res.sendFile(__dirname+"/Second-Year/secondYearEE.html")
});

app.post("/secondYearEE",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    
    arrayMarks2(4,S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    length=marks.length;
    var sum=calculateMarks(1,marks,length,psem);
    res.render("result",{
        result:sum
    });
});

app.get("/secondYearME",function(req,res){

    res.sendFile(__dirname+"/Second-Year/secondYearME.html")
});

app.post("/secondYearME",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    arrayMarks2(4,S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    length=marks.length;
    var sum=calculateMarks(4,marks,length,psem);
    res.render("result",{
        result:sum
    });
});

app.get("/secondYearCV",function(req,res){

    res.sendFile(__dirname+"/Second-Year/secondYearCV.html")
});

app.post("/secondYearCV",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    arrayMarks2(4,S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    length=marks.length;
    var sum=calculateMarks(4,marks,length,psem);
    res.render("result",{
        result:sum
    });
});

app.get("/thirdYearCS",function(req,res){

    res.sendFile(__dirname+"/Third-Year/thirdYearCS.html");

});

app.post("/thirdYearCS",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    arrayMarks1(6,S1,S2,S3,S4,S5,S6,S7,S8,psem);
    length=marks.length;
    var sum=calculateMarks(6,marks,length,psem);
    res.render("result",{
        result:sum
    });
});

app.get("/thirdYearIS",function(req,res){

    res.sendFile(__dirname+"/Third-Year/thirdYearIS.html")
});

app.post("/thirdYearIS",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    arrayMarks1(6,S1,S2,S3,S4,S5,S6,S7,S8,psem);
    length=marks.length;
    var sum=calculateMarks(6,marks,length,psem)
    res.render("result",{
        result:sum
    });
});

app.get("/thirdYearEC",function(req,res){

    res.sendFile(__dirname+"/Third-Year/thirdYearEC.html")
});

app.post("/thirdYearEC",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    arrayMarks1(6,S1,S2,S3,S4,S5,S6,S7,S8,psem);
    length=marks.length;
    var sum=calculateMarks(6,marks,length,psem)
    res.render("result",{
        result:sum
    });
});

app.get("/thirdYearEE",function(req,res){

    res.sendFile(__dirname+"/Third-Year/thirdYearEE.html")
});

app.post("/thirdYearEE",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    arrayMarks1(6,S1,S2,S3,S4,S5,S6,S7,S8,psem);
    length=marks.length;
    var sum=calculateMarks(6,marks,length,psem)
    res.render("result",{
        result:sum
    });
});

app.get("/thirdYearME",function(req,res){

    res.sendFile(__dirname+"/Third-Year/thirdYearME.html")
});

app.post("/thirdYearME",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    

    arrayMarks1(6,S1,S2,S3,S4,S5,S6,S7,S8,psem);
    length=marks.length;
    var sum=calculateMarks(6,marks,length,psem)
    res.render("result",{
        result:sum
    });
});

app.get("/thirdYearCV",function(req,res){

    res.sendFile(__dirname+"/Third-Year/thirdYearCV.html")
});

app.post("/thirdYearCV",function(req,res){


    
    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    
    arrayMarks1(6,S1,S2,S3,S4,S5,S6,S7,S8,psem);

    length=marks.length;
    var sum=calculateMarks(6,marks,length,psem)
    res.render("result",{
        result:sum
    });
});

function arrayMarks1(sem,S1,S2,S3,S4,S5,S6,S7,S8,psem){

    if (sem==6||sem==2){
   
    marks=[];

    marks.push(S1,S2,S3,S4,S5,S6,S7,S8);

    console.log(marks,psem);
    
    }

}
function arrayMarks2(sem,S1,S2,S3,S4,S5,S6,S7,S8,S9,psem){

    if (sem==4){
   
    marks=[];

    marks.push(S1,S2,S3,S4,S5,S6,S7,S8,S9);

    console.log(marks,psem);
    
    }

}

function calculateMarks(sem,marks,length,psem){
    var points= []; 
    if(sem==2){
         for(i=0;i<length;i++){
            var percent=(Number(marks[i])/40)*100;
             points[i]=Math.ceil(percent/10);
         }
    console.log(points);
        
    var presentSGPA=(points[0]*4+points[1]*4+points[2]*3+points[3]*3+points[4]*3+points[5]*1+points[6]*1+points[7]*1)/20;
    
    var SGPA=(psem/2)+(presentSGPA/2);
        
    return SGPA;
    }
    if(sem==6){
        for(i=0;i<length;i++){
           var percent=(Number(marks[i])/40)*100;
            points[i]=Math.ceil(percent/10);
         }
        console.log(points);

        var presentSGPA=(points[0]*4+points[1]*4+points[2]*4+points[3]*3+points[4]*3+points[5]*2+points[6]*2+points[7]*2)/24;

        var SGPA=(psem/2)+(presentSGPA/2);

        return SGPA
    }
    if(sem==4){
        for(i=0;i<length;i++){
            var percent=(Number(marks[i])/40)*100;
             points[i]=Math.ceil(percent/10);
          }
          console.log(points); 

          var presentSGPA=(points[0]*3+points[1]*4+points[2]*3+points[3]*3+points[4]*3+points[5]*3+points[6]*2+points[7]*2+points[8]*1)/24;

          var SGPA=(psem/2)+(presentSGPA/2);

          return SGPA;

    }
    if(sem==1){
        for(i=0;i<length;i++){
            var percent=(Number(marks[i])/40)*100;
             points[i]=Math.ceil(percent/10);
          }
          console.log(points); 

          var presentSGPA=(points[0]*3+points[1]*3+points[2]*4+points[3]*3+points[4]*3+points[5]*3+points[6]*2+points[7]*2+points[8]*1)/24;

          var SGPA=(psem/2)+(presentSGPA/2);

          return SGPA;

    }
}

app.listen(3000,function(){
    console.log("Server up and runing at port 3000");
});