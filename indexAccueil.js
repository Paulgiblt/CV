window.setInterval(()=>{
    if($("#show-password").is(':checked')){
        $("#password").attr('type','text')
    }else{
        $("#password").attr('type','password')
    }
},100);

$("h3").hide();

function checkPassword(password){
    if(password==="lecvdepaul"){
        window.open('./webIndex.html')
    }else{
        console.log('mauvais mot de passe')
        $("h3").show(400);
    }
}

$("#submit").click(()=>{
    checkPassword($("#password").val())
})

$("body").keypress((e)=>{
    if(e.key==="Enter"){
        checkPassword($("#password").val())
    }
})