var txt = ['a fullstack developer', 'an avid rockclimber', ' a swimmer', 'a biker', 'a hiker', 'an aviation enthusiast', 'a Leafs fan'],
    n = txt.length,
    $swap = $('#swap'),
    $span,
    c = -1;

// CREATE SPANS INSIDE SPAN
for(var i=0; i<txt.length; i++) $swap.append($('<span />',{text:'I am '+txt[i]+'.'}));
// HIDE AND COLLECT THEM
$span = $("span", $swap).hide(); 

(function loop(){
    c = ++c % n;
    $swap.animate({width: $span.eq( c ).width() });
    $span.stop().fadeOut().eq(c).fadeIn().delay(1000).show(0, loop);
}()); 