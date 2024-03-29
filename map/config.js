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
deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2252, 1408, 2306, 1465));
deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1213, 2514, 1238));
deeds.push(new Deed('Squadoosh', 2036, 1398, 444, false, 2011, 1373, 2061, 1431));
deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
deeds.push(new Deed('G N T', 2613, 761, 1, false, 2593, 741, 2653, 801));
deeds.push(new Deed('Facesitopolis', 2297, 1089, 12, false, 2277, 1069, 2317, 1109));
deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172));
deeds.push(new Deed('Magnuss Home', 2239, 1603, 205, false, 2224, 1585, 2254, 1623));
deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 50, false, 1490, 1566, 1530, 1606));
deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2070, 1183));
deeds.push(new Deed('Nady', 2476, 1286, 13, false, 2461, 1266, 2486, 1306));
deeds.push(new Deed('Public Mine', 2209, 1464, 74, false, 2194, 1449, 2224, 1479));
deeds.push(new Deed('Rl\'yeh', 3655, 345, 258, false, 3630, 315, 3680, 365));
deeds.push(new Deed('Oak Island', 1754, 3028, 113, false, 1734, 3008, 1774, 3048));
deeds.push(new Deed('Pagan Hunting Reserve', 339, 1436, 112, true, 249, 1346, 439, 1486));
deeds.push(new Deed('Hog Hole', 2248, 1530, 133, false, 2223, 1505, 2273, 1555));
deeds.push(new Deed('Sanctuary', 889, 195, 156, false, 864, 170, 914, 220));
deeds.push(new Deed('Shanoa', 1679, 1122, 225, false, 1664, 1102, 1694, 1147));
deeds.push(new Deed('Isle Of Pretense', 3048, 2126, 79, false, 3023, 2101, 3083, 2151));
deeds.push(new Deed('Great Mootopia', 2187, 1338, 10, false, 2171, 1328, 2217, 1348));
deeds.push(new Deed('This Place', 2486, 1972, 38, false, 2456, 1957, 2516, 1987));
deeds.push(new Deed('Tassie Two', 2045, 1522, 646, false, 2030, 1507, 2060, 1537));
deeds.push(new Deed('Grayshell', 2590, 1029, 184, false, 2585, 1024, 2595, 1034));
