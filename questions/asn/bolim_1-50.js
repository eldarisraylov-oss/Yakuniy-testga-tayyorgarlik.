/* =======================================================================
   ASN — Savollar bazasi
   Part: 1–50
   ======================================================================= */

window.questions = window.questions || [];

window.questions.push(
{
    id: 1,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Quyidagi o‘rin almashtirishlar uchun ko‘paytmani bajaring:
\[
\begin{pmatrix}
1&2&3&4&5\\
4&5&2&1&3
\end{pmatrix}
\cdot
\begin{pmatrix}
1&2&3&4&5\\
5&3&2&1&4
\end{pmatrix}
\]`,
    options: [
      String.raw`\(\begin{pmatrix}1&2&3&4&5\\1&4&3&5&2\end{pmatrix}\)`,
      String.raw`\(\begin{pmatrix}1&2&3&4&5\\5&2&4&1&3\end{pmatrix}\)`,
      String.raw`\(12345 \rightarrow 45213\)`,
      String.raw`\(\begin{pmatrix}1&2&3&4&5\\5&3&2&1&4\end{pmatrix}\)`
    ],
    answer: 0
  },
{
    id: 2,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: "Bir qiymatli akslantirishni toping.",
    options: [
      "A)",
      "B)",
      "C)",
      "D)"
    ],
    answer: 0,
    note: "Variantlar rasm ko‘rinishida berilgan (diagrammalar)."
  },
{
    id: 3,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: "Noto‘g‘ri tasdiqni toping. n ta noma’lumli bir jinsli tenglamalar sistemasining ......",
    options: [
      "Ixtiyoriy ikkita yechimlarining yig‘indisi yana shu sistema uchun yechim bo‘ladi.",
      String.raw`\((\alpha_1,\alpha_2,\ldots,\alpha_n)\) yechimi bo‘lsa, u holda \((-\alpha_1,-\alpha_2,\ldots,-\alpha_n)\) ham shu sistema uchun yechimdir.`,
      String.raw`Ixtiyoriy yechimi \(n\) o‘lchovli vektor.`,
      String.raw`Ixtiyoriy yechimining \(\alpha \in P\) ga ko‘paytmasi shu sistema uchun yechimidir.`
    ],
    answer: 0
  },
{
    id: 4,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: "Algebra bu....",
    options: [
      String.raw`Bo‘sh bo‘lmagan \(A\) to‘plam va unda aniqlangan algebraik amallar to‘plami \(\Omega\) dan tuzilgan juftlik — \(\langle A,\Omega\rangle\)`,
      "Bo‘sh bo‘lmagan A to‘plam",
      "Multiplikativ gruppa",
      "Algebraik amallar to‘plami Ω"
    ],
    answer: 0
  },
{
    id: 5,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Quyidagi berilgan to‘plamlarning kesishmasini toping:
\[
A=\{1,2,3,4,5\},\qquad B=\{2,4,6,8\}
\]`,
    options: [
      String.raw`\(\,A\cap B=\{1,5\}\)`,
      String.raw`\(\,A\cap B=\{2,4\}\)`,
      String.raw`\(\,A\cap B=\{1\}\)`,
      String.raw`\(\,A\cap B=\{2,8\}\)`
    ],
    answer: 1
  },
{
    id: 6,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Matritsalarni ko‘paytiring:
\[
\begin{pmatrix}
1&2&3\\
-1&1&2
\end{pmatrix}
\cdot
\begin{pmatrix}
2\\5\\1
\end{pmatrix}
\]`,
    options: [
      String.raw`\(\begin{pmatrix}3\\8\end{pmatrix}\)`,
      String.raw`\(\begin{pmatrix}15\\5\end{pmatrix}\)`,
      String.raw`\(\begin{pmatrix}-2\\-1\end{pmatrix}\)`,
      String.raw`\(\begin{pmatrix}3&-1\\5&3\end{pmatrix}\)`
    ],
    answer: 1
  },
{
    id: 7,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Quyida keltirilgan to‘plamlarning dekart ko‘paytmasini toping.
\[
A=\{0,1,2\},\qquad B=\{-1,0,2\}
\]`,
    options: [
      "A×B = {< -1,0 >, < 0,1 >, < 2,2 >, < 1,-1 >} (rasmga mos)",
      "A×B = {<0,-1>, <1,0>, <2,2>} (rasmga mos)",
      "A×B = {<1,-1>, <1,0>, <2,2>} (rasmga mos)",
      String.raw`\(A\times B=\{\langle 0,-1\rangle,\langle 0,0\rangle,\langle 0,2\rangle,\langle 1,-1\rangle,\langle 1,0\rangle,\langle 1,2\rangle,\langle 2,-1\rangle,\langle 2,0\rangle,\langle 2,2\rangle\}\)`
    ],
    answer: 3
  },
{
    id: 8,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Agar
\[
A=\left[-\frac{3}{4};\frac{2}{3}\right],\qquad B=[-2;2]
\]
bo‘lsa, \(A\Delta B\) ni toping.`,
    options: [
      String.raw`\(\left(\frac{2}{3};\frac{3}{4}\right)\)`,
      String.raw`\((-2;2)\)`,
      String.raw`\(\left[-2;-\frac{3}{4}\right)\cup\left(\frac{2}{3};2\right]\)`,
      String.raw`\([-2;2]\)`
    ],
    answer: 2
  },
{
    id: 9,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Agar
\[
A=\{a\mid |a|<4,\ a\in\mathbb{R}\},\qquad
B=\{b\mid |b|\le 2,\ b\in\mathbb{R}\}
\]
bo‘lsa, \(A\setminus B\) ni toping.`,
    options: [
      String.raw`\(\{x\mid -4<x<-2\}\cup\{x\mid 2<x<4\}\)`,
      String.raw`\(\{x\mid -4<x<4\}\)`,
      String.raw`\(\{x\mid 2<x<4\}\)`,
      String.raw`\(\{x\mid -4<x<-2\}\)`
    ],
    answer: 0
  },
{
    id: 10,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Hisoblang:
\[
(2+3i)(1+2i)
\]`,
    options: [
      String.raw`\(-4-7i\)`,
      String.raw`\(-4+7i\)`,
      String.raw`\(4+7i\)`,
      String.raw`\(4-7i\)`
    ],
    answer: 1
  },
{
    id: 11,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`\(\alpha=1-\sqrt{3}i\) sonning trigonometrik shaklini toping.`,
    options: [
      String.raw`\(\alpha=2\left(\cos\frac{5\pi}{3}+i\sin\frac{5\pi}{3}\right)\)`,
      String.raw`\(\alpha=4\left(\cos\frac{5\pi}{3}+i\sin\frac{5\pi}{3}\right)\)`,
      String.raw`\(\alpha=8\left(\cos\frac{5\pi}{3}+i\sin\frac{5\pi}{3}\right)\)`,
      String.raw`\(\alpha=6\left(\cos\frac{5\pi}{3}+i\sin\frac{5\pi}{3}\right)\)`
    ],
    answer: 0
  },
{
    id: 12,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: "To‘g‘ri tasdiqni aniqlang.",
    options: [
      String.raw`\(\sqrt[n]{r}(\cos\varphi+i\sin\varphi)=\sqrt[n]{r}\left(\cos\frac{\varphi+2k\pi}{n}+i\sin\frac{\varphi+2k\pi}{n}\right),\ k=1,\ldots,n\)`,
      String.raw`\(\sqrt[n]{r}(\cos\varphi+i\sin\varphi)=\sqrt[n]{r}(\cos(\varphi+2k\pi)+i\sin(\varphi+2k\pi)),\ k=1,\ldots,n\)`,
      String.raw`\(\sqrt[n]{r}(\cos\varphi+i\sin\varphi)=\sqrt[n]{r}\left(\cos\frac{\varphi}{n}+i\sin\frac{\varphi}{n}\right),\ k=1,\ldots,n\)`,
      String.raw`\(\sqrt[n]{r(\cos\varphi+i\sin\varphi)}=\sqrt[n]{r}\left(\cos\frac{\varphi+2k\pi}{n}+i\sin\frac{\varphi+2k\pi}{n}\right),\ k=1,\ldots,n\)`
    ],
    answer: 3
  },
{
    id: 13,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Agar
\[
\alpha=7(\cos20^\circ-i\sin20^\circ),\qquad
\beta=4(\cos10^\circ+i\sin10^\circ)
\]
bo‘lsa, \(\frac{\alpha}{\beta}\) ni toping.`,
    options: [
      String.raw`\(\frac{\alpha}{\beta}=\frac{7}{8}\left(\sqrt{3}-1\right)\)`,
      String.raw`\(\frac{\alpha}{\beta}=-\frac{7}{8}\)`,
      String.raw`\(\frac{\alpha}{\beta}=\frac{7}{8}\left(\sqrt{3}+1\right)\)`,
      String.raw`\(\frac{\alpha}{\beta}=\frac{7}{8}\)`
    ],
    answer: 0
  },
{
    id: 14,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: "Fizika yo‘nalishida 75 talaba o‘qiydi. 47 tasi ingliz, 35 nemis, 23 tasi ikki tilni ham o‘rgangan. Nechta talaba ikki tilni ham bilmaydi?",
    options: ["22", "16", "25", "18"],
    answer: 1
  },
{
    id: 15,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: "Quyidagi tengliklardan qaysilari o‘rinli?",
    options: [
      "1)-6)",
      "Faqat 4)",
      "1)-5)",
      "1)2)5)6)"
    ],
    answer: 3
  },
{
    id: 16,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Amallarni bajaring:
\[
(\mathbb{N}\cup\mathbb{Z})\cap(\mathbb{Q}\cap\mathbb{R}\cap\mathbb{C})\cap\mathbb{R}
\]`,
    options: [
      String.raw`\(\mathbb{Z}\)`,
      String.raw`\(\mathbb{R}\)`,
      String.raw`\(\mathbb{C}\)`,
      String.raw`\(\mathbb{Q}\)`
    ],
    answer: 0
  },
{
    id: 17,
    subject: "ASN",
    topic: "Algebra va sonlar nazariyasi / Geometriya",
    question: String.raw`Ratsional sonlarni ko‘paytirishga nisbatan \(5\), \(-3\), \(-\frac{3}{5}\) sonlariga simmetrik sonlarni toping.`,
    options: [
      String.raw`\(\frac{1}{5};\ -3;\ -5\)`,
      String.raw`\(\frac{1}{5};\ -\frac{1}{3};\ -\frac{5}{3}\)`,
      String.raw`\(\frac{1}{5};\ \frac{1}{3};\ -\frac{5}{3}\)`,
      String.raw`\(\frac{1}{5};\ -\frac{1}{3};\ -\frac{5}{3}\)`
    ],
    answer: 0,
    note: "Bu savolda rasmdagi variantlar pastda davom etadi, keyingi sahifada tekshiramiz."
  },
{
    "id": 18,
    "subject": "ASN",
    "question": "$A=\\{1,2,3,5\\}$, $B=\\{10,12,13,14\\}$ to‘plamlarning birlashmasini aniqlang.",
    "options": [
      "$\\{2,3,11,13,14\\}$",
      "$\\{2,3,11,13\\}$",
      "$\\{1,2,3,5,10,12,13,14\\}$",
      "$\\{2,3,11,14\\}$"
    ],
    "answer": 2
  },
{
    "id": 19,
    "subject": "ASN",
    "question": "$R=A\\times B$, $S=B\\times A$ binar munosabatlarni kompozitsiyasi $S\\circ R$ ni toping, bunda $A=\\{1,2\\}$, $B=\\{2,5\\}$.",
    "options": [
      "$\\{(2,5),(2,2),(5,1),(5,2)\\}$",
      "$\\{(1,2),(1,5),(2,2),(2,5)\\}$",
      "$\\{(1,1),(1,2),(2,1),(2,2)\\}$",
      "$\\{(2,1),(2,2),(5,1),(5,2)\\}$"
    ],
    "answer": 2
  },
{
    "id": 20,
    "subject": "ASN",
    "question": "$A=\\{10,13,15\\}$, $B=\\{10,11,15\\}$ to‘plamlar uchun $B\\setminus A$ ayirmani aniqlang.",
    "options": [
      "$\\{10,13\\}$",
      "$\\{15\\}$",
      "$\\{11\\}$",
      "$\\{10\\}$"
    ],
    "answer": 2
  },
{
    "id": 21,
    "subject": "ASN",
    "question": "$i^{32}$ ni hisoblang.",
    "options": [
      "$i$",
      "$2i$",
      "$1$",
      "$-i$"
    ],
    "answer": 2
  },
{
    "id": 22,
    "subject": "ASN",
    "question": "$(\\mathbb{N},+,\\cdot)$ algebra quyidagilardan qaysi biri bo‘la oladi?",
    "options": [
      "Yarim halqa",
      "Maydon",
      "Halqa",
      "Guruppa"
    ],
    "answer": 0
  },
{
    "id": 23,
    "subject": "ASN",
    "question": "Chiziqli tenglamalar sistemasini yechimini toping:\n$$\\begin{cases}-x_1+2x_2-3x_3=1\\\\3x_1+4x_2+x_3=-1\\\\-x_1-8x_2+5x_3=-1\\end{cases}$$",
    "options": [
      "$x_1=-2,\\;x_2=1,\\;x_3=1$",
      "$\\varnothing$",
      "$x_1=-2,\\;x_2=-1,\\;x_3=1$",
      "Cheksiz ko‘p"
    ],
    "answer": 3
  },
{
    "id": 24,
    "subject": "ASN",
    "question": "Quyidagi tengliklardan qaysi biri noto‘g‘ri?",
    "options": [
      "$A\\setminus(A\\setminus B)=A\\cap B$",
      "$A\\setminus(B\\cup C)=(A\\setminus B)\\cup(A\\setminus C)$",
      "$(A\\cup B)\\cap A=A$",
      "$A\\cap B=B\\cap A$"
    ],
    "answer": 0
  },
{
    "id": 25,
    "subject": "ASN",
    "question": "Binar munosabat xossalari to‘liq ko‘rsatilgan qatorni toping.",
    "options": [
      "Refleksivlik",
      "Refleksivlik, simmetriklik, tranzitivlik",
      "Simmetriklik",
      "Tranzitivlik"
    ],
    "answer": 1
  },
{
    "id": 26,
    "subject": "ASN",
    "question": "Ko‘paytirish amaliga nisbatan gruppa tashkil etuvchi to‘plamlarni toping.",
    "options": [
      "$\\mathbb{Z},\\mathbb{R},\\mathbb{C}$",
      "$\\mathbb{Z},\\mathbb{Q},\\mathbb{R}$",
      "$\\mathbb{Q}\\setminus\\{0\\},\\;\\mathbb{R}\\setminus\\{0\\},\\;\\mathbb{C}\\setminus\\{0\\}$",
      "$\\mathbb{N},\\mathbb{Z},\\mathbb{Q}$"
    ],
    "answer": 2
  },
{
    "id": 27,
    "subject": "ASN",
    "question": "Matrittsali tenglamani yeching:\n$$X\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}=\\begin{pmatrix}-2&1\\\\-1&1\\end{pmatrix}$$",
    "options": [
      "$\\begin{pmatrix}2&-1\\\\5&4\\end{pmatrix}$",
      "$\\begin{pmatrix}-2&-1\\\\-5&4\\end{pmatrix}$",
      "$\\begin{pmatrix}-3&-1\\\\-1&0\\end{pmatrix}$",
      "$\\begin{pmatrix}3&-1\\\\1&-5\\end{pmatrix}$"
    ],
    "answer": 2
  },
{
    "id": 28,
    "subject": "ASN",
    "question": "$\\vec{x}=(5,1,11)$ vektorning $\\vec{e}_1=(3,2,2)$, $\\vec{e}_2=(2,3,1)$, $\\vec{e}_3=(1,1,3)$ bazisdagi koordinatasini toping.",
    "options": [
      "$(-2,2,3)$",
      "$(2,2,3)$",
      "$(2,-2,3)$",
      "$(2,2,-3)$"
    ],
    "answer": 1
  },
{
    "id": 29,
    "subject": "ASN",
    "question": "$\\vec{a}_1=(3,1,2)$, $\\vec{a}_2=(-2,1,-1)$, $\\vec{a}_3=(1,2,1)$ vektorlarga tortilgan $V$ vektor fazoning o‘lchovini toping.",
    "options": [
      "$3$",
      "$4$",
      "$1$",
      "$2$"
    ],
    "answer": 0
  },
{
    "id": 30,
    "subject": "ASN",
    "question": "$\\vec{e}_1=(1,1,1)$, $\\vec{e}_2=(-1,0,1)$, $\\vec{e}_3=(1,-1,2)$ vektorlarni normallang.",
    "options": [
      "$\\vec{e}_1'=(\\frac{\\sqrt3}{3},\\frac{\\sqrt3}{3},\\frac{\\sqrt3}{3});\\;\\vec{e}_2'=(-\\frac{\\sqrt2}{2},0,\\frac{\\sqrt2}{2});\\;\\vec{e}_3'=(\\frac{\\sqrt6}{6},-\\frac{\\sqrt6}{6},\\frac{\\sqrt6}{3})$",
      "$\\vec{e}_1'=(\\frac13,\\frac13,\\frac13);\\;\\vec{e}_2'=(-\\frac{\\sqrt2}{2},0,\\frac{\\sqrt2}{2});\\;\\vec{e}_3'=(\\frac16,-\\frac16,\\frac13)$",
      "$\\vec{e}_1'=(\\frac13,\\frac13,\\frac13);\\;\\vec{e}_2'=(-\\frac{\\sqrt2}{2},0,\\frac{\\sqrt2}{2});\\;\\vec{e}_3'=(\\frac{\\sqrt6}{6},-\\frac{\\sqrt6}{6},\\frac{\\sqrt6}{3})$",
      "$\\vec{e}_1'=(\\frac{\\sqrt3}{3},\\frac{\\sqrt3}{3},\\frac{\\sqrt3}{3});\\;\\vec{e}_2'=(-\\frac12,0,-\\frac12);\\;\\vec{e}_3'=(\\frac{\\sqrt6}{6},-\\frac{\\sqrt6}{6},\\frac{\\sqrt6}{3})$"
    ],
    "answer": 0
  },
{
    "id": 31,
    "subject": "ASN",
    "question": "$\\vec{x}=(5,7,5,7,2)$ va $\\vec{y}$ vektorlar berilganda $\\|\\vec{y}-\\vec{x}\\|$ vektor normasini toping.",
    "options": [
      "$6$",
      "$8$",
      "$7$",
      "$5$"
    ],
    "answer": 1
  },
{
    "id": 32,
    "subject": "ASN",
    "question": "Taqqoslamani yeching: $x^2\\equiv 5\\pmod{11}$",
    "options": [
      "$x\\equiv \\pm 8\\pmod{11}$",
      "$x\\equiv \\pm 7\\pmod{11}$",
      "$x\\equiv \\pm 4\\pmod{11}$",
      "$x\\equiv \\pm 6\\pmod{11}$"
    ],
    "answer": 2
  },
{
    "id": 33,
    "subject": "ASN",
    "question": "$\\vec{a}=(2,1,3,2)$ va $\\vec{b}=(1,2,-2,1)$ vektorlar orasidagi burchakni toping.",
    "options": [
      "$\\varphi=\\frac{\\pi}{3}$",
      "$\\varphi=\\frac{\\pi}{6}$",
      "$\\varphi=\\frac{\\pi}{2}$",
      "$\\varphi=\\frac{\\pi}{4}$"
    ],
    "answer": 2
  },
{
    "id": 34,
    "subject": "ASN",
    "question": "$(37/67)$ uchun Lejandr simvolini toping.",
    "options": [
      "$2$",
      "$-1$",
      "$1$",
      "$3$"
    ],
    "answer": 2
  },
{
    "id": 35,
    "subject": "ASN",
    "question": "Tenglamalar sistemasini yeching: $(a,b)=15$, $[a,b]=420$",
    "options": [
      "$(15,420),\\;(60,105)$",
      "$(45,125),\\;(34,25)$",
      "$(15,45)$",
      "$(90,120)$"
    ],
    "answer": 0
  },
{
    "id": 36,
    "subject": "ASN",
    "question": "$\\vec{b}=4\\vec{b}_1-\\vec{b}_2+3\\vec{b}_3$ vektorning $\\vec{a}_1,\\vec{a}_2,\\vec{a}_3$ bazisdagi koordinatalarini toping.",
    "options": [
      "$\\vec{b}=(7,-1,2)$",
      "$\\vec{b}=(-7,1,2)$",
      "$\\vec{b}=(7,-1,-2)$",
      "$\\vec{b}=(7,1,2)$"
    ],
    "answer": 3
  },
{
    "id": 37,
    "subject": "ASN",
    "question": "$\\frac{23}{18}$ ni chekli zanjir kasr ko‘rinishida ifodalang.",
    "options": [
      "$[1;2;3;1;2]$",
      "$[1;3;2;1;1;2]$",
      "$[0;1;2;3;1;2]$",
      "$[1;3;1;1;2]$"
    ],
    "answer": 0
  },
{"id": 38, "question": "$18^{2815}$ ni $14$ ga bo'lgandagi qoldiqni toping.", "options": ["3", "8", "5", "4"], "answer": "C"},
{"id": 39, "question": "$\\vec a=(3,2,1,1,1)$ vektorning uzunligini toping.", "options": ["$\\|\\vec a\\|=\\sqrt{14}$", "$\\|\\vec a\\|=4$", "$\\|\\vec a\\|=\\sqrt{13}$", "$\\|\\vec a\\|=\\sqrt{8}$"], "answer": "D"},
{"id": 40, "question": "$(8)$ asosda hisoblang: $7306+25645-6774$.", "options": ["$26157_{(8)}$", "$4352_{(8)}$", "$130426_{(8)}$", "$13426_{(8)}$"], "answer": "D"},
{"id": 41, "question": "Berilgan $988$ sonning Eyler funksiyasini toping.", "options": ["330", "420", "192", "432"], "answer": "C"},
{"id": 42, "question": "Taqqoslamani yeching: $5^x\\equiv 1\\pmod 9$.", "options": ["6", "2", "4", "7"], "answer": "D"},
{"id": 43, "question": "$231632$ ni $(7)$ asosda ifodalang.", "options": ["$1653212_{(7)}$", "$63542_{(7)}$", "$1123146_{(7)}$", "$52431_{(7)}$"], "answer": "C"},
{"id": 44, "question": "$12^{1231}+14^{4324}$ ni $13$ ga bo'lgandagi qoldiqni toping.", "options": ["0", "6", "1", "9"], "answer": "C"},
{"id": 45, "question": "$356,\\,1068$ va $1424$ sonlarning EKUKini toping.", "options": ["4272", "1068", "123", "1424"], "answer": "D"},
{"id": 46, "question": "Noto'g'ri ratsional kasrni ko'rsating.", "options": ["$\\dfrac{x^3-3x+5}{(x+1)^3}$", "$\\dfrac{x^3-3x+5}{(x+1)^4}$", "$\\dfrac{x^2-2x+3}{(x+1)^3}$", "$\\dfrac{3x+5}{x^2+1}$"], "answer": "A"},
{"id": 47, "question": "$[2;1,3,4,2]$ ni oddiy kasr ko'rinishida ifodalang.", "options": ["35/56", "96/23", "123/34", "105/38"], "answer": "B"},
{"id": 48, "question": "$25^{112}$ ni $16$ ga bo'lgandagi qoldiqni toping.", "options": ["1", "6", "2", "3"], "answer": "C"},
{"id": 49, "question": "Tenglamalar sistemasini yeching: $\\dfrac{a}{b}=\\dfrac{5}{9}$, $(a,b)=28$.", "options": ["(115,425)", "(140,252)", "(84,60), (24,420)", "(115,424)"], "answer": "A"},
{"id": 50, "question": "$60$ ning natural bo'luvchilari soni va yig'indisini toping.", "options": ["24, 345", "36, 460", "12, 168", "12, 45"], "answer": "D"}
);
