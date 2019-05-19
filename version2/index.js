setTimeout(function () {
    let letterArr = $(".mainNameInner")
    letterArr.each(function() {
        $( this ).addClass( "animated bounce" );
        console.log("Animation")
      }); 
},2000)