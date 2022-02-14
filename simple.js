function jam(){
	var tanggal = new Date;
	return tanggal.getHours();
}

var jam = jam();


if(jam > 22  || jam <=3){
	document.getElementById('area').style.background = "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)";
 
	var arr = ['Selamat Pagiii dheaaa',
				'Hayuk Bangun2.',
				'Gabaik loh tidur pagi2 wkwkkw',
				'Jangan lupa sarapan yaaa',
				'Ihirr wkwk',
				'Ojo Judes judes pooo 😢',
				'wkwk gpp, semangat yaa hari ini', 
				'Kalau Keluar2 hati di jalan yaaa🤗', 
				'✌️'];




} else 
if( jam > 3 && jam <= 10){
	document.getElementById('area').style.background = "linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)";
	
	var arr = ['Hayuk Bangun2.',
	'Gabaik loh tidur pagi2 wkwkkw',
	'Jangan lupa sarapan yaaa',
	'Ihirr wkwk',
	'Ojo Judes judes pooo 😢',
	'wkwk gpp, semangat yaa hari ini', 
	'Kalau Keluar2 hati di jalan yaaa🤗', 
	'✌️'
				];

} else if( jam > 10 && jam <= 14){
	document.getElementById('area').style.background = "linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)";

	var arr = ['Dah siang nih',
				'Mulai beraktivitas yuk.',
				'Sekarang lagi apa?',
				'Aku tebak',
				'Pasti lagi kangen aku kan?',
				'Hehe, aku juga. ',
				'Semoga kita bisa cepet ketemu yaa sayaang',
				'Tuhan berkati sayaang',
				'loveuoyeen❤️'

	];






} else {

	var arr = ["Love you Laurencia",'Love you sayaang', 'Love you ayaang', 'Love you oyeenn', 'Love you yaaa','Aku sayang kamu selalu ❤️'];


}

 	var typed = new Typed('#greet', {
    strings: arr,
    loop: false,
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 1500

    });

// document.write("<p style=color:white>" + jam);