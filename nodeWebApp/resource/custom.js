
$(document).ready(()=>{

    $("#convert").on("click",(e)=>{
        let $input=$('#decimal').val();
        var roman=$("#roman")
    $.ajax({
         url:"/convert",
         method:"post",
         contentType:"application/json",
         data: JSON.stringify({"input":$input}),
         processData:false,
         success:(data)=>{
             data=JSON.parse(data);
             if(data.hasOwnProperty("error")){
                 $("#decima1-wrap").append("<span class='alert alert-danger error'>"+data.error.message+"<span>");
                   setTimeout(()=>{
                       $(".error").remove();
                   },3000);
                   roman.val("");
                }else{
                    roman.val(data.result.roman);
             }
         },
         errro:(data)=>{
           alert(JSON.stringify(data));
         }
     });
    });
 
});