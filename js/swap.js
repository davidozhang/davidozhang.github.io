var txt = [	'a UW SE student',
			'a fullstack dev',
			'an iOS dev',
			'a rockclimber',
			'an aviation fan',
			'a swimmer',
			'a biker',
			'a traveller',
			'a hiker',
			'a Leafs fan',
			'a guitarist',
			'a violinist' ],
    n = txt.length,
    $swap = $('#swap'),
    $span,
    c = -1;

for(var i=0; i<txt.length; i++) $swap.append($('<span />',{text:'I am '+txt[i]+'.'}));
$span = $("span", $swap).hide(); 

(function loop(){
    c = ++c % n;
    $swap.animate({width: $span.eq( c ).width() });
    $span.stop().fadeOut().eq(c).fadeIn().delay(1000).show(0, loop);
}()); 