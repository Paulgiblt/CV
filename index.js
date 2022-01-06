let imageInfoCV_Question = './img/ic-question-black.png';
let imageInfoCV_Cross = './img/ic-cross-black.png';
let info_CV_Hidden = true;

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



// Formulaire d'envois de mail 
$("#btn-submit").click((e)=>{
    e.preventDefault();
    console.log($(".input-subject"))
    window.open(`mailto:paul.gibault@hotmail.com?subject=${$("#input-subject").val()}&body=${$("#input-body").val()}`);
    $("#input-subject").val("");
    $("#input-body").val("");
})


// Mode Dark
window.setInterval(()=>{
    if($(".toggle-DM-state").is(':checked')){
        // -------------Set du label du bouton 
        $(".label-DM-text").text('Dark Mode')

        // -------------Set des images 
        // Image Information CV
        imageInfoCV_Cross = './img/ic-cross-white.png'
        imageInfoCV_Question = './img/ic-question-white.png'
        if(info_CV_Hidden){
            $(".icone-question").attr('src',imageInfoCV_Question);
        }else{
            $(".icone-question").attr('src',imageInfoCV_Cross)
        }
        if(info_CV_Hidden){
            $(".icone-question-scroll").attr('src',imageInfoCV_Question);
        }else{
            $(".icone-question-scroll").attr('src',imageInfoCV_Cross)
        }

        // Images Informations Compétences
        $(".bar-icone").attr('src','./img/ic-info-white.png');

        // Image Arrow
        $(".arrow-image").attr('src','./img/ic-arrow-white.png');

        // Image Progress Bar
        $(".progress-bar-value").css('background','url(../img/bar-progress5-new-color.jpg) repeat')

        // Image Logo PG
        $("#logo-PG").attr('src', './img/logo-PG-white.png');
        $(".logo-scroll").attr('src', './img/logo-PG-white.png');

        // ------------Set des Couleurs
        $("body").css('--white-color','var(--dark-white-color)')
        $("body").css('--black-color','var(--dark-black-color)')
        $("body").css('--background-color','var(--dark-background-color)')
        $("body").css('--primary-color','var(--dark-primary-color)')
        $("body").css('--secondary-color','var(--dark-secondary-color)')
        $("body").css('--hightlight-color','var(--dark-hightlight-color)')
        $("body").css('--black-lowOp-color','var(--dark-black-lowOp-color)')
        $(".toggle-DM").css('box-shadow',`-8px -4px 8px 0px #1D1B1E,
        8px 4px 12px 0px #312232,
        4px 4px 4px 0px #312232 inset,
       -4px -4px 4px 0px #1D1B1E inset`)
       $(".indicator-DM").css('box-shadow',`-8px -4px 8px 0px #1D1B1E,
       8px 4px 12px 0px #312232`)
       $(".progress-bar").css('box-shadow',`0px -9px 15px rgba(49, 34, 50, 0.9),
       inset 0px -15px 15px rgba(0,0,0,0.5),
       0px 9px 15px rgba(49,34,50,0.9),
       inset 0px 15px 15px rgba(0,0,0,0.5)`)

}else{
        // -------------Set du label du bouton
        $(".label-DM-text").text('Light Mode')
        
        // -------------Set des images 
        // Image Information CV
        imageInfoCV_Cross = './img/ic-cross-black.png'
        imageInfoCV_Question = './img/ic-question-black.png'
        if(info_CV_Hidden){
            $(".icone-question").attr('src',imageInfoCV_Question);
        }else{
            $(".icone-question").attr('src',imageInfoCV_Cross)
        }
        if(info_CV_Hidden){
            $(".icone-question-scroll").attr('src',imageInfoCV_Question);
        }else{
            $(".icone-question-scroll").attr('src',imageInfoCV_Cross)
        }

        // Images Informations Compétences
        $(".bar-icone").attr('src','./img/ic-info-black.png');

        // Image Arrow
        $(".arrow-image").attr('src','./img/ic-arrow-black.png');

        // Image Progress Bar
        $(".progress-bar-value").css('background','url(../img/bar-progress5.jpg) repeat')

        // Image Logo PG
        $("#logo-PG").attr('src', './img/logo-PG.png');
        $(".logo-scroll").attr('src', './img/logo-PG.png');

    
        // ------------Set des Couleurs
        $("body").css('--white-color','var(--light-white-color)')
        $("body").css('--black-color','var(--light-black-color)')
        $("body").css('--background-color','var(--light-background-color)')
        $("body").css('--primary-color','var(--light-primary-color)')
        $("body").css('--secondary-color','var(--light-secondary-color)')
        $("body").css('--hightlight-color','var(--light-hightlight-color)')
        $("body").css('--black-lowOp-color','var(--light-black-lowOp-color)')
        $(".toggle-DM").css('box-shadow',`-8px -4px 8px 0px #ffffff,
        8px 4px 12px 0px #d1d9e6,
        4px 4px 4px 0px #d1d9e6 inset,
        -4px -4px 4px 0px #ffffff inset`)
       $(".indicator-DM").css('box-shadow',`-8px -4px 8px 0px #ffffff,
       8px 4px 12px 0px #d1d9e6`)
       $(".progress-bar").css('box-shadow',`0px -9px 15px rgba(255, 255, 255, 0.4),
       inset 0px -15px 15px rgba(0,0,0,0.5),
       0px 9px 15px rgba(255,255,255,0.4),
       inset 0px 15px 15px rgba(0,0,0,0.5)`)
}
},100);




// Fonction pour mode mobile
if(screen.width < 600){
 window.open('./mobileIndex.html','_self')
}  

window.onresize = ()=>{
    if(screen.width < 600){
        window.open('./mobileIndex.html','_self')
       } 
}

// Toggle infos CV
$(".info-CV").hide();

$(".icone-question").click(()=>{
    if(info_CV_Hidden){
        $(".icone-question").attr('src',imageInfoCV_Question)
        info_CV_Hidden = false;
        $(".info-CV").show(400);
    }else{
        $(".icone-question").attr('src',imageInfoCV_Cross)
        info_CV_Hidden = true;
        $(".info-CV").hide(400);
    }
    
})

// Toggle infos CV
$(".info-CV-scroll").hide();

$(".icone-question-scroll").click(()=>{
    if(info_CV_Hidden){
        $(".icone-question-scroll").attr('src',imageInfoCV_Cross)
        info_CV_Hidden = false;
        $(".info-CV-scroll").show(400);
    }else{
        $(".icone-question-scroll").attr('src',imageInfoCV_Question)
        info_CV_Hidden = true;
        $(".info-CV-scroll").hide(400);
    }
    
})



// Mouvement Section Ecole 
$(".school").mouseenter(()=>{
    $(".school").css('transform',' translateX(-5%) rotateY(5deg)')
})
$(".school").mouseleave(()=>{
    $(".school").css('transform',' translateX(-2%) rotateY(10deg)')
})

// Mouvement Section Job 
$(".job").mouseenter(()=>{
    $(".job").css('transform',' translateX(-12%) rotateY(-5deg)')
})
$(".job").mouseleave(()=>{
    $(".job").css('transform',' translateX(-15%) rotateY(-10deg)')
})

// Mini Menu

$(window).scroll((e)=>{
    var bodyTop = $("body").offset().top;   

    if ((bodyTop - $(window).scrollTop())<-400){
    $(".intro-scroll").css('top','0')
    window.setTimeout(()=>{
        $(".btn-DM").css('position', 'fixed')
        $(".btn-DM").css('z-index', '100')
    },380)
    
    }else{
        $(".intro-scroll").css('top','-100px')
        $(".btn-DM").css('position', 'absolute')
        $(".btn-DM").css('z-index', '2')
    }
})




