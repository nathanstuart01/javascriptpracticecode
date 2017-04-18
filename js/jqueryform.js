$(document).ready(function() {
    $('#arrival').datepicker();

    let $amount = $('#amount');
    let $range = $('#price-range');

    $('#price-range').slider({
      range: true,
      min: 0,
      max: 400,
      values: [0, 300],
      slide: function(event, ui) {
        $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
      }
    });

    $amount
      .val('$' + $range.slider('values', 0)
      + ' - $' + $range.slider('values', 1));
});
