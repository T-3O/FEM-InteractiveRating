class Rate
{
  constructor() {
    this.initEvents();
  };

  initEvents() {
    $(".rate").on("click", this.onVoteChanged.bind(this));
    $("#rateBtn").on("click", this.onRateBtnClicked.bind(this))
  };

  onVoteChanged(evt) {
    $(".rate").removeClass("selected");
    const btn = $(evt.currentTarget);
    btn.addClass("selected");
    $("#result").text(btn.attr("data-rate"));
  };

  onRateBtnClicked(evt) {
    if ($(".rate.selected").length != 1)
    {
      return;
    }
    $(".card.rating").addClass("d-none");
    $(".card.rated").removeClass("d-none");
  };
}

$(document).ready(function() {
  new Rate();
});