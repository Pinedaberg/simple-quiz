$(document).ready(function() {
    let options = $('.option');
    
    options.click(function() {
        options.attr('disabled', true);
        $(this).addClass('selected');
        
        if ($(this).text() === 'Paris') {
            $('.feedback').text('Correct! Paris is the capital of France.').addClass('correct');
        } else {
            $('.feedback').text('Incorrect. The correct answer is Paris.').addClass('incorrect');
        }
    });
});
