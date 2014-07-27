// MENU BAR HANDLER

var menu_head = $('ul.side-menu h2.title').height();
var item_height = $('ul.side-menu li a').height();
var row_width = $('#nav-container').width();

var timeoutHandle;

function handlerIn() {
    if (!$('.underline').hasClass('open')) {
        console.log("open");
        console.log("row width " + row_width);
        $('ul.side-menu').addClass('open');
        $('.underline').addClass('open');
        $('body').addClass('open');

        $('ul.side-menu li').each(function () {
            // Metro Effect
            if ($(this).hasClass('metro')) {
                var col_i = $(this).index(); // Horizontal Index
                var fromLeft = (0.80 * window.innerWidth) - (col_i * 125) - 125;
                var delayTime = col_i * 150;
                $(this).dequeue();
                $(this).delay(delayTime).queue(function () {
                    $(this).css("left", fromLeft);
                    $(this).css("opacity", 100);
                    $(this).dequeue();
                });
            }
        });
    }

    window.clearTimeout(timeoutHandle);

    timeoutHandle = window.setTimeout(function () {
        console.log("actual close");
        $('ul.side-menu').removeClass('open');
        $('.underline').removeClass('open');
        $('body').removeClass('open');

        // Reset menu on close
        $('ul.side-menu li').each(function () {
            var col_i = $(this).index(); // Horizontal Index
            var fromLeft = (0.15 * window.innerWidth) + (col_i * 125);
            var delayTime = Math.abs((3 - col_i) * 100);
            $(this).delay(delayTime).queue(function () {
                $(this).css("left", fromLeft);
                $(this).css("opacity", 0);
                $(this).dequeue();
            });
        });
    }, 10000);
}

function handlerOut() {
    console.log("close");
}



// CLOSE ANY ACTIVE MODAL 
function closeAllModals() {
    $(".blur").each(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).fadeOut(500);
        }
    });
    $(".tab-content").each(function () {
        $(this).fadeOut(500);
    });
    $(".background").each(function () {
        $(this).fadeOut(500);
    });
}


function areThereActiveModals() {
    var activeModal;
    $(".blur").each( function() {
        if ($(this).hasClass("active")) {
            activeModal = true;
        }
    });
    
    return activeModal;
}


 // INTERESTS HANDLERS

function interestsClickHandler() {
    if (areThereActiveModals() && !$(".blur.interests").hasClass("active")) {
        closeAllModals();
    }
    if ($(".blur.interests").hasClass("active")) {
        $(".blur.interests").fadeOut(500).removeClass("active");
        // $("#background-interests").fadeOut(500);
        $(".tab-content.interests").fadeOut(500);
    } else {
        $(".tab-content.interests").fadeIn(500);
        // $("#background-interests").fadeIn(500);
        $(".blur.interests").fadeIn(500).addClass("active");
    }
}

function interestsHoverInHandler() {
    $(".background.interests").fadeIn(500);
}

function interestsHoverOutHandler() {
    if (!$(".blur.interests").hasClass("active")) {
        $(".background.interests").fadeOut(500);
    }

}

$("#interests").click(interestsClickHandler);

$("#interests").hover(interestsHoverInHandler, interestsHoverOutHandler);


 // PROJECTS HANDLERS

function projectsClickHandler() {
    if (areThereActiveModals() && !$(".blur.projects").hasClass("active")) {
        closeAllModals();
    }
    if ($(".blur.projects").hasClass("active")) {
        $(".blur.projects").fadeOut(500).removeClass("active");
        // $("#background-projects").fadeOut(500);
        $(".tab-content.projects").fadeOut(500);
    } else {
        // $("#background-projects").fadeIn(500);
        $(".blur.projects").fadeIn(500).addClass("active");
        $(".tab-content.projects").fadeIn(500);
    }
}

function projectsHoverInHandler() {
    $(".background.projects").fadeIn(500);
}

function projectsHoverOutHandler() {
    if (!$(".blur.projects").hasClass("active")) {
        $(".background.projects").fadeOut(500);
    }

}

$("#projects").click(projectsClickHandler);

$("#projects").hover(projectsHoverInHandler, projectsHoverOutHandler);



 // RESUME HANDLERS

function resumeClickHandler() {
    if (areThereActiveModals() && !$(".blur.resume").hasClass("active")) {
        closeAllModals();
    }
    if ($(".blur.resume").hasClass("active")) {
        $(".blur.resume").fadeOut(500).removeClass("active");
        // $("#background-resume").fadeOut(500);
        $(".tab-content.resume").fadeOut(500);
    } else {
        // $("#background-resume").fadeIn(500);
        $(".tab-content.resume").fadeIn(500);
        $(".blur.resume").fadeIn(500).addClass("active");
    }
}

function resumeHoverInHandler() {
    $(".background.resume").fadeIn(500);
}

function resumeHoverOutHandler() {
    if (!$(".blur.resume").hasClass("active")) {
        $(".background.resume").fadeOut(500);
    }

}

$("#resume").click(resumeClickHandler);

$("#resume").hover(resumeHoverInHandler, resumeHoverOutHandler);



