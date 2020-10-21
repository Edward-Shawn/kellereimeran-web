var didScroll;

var header = $("header");

$(window).scroll(function(event){
    didScroll = true;
    hasScrolled();
    

})

setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
    
},100);



function hasScrolled(){
    var windowWit = $(window).scrollTop();

    if( windowWit == 0 ){
        header.removeClass("on");
    }else{
        header.addClass("on");
    }




}
