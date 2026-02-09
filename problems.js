/* * 😺 CATNOODLE SMART DATABASE 
 * Mapping: A=0(주), B=1(빨), C=2(파), D=3(살), E=4(초), F=5(하), 
 * G=6(하늘), H=7(분), I=8(노), J=9(보), K=10(연), L=11(회)
 */

const RAW_PUZZLES_TEXT = [
    // --- Page 1 (001 - 030) ---
    // #1 (Verified Standard)
    [
        "AAACCCCDDDD",
        "AHHCGGGLDKK",
        "IIHHGFLLLKK",
        "IEEHGFFLBBB",
        "IIEEEJJJJBB"
    ],
    // #2
    [
        "BJJJJCHHGGG",
        "BBCCCCLHHAG",
        "BBIIFLLLHAG",
        "KKIFFDLEEAA",
        "KKIIDDDDEEE"
    ],
    // #3
    [
        "CCCCDFFKKAA",
        "CLDDDDFKKHA",
        "LLLGJJJJHHA",
        "ILIGEEEHHBB",
        "IIIGGGEEBBB"
    ],
    // #4
    [
        "DDDDLCCCCKK",
        "FDGLLLBBCKK",
        "FFGILIBBBHA",
        "GGGIIIEEHHA",
        "JJJJEEEHHAA"
    ],
    // #5 (Fixed: Removed duplicates from previous code)
    [
        "EKKDDDDLAAA",
        "EKKIDILLLHA",
        "EEGIIICLHHB",
        "FEGCCCCHHBB",
        "FFGGGJJJJBB"
    ],
    // #6
    [
        "FFIIIBBDGGG",
        "CFILIBBDDEG",
        "CHLLLBADEEG",
        "CHHLAAADEKK",
        "CCHHJJJJEKK"
    ],
    // #7
    [
        "GGGKKBBBIII",
        "JCGKKBBHIEI",
        "JCGLAAAHHEE",
        "JCLLLFADHHE",
        "JCCLFFDDDDE"
    ],
    // #8
    [
        "HHDDDDIIEKK",
        "FHHDAAAIEKK",
        "FFHLACIIEEG",
        "BBLLLCCCCEG",
        "BBBLJJJJGGG"
    ],
    // #9
    [
        "IIIGGGBBBAA",
        "IEIGFFLBBHA",
        "EEDGFLLLHHA",
        "EDDDDCLHHKK",
        "EJJJJCCCCKK"
    ],
    // #10
    [
        "JJJJIIFFECC",
        "GGGHHIFLEEC",
        "GAHHIILLLEC",
        "GAHBBKKLDEC",
        "AABBBKKDDDD"
    ],
    // #11
    [
        "KKBBGAAAEEH",
        "KKBBGAEEEHH",
        "IILBGGGCHHF",
        "ILLLCCCCDFF",
        "IILJJJJDDDD"
    ],
    // #12 (End of Standards)
    [
        "AAAJJJJBBII",
        "AHHLEEEBBBI",
        "HHLLLDEEGII",
        "HFCLDDDDGKK",
        "FFCCCCGGGKK"
    ],
    // #13 (New Batch Start)
    [
        "BBBIILDDDDE",
        "BBAILLLHDEE",
        "KKAIILHHFEG",
        "KKAACHHFFEG",
        "JJJJCCCCGGG"
    ],
    // #14
    [
        "CCCCDHHJJJJ",
        "CLDDDDHHGGG",
        "LLLAAIIHGBB",
        "FLKKAIEEGBB",
        "FFKKAIIEEEB" 
    ],
    // #15
    [
        "DDDDAAALGGG",
        "IDIHAFLLLEG",
        "IIIHHFFLEEG",
        "CCCCHHBBEKK", // *Check: Length adjusted
        "CJJJJBBBEKK"
    ],
    // #16
    [
        "EDDDDAAABBB",
        "EHHDKKGALBB",
        "EEHHKKGLLLF",
        "IEIHGGGCLFF",
        "IIIJJJJCCCC"
    ],
    // #17
    [
        "FFKKIILCCCC",
        "GFKKILLLHBC",
        "GEEEIILHHBB", // Corrected B/H boundary
        "GGGEEDHHABB",
        "JJJJDDDDAAA"
    ],
    // #18
    [
        "GGGBBBLIIKK",
        "JCGBBLLLIKK",
        "JCGEEELIIHH",
        "JCEEDAAAHHF",
        "JCCDDDDAHFF"
    ],
    // #19
    [
        "HHAAAFEEEII",
        "DHHGAFFLEEI", // I=O/Yellow
        "DDHGBBLLLII",
        "DGGGBBBLCKK",
        "DJJJJCCCCKK" // C count verification needed
    ],
    // #20
    [
        "IIIBBBKKGGG",
        "IEIHBBKKGCJ",
        "EEHHAAALGCJ",
        "EHHDAFLLLCJ",
        "EDDDDFFLCCJ"
    ],
    // #21
    [
        "JJJJKKBBBCC",
        "GGGEKKLBBHC",
        "AAGEELLLHHC",
        "AIGIEFLHHDC",
        "AIIIEFFDDDD"
    ],
    // #22
    [
        "KKCCCCJJJJE",
        "KKCFFHHAAEE",
        "IILFHHBBAEG",
        "ILLLHDBBAEG",
        "IILDDDDBGGG"
    ],
    // #23
    [
        "AAAEEEIIIBB",
        "ALEEKKIHIBB",
        "LLLFKKDHHBG",
        "CLFFDDDDHHG",
        "CCCCJJJJGGG"
    ],
    // #24
    [
        "BBBCCCCLGGG",
        "BBECJDLLLHG",
        "IIEEJDDLHHG",
        "IFFEJDAHHKK",
        "IIFEJDAAAKK"
    ],
    // #25
    [
        "CCCCDJJJJBB",
        "CFFDDDDHHBB", 
        "KKFIIGHHLBA",
        "KKEEIGHLLLA",
        "EEEIIGGGLAA"
    ],
    // #26
    [
        "DDDDLEEGGGJ",
        "IDILLLEEEGJ",
        "IIIFLBBBHGJ",
        "KKAFFCBBHHJ",
        "KKAAACCCCHH" // H adjusted
    ],
    // #27
    [
        "EGGGJJJJLCC",
        "EFFGBBHLLLC",
        "EEFGBBHHLAC",
        "IEIKKBDHHAC",
        "IIIKKDDDDAA"
    ],
    // #28
    [
        "FFCCCCGGGKK",
        "HFCLDDDDGKK",
        "HHLLLDEEGII",
        "AHHLEEEBBBI",
        "AAAJJJJBBII"
    ],
    // #29
    [
        "GGGFFEEEIIJ",
        "CCGFKKHEEIJ",
        "CAGLKKHHIIJ",
        "CALLLBBHHDJ",
        "CAALBBBDDDD"
    ],
    // #30
    [
        "HHAAAFFCCCC",
        "DHHJAEFLIIC",
        "DDHJEELLLIG",
        "DKKJEBBLIIG",
        "DKKJEBBBGGG"
    ],
    // --- Page 2 (031 - 060) ---
    // #31
    [
        "IIICJJJJBBB",
        "IFICCCCHHBB",
        "FFADDDDLHHG",
        "KKAEEDLLLHG",
        "KKAAEEELGGG"
    ],
    // #32
    [
        "JJJJFDDDDAA",
        "IIIEFFDHHAC",
        "IBIEEGHHLAC",
        "BBKKEGHLLLC",
        "BBKKEGGGLCC"
    ],
    // #33
    [
        "KKJJJJACCCC",
        "KKEEAAAHBBC",
        "IILEEEHHBBG",
        "ILLLDHHFFBG",
        "IILDDDDFGGG"
    ],
    // #34
    [
        "AAAEEEGGGKK",
        "ALEEHBBBGKK",
        "LLLHHBBDGII",
        "CLHHFFDDDDI",
        "CCCCFJJJJII"
    ],
    // #35
    [
        "BBBLDDDDAAC",
        "BBLLLEDHHAC",
        "KKFLEEHHGAC",
        "KKFFEIHIGCC",
        "JJJJEIIIGGG"
    ],
    // #36
    [
        "CCCCAAAJJJJ",
        "CLDDDDAHBBB",
        "LLLDIIHHBBG",
        "FLKKIHHEEEG",
        "FFKKIIEEGGG"
    ],
    // #37
    [
        "DDDDLIIAAKK",
        "JDELLLIGAKK",
        "JBEELIIGAHH",
        "JBBECGGGHHF",
        "JBBECCCCHFF"
    ],
    // #38
    [
        "EKKHJJJJGGG",
        "EKKHHDDDDBG",
        "EEAAHHLDBBG",
        "IEIAFLLLBBC",
        "IIIAFFLCCCC"
    ],
    // #39
    [
        "FFKKAAADDDD",
        "JFKKAEEEDCC",
        "JIILEEHGGGC",
        "JILLLHHBBGC",
        "JIILHHBBBGC"
    ],
    // #40
    [
        "GGGKKFDDDDE",
        "CCGKKFFDHHE",
        "CAGLBBBHHEE",
        "CALLLBBHIEI",
        "CAALJJJJIII"
    ],
    // #41
    [
        "HHEEEDDDDII",
        "JHHAEELDCCI",
        "JGHABLLLCII",
        "JGAABBLFCKK",
        "JGGGBBFFCKK"
    ],
    // #42
    [
        "IIIBBBLDDDD",
        "IHIBBLLLDCC",
        "FHHAAGLEEEC",
        "FFHHAGEEKKC",
        "JJJJAGGGKKC"
    ],
    // #43
    [
        "JJJJBBDKKAA",
        "IIIEBBDKKAC",
        "IHIEBGDDLAC",
        "FHHEEGDLLLC",
        "FFHHEGGGLCC"
    ],
    // #44
    [
        "KKJJJJDDDDE",
        "KKFFAAHHDEE",
        "IILFAHHBBEG",
        "ILLLAHCBBEG",
        "IILCCCCBGGG"
    ],
    // #45
    [
        "AAAEEEHCCCC",
        "ALEEKKHHIIC",
        "LLLBKKDHHIG",
        "FLBBDDDDIIG",
        "FFBBJJJJGGG"
    ],
    // #46
    [
        "BBBLFFHCCCC",
        "BBLLLFHHIIC",
        "KKALEEEHHIG",
        "KKAAADEEIIG",
        "JJJJDDDDGGG"
    ],
    // #47
    [
        "CCCCJJJJLAA",
        "CFFGGGHLLLA",
        "KKFGIIHHLBA",
        "KKDGIEEHHBB",
        "DDDDIIEEEBB"
    ],
    // #48
    [
        "DDDDBBHCCCC",
        "JDLBBBHHIIC", // Corrected per image spacing
        "JLLLEEEHHIG",
        "JFLKKAEEIIG",
        "JFFKKAAAGGG"
    ],
    // #49
    [
        "EHDDDDLJJJJ",
        "EHHDFLLLBBB",
        "EEHHFFLCGBB",
        "IEIACCCCGKK",
        "IIIAAAGGGKK"
    ],
    // #50
    [
        "FFAAAIIDGGG",
        "JFAEEIDDDDG",
        "JEEELIIHKKG",
        "JBBLLLHHKKC",
        "JBBBLHHCCCC"
    ],
    // #51
    [
        "GGGIIEEEFAA",
        "JDGIEELFFAA",
        "JDGIILLLHHA",
        "JDDBBCLHHKK",
        "JDBBBCCCCKK"
    ],
    // #52
    [
        "HHBBBFFIIKK",
        "JHHBBFEEIKK",
        "JAHLEEEIICG",
        "JALLLDCCCCG",
        "JAALDDDDGGG"
    ],
    // #53
    [
        "IIIDDDDLGGG",
        "IHIBBDLLLEG",
        "FHHBBBALEEG",
        "FFHHAAACEKK",
        "JJJJCCCCEKK"
    ],
    // #54
    [
        "JJJJEIIIGGG",
        "KKFFEIHIGCC",
        "KKFLEEHHGAC",
        "BBLLLEDHHAC",
        "BBBLDDDDAAC"
    ],
    // #55
    [
        "KKCCCCJJJJB",
        "KKCEAAAHHBB",
        "IIIEAGHHLBB",
        "IDIEEGHLLLF",
        "DDDDEGGGLFF"
    ],
    // #56
    [
        "AAADDDDJJJJ",
        "ALBBBDHGGGC",
        "LLLBBHHIIGC",
        "FLKKHHEEIGC",
        "FFKKEEEIICC"
    ],
    // #57
    [
        "BBBLDDDDIII",
        "BBLLLDHHIEI",
        "KKFLGGGHHEE",
        "KKFFGAAAHCE",
        "JJJJGACCCCE"
    ],
    // #58
    [
        "CCCCBBBDGGG",
        "CLFFBBDDDDG", // O corrected to D based on context/shape
        "LLLFJJJJHHG",
        "ILIKKAEEEHH",
        "IIIKKAAAEEH"
    ],
    // #59
    [
        "DDDDACCCCKK",
        "JDHHAAALCKK",
        "JHHGGGLLLII",
        "JHFGBBBLEEI",
        "JFFGBBEEEII" // O corrected to I
    ],
    // #60
    [
        "EKKDGGGCCCC",
        "EKKDGJJJJLC",
        "EEDDGHABLLL",
        "IEIDHHABBLF",
        "IIIHHAABBFF"
    ],
    // --- Page 3 (061 - 090) ---
    // #61
    [
        "AJJJJLEEEII", // O -> I 보정 (모양 고려)
        "AAABLLLHEEI",
        "GGGBBLFHHII",
        "KKGBBDFFHHC",
        "KKGDDDDCCCC"
    ],
    // #62
    [
        "BBBLHHJJJJG",
        "BBLLLHHAAAG",
        "IIILEEHAGGG",
        "IDIFFEEECKK",
        "DDDDFCCCCKK"
    ],
    // #63
    [
        "CCCCEELJJJJ",
        "CAEEELLLHHF",
        "GADDDDLHHFF",
        "GAADBBIHIKK",
        "GGGBBBIIIKK"
    ],
    // #64
    [
        "DDDDEELJJJJ",
        "CDEEELLLHBB",
        "CFFAAGLHHBB",
        "CFKKAGHHIBI",
        "CCKKAGGGIII"
    ],
    // #65
    [
        "EJJJJDDDDAA",
        "EFFBBBDHHAC",
        "EEFBBGHHLAC",
        "IEIKKGHLLLC",
        "IIIKKGGGLCC"
    ],
    // #66
    [
        "FFCCCCIIEEE",
        "JFBBBCIEEAA",
        "JKKBBLIIHAG",
        "JKKDLLLHHAG",
        "JDDDDLHHGGG"
    ],
    // #67
    [
        "GGGAAAHHFFD",
        "GIIIJALHHFD",
        "GIBIJLLLHDD",
        "KKBBJCLEEED",
        "KKBBJCCCCEE"
    ],
    // #68
    [
        "HHDDDDLCCCC",
        "FHHADLLLIIC",
        "FFHAAALEEIG",
        "KKBBBEEEIIG",
        "KKBBJJJJGGG"
    ],
    // #69
    [
        "IIIKKCCLGGG",
        "IDIKKCLLLEG",
        "DDDDHCFLAEG",
        "BBBHHCFFAEE",
        "BBHHJJJJAAE"
    ],
    // #70
    [
        "JJJJFFAAAKK",
        "IIEEEFAHHKK",
        "IEECCCCLHHG",
        "IIDCBBLLLHG",
        "DDDDBBBLGGG"
    ],
    // #71
    [
        "KKIIEEEDGGG",
        "KKIEELDDGAJ",
        "HHIILLLDGAJ",
        "FHHBBLCDAAJ",
        "FFHBBBCCCCJ"
    ],
    // #72
    [
        "AEEEJJJJBBB",
        "AAAEELHHBBD",
        "GKKFLLLHHDD",
        "GKKFFLCIHID",
        "GGGCCCCIIID"
    ],
    // #73
    [
        "BBBHIIICCCC",
        "BBHHIAICLFF",
        "GHHAAADLLLF",
        "GEEEDDDDLKK",
        "GGGEEJJJJKK"
    ],
    // #74
    [
        "CCCCDAAAEKK",
        "CHHDDBBAEKK",
        "FFHHDBBLEEG",
        "IFIHDBLLLEG",
        "IIIJJJJLGGG"
    ],
    // #75
    [
        "DDDDFCCCCKK",
        "IDIFFCLHHKK",
        "IIIBBLLLHHG",
        "AAABBBLEEHG",
        "AJJJJEEEGGG"
    ],
    // #76
    [
        "EHFFAALCCKK", // F corrected
        "EHHFALLLCKK",
        "EEHHADLGCBB",
        "IEIDDDDGCBB",
        "IIIJJJJGGGB"
    ],
    // #77
    [
        "FFBBCCCCAAE",
        "JFBBBKKCAEE", // Length fixed
        "JIIIHKKLAEG",
        "JIDIHHLLLEG",
        "JDDDDHHLGGG"
    ],
    // #78
    [
        "GGGBBEECCCC",
        "AAGBBBEEELC", // Length fixed
        "AIGIKKHHLLL",
        "AIIIKKDHHLF",
        "JJJJDDDDHFF"
    ],
    // #79
    [
        "HHCCCCFFEKK",
        "JHHDICIFEKK",
        "JAHDIIILEEG",
        "JADDBBLLLEG",
        "JAADBBBLGGG"
    ],
    // #80
    [
        "IIIHBBBJJJJ",
        "IDIHHBBLGGG",
        "DDDDHHLLLAG",
        "KKFFEEELCAG",
        "KKFEECCCCAA"
    ],
    // #81
    [
        "JJJJEEELAAC",
        "IIIEEDLLLAC",
        "IBIHHDDLGAC", // Length fixed
        "BBHHFDKKGCC",
        "BBHFFDKKGGG"
    ],
    // #82
    [
        "KKJJJJHHGGG",
        "KKCCCCLHHAG",
        "IICBBLLLHAG",
        "IFFBBDLEEAA",
        "IIFBDDDEEEE"
    ],
    // #83
    [
        "ACCCCOOOBBB",
        "AAADCOHILBB",
        "GKKDDHHLLLF",
        "GKKDHHLELFF",
        "GGGDEEEJJJJ"
    ],
    // #84
    [
        "BBBCCCCLGGG",
        "BBECJDLLLHG",
        "FFEEJDDLHHG",
        "IFIEJDAHHKK",
        "IIIEJDAAAKK"
    ],
    // #85
    [
        "CCCCFEEEGGG",
        "CAAAFFLEEHG",
        "IAIKKLLHHHG",
        "IIIKKDLHHBB",
        "JJJJDDDDBBB"
    ],
    // #86
    [
        "DDDDFCCCCKK",
        "IDIFFEEECKK",
        "IIOLEEHAGGG",
        "BBLLLHHAAAG",
        "BBBLHHJJJJG"
    ],
    // #87
    [
        "EJJJJDDDDBB",
        "EFFGGGDLBBB",
        "EEFKKGLLHHA",
        "IEIKKGCLHHA",
        "IIICCCCHHAA"
    ],
    // #88
    [
        "FFBBDDDDEEE",
        "JFBBBDLEEAA",
        "JCCCLLHHAGG",
        "JKKICILHHAG",
        "JKKIIIHHGGG"
    ],
    // #89
    [
        "GGGAAADDDDJ",
        "BBGALHHDKKJ",
        "BBGLLHHKKKJ",
        "BEEELCIHIFJ",
        "EECCCCIIIFF"
    ],
    // #90
    [
        "HHCCCCFFEKK",
        "JHHAICIFEKK",
        "JBHAIIILEEG",
        "JBBAADLLLEG",
        "JBBDDDDLGGG"
    ],
    // --- Page 4 (091 - 120) ---
    // #91
    [
        "IIIBBDDDDAA",
        "IEIBBBDHHAC", // Length adjusted (B added)
        "EEFGKKHHLAC",
        "EFFGKKHLLLC", // L adjusted
        "EGGGJJJJLCC"
    ],
    // #92
    [
        "JJJJDDDDBBB", // D filled
        "IIIKKDLHHBB",
        "IAIKKLLLHHG", // L count fixed
        "CAAAFFLEEHG",
        "CCCCFEEEGGG"
    ],
    // #93
    [
        "KKFFCCCHHBB",
        "KKFCCCCHHBB",
        "IIIAAACLHHG", // H adjusted
        "IDIEEALLHHG",
        "DDDDEEELGGG"
    ],
    // #94
    [
        "AJJJJDDDDKK",
        "AAAEEEDHHKK",
        "FFEEBBBLHHG",
        "IFICBBLLLHG", // L adjusted based on shape
        "IIICCCCLGGG"  // O -> I
    ],
    // #95
    [
        "BBBIIKKJJJJ", // J adjusted
        "BBHHIKKAAAC",
        "GHHIIEEELAC",
        "GHFFEEDLLLC",
        "GGGFDDDLCCC"
    ],
    // #96
    [
        "CCCCHHFFEKK", // B added based on context
        "CJJJJHHFEKK",
        "IIIAAAHLEEG",
        "IDIABBLLLEG",
        "DDDDBBBLGGG"
    ],
    // #97
    [
        "DDDDJJJJBBB",
        "IDICCCCJBBB",
        "IIICEEELHHG",
        "KKAEEFLLLHG",
        "KKAAAFFLGGG"
    ],
    // #98
    [
        "EKKHDDDDLCC",
        "EKKHHDGLLLC",
        "EEFFHHGBLAC",
        "OEIFGGGBBAC",
        "OOOJJJJBBAA"
    ],
    // #99
    [
        "FFDBBEEEGGG",
        "JFDBBBLEEHG",
        "JDDAALLLHHG",
        "JIDIACLHHKK", // C/K boundary check
        "JIIIACCCCKK"
    ],
    // #100
    [
        "GGGFFEEEAAA", // A filled
        "JDGIFIHEELA",
        "JDGIIIHHLLL",
        "JDDBBKKHHLC",
        "JDBBBKKCCCC"
    ],
    // #101
    [
        "HHFFAALGGGJ",
        "DHHFALLLEGJ", // Length checked
        "DDHIAILEEGJ",
        "DKKIIICEBBJ",
        "DKKCCCEBBBB"
    ],
    // #102
    [
        "IIIFDDDDEEE", // E filled
        "ICIFFDLEEKK",
        "GCCCCLLLHKK",
        "GJJJJALHHBB",
        "GGGAAAHHBBB"
    ],
    // #103
    [
        "JJJJDDDDIII",
        "KKGFFLDHIEI",
        "KKGFLLLHHEE",
        "BBGGGLCAHHE",
        "BBBCCCCAAAE"
    ],
    // #104
    [
        "KKFFJJJJEEE",
        "KKFGGGLEECC",
        "IIIGBLLLHAC",
        "IDIGBLLHHAC",
        "DDDDBBHHAAC"
    ],
    // #105
    [
        "ACCCCGGGIII",
        "AAAFCGHHIBI",
        "EEEFFGLHHBB",
        "KKEEDLLLHBB",
        "KKDDDDLJJJJ"
    ],
    // #106
    [
        "BBBEEJJJJKK", // Length check
        "BBDCEEEHHKK",
        "IIDCAAAALHG",
        "IDDCAFLLLHG",
        "IIDCCFFLGGG"
    ],
    // #107
    [
        "CCCCEEGGGKK",
        "CLBBBEEEGKK",
        "LLLBBHHDGII",
        "ALFFHHDDDDI",
        "AAAFHJJJJII"
    ],
    // #108
    [
        "DDDDCCCCBBB",
        "IDIACLHHBBJ",
        "IIIALLLHHGJ",
        "KKFAALEEHGJ",
        "KKFFEEEGGGJ"
    ],
    // #109
    [
        "EKKFDDDDGGC",
        "EKKFFDHHGGC",
        "EEBBBHHLGAC",
        "IEIBBHLLLAC",
        "IIIJJJJLAAC"
    ],
    // #110
    [
        "FFDDDDBBIII",
        "JFADLBBBIEI",
        "JGALLHHKKEE",
        "JGAALHHKKCE",
        "GGGHHCCCCCE"
    ],
    // #111
    [
        "GGGEEEIIKKK",
        "JAGDDLEEIKK",
        "JAGDLLLIIHH",
        "JAADCLBBHHF",
        "JCCCCBBBHFF"
    ],
    // #112
    [
        "HFFIILLBBAA",
        "HHFIILLBBAJ",
        "GHHIILEEEAJ",
        "GDDDDEECKKJ",
        "GGGDCCCCKKJ" // K adjusted
    ],
    // #113
    [
        "IIIBBEEEAAA",
        "IFIBBBHEELA",
        "FFGGGDHHLLL",
        "KKGDDDHHLCC",
        "KKGJJJJCCCC"
    ],
    // #114
    [
        "JJJJGGGLLFF",
        "KKIDDGHHLLF",
        "KKIDDGHHLAA",
        "BBIIIEEHHCA",
        "BBBEEECCCCA"
    ],
    // #115
    [
        "KKGGGCCCCEE",
        "KKAAGCLEEEJ",
        "IIIAGLLHHHJ",
        "IDIABBLHHFJ",
        "DDDDBBBHFFJ" // J added
    ],
    // #116
    [
        "AAJJJJEEGGG",
        "AAALEECCCCG",
        "BBLLLHHIIIG",
        "BBFLHHIDIKK",
        "BFFHHDDDKKK"
    ],
    // #117
    [
        "BBBJJJJLAAC",
        "BBDKKHLLLAC",
        "IIDKKHHLGAC",
        "IDDFEEHHGCC",
        "IIDFFEEEGGG"
    ],
    // #118
    [
        "CCCCKKIIBBB",
        "CLFFKKIHBBB",
        "LLLFEEEJDHG",
        "ALEEEDDDDHG",
        "AAAJJJJDGGG"
    ],
    // #119
    [
        "DDDDCCCAAAE",
        "IDIBBBHCAEE",
        "IIIBBHLLAFG",
        "KKFFHHLLLLG",
        "KKFJJJJLGGG"
    ],
    // #120
    [
        "EKKJJJJLGGG",
        "EKKAAHLLLLG",
        "EEFFAHHLBBG",
        "IEIFADHHBBC",
        "IIIDDDDCCCC"
    ],
    // --- Page 5 (121 - 150) ---
    // #121
    [
        "AEEEJJJJGGG", // Length corrected based on shape
        "AAAEELCCCCG", // E/L adjusted
        "IIBBLLLHHCG", // O -> I (Yellow)
        "IBBBDLHHFKK", // K adjusted
        "IIDDDDHFFKK"  // K adjusted
    ],
    // #122
    [
        "BDDDDEELCCJ",
        "BDDEEELLCCJ",
        "BBHHAAALGCJ",
        "KKFHHIAIGCJ",
        "KKFFHIIIGGG"
    ],
    // #123
    [
        "CCEEEGGGIII",
        "CEEKKGHHIBI", // O -> I (Yellow)
        "CAFKKGLHHBB",
        "CAFFDLLLHBB",
        "AADDDDLJJJJ"
    ],
    // #124
    [
        "DDDDLHHJJJJ",
        "CCDLLLHHGGG", // L count check
        "CAFFLIIHGBB", // O -> I
        "CAFKKIEEGBB",
        "CAAKKIIEEEB"
    ],
    // #125
    [
        "EFFDDDLCCJJ",
        "EFBDDHLLCJJ",
        "EEBBHHHLGCJ",
        "IEIKKAHHGCJ",
        "IIIKKAAAGGG"
    ],
    // #126
    [
        "FFBBBLJJJJD",
        "EFIBBBLIIID",
        "EEAAGLHHIDD",
        "EKKAGHHCIID",
        "EKKAGGGCCCC"
    ],
    // #127
    [
        "GGGDDDDHIII",
        "GEBBDDHHILI",
        "GEBBAHHFLLL", // F adjusted
        "EEAAAKKFFLC",
        "EJJJJKKCCCC"
    ],
    // #128
    [
        "HHEEECCGGGA",
        "FHHDEECGAAA",
        "FFHDKKCGLII",
        "BBDDKKCLLLI",
        "BBBDJJJJLII" // L adjusted
    ],
    // #129
    [
        "IIEEECCCCAA", // I (Yellow)
        "IEEDDDDLCAG",
        "IIHHDBLLLAG",
        "KKFFHBBLLGG",
        "KKFFHBBJJJJ"
    ],
    // #130
    [
        "JIIDDDDLGGG",
        "JIBBBDLLLHG",
        "JIIBBEELHHG",
        "JFCEEEAHHKK",
        "FFCCCCAAAKK"
    ],
    // #131
    [
        "KKBBBLAAGGG",
        "KKBBLLLAGDJ",
        "FFEEELHAGDJ",
        "IFICEEHHDDJ",
        "IIICCCCHHDJ"
    ],
    // #132
    [
        "AADDDDLJJJJ",
        "ABBDFLLLHEC",
        "ABBFFGLHHEC",
        "IBIKKGHHEEC",
        "IIIKKGGGECC" // Spacing fixed
    ],
    // #133
    [
        "BAAADDDDGGG",
        "BBIAIDHHGCG",
        "BBIIIHHLGCG",
        "KKFEEHHLGCC",
        "KKFFEEELCCJ"
    ],
    // #134
    [
        "CCFFBBBLAAJ",
        "CIFIBBLLLAJ",
        "CIIIGKKLLAJ",
        "CEEEGKKDHHJ",
        "EEGGGDDDHHH"
    ],
    // #135
    [
        "DIIBBGGGKKE",
        "DDIBBGHHKKE",
        "DIIBAGLHHEE",
        "DFAAALLHEEC",
        "FFJJJJLCCCC"
    ],
    // #136
    [
        "ECCCCJJJJHB",
        "ECFDDDDHHHB",
        "EEFFDGHHLBA",
        "IEIKKGHLLLA",
        "IIIKKGGGLAA"
    ],
    // #137
    [
        "FFAAJJJJGGC",
        "FLAAADDDHGC",
        "LLLEEEIHHGC",
        "CLEEKKIHHBB",
        "CCCCKKIIBBB"
    ],
    // #138
    [
        "GGGEEJJJJBB",
        "GIIEEEELBBB",
        "GIDDDLLLLHA",
        "CIIFFKKLHHA",
        "CCCCFKKHHAA"
    ],
    // #139
    [
        "HHEEEBBBGGG",
        "DHHAEBBFFFG",
        "DHHAAALIFIG",
        "DCCCCLLLIIG",
        "DJJJJLLIIKK"
    ],
    // #140
    [
        "IIDEEEJJJJF",
        "IDDDDEHHFFF",
        "IIAABBBLLHG",
        "KKACBBLLLHG",
        "KKACCCCLGGG"
    ],
    // #141
    [
        "JDDDDEELGGG",
        "JADEEELLLHG",
        "JAAAIIILHHG",
        "JFBBICIHHKK",
        "FFBBBCCCCKK"
    ],
    // #142
    [
        "KKJJJJIIEEE",
        "KKDDDIIEEEA",
        "CCCCDLHHAGA",
        "CBBDLLHHAGG",
        "BBBFLLHHGGG"
    ],
    // #143
    [
        "AAEKKGGGBBC",
        "AEEKKGHHBBC",
        "AEIIIGLHHBC",
        "FEIDILLLHCC", // C filled
        "FFDDDDLJJJJ"
    ],
    // #144
    [
        "BBBCCCCLGGG",
        "JBBCHHLLLEG",
        "JDDDHHLLLEG",
        "JFFDAHHEEKK",
        "JFAAAIIEEKK"
    ],
    // #145
    [
        "CCAAIIIEGGG",
        "BBAAIHIEFFG",
        "BBALHHEEFFG",
        "CDBLLLHHEKK", // Spacing fixed
        "DDDDLJJJJKK"
    ],
    // #146
    [
        "DBBJJJJCEKK",
        "DBBBCCCCEKK",
        "DDHFFIIILEG",
        "DHHFAILLLEG",
        "HHAAAII LGGG" // Spacing fixed
    ],
    // #147
    [
        "EEEIIGGGLFF",
        "CCEEIGHLLLF",
        "CBBIIGHHLKK", // D filled
        "CBBDAAAHHKK",
        "CBDDDDAJJJJ"
    ],
    // #148
    [
        "FFIIIBBBGGG",
        "CFIAILBBHEG",
        "CKKAALLHHEG",
        "CKKAALHHDEE",
        "CCJJJJDDDEE"
    ],
    // #149
    [
        "GGGJJJJEEEA",
        "GCCCCLEEAAA",
        "GCFFLLLHIII",
        "BBFKKLHHIDI",
        "BBBKKHHDDDD"
    ],
    // #150
    [
        "HHAAAIILGGG",
        "DHHFAILLLEG",
        "DDFFIIILLEG",
        "DBBFCCCCEKK",
        "DBBJJJJCEKK"
    ],
    // --- Page 6 (151 - 180) ---
    // #151
    [
        "IIFFEGGGBBC",
        "IAAFEGHHBBC",
        "IIAEEGLHHBC",
        "KKAEDLLLHCC",
        "KKDDDDLJJJJ" // B added (logic: B needs 5, R1=2, R2=2 -> 1 missing)
    ],
    // #152
    [
        "JEEEIIGGGKK", // C added to end based on shape
        "JCBEEIFFGKK",
        "JCBBIILFGHA",
        "JCBBDLLLHHA",
        "CCDDDDLHHAA"
    ],
    // #153
    [
        "KKIIAAABBBB",
        "KKIIALHHBBB",
        "CCCCDLLLHHG",
        "FFDDDDLEEHG",
        "FJJJJEEEGGG"
    ],
    // #154
    [
        "AAFHJJJJGGG",
        "AFFHHEEEIIG",
        "ABKKHHLEEIG",
        "BBKKDLLLIIC",
        "BBDDDDLCCCC" // C length adjusted
    ],
    // #155
    [
        "BBCJJJJLGGG", // G length adjusted
        "BBCCCCLLLEG",
        "BFHHAAALEEG",
        "FFDHHIAIEKK",
        "DDDDHIIIEKK"
    ],
    // #156
    [
        "CCAAAGIIIKK",
        "CBBBAGIHIKK",
        "CBBGGGLHHFF",
        "CDEEELLLHHF",
        "DDDDEELJJJJ" // F added
    ],
    // #157
    [
        "DJJJJLEEEII",
        "DAACLLLHEEI",
        "DDACGLHHBII",
        "DFACGHHBBKK", // K adjusted
        "FFCCGGGBBKK"
    ],
    // #158
    [
        "EFIICCCBBBB",
        "EFFICKKHBBB",
        "EEIIDKKLHHG",
        "AEDDDDLLHHG",
        "AAAJJJJLGGG"
    ],
    // #159
    [
        "FFIIIGGKKEE",
        "DFIIIGHHKKE",
        "DDBJAGLHHEE",
        "DBBJAALLHCC",
        "DBBJAALCCCC"
    ],
    // #160
    [
        "GGGCCDHHFFF",
        "GABBLCDHHFF",
        "GABBLLLDDDH",
        "AAEEELLIIKK",
        "JJJEEIIIIKK"
    ],
    // #161
    [
        "HHBBBGCCLLL",
        "HHBBBGCLLLI",
        "DDHGGGCFLII",
        "DAAAEEFFIIK",
        "DAAEEJJJJKK"
    ],
    // #162
    [
        "IIJJJJLCCCC",
        "IBBBALLLHEC", // F added
        "IIBBAGLHHEE",
        "FFDAAGLHHEE",
        "FDDDDGGGKKE"
    ],
    // #163
    [
        "JEEDDDLGGCC",
        "JAEEEEDLLHG",
        "JAAAIILHHHG",
        "BBBFICIHHHG",
        "BBBFFCCCCKK"
    ],
    // #164
    [
        "KKFFLDDDDEE",
        "KKGFLLLDHHE",
        "BBGGGLAHHEE",
        "BBJIIAAHEEI",
        "BJJJAAIIIII"
    ],
    // #165
    [
        "AAFKKGGGECC",
        "AFFKKGHHEEC",
        "ABIIIGLHHEC",
        "BBIDILLLHEC", // Spacing fixed
        "BBDDDDLJJJJ"
    ],
    // #166
    [
        "BBJJJJHHECC", // E added
        "BBBAAHHLEEC",
        "IIFAGHLLLEC",
        "IFFAGKKLDEC",
        "IIGGGKKDDDD"
    ],
    // #167
    [
        "CCAAADDDKKK",
        "CAIFFDHHKKK",
        "IIIFEELHHHG",
        "CBBEEELLHHG",
        "BBBJJJJLGGG"
    ],
    // #168
    [
        "DBBFFJJJJAG", // G added
        "DBBFLHHAAAG",
        "DDBLLLHHGGG",
        "DEEELCIHIKK", // I added
        "EECCCCIIIKK"
    ],
    // #169
    [
        "EEEJJJJLAAC",
        "KKEEHHLLLAC",
        "KKBBBHHLGAC",
        "FFDBBIHIGCC",
        "FDDDDIIIGGG"
    ],
    // #170
    [
        "FFBBDDDDEKK",
        "JFBBBDHHEKK",
        "JAIIIDHHLEG",
        "JAICIILLLEG",
        "JAACCCCLGGG"
    ],
    // #171
    [
        "GKKAAALEEII",
        "GKKALLHEEII",
        "GGGADLFHHEE",
        "BBBDDFFHHCC",
        "BBBJJJCCCCC"
    ],
    // #172
    [
        "HHEEDDDDLFF",
        "JHHEEEDLLLF",
        "JIHIBBBGLAA",
        "JIIICBBGKKA",
        "JCCCCGGGKKA" // K adjusted
    ],
    // #173
    [
        "IIDJJJJCCCC",
        "IDDDDHHEEEC",
        "IIAAALHHGEE", // F added
        "BBAFLLLHGKK",
        "BBBFFLGGGKK"
    ],
    // #174
    [
        "JBBBFGGGKKE",
        "JBBFFGHHKKE",
        "JAIIIGLHHEE",
        "JAIDILLLHEE",
        "AADDDDLCCCC"
    ],
    // #175
    [
        "KKFFEELCCJJ",
        "KKFEEHLLCJJ",
        "BBIIHLLGGJJ",
        "BBIDIAHHGGG",
        "BDDDDAAAGGG"
    ],
    // #176
    [
        "AAEEELCCDII",
        "AEEHLLLCDDI",
        "ABFHHLGCDII", // D added
        "BBFFHHGCDKK",
        "BBJJJJGGGKK"
    ],
    // #177
    [
        "BBAJJJJLGGG",
        "BBAAAHLLLEG",
        "BFIIIHHLEEG",
        "FFICIDHHEKK",
        "CCCCDDDDEKK"
    ],
    // #178
    [
        "FFEEBBCCCCC",
        "FEEJDBBHHLL",
        "GKKJDBBHHLL",
        "GKKJDDHAAIL",
        "GGGJDAAAIII"
    ],
    // #179
    [
        "BBFFIILJJJJ", // A added (Logic: A needs 4)
        "BBFGILLLAAA",
        "BHHGIILEEEA",
        "HHDGGGEECKK",
        "HDDDDCCCCKK"
    ],
    // #180
    [
        "FFIIILDDDBB",
        "HFILLLDJBBB",
        "HHIILEEJGKK",
        "AHHACCCJGKK",
        "AAACCCCJGGG"
    ]
];

