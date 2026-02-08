window.QUESTION_SECTION = {
  id: 'bolim_201-250',
  name: '201–250 savollar',
  questions: [
  {
    "n": 201,
    "q": "Dastur natijasini aniqlang ss='informatika'; print(ss[2:9:2])",
    "options": [
      "rmat",
      "frii",
      "frai",
      "noma"
    ],
    "correctIndex": 2
  },
  {
    "n": 202,
    "q": "Dastur natijasini aniqlang s=[i*j for i in range(2,4) for j in range(1,5)]; print(s)",
    "options": [
      "{2, 4, 6, 8, 3, 6, 9, 12}",
      "(2, 4, 6, 8, 3, 6, 9, 12)",
      "“2, 4, 6, 8, 3, 6, 9, 12”",
      "[2, 4, 6, 8, 3, 6, 9, 12]"
    ],
    "correctIndex": 3
  },
  {
    "n": 203,
    "q": "Dastur natijasini aniqlang s=[i//j for i in range(2,4) for j in range(1,5)]; print(s)",
    "options": [
      "[2, 1, 0, 0, 3, 1, 1, 0,0,0]",
      "[2, 1, 0, 0,]",
      "[0, 0, 3, 1, 1, 0]",
      "[2, 1, 0, 0, 3, 1, 1, 0]"
    ],
    "correctIndex": 3
  },
  {
    "n": 204,
    "q": "o‘qitish metodikasi(5), ZamonaviyQaysi javob to’g’ri , agar s=[i**j for i in range(2,4) for j in range(1,5)]; print(s) dasturlash tillari(5), uz",
    "options": [
      "[2, 4, 8, 16, 3, 9, 27, 81,1000]",
      "[2, 4, 8, 16, 3, 9, 27]",
      "[2, 4, 8, 16, 3, 9, 27, 81,100]",
      "[2, 4, 8, 16, 3, 9, 27, 81]"
    ],
    "correctIndex": 3
  },
  {
    "n": 205,
    "q": "Natijani aniqlang s=[i%j for i in range(2,4) for j in range(1,5)]; print(s)",
    "options": [
      "[0, 0, 2, 2, 0, 1, 0, 3,6]",
      "[0, 0, 2, 2, 0, 1, 0, 3]",
      "[0, 0, 2, 2, 0, 1, 0, 3,5,3]",
      "[0, 0, 2, 2, 0]"
    ],
    "correctIndex": 1
  },
  {
    "n": 206,
    "q": "Natijani aniqlang s=[chr(i) for i in range(65,70)];print(s)",
    "options": [
      "['A', 'B', 'C', 'D', 'E',’ A', 'B', 'C', 'D', 'E']",
      "['A', 'B', 'C', 'D', 'E']",
      "['A', 'B', 'C', 'D', 'E',’F’]",
      "['A', 'E']"
    ],
    "correctIndex": 1
  },
  {
    "n": 207,
    "q": "Quyidagi dastur nechta elementni chop etadi: s=[chr(i) for i in range(65,70)];print(s)",
    "options": [
      "65",
      "6",
      "79",
      "5"
    ],
    "correctIndex": 3
  },
  {
    "n": 208,
    "q": "o‘qitish metodikasi(5), ZamonaviyTo’g’ri javobni toping b=65;s=[chr(i) for i in range(65,b)];print(s) dasturlash tillari(5), uz",
    "options": [
      "[1][2][3][4]",
      "[]",
      "[1]2[]",
      "[6][5][s]"
    ],
    "correctIndex": 1
  },
  {
    "n": 209,
    "q": "To’g’ri javobni toping a='a1a2a3a4a5a6'; for i in range (1,10): if not str(i) in a: print(i)",
    "options": [
      "9 8 7",
      "1 dan 6 gacha raqamlarni chop etadi",
      "1 dan 6 gacha raqamlarni chop etadi",
      "7 8 9"
    ],
    "correctIndex": 3
  },
  {
    "n": 210,
    "q": "To’g’ri javobni toping a='a1a2a3a4a5a6'; for i in range (1,10): if str(i) in a: print(i)",
    "options": [
      "6 dan 1 gacha raqamlarni chop etadi",
      "1 dan 7 gacha raqamlarni chop etadi",
      "1 dan 6 gacha raqamlarni chop etadi",
      "a1a2a3a4a5a6 nichop etadi"
    ],
    "correctIndex": 2
  },
  {
    "n": 211,
    "q": "To’g’ri javobni toping str1='olam'; str2='olma'; str1=str1.upper()+str2.lower(); print(str1)",
    "options": [
      "OLAMolma OLAMolma",
      "olmaOLAM",
      "olmaOLAMOLAM",
      "OLAMolma"
    ],
    "correctIndex": 3
  },
  {
    "n": 212,
    "q": "o‘qitish metodikasi(5), ZamonaviyTo’g’ri javobni toping str1='olam'; print(sorted(str1))",
    "options": [
      "[‘o’, ‘l’, ‘m’, ‘a’] dasturlash tillari(5), uz",
      "[‘a’, ‘l’, ‘m’, ‘m’]",
      "[‘a’, ‘a’, ‘a’, ‘a’]",
      "[‘a’, ‘l’, ‘m’, ‘o’]"
    ],
    "correctIndex": 3
  },
  {
    "n": 213,
    "q": "To’g’ri javobni toping str1=’olam’; str2=’olma’; if sorted(str1)==sorted(str2): print(“anogram so’zlar”)",
    "options": [
      "xatolik bor",
      "Anogram so’zlar",
      "palindrom so’zlar",
      "diagram so’zlar"
    ],
    "correctIndex": 1
  },
  {
    "n": 214,
    "q": "Python tili qachon va kim tomonidan yaratilgan",
    "options": [
      "2000-yil Guido van Rossum tomonidan yaratilgan,",
      "Python 1980-yil Pascal tomonidan yaratilgan,",
      "1980-yil Guido van Rossum tomonidan yaratilgan,",
      "1987-yil Rabin Karp tomonidan yaratilgan,"
    ],
    "correctIndex": 2
  },
  {
    "n": 215,
    "q": "Ikki o’lchamli massivning asosiy dioganalidagi elementlari ko’paytmasini toping: a=[[1,2,3,4],[4,3, 2,1],[7,8,9,10], [1,4,7,9]]",
    "options": [
      "243",
      "120",
      "244",
      "75"
    ],
    "correctIndex": 0
  },
  {
    "n": 216,
    "q": "Dastur natijasini aniqlang a=[1,2,3,4,5,6,7,8,9]; print(a[::-1])",
    "options": [
      "[9, 8, 7, 6, 5, 4]",
      "[10,9, 8, 7, 6, 5, 4, 3, 2, 1]",
      "[9, 8, 7, 6, 5, 4, 3, 2, 1]",
      "[9]"
    ],
    "correctIndex": 2
  },
  {
    "n": 217,
    "q": "Dastur natijasini aniqlang a=[1,2,55,5,6]; for i in range(len(a)): if a[i]%2!=0: print(i,end=’ ‘)",
    "options": [
      "3",
      "0 2 3",
      "0 3",
      "0"
    ],
    "correctIndex": 1
  },
  {
    "n": 218,
    "q": "Dastur natijasini aniqlang: a=[1,2,55,5,6]; s1=[]; for i in range(len(a)): if i%2!=0: s1.append(a[i]); print(s1)",
    "options": [
      "[2, 5]",
      "[12, 5]",
      "[5, 5]",
      "[5, 3]"
    ],
    "correctIndex": 0
  },
  {
    "n": 219,
    "q": "Dastur natijasini aniqlang: a=[4,2,7,8,6]; k=3; a.r emove(a[k]); print(a)",
    "options": [
      "[4, 2, 8, 6]",
      "[4, 2, 7, 8]",
      "[4, 2, 7, 6]",
      "[ 7, 6]"
    ],
    "correctIndex": 2
  },
  {
    "n": 220,
    "q": "Dastur natijasini aniqlang: f=open(‘E:\\\\2023\\\\Shahnoza.txt’,’w’); s=[i*i for i in range(10)]; f.write(str(s)); f.close()",
    "options": [
      "[0, 1, 4, 9, 16]",
      "[0, 1, 4, 9, 16, 25, 36, 49]",
      "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]",
      "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]"
    ],
    "correctIndex": 3
  },
  {
    "n": 221,
    "q": "Dastur natijasini aniqlang: f=open(‘E:\\\\2023\\\\Shahnoza.txt’,’w’); s=[5*5 for i in range(10)]; f.write(str(s)); f.close()",
    "options": [
      "[25, 25, 25, 25, 25, 25, 25, 25,",
      "[25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]",
      "[25, 25, 25, 25, 25, 25, 25, 25, 25, 25]",
      "[25, 25, 25, 25]"
    ],
    "correctIndex": 2
  },
  {
    "n": 222,
    "q": "Dastur natijasini aniqlang: import random; f=open(‘E:\\\\2023\\\\Shahnoza.txt’,’w’); s= [random.randrange(1,20) for i in range(10)]; f.write(str(s));f.close()",
    "options": [
      "Faylga tasodifiy 1 ta sonni chop etadi",
      "Faylga tasodifiy 30 ta sonni chop etadi",
      "Faylga tasodifiy 20 ta sonni chop etadi",
      "Faylga tasodifiy 10 ta sonni chop etadi"
    ],
    "correctIndex": 3
  },
  {
    "n": 223,
    "q": "Dastur natisini aniqlangl a=[1,2]; s=[1,'a']; print(a+s)",
    "options": [
      "[1, 2, 1, 'a']",
      "[1, 'a']",
      "[1, 2, 1, 'aa']",
      "[1, 2, 1]"
    ],
    "correctIndex": 0
  },
  {
    "n": 224,
    "q": "Dastur natisini aniqlangl import math;a=30;x= (math.sin(math.radians(a)));print(f\"{x:.2}\")",
    "options": [
      "0.5666",
      "0.5",
      "0,677",
      "1"
    ],
    "correctIndex": 1
  },
  {
    "n": 225,
    "q": "Dastur natisini aniqlangl import math;a=45;x= (math.cos(math.radians(a)));print(f”{x:.2}”)",
    "options": [
      "90",
      "0.71",
      "67",
      "0.6666"
    ],
    "correctIndex": 1
  },
  {
    "n": 226,
    "q": "Dastur natisini aniqlangl import math;a=12;b=9;print(math.hypot(a,b))",
    "options": [
      "0",
      "34",
      "15.0",
      "12"
    ],
    "correctIndex": 2
  },
  {
    "n": 227,
    "q": "Dastur natisini aniqlangl import math;a=12;b=9;print(math.log(math.e)",
    "options": [
      "1.0",
      "E",
      "21",
      "2"
    ],
    "correctIndex": 0
  },
  {
    "n": 228,
    "q": "Dastur natisini aniqlangl import math;a=12;b=9;print(math.log2(64))",
    "options": [
      "66",
      "6.0",
      "32",
      "45"
    ],
    "correctIndex": 1
  },
  {
    "n": 229,
    "q": "Algoritmning asosiy xossalari qaysi javobda to’g’ri keltirilgan?",
    "options": [
      "diskrеtlilik, tushunarliylik, aniqlilik,ommaviyli, natijaviylik",
      "ravonliylik, tushunarliylik, aniqlilik,ommaviyli, natijaviylik",
      "diskrеtlilik, tushunarliylik, osnlik,",
      "natijaviylik,diskrеtlilik, tushunarliylik, aniqlilik,zarbdorlik, natijaviylik"
    ],
    "correctIndex": 0
  },
  {
    "n": 230,
    "q": "Algоritm tushunchasi nimani anglatadi",
    "options": [
      "Vazifani bajarish jarayonidagi ko’rsatmalarning tartibli kеtma-kеtligi",
      "Vazifani bajarish jarayonidagi buyiruqlar",
      "So’zlar kеtma-kеtligi",
      "Vazifani bajarish jarayonidagi ko’rsatmalarning tartibsiz kеtma-kеtligi"
    ],
    "correctIndex": 0
  },
  {
    "n": 231,
    "q": "Algoritm turlariga ...lar kiradi.",
    "options": [
      "chiziqli algoritmlar ,tarmoqlanuvchi algoritmlar ,takrorlanuvchi algoritmlar",
      "chiziqli algoritmlar ,saralash algoritmlari,takrorlanuvchi algoritmlar",
      "chiziqli algoritmlar ,baholashi algoritmlari",
      "uzluksiz algoritmlar ,tarmoqlanuvchi algoritmlar ,takrorlanuvchi algoritmlar"
    ],
    "correctIndex": 0
  },
  {
    "n": 232,
    "q": "o‘qitishDiskrеtlilik х оssasi nima maъnоni bildiradi? metodikasi(5), Zamonaviy dasturlash tillari(5), uz",
    "options": [
      "Ko’rsatmalarni chеkli bo’laklar ga bulinishini",
      "Ko’rsatmalarni chеksiz bo’laklash mumkinligini",
      "Ko’rsatmalarning bo’linmasligini",
      "Ko’rsatmalarning chеksiz ko’pligini"
    ],
    "correctIndex": 0
  },
  {
    "n": 233,
    "q": "Algоritmlar qayisi usullarda tasvirlanadi?",
    "options": [
      "dastur ,оg’zaki",
      "grafik",
      "Blok-sxema, оg’zaki, Fоrmulalar ,jadval",
      "dastur , Jadval"
    ],
    "correctIndex": 2
  },
  {
    "n": 234,
    "q": "tog'ri fikrni aniqlang: Аlgоritm bu....",
    "options": [
      "- har qanday operatorlar ketma-ketligi",
      "- bеrilgаn mаsаlаni еchish uchun bаjаrilаdigаn va maqsadga yo'naltirilgan buyruqlarning chеksiz kеtmа-kеtligi.",
      "bеrilgаn mаsаlаni еchish uchun bаjаrilаdigаn va maqsadga yo'naltirilgan buyruqlarning chеkli kеtmа-kеtligi.",
      "- bеrilgаn mаsаlаni еchish uchun bаjаrilаdigаn fikrlar to'plami."
    ],
    "correctIndex": 2
  },
  {
    "n": 235,
    "q": "Byuruqlar natijasini aniqlang: a=['a','s'];b= ('*'.join(a));print(b)",
    "options": [
      "a*s",
      "'a'*'s'",
      "sasa",
      "as"
    ],
    "correctIndex": 0
  },
  {
    "n": 236,
    "q": "o‘qitish metodikasi(5),Byuruqlar natijasini aniqlang: a=['a','s','d'];b= ('\\'.join(a));print(b) Zamonaviy dasturlash tillari(5), uz",
    "options": [
      "xatolik mavjud",
      "'a\\s\\d'",
      "'asd'",
      "'a','s','d'"
    ],
    "correctIndex": 0
  },
  {
    "n": 237,
    "q": "Byuruqlar natijasini aniqlang: print(list(\"r odina\"))",
    "options": [
      "['r', 'd', 'i', 'a']",
      "rodina",
      "['rodina']",
      "['r', 'o', 'd', 'i', 'n', 'a']"
    ],
    "correctIndex": 3
  },
  {
    "n": 238,
    "q": "Byuruqlar natijasini aniqlang: a='a/aa///aaa';print(list(a))",
    "options": [
      "['a', '/', 'a', 'a', '/', '/', '/', 'a', 'a', 'a']",
      "['a', '/', 'a', 'a', '/', '/', '/', ' ', ' a', ' ']",
      "['a', '/', 'a', 'a', , 'a', 'a', 'a']",
      "['a', 'a']"
    ],
    "correctIndex": 0
  },
  {
    "n": 239,
    "q": "Byuruqlar natijasini aniqlang: a= ['alfiya','samir',1];print(a[0])",
    "options": [
      "alfiya",
      "alfiyasamir",
      "'alfiya','samir'",
      "'samir'"
    ],
    "correctIndex": 0
  },
  {
    "n": 240,
    "q": "Byuruqlar natijasini aniqlang: a=[['alfiya','samir',1], ['a','b',5]]; print(int(a[0][2])*int(a[1][2])*int(a[1][2]))",
    "options": [
      "32",
      "25",
      "15",
      "5"
    ],
    "correctIndex": 1
  },
  {
    "n": 241,
    "q": "Byuruqlar natijasini aniqlang: a= ['alfiya','samir',1];print(a[1:2])",
    "options": [
      "'alfiya','samir'",
      "['samir']",
      "['alfiya','samir',2]",
      "['alfiya','samir',1]"
    ],
    "correctIndex": 1
  },
  {
    "n": 242,
    "q": "Ro’yxat oxiriga element qo’ shish metodi bu......_______",
    "options": [
      "capitalize()",
      "join()",
      "append()",
      "insert()"
    ],
    "correctIndex": 2
  },
  {
    "n": 243,
    "q": "Ro’yxatlarni qo’ shishda foydalanish metodi..___",
    "options": [
      "extend() yoki опера тора +=",
      "extend()",
      "dd+",
      "operator +="
    ],
    "correctIndex": 0
  },
  {
    "n": 244,
    "q": "Elementni o’chirishda foydalanadigan funktsiya........",
    "options": [
      "remov()",
      "remowe()",
      "move()",
      "remove()"
    ],
    "correctIndex": 3
  },
  {
    "n": 245,
    "q": "to’g’ri javobni tanlang: a=['a','s','1','1','1']; a.r emove('1'); print(a)",
    "options": [
      "a=['a']",
      "a=['a','s','1','1','1']",
      "a=['a','s','']",
      "['a', 's', '1', '1']"
    ],
    "correctIndex": 3
  },
  {
    "n": 246,
    "q": "to’g’ri javobni tanlang: a=['a','s','1','1','1']; a.r emove(a[1]); print(a)",
    "options": [
      "['a', '1', '1', '1']",
      "[ '1', '1', '1']",
      "['a']",
      "'a', '1', '1', '1'"
    ],
    "correctIndex": 0
  },
  {
    "n": 247,
    "q": "to’g’ri javobni tanlang: import math ; print(math.factorial(7))",
    "options": [
      "5440",
      "5040",
      "3456",
      "120"
    ],
    "correctIndex": 1
  },
  {
    "n": 248,
    "q": "Keltirilgan kod uchun to’g’ri javobni tanlang a=[x**2 for x in range(10)];print(a)",
    "options": [
      "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
      "[0, 4, 9, 25, 36, 64, 81]",
      "[0, 81]",
      "(0, 1, 4, 9, 16, 25, 36, 49, 64, 81)"
    ],
    "correctIndex": 0
  },
  {
    "n": 249,
    "q": "Keltirilgan kod uchun to’g’ri javobni tanlang d=[x for x in range(30) if x%5==0];print(d)",
    "options": [
      "[0, 5, 10, 15, 20, 25,30]",
      "[0, 5, 30]",
      "[0, 30]",
      "[0, 5, 10, 15, 20, 25]"
    ],
    "correctIndex": 3
  },
  {
    "n": 250,
    "q": "Keltirilgan kod uchun to’g’ri javobni tanlang d=[x for x in range(34) if x%3==0 and x%6!=0];print(d)",
    "options": [
      "[3, 9, 15, 21, 27, 34]",
      "[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]",
      "[3, 6, 15, 21, 27, 33, 34]",
      "[3, 9, 15, 21, 27, 33]"
    ],
    "correctIndex": 3
  }
]
};
