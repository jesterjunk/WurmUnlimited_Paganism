function Config() {}
var config = new Config();
config.size = 16;
config.step = 256;
config.x = 2281;
config.y = 1433;
config.mode = "3d";
config.showDeedBordersIn3dMode = false;
config.showDeedBordersInFlatMode = true;

function Deed(name, x, y, height, permanent, sx, sy, ex, ey) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.ex = ex;
	this.ey = ey;
	this.height = height;
	this.permanent = permanent;
}

var deeds = [];
deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2256, 1408, 2306, 1458));
deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1208, 2514, 1238));
deeds.push(new Deed('Squadoosh', 2036, 1398, 469, false, 2011, 1373, 2061, 1423));
deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
deeds.push(new Deed('New Hope', 2359, 1773, 120, false, 2344, 1758, 2374, 1788));
deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
deeds.push(new Deed('G N T', 2613, 761, 11, false, 2593, 741, 2633, 781));
deeds.push(new Deed('Facesitopolis', 2297, 1089, 13, false, 2277, 1069, 2317, 1109));
deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
