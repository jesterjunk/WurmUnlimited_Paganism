newest to oldest
```bash
git log --follow -p -- map/config.js
```

reverse order (oldest to newest)
```bash
git log --follow -p --reverse -- map/config.js
```

reverse order log
```diff

jesterjunk@5960X MINGW64 /d/xampp/htdocs/WurmUnlimited/Paganism/WurmUnlimited_Paganism (master)
$ git log --follow -p --reverse -- map/config.js
commit 6c3dc9a7a8e6f678b88150469517870d355eb1a9
Author: jesterjunk <fake@null.zilch>
Date:   Thu Mar 14 03:58:23 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
new file mode 100644
index 0000000..6e5f954
--- /dev/null
+++ b/map/config.js
@@ -0,0 +1,37 @@
+function Config() {}
+var config = new Config();
+config.size = 16;
+config.step = 256;
+config.x = 2281;
+config.y = 1433;
+config.mode = "3d";
+config.showDeedBordersIn3dMode = false;
+config.showDeedBordersInFlatMode = true;
+
+function Deed(name, x, y, height, permanent, sx, sy, ex, ey) {
+       this.name = name;
+       this.x = x;
+       this.y = y;
+       this.sx = sx;
+       this.sy = sy;
+       this.ex = ex;
+       this.ey = ey;
+       this.height = height;
+       this.permanent = permanent;
+}
+
+var deeds = [];
+deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2256, 1408, 2306, 1458));
+deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
+deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
+deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1208, 2514, 1238));
+deeds.push(new Deed('Squadoosh', 2036, 1398, 469, false, 2011, 1373, 2061, 1423));
+deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
+deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
+deeds.push(new Deed('New Hope', 2359, 1773, 120, false, 2344, 1758, 2374, 1788));
+deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
+deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
+deeds.push(new Deed('G N T', 2613, 761, 11, false, 2593, 741, 2633, 781));
+deeds.push(new Deed('Facesitopolis', 2297, 1089, 13, false, 2277, 1069, 2317, 1109));
+deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
+deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));

commit ea90a55c4841c917bba8d732217d7a6388df1463
Author: jesterjunk <fake@null.zilch>
Date:   Sat Mar 16 05:09:56 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 6e5f954..ab6d73b 100644
--- a/map/config.js
+++ b/map/config.js
@@ -28,10 +28,11 @@ deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1208, 2514, 1238));
 deeds.push(new Deed('Squadoosh', 2036, 1398, 469, false, 2011, 1373, 2061, 1423));
 deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
 deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
-deeds.push(new Deed('New Hope', 2359, 1773, 120, false, 2344, 1758, 2374, 1788));
 deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
 deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
 deeds.push(new Deed('G N T', 2613, 761, 11, false, 2593, 741, 2633, 781));
 deeds.push(new Deed('Facesitopolis', 2297, 1089, 13, false, 2277, 1069, 2317, 1109));
 deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
 deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
+deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172));
+deeds.push(new Deed('Magnuss Home', 2239, 1603, 206, false, 2219, 1583, 2254, 1623));

commit 8c040bffa08fd1cf9833313a4859d4d1ec01a0a2 (tag: 20240316T173738612716800Zda0075fd780f46a8abd93147e0fb62b8)
Author: jesterjunk <fake@null.zilch>
Date:   Sat Mar 16 12:36:45 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index ab6d73b..9f4f0e4 100644
--- a/map/config.js
+++ b/map/config.js
@@ -35,4 +35,4 @@ deeds.push(new Deed('Facesitopolis', 2297, 1089, 13, false, 2277, 1069, 2317, 11
 deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
 deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
 deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172));
-deeds.push(new Deed('Magnuss Home', 2239, 1603, 206, false, 2219, 1583, 2254, 1623));
+deeds.push(new Deed('Magnuss Home', 2239, 1603, 204, false, 2219, 1583, 2254, 1623));

commit f1fff716d0b328d97b8da75a9583d6e0a08a7da6
Author: jesterjunk <fake@null.zilch>
Date:   Sun Mar 17 08:12:07 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 9f4f0e4..0af96c4 100644
--- a/map/config.js
+++ b/map/config.js
@@ -25,14 +25,16 @@ deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2256, 1408, 2306, 1458));
 deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
 deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
 deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1208, 2514, 1238));
-deeds.push(new Deed('Squadoosh', 2036, 1398, 469, false, 2011, 1373, 2061, 1423));
+deeds.push(new Deed('Squadoosh', 2036, 1398, 455, false, 2011, 1373, 2061, 1423));
 deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
 deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
 deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
 deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
-deeds.push(new Deed('G N T', 2613, 761, 11, false, 2593, 741, 2633, 781));
+deeds.push(new Deed('G N T', 2613, 761, 11, false, 2593, 741, 2653, 801));
 deeds.push(new Deed('Facesitopolis', 2297, 1089, 13, false, 2277, 1069, 2317, 1109));
 deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
 deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
 deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172));
-deeds.push(new Deed('Magnuss Home', 2239, 1603, 204, false, 2219, 1583, 2254, 1623));
+deeds.push(new Deed('Magnuss Home', 2239, 1603, 205, false, 2234, 1593, 2254, 1623));
+deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 34, false, 1490, 1566, 1530, 1606));
+deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2064, 1173));

commit c57b2d9220f07806f3bb0fb508697e7ec31dfe56 (tag: 20240317T185433008307500Zf72804ca1655468bb0655b303744df54)
Author: jesterjunk <fake@null.zilch>
Date:   Sun Mar 17 13:49:26 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 0af96c4..6532907 100644
--- a/map/config.js
+++ b/map/config.js
@@ -38,3 +38,4 @@ deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172))
 deeds.push(new Deed('Magnuss Home', 2239, 1603, 205, false, 2234, 1593, 2254, 1623));
 deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 34, false, 1490, 1566, 1530, 1606));
 deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2064, 1173));
+deeds.push(new Deed('Nady', 2476, 1286, 13, false, 2461, 1266, 2486, 1306));

commit e919db2b405e26a5006bfe0cb6d64928c1d1154e
Author: jesterjunk <fake@null.zilch>
Date:   Mon Mar 18 02:08:20 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 6532907..2ade449 100644
--- a/map/config.js
+++ b/map/config.js
@@ -24,7 +24,7 @@ var deeds = [];
 deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2256, 1408, 2306, 1458));
 deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
 deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
-deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1208, 2514, 1238));
+deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1213, 2514, 1238));
 deeds.push(new Deed('Squadoosh', 2036, 1398, 455, false, 2011, 1373, 2061, 1423));
 deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
 deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
@@ -39,3 +39,5 @@ deeds.push(new Deed('Magnuss Home', 2239, 1603, 205, false, 2234, 1593, 2254, 16
 deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 34, false, 1490, 1566, 1530, 1606));
 deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2064, 1173));
 deeds.push(new Deed('Nady', 2476, 1286, 13, false, 2461, 1266, 2486, 1306));
+deeds.push(new Deed('Public Mine', 2209, 1464, 64, false, 2194, 1449, 2224, 1479));
+deeds.push(new Deed('Rl\'yeh', 3655, 345, 251, false, 3630, 315, 3680, 365));

commit deb813fbd6868620c67fef550270516ad759d8f8
Author: jesterjunk <fake@null.zilch>
Date:   Mon Mar 18 12:06:34 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 2ade449..3881850 100644
--- a/map/config.js
+++ b/map/config.js
@@ -25,7 +25,7 @@ deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2256, 1408, 2306, 1458));
 deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
 deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
 deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1213, 2514, 1238));
-deeds.push(new Deed('Squadoosh', 2036, 1398, 455, false, 2011, 1373, 2061, 1423));
+deeds.push(new Deed('Squadoosh', 2036, 1398, 443, false, 2011, 1373, 2061, 1423));
 deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
 deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
 deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
@@ -39,5 +39,5 @@ deeds.push(new Deed('Magnuss Home', 2239, 1603, 205, false, 2234, 1593, 2254, 16
 deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 34, false, 1490, 1566, 1530, 1606));
 deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2064, 1173));
 deeds.push(new Deed('Nady', 2476, 1286, 13, false, 2461, 1266, 2486, 1306));
-deeds.push(new Deed('Public Mine', 2209, 1464, 64, false, 2194, 1449, 2224, 1479));
+deeds.push(new Deed('Public Mine', 2209, 1464, 74, false, 2194, 1449, 2224, 1479));
 deeds.push(new Deed('Rl\'yeh', 3655, 345, 251, false, 3630, 315, 3680, 365));

commit e68dbaa710f7b78fece7dfc3d253e9d8431c9338 (tag: 20240319T163443261762200Zafea2c885c4548b88eb8437469a87b3a)
Author: jesterjunk <fake@null.zilch>
Date:   Tue Mar 19 11:33:26 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 3881850..bdab023 100644
--- a/map/config.js
+++ b/map/config.js
@@ -31,7 +31,7 @@ deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
 deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
 deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
 deeds.push(new Deed('G N T', 2613, 761, 11, false, 2593, 741, 2653, 801));
-deeds.push(new Deed('Facesitopolis', 2297, 1089, 13, false, 2277, 1069, 2317, 1109));
+deeds.push(new Deed('Facesitopolis', 2297, 1089, 12, false, 2277, 1069, 2317, 1109));
 deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
 deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
 deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172));

commit abea19b090c079917f5e4ba37372a3939c046067
Author: jesterjunk <fake@null.zilch>
Date:   Wed Mar 20 00:26:06 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index bdab023..aefec18 100644
--- a/map/config.js
+++ b/map/config.js
@@ -30,7 +30,7 @@ deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511,
 deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
 deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
 deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
-deeds.push(new Deed('G N T', 2613, 761, 11, false, 2593, 741, 2653, 801));
+deeds.push(new Deed('G N T', 2613, 761, 1, false, 2593, 741, 2653, 801));
 deeds.push(new Deed('Facesitopolis', 2297, 1089, 12, false, 2277, 1069, 2317, 1109));
 deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
 deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
@@ -41,3 +41,5 @@ deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2064, 1173))
 deeds.push(new Deed('Nady', 2476, 1286, 13, false, 2461, 1266, 2486, 1306));
 deeds.push(new Deed('Public Mine', 2209, 1464, 74, false, 2194, 1449, 2224, 1479));
 deeds.push(new Deed('Rl\'yeh', 3655, 345, 251, false, 3630, 315, 3680, 365));
+deeds.push(new Deed('Oak Island', 1754, 3028, 113, false, 1749, 3023, 1759, 3033));
+deeds.push(new Deed('Pagan Hunting Reserve', 339, 1436, 112, true, 249, 1346, 439, 1486));

commit 623cb1cc0d82c1a10bd4e2086671f23a4d18c594
Author: jesterjunk <fake@null.zilch>
Date:   Thu Mar 21 05:36:13 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index aefec18..693d0f1 100644
--- a/map/config.js
+++ b/map/config.js
@@ -25,14 +25,13 @@ deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2256, 1408, 2306, 1458));
 deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
 deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
 deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1213, 2514, 1238));
-deeds.push(new Deed('Squadoosh', 2036, 1398, 443, false, 2011, 1373, 2061, 1423));
+deeds.push(new Deed('Squadoosh', 2036, 1398, 444, false, 2011, 1373, 2061, 1423));
 deeds.push(new Deed('Tac\'s New Town', 2491, 1176, 13, false, 2471, 1156, 2511, 1196));
 deeds.push(new Deed('Nornheim', 1923, 1152, 9, false, 1913, 1142, 1933, 1162));
 deeds.push(new Deed('Skullcove', 2487, 890, 13, false, 2476, 879, 2498, 901));
 deeds.push(new Deed('Isle Of Hope', 2341, 1512, 60, false, 2321, 1492, 2361, 1532));
 deeds.push(new Deed('G N T', 2613, 761, 1, false, 2593, 741, 2653, 801));
 deeds.push(new Deed('Facesitopolis', 2297, 1089, 12, false, 2277, 1069, 2317, 1109));
-deeds.push(new Deed('Hog Hole', 889, 195, 156, false, 864, 170, 914, 220));
 deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
 deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172));
 deeds.push(new Deed('Magnuss Home', 2239, 1603, 205, false, 2234, 1593, 2254, 1623));
@@ -40,6 +39,7 @@ deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 34, false, 1490, 1566, 1
 deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2064, 1173));
 deeds.push(new Deed('Nady', 2476, 1286, 13, false, 2461, 1266, 2486, 1306));
 deeds.push(new Deed('Public Mine', 2209, 1464, 74, false, 2194, 1449, 2224, 1479));
-deeds.push(new Deed('Rl\'yeh', 3655, 345, 251, false, 3630, 315, 3680, 365));
-deeds.push(new Deed('Oak Island', 1754, 3028, 113, false, 1749, 3023, 1759, 3033));
+deeds.push(new Deed('Rl\'yeh', 3655, 345, 258, false, 3630, 315, 3680, 365));
+deeds.push(new Deed('Oak Island', 1754, 3028, 113, false, 1734, 3008, 1774, 3048));
 deeds.push(new Deed('Pagan Hunting Reserve', 339, 1436, 112, true, 249, 1346, 439, 1486));
+deeds.push(new Deed('Hog Hole', 2248, 1530, 130, false, 2223, 1505, 2273, 1555));

commit ce89794966e6d87edfe471adfd65534f66130fd0
Author: jesterjunk <fake@null.zilch>
Date:   Fri Mar 22 04:01:57 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 693d0f1..55fca88 100644
--- a/map/config.js
+++ b/map/config.js
@@ -43,3 +43,4 @@ deeds.push(new Deed('Rl\'yeh', 3655, 345, 258, false, 3630, 315, 3680, 365));
 deeds.push(new Deed('Oak Island', 1754, 3028, 113, false, 1734, 3008, 1774, 3048));
 deeds.push(new Deed('Pagan Hunting Reserve', 339, 1436, 112, true, 249, 1346, 439, 1486));
 deeds.push(new Deed('Hog Hole', 2248, 1530, 130, false, 2223, 1505, 2273, 1555));
+deeds.push(new Deed('Sanctuary', 889, 195, 156, false, 864, 170, 914, 220));

commit ffaa56fdf20e173899f4ad307104da202e0fe1ec
Author: jesterjunk <fake@null.zilch>
Date:   Sat Mar 23 06:22:10 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 55fca88..8829bf7 100644
--- a/map/config.js
+++ b/map/config.js
@@ -42,5 +42,5 @@ deeds.push(new Deed('Public Mine', 2209, 1464, 74, false, 2194, 1449, 2224, 1479
 deeds.push(new Deed('Rl\'yeh', 3655, 345, 258, false, 3630, 315, 3680, 365));
 deeds.push(new Deed('Oak Island', 1754, 3028, 113, false, 1734, 3008, 1774, 3048));
 deeds.push(new Deed('Pagan Hunting Reserve', 339, 1436, 112, true, 249, 1346, 439, 1486));
-deeds.push(new Deed('Hog Hole', 2248, 1530, 130, false, 2223, 1505, 2273, 1555));
+deeds.push(new Deed('Hog Hole', 2248, 1530, 133, false, 2223, 1505, 2273, 1555));
 deeds.push(new Deed('Sanctuary', 889, 195, 156, false, 864, 170, 914, 220));

commit 045896c0d42031e13a23eb3abce375fbd75cc0ec
Author: jesterjunk <fake@null.zilch>
Date:   Sun Mar 24 00:40:10 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 8829bf7..000f058 100644
--- a/map/config.js
+++ b/map/config.js
@@ -21,7 +21,7 @@ function Deed(name, x, y, height, permanent, sx, sy, ex, ey) {
 }

 var deeds = [];
-deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2256, 1408, 2306, 1458));
+deeds.push(new Deed('Infidelis', 2281, 1433, 13, true, 2252, 1408, 2306, 1465));
 deeds.push(new Deed('Blue Oasis', 2068, 985, 13, false, 2048, 965, 2088, 1005));
 deeds.push(new Deed('Savannah', 1859, 931, 13, false, 1839, 891, 1889, 951));
 deeds.push(new Deed('Murkwell', 2484, 1218, 12, false, 2459, 1213, 2514, 1238));
@@ -44,3 +44,5 @@ deeds.push(new Deed('Oak Island', 1754, 3028, 113, false, 1734, 3008, 1774, 3048
 deeds.push(new Deed('Pagan Hunting Reserve', 339, 1436, 112, true, 249, 1346, 439, 1486));
 deeds.push(new Deed('Hog Hole', 2248, 1530, 133, false, 2223, 1505, 2273, 1555));
 deeds.push(new Deed('Sanctuary', 889, 195, 156, false, 864, 170, 914, 220));
+deeds.push(new Deed('Shanoa', 1679, 1122, 225, false, 1664, 1107, 1694, 1137));
+deeds.push(new Deed('Isle Of Pretense', 3048, 2126, 79, false, 3023, 2101, 3073, 2151));

commit 462c54508be93ab32d0eb7f1ec75c377413bfc64
Author: jesterjunk <fake@null.zilch>
Date:   Sun Mar 24 09:09:15 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index 000f058..aa18361 100644
--- a/map/config.js
+++ b/map/config.js
@@ -35,8 +35,8 @@ deeds.push(new Deed('Facesitopolis', 2297, 1089, 12, false, 2277, 1069, 2317, 11
 deeds.push(new Deed('Brighid\'s Fire', 3893, 1074, 68, false, 3843, 1024, 3943, 1124));
 deeds.push(new Deed('Donkland', 3698, 1152, 765, false, 3678, 1132, 3718, 1172));
 deeds.push(new Deed('Magnuss Home', 2239, 1603, 205, false, 2234, 1593, 2254, 1623));
-deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 34, false, 1490, 1566, 1530, 1606));
-deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2064, 1173));
+deeds.push(new Deed('Black Hand Sanctuary', 1510, 1586, 50, false, 1490, 1566, 1530, 1606));
+deeds.push(new Deed('Celestine', 2054, 1163, 18, false, 2044, 1153, 2070, 1179));
 deeds.push(new Deed('Nady', 2476, 1286, 13, false, 2461, 1266, 2486, 1306));
 deeds.push(new Deed('Public Mine', 2209, 1464, 74, false, 2194, 1449, 2224, 1479));
 deeds.push(new Deed('Rl\'yeh', 3655, 345, 258, false, 3630, 315, 3680, 365));
@@ -46,3 +46,5 @@ deeds.push(new Deed('Hog Hole', 2248, 1530, 133, false, 2223, 1505, 2273, 1555))
 deeds.push(new Deed('Sanctuary', 889, 195, 156, false, 864, 170, 914, 220));
 deeds.push(new Deed('Shanoa', 1679, 1122, 225, false, 1664, 1107, 1694, 1137));
 deeds.push(new Deed('Isle Of Pretense', 3048, 2126, 79, false, 3023, 2101, 3073, 2151));
+deeds.push(new Deed('Great Mootopia', 2187, 1338, 10, false, 2171, 1328, 2217, 1348));
+deeds.push(new Deed('Tassie', 1916, 1076, 14, false, 1896, 1056, 1936, 1096));

commit 7597fd247f509a1afd16ce867b9b8f943eb04636 (HEAD -> master, origin/master, origin/HEAD)
Author: jesterjunk <fake@null.zilch>
Date:   Mon Mar 25 07:25:29 2024 -0500

    ...

diff --git a/map/config.js b/map/config.js
index aa18361..90f4cc6 100644
--- a/map/config.js
+++ b/map/config.js
@@ -48,3 +48,4 @@ deeds.push(new Deed('Shanoa', 1679, 1122, 225, false, 1664, 1107, 1694, 1137));
 deeds.push(new Deed('Isle Of Pretense', 3048, 2126, 79, false, 3023, 2101, 3073, 2151));
 deeds.push(new Deed('Great Mootopia', 2187, 1338, 10, false, 2171, 1328, 2217, 1348));
 deeds.push(new Deed('Tassie', 1916, 1076, 14, false, 1896, 1056, 1936, 1096));
+deeds.push(new Deed('This Place', 2486, 1972, 12, false, 2466, 1952, 2506, 1992));
(END)

```
