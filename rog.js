/*
* @file 干支纪年法，取近期的一个年轮
*/
let rog = function (content, state) {
	
	state = state || '';
	content = content || '';
	
	if (state.length > 0) {
		state = '  [' + state + ']  '
	}
	
	const recent = 2008;
	const Zodiac = [
		'🐀',
		'🐂',
		'🐯',
		'🐰',
		'🐲',
		'🐍',
		'🐴',
		'🐑',
		'🐵',
		'🐔',
		'🐶',
		'🐷'
	]

    let current = new Date().getYear() + 1900;
	
	let animal = (current - recent) % 12;
	
	console.log('%c ' + Zodiac[animal] + new Date().toLocaleTimeString() + state, 'font-size:5px;background:#458B74;padding:0.2em 1em;color:#fff', content);

};

if (typeof module !== 'undefined' && typeof module.exports !=='undefined') {
    module.exports = rog;
} else {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return rog;
        });
    } else {
        window.rog = rog;
    }
}

rog('Welcome come to my door!');
