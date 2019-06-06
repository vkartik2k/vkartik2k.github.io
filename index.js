$(function () {
  setTimeout(function(){
    $("#backgroundBlur1").hide()
    $("#downBtn").hide()
    $("#loading").addClass("animated slideOutUp")
  },2500)
  setTimeout(function(){
    $("#backgroundBlur1").show()
    $('#backgroundBlur1').addClass("animated fadeIn")
  },2800)
  setTimeout(function(){
    $("#downBtn").show()
    $('#downBtn').addClass("animated jackInTheBox")
  },3600)
  setTimeout(function(){
    $("#downBtn").removeClass('animated jackInTheBox');
  },4000)

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

    $("#downBtn").hover(function(){
      $(this).addClass('animated rubberBand');
    });
    $("#downBtn").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
      $(this).removeClass('animated rubberBand');
    });

    $(".sliderBtn").on("click",function () {
        $('.sliderBtn.selected').removeClass('selected');
        $(this).addClass('selected');
        var id = $(this).attr('id');
        var projectHeading = ["TIC-TAC-TOE-ONLINE","MANGO CIPHER","E-COMMERCE WEBSITE","2048"]
        var projectContent = ["TicTacToeOnline is an user vs computer game of Tic Tac Toe made in form of website. This uses minmax algorithm with a slight variation so that the user gets equal change of beating the computer.<br><br> Link - <a href=\"https://www.kartikverma.tech\/TicTacToeOnline\">www.kartikverma.tech/TicTacToeOnline</a>",
            "This is a software(unlicensed) which encrypts and decrypts text files. This is coded in python using PyQt4 library and successfully converted into executable file. This uses self made encryption algorithm which makes it very difficult to crack.",
            "Made an e-commerce website for sale of fashion related products. Options of filter and search product are also implemented along with basic features like view product, add to cart, add to wishlist. Products can be added, modified, removed with admin pannel.<br><br><a href=\"https://github.com/vkartik2k/e-commerce-website\">GitHub Link</a>",
            "Made 2048 Game with help of HTML5, CSS and Vanilla JavaScript. Player can play it using arrow keys or using touch on mobile-devices. High score of player is also displayed at the top along with the current score. <br><br> Link - <a href=\"https://www.kartikverma.tech\/2048\">www.kartikverma.tech/2048</a>"]
        var projectImage = ["./img/project1.png","./img/project2.png","./img/project3.png","./img/project4.png"]
        $("#scHeader").html(projectHeading[id])
        $("#scContent").html(projectContent[id])
        $(".realImage").attr("src",projectImage[id]);
        var underline = $("#borderHeavy")
        underline.animate({
            width: "80%"
        }, "slow");
        underline.animate({
            width: "80px"
        }, "slow");
    })

    var dataText = [ "Web Developer!", "Sport Programmer!", "Algorithm Lover!", "Sophomore at DTU!"];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.getElementById("mainPost").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 700);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    setTimeout(StartTextAnimation(0),100) 
})
