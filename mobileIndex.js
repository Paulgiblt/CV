if(screen.width > 600){
    window.open('./webIndex.html','_self')
   } 

window.onresize = ()=>{
    if(screen.width > 600){
        window.open('./webIndex.html','_self')
       } 
}

// Toggle infos industriel
$("#indus-info-text").hide();

$("#indus-info").mouseenter(()=>{
    $("#indus-info-text").show(400);
})

$("#indus-info").mouseleave(()=>{
    $("#indus-info-text").hide(400);
})

// Toggle infos web
$("#web-info-text").hide();

$("#web-info").mouseenter(()=>{
    $("#web-info-text").show(400);
})

$("#web-info").mouseleave(()=>{
    $("#web-info-text").hide(400);
})

// Toggle infos TIA
$("#tia-info-text").hide();

$("#tia-info").mouseenter(()=>{
    $("#tia-info-text").show(400);
})

$("#tia-info").mouseleave(()=>{
    $("#tia-info-text").hide(400);
})

// Toggle infos Schneider
$("#schneider-info-text").hide();

$("#schneider-info").mouseenter(()=>{
    $("#schneider-info-text").show(400);
})

$("#schneider-info").mouseleave(()=>{
    $("#schneider-info-text").hide(400);
})

// Toggle infos PCVue
$("#pcvue-info-text").hide();

$("#pcvue-info").mouseenter(()=>{
    $("#pcvue-info-text").show(400);
})

$("#pcvue-info").mouseleave(()=>{
    $("#pcvue-info-text").hide(400);
})

// Toggle infos Technique
$("#tech-info-text").hide();

$("#tech-info").mouseenter(()=>{
    $("#tech-info-text").show(400);
})

$("#tech-info").mouseleave(()=>{
    $("#tech-info-text").hide(400);
})
