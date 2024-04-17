$("a.activate-fade-out-on-click").click(function(e){
	if (!isAnimationFadingOut)
	{
		e.preventDefault();
		var self = $(this);
		$(".fade-out-at-end").addClass("fade-out");
		var linkTarget = self.attr("href");
		if (linkTarget) {
			window.setTimeout( function(){ window.location.href = linkTarget; }, 1600);
		}
		isAnimationFadingOut=true;
	}

    
});
// This is called by animation.min.js on the first frame
function onFirstFrame() {
	$(".enter-text-container").addClass("do-enter-text-fade-in");
	$(".logo").addClass("do-logo-fade-in");
}

document.addEventListener("DOMContentLoaded", function (i_event) {
    var videoNo = Math.floor(Math.random() * 1);
    var videoUrl;
    switch (videoNo)
    {
    case 0:
        videoUrl = "videos/test.mp4";
        break;

    }

    $("#background-video source")[0].setAttribute("src", videoUrl);
    //$("#background-video")[0].play();
});
