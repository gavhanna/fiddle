(function($){

  function updateOutput() {
    $("iframe").contents().find('html').html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    // evaluate JS in the iframe
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
  }

  $(".toggleButton").on("click", function(){
    var panelID = $(this).attr("id") + "Panel";
    $(this).toggleClass("selected");
    $("#" + panelID).toggleClass("hide");
  });

  $("textarea").on("change keyup paste", updateOutput);

  updateOutput();

})(jQuery);
