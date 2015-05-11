// JavaScript Document

function setTab(name, cursel, n) {

    for (i = 1; i <= n; i++) {

        var menu = document.getElementById(name + i); var con = document.getElementById("con_" + name + "_" + i);

        menu.className = i == cursel ? "hover" : ""; con.style.display = i == cursel ? "block" : "none";

    } 

}

/*$(function() {

    $("#headslide").Slide({

        effect: "fade",

        speed: "fast",

        timer: 3000

    });

    $("#focus").Slide({

        effect: "fade",

        speed: "fast",

        timer: 5000

    });

    $("#focus3").Slide({

        effect: "fade",

        speed: "fast",

        timer: 3000

    });

    new HorizontalMarquee("ryout","ryin","marqueery", "left", 70, 2);

});*/

function ShowNav(nav, i, x, y)

{

  var l = $('#'+nav+i).offset().left;

  var t = $('#'+nav+i).offset().top+$('#'+nav+i).height()-12;

  var m = $('#'+nav+'menu'+i);

  m.css('position', 'absolute').css('display', 'block');

  if(typeof(x)!='undefined') {

    m.css('left', (l+x)+'px').css('top', (t+y)+'px');

  }

}

function HideNav(nav, i)

{

  $('#'+nav+'menu'+i).css('display','none');

}


