$(".speaker").click(function(){
            
            
            
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".container").removeClass("active");
    } else {
        $(".speaker").removeClass("active");
        $(this).addClass("active");
        $(".container").addClass("active");
    }
    
    

    
})