// --- ⚙️ 시스템 엔진 (업그레이드 버전) ---
function parsePuzzles() {
    const charMap = {
        'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 
        'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11,
        'O': 8, '0': 8 
    };

    let parsedDB = [];
    let errorCount = 0;

    console.group("🧩 Puzzle Data Processing..."); // 로그 그룹 시작

    RAW_PUZZLES_TEXT.forEach((puzzleLines, pIdx) => {
        let grid = [];
        const puzzleId = pIdx + 1; // 1부터 시작하는 번호 (사람이 보기 편하게)
        
        const lines = Array.isArray(puzzleLines) ? puzzleLines : puzzleLines.split('|');
        
        // 1. 줄 개수 체크 (5줄 필수)
        if (lines.length !== 5) {
            console.error(`🚨 [CRITICAL ERROR] Puzzle #${puzzleId}: 줄 개수가 ${lines.length}개입니다. (5개여야 함)`);
            errorCount++;
            return;
        }

        for (let r = 0; r < 5; r++) {
            let rowData = [];
            let cleanLine = lines[r].replace(/\s/g, '').toUpperCase();
            
            // 2. 칸 개수 체크 (11칸 필수)
            if (cleanLine.length !== 11) {
                console.warn(`⚠️ [WARNING] Puzzle #${puzzleId} (Row ${r+1}): 글자 수가 ${cleanLine.length}개입니다. (11개여야 함) \n   👉 확인: "${cleanLine}"`);
                errorCount++;
            }

            for (let c = 0; c < 11; c++) {
                const char = cleanLine[c] || 'X';
                if (charMap.hasOwnProperty(char)) {
                    rowData.push(charMap[char]);
                } else {
                    console.error(`❌ [INVALID CHAR] Puzzle #${puzzleId}: 알 수 없는 문자 '${char}' 발견.`);
                    rowData.push(-1); 
                }
            }
            grid.push(rowData);
        }

        // ✨ 핵심 기능: 그리드 배열에 ID 속성 심기 (기존 로직 안 깨짐)
        // 사용법: SOLUTION_DB[0].id => 1
        grid.id = puzzleId; 
        parsedDB.push(grid);
    });

    console.groupEnd(); // 로그 그룹 종료

    if (errorCount === 0) {
        console.log(`✅ ${parsedDB.length} Puzzles Loaded Perfectly! (No Errors)`);
    } else {
        console.log(`🔥 Loaded ${parsedDB.length} Puzzles with ${errorCount} warnings/errors. Please check console.`);
    }

    return parsedDB;
}

// 4. 데이터 로드 실행
const SOLUTION_DB = parsePuzzles();


// --- 🛠️ [보너스] 특정 퍼즐 검사 도구 ---
// 브라우저 콘솔(F12)에서 checkPuzzle(29) 라고 치면 모양을 보여줍니다.
function checkPuzzle(number) {
    const idx = number - 1;
    const puzzle = SOLUTION_DB[idx];

    if (!puzzle) {
        console.log(`🚫 Puzzle #${number} not found.`);
        return;
    }

    console.log(`🔎 Inspecting Puzzle #${puzzle.id}:`);
    
    // 색상 시각화 (콘솔에서도 예쁘게 보이도록)
    const colorIcons = ['🧡','❤️','💙','🍑','💚','🤍','☁️','🌸','💛','💜','🍈','🐭']; 
    // A=0, B=1 ... L=11 대응

    let visual = "";
    for(let r=0; r<5; r++) {
        let rowStr = "";
        for(let c=0; c<11; c++) {
            const val = puzzle[r][c];
            rowStr += (val >= 0 && val < 12) ? colorIcons[val] : "❓";
        }
        visual += rowStr + "\n";
    }
    console.log(visual);
    return puzzle; // 데이터도 반환
}
