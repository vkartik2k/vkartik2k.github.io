$(function () {
    setTimeout(function(){
        $("#loading").addClass("animated slideOutUp")
    },1000)
    
    var $window = $(window), win_height_padded = $window.height() * 1.1, isTouch = Modernizr.touch;
    
    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
          var $this     = $(this),
              offsetTop = $this.offset().top;
    
          if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated ' + $this.data('animation'));
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated ' + $this.data('animation'));
            }
          }
    })}

    $window.on('scroll', revealOnScroll);

    $(".sliderBtn").on("click",function () {
        $('.sliderBtn.selected').removeClass('selected');
        $(this).addClass('selected');
        var id = $(this).attr('id');
        var projectHeading = ["TIC-TAC-TOE-ONLINE","MANGO CIPHER","E-COMMERCE WEBSITE","2048"]
        var projectContent = ["TicTacToeOnline is an user vs computer game of Tic Tac Toe made in form of website. This uses minmax algorithm with a slight variation so that the user gets equal change of beating the computer.<br><br> Link - Click Here",
            "This is a software(unlicensed) which encrypts and decrypts text files. This is coded in python using PyQt4 library and successfully converted into executable file. This uses self made encryption algorithm which makes it very difficult to crack.",
            "Made an e-commerce website for sale of fashion related products. Options of filter and search product are also implemented along with basic features like view product, add to cart, add to wishlist. Products can be added, modified, removed with admin pannel.<br><br>Github Link",
            "Made 2048 Game with help of HTML5, CSS and Vanilla JavaScript."]
        $(scHeader).html(projectHeading[id])
        $(scContent).html(projectContent[id])
        var underline = $("#borderHeavy")
        underline.animate({
            width: "80%"
        }, "slow");
        underline.animate({
            width: "80px"
        }, "slow");
    })

})