$(document).ready(function() {
   var range = $('#range');
    range.slider({
        animate: 'fast',
        max: 15000,
        min: 1200,
        range: true,
        values: [1200, 11850]
    });
    var values = range.slider('values');
    var minValue = range.slider('option', 'min');
    var maxValue = range.slider('option', 'max');
    var minRange = $('.min_val');
    var maxRange = $('.max_val');
    var min = $('.min');
    var max = $('.max');

    minRange.text(minValue);
    maxRange.text(maxValue);
    min.val(values[0]);
    max.val(values[1]);

    range.on('slidechange', function(event, ui) {
       min.val(ui.values[0]);
       max.val(ui.values[1]);
    });
    var form = $('#productForm');
    form.change( function() {
        if (min.val() !== undefined && max.val() !== undefined && isNumeric(min.val()) && isNumeric(max.val())) {
            range.slider('option', 'values', [
                min.val(),
                max.val()
            ]);
        } else {
            min.val(values[0]);
            max.val(values[1]);
        }
    });
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
});
