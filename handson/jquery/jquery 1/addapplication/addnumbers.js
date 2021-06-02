function add_two_number(){
    $("#result").val("");
            var num1=$("#firstnumber").val();
            var num2=$("#secondnumber").val();
            if(num1=="" || num2==""){
                $("#failure").html("<font color='red'>Pls.Enter the Values</font>")
            }
            else{
            var result=parseInt(num1)+parseInt(num2);
           
            $("#result").val(result);
            $("#failure").html("<font color='green'>"+result+"</font>");
            }
}