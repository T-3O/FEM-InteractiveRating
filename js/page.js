class Rate
{
  constructor() {
    this.initEvents();
  };

  initEvents() {
    const self = this;
    $(".rate").on("click", this.onVoteChanged.bind(this));
    $("#rateBtn").on("click", this.onRateBtnClicked.bind(this));
    $("body").on("keyup", function(evt) {
      if (evt.key === "ArrowRight" || evt.key === "ArrowLeft")
      {
        self.onKeyboardNav(evt.key.substring(5));
      }
    });
  };

  onVoteChanged(evt) {
    $(".rate").removeClass("selected");
    const btn = $(evt.currentTarget);
    btn.addClass("selected");
    $("#result").text(btn.attr("data-rate"));
    $("#rateBtn").prop("disabled", false);
  };

  onRateBtnClicked(evt) {
    if ($(".rate.selected").length != 1)
    {
      return;
    }
    $(".card.rating").addClass("d-none");
    $(".card.rated").removeClass("d-none");
  };

  onKeyboardNav(direction) {
    const $selectedRateBtn = $(".rate:focus");
    let $newSelectedRateBtn, limitRate, startRate;
    if (direction === "Right")
    {
      limitRate = '5';
      startRate = '1';
      if ($selectedRateBtn.length)
      {
        $newSelectedRateBtn = $selectedRateBtn.next(".rate");
      }
    }
    if (direction === "Left")
    {
      limitRate = '1';
      startRate = '5';
      if ($selectedRateBtn.length)
      {
        $newSelectedRateBtn = $selectedRateBtn.prev(".rate");
      }
    }

    if (!$newSelectedRateBtn || (($selectedRateBtn.attr("data-rate")) === limitRate))
    {
      $newSelectedRateBtn = $(".rate[data-rate='" + startRate + "']");
    }

    $newSelectedRateBtn.trigger("focus");
  };
}

$(document).ready(function() {
  new Rate();
});