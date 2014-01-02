// ==UserScript==
// @name        SaltyBet+
// @namespcae   sb+
// @description Enhances Saltybet.
// @include     http://www.saltybet.com/
// @version     2.0.13
// @grant       none
// @run-at document-end
// ==/UserScript==

//Changes the slider to be x=(y^3/100^3)*b instead of x=(y/100)*b
//Changes the slider to be x=(y^3/100^3)*b instead of x=(y/100)*b
//Where x = wager, y = slider distance (0->100) and b = balance

var character   = {"Mr. bison":"1","Bullseye":"2","Elecman":"3","Ooze-o":"4","Shin kazuma":"5","Mexican typhoon":"6","Zangief maskered":"7","Predalien":"8","Eva-00":"9","009":"10","Gato":"11","Victor":"12","Eva-01":"13","18th angel":"14","Eva-03":"15","Eva-05":"16","Captain caveman":"17","Dodgers":"18","Billy lee":"19","Jimmy lee":"20","Opera elmer":"21","Fatter Albert":"22","Fat albert":"23","Marvin the martian":"24","Marvin":"25","Momasusta":"26","The Sailor Man":"27","Sent":"28","Sho nuff":"29","Underdog":"30","1.0":"31","Mario":"32","Cocodrilo":"33","Mr1 daz bones":"34","Mr2.bon kure":"35","Stinko man - 20x6":"36","Gecko moria":"37","2ban-tan":"38","2k":"39","Agent p":"40","Mokey d. luffy":"41","Tron Bonne MVC2":"42","Zorororonoa":"43","Arlong":"44","Nico robin":"45","Akane satomura":"46","Kanna 586":"47","Nayuki minase":"48","Omega tiger woods":"49","Sanji":"50","Franky":"51","95":"52","95ani":"53","98":"54","98-balkan":"55","A-green":"56","Another k9999":"57","A.b.a":"58","Abareimu":"59","A Bison":"60","Abui":"61","Acguy":"62","Another chun-li":"63","Adam":"64","Adamas":"65","Atomic dust amiba":"66","Acirno_3.5":"67","Adom":"68","Adon SF4":"69","Aeris":"70","Agito_of_the_dark":"71","Armored gohan":"72","Agony":"73","Agrias BC":"74","Agrias":"75","Aisha":"76","Akaneko":"77","Redman":"78","Akiha":"79","Eiko magami":"80","Aku-amakusa":"81","Akuma SF4":"82","Akuma shin":"83","Akuma":"84","Aladdin":"85","Albiole":"86","Albus":"87","Alcott":"88","Alessi":"89","Aleti":"90","Alex mercer":"91","Alice":"92","Alice margatroid":"93","Altered Amiba":"94","Alter amiba":"95","Alucard":"96","Alucard RAI":"97","Mad grinder":"98","Amano hyo":"99","Amber":"100","Ami":"101","Ami bf":"102","Amingo":"103","Amy":"104","Amy Rose":"105","Android 17":"106","Android18":"107","C-19":"108","20 (dr. gero)":"109","Android 16":"110","Android 18":"111","Andromeda":"112","Andy_xiii":"113","Angela belti":"114","Angelia avallone":"115","Angel ryu":"116","Angus":"118","Animus":"119","Anji mito":"120","Anji":"121","Anna":"122","Annie murakami":"123","Annoying orange":"124","Another iori":"125","Antman":"126","Chaka":"127","Chronos":"128","Kanae":"129","Mei-fang":"130","Shadow":"131","Aoshi":"132","Apocalypse":"133","Apollo":"134","Ex apollo":"135","Applejack":"136","Hiedano akyu":"137","Aquaman":"138","Jesse":"139","Aracne de tarantula":"140","Fubuki":"141","Archangel":"142","Archer":"143","Archetype:earth":"145","Arch mage alice":"146","Arima_meirin":"147","Arina":"148","Armor lord":"149","Arrange_ayu":"150","Arrange_mishio":"151","Arrange_misuzu":"152","Arrange_remilia":"153","Arrange_shiori":"154","Arrange_unknown":"155","Red arremer":"156","Arthas":"157","Arthur":"158","Asagi":"159","Ashura":"160","Ash":"164","Astaroth":"165","Astonishing Cyclops":"166","Astroboy":"167","Honda asuka":"168","Asuta-san":"169","Saori - athena":"170","Athena asamiya":"171","Athena":"172","Atusi":"173","Charlotte Aulin":"174","Aura":"175","Auron":"176","Avdol ver 2001/01/30 by camrat":"177","Angry video game nerd":"178","Terry bogard":"179","Axearmor":"180","Axel 'hawk' stone":"181","Axl low":"182","Axl":"183","Ayame":"184","Ayu tsukimiya":"185","Ayumu kasuga":"186","Yatteyaru-death":"187","Azrael":"188","Mario SMB1":"189","B.jenet":"190","Babidi":"191","Oozura bebi":"192","Baby commando":"193","Baiken":"194","Baiken(ac)":"195","Baitang":"196","Baki-hanma":"197","Baldhead":"198","Balrog":"199","Dancing banana":"200","Crash":"201","Bane":"202","Banshee":"203","Barbatos_goetia":"204","Bark":"205","Bart":"206","Kuma":"207","Basara":"208","Bass":"209","Batgirl":"210","The batman":"211","Goddman batman":"212","Batman Normal":"213","Classic batman":"214","Battousai":"215","Baby bonnie hood":"216","Blue destiny 2":"217","Bean":"218","Back beard":"219","Beast":"221","Beatrice":"222","Beavis":"223","Bebi vegeta":"224","Belmont trusdale":"225","Benimaru":"226","Benimaru_xiii":"227","Bernkastel":"228","Berserk":"229","Berserker":"230","Batman beyond":"231","Big":"232","Billy kane":"233","Billy two moons":"234","Billy two moons (jp)":"235","Billy_xiii":"236","Biscuit-oliva":"237","Bishamon":"238","Bishop":"239","Bison":"240","Bizarro":"241","Biko daitokuji":"242","Black manta":"243","Black.t":"244","Black adam":"245","Black mask":"246","Blackmore":"247","Black polnareff":"248","Black ranger":"249","Black widow":"250","Blanka":"251","Blaster":"252","Blaziken":"253","Blaziken 2":"254","Blizzard":"255","Chaos":"256","Blizzard M1":"261","Blob":"263","Blockhead":"264","Bloodrayne":"265","Bloodtide":"266","Blossom":"267","Blossom":"268","Blue ranger":"269","Protoman":"270","B. magic girl":"271","Hancock":"272","Bojack":"273","Bokosuka wars":"274","The blob":"275","Bomber man":"276","Bonegolem":"277","Bonus kun":"278","Boo":"279","Fat boo":"280","Bootleg ryu":"281","Ik borodin":"282","Plastic man":"283","Boss zeroko":"284","Bowling ball":"285","Bowser":"286","Boxer":"287","Bra":"288","Bra 18":"289","Brainiac":"290","Briaaaaaaaaaaaaaaaaan":"291","Brian griffin":"292","Bridget":"293","Brimstone":"294","Bristol":"295","Broccalon":"296","Brocken":"297","Broken":"298","Broli":"299","Ssj three broli":"300","Broly":"301","Legendary super saiyan":"302","Brook":"303","Bubblegum":"304","Bubbles":"305","Bruno bucciarati":"306","Buggy":"307","Bulleta":"308","Boulma":"309","Burai_yamamoto":"310","Achi cirno":"311","Burter":"312","Butt-head":"313","Buttercup":"314","Docinho":"315","Butz":"316","Super boo":"317","Majin buu":"318","Byakuya":"319","Byrne":"320","Battle mahoro":"321","Cpt. falcon":"322","Chosen Ken":"323","And 18":"324","Cable":"325","Caesar":"326","Calliel lezai":"327","Judgement":"328","Cammy":"329","Cammy NXC":"330","Capmurica":"331","CaptainAmerica":"332","Captain commando":"333","Capella":"334","Captain america":"335","Captain marvel":"336","Captain marvell":"337","Carlos":"338","Carnage":"339","Carnage MMV":"340","Cartman":"341","Catwoman":"342","Chonshu":"343","Cci jhun":"344","Cci kasumi":"345","Cci kim":"346","Cci kula":"347","Kusanagi":"348","Cci kyo":"349","Cci mature":"350","Cci mr.big":"351","Cci ryuji":"352","Cci saisyu":"353","Cci shermie":"354","Cci shingo":"355","Chain combo yuyuko":"356","Celes":"357","Perfect cell":"358","Cell junior":"359","Cell jr":"360","Cell SNES":"361","Cell Hyper Dimension":"362","Chadha":"363","Chameleon":"364","Change dragon":"365","Chaos Cy":"366","Chaos Blanka":"367","Char's zaku":"368","Char's z'gok":"369","Charizard":"370","Charlie":"371","Charlotte Christine":"372","Charlotte":"373","Charmy bee":"374","Cheatman":"375","Cheetahmen":"376","Chiaotzu":"377","Chibiko":"378","Uzumaki naruto":"379","Son trunks":"380","Chibi goku":"381","Chichi":"382","Big chicken":"383","Chill penguin":"384","Chipp":"385","Chipp Zanuff":"386","Chaos hiryu":"387","Chise":"388","Chiyo mihama":"389","Chiyo-chichi":"390","Chizuru kagura":"391","Chizuru 71113":"392","Chizuruxxx":"393","Chloe&maumau":"394","Chomper":"395","Tony Chopper":"396","Chosu":"397","Chouji":"398","Chousokabe motochika":"399","Chris":"400","Chrysalis":"401","Chun-li":"402","Chun-li jj":"403","Chuu":"404","Cheapest kfm!!!":"405","Cid highwind":"406","Eleicia":"407","Cirno":"408","Clara":"409","Clayface":"410","Cless alvein":"411","Alvein":"412","Cloud (3d)":"414","Cloud ex":"415","Cloudo Strife":"416","Omega Cloud Strife":"417","Cloud strife":"418","Eriol hiiragizawa":"419","Sakura kinomoto":"420","Shaoran lee":"423","Void":"424","Yue CC":"425","Nami":"426","Cm punk":"427","Franky CM":"428","Chuck norris":"429","Chili n pepper":"431","The Colonel":"432","Colonel sanders":"433","Colossus":"434","Condor":"435","Predator":"436","Crashman":"437","Creeper":"438","Krillin UB22":"439","Crono":"440","Crystal":"441","Cursor":"442","Cutman":"443","Spawn CVG":"444","Another kyo":"445","Eagle":"446","Joe CVS":"447","Kim kaphwan CVS2":"448","Kagami kyosuke":"449","Chang":"450","Athena CVS":"451","Bluestreak":"452","Dan CVS":"453","Geese CVS":"454","G rugal CVS":"455","Haohmaru CVS":"456","Rasetsumaru":"457","Hibiki":"458","Jill CVS":"459","Ken CVS":"460","Kuroko":"461","Kyo CVS":"462","Mature CVS":"463","Alucard SOTN":"464","Alucard PNE":"465","Giant bat":"466","Rock":"467","Rugal CVS":"468","Ryo":"469","Ryu CVS":"470","Terry CVS":"471","Bison CVS":"472","Vice CVS":"473","Devil jin":"474","Heihachi CVS":"475","Young Heihachi":"477","Orochi iori":"478","Jin CVS":"479","Jin CVS TAG":"480","Kazuya mishima":"481","Kuma CVS":"482","Marshal law":"483","Mai":"484","Pac-man":"485","Ogre":"486","Paul phoenix":"487","Raiden CVS":"488","Cactuar":"489","Jin kazama":"490","Cv wakamoto":"491","Haggar":"492","Mr. x":"493","Scorpion CVW":"495","Sub-zero CVW":"496","Blodia":"497","Fordy":"498","Gaits":"499","Helion":"500","Jackal":"501","Reptos":"502","Riot":"503","Super-8":"504","Cyber shredder 2.1":"505","Cyborg":"506","Cyrax umk3":"508","Sektor umk3":"509","Smoke umk3":"510","Cyborg superman":"511","Cycloid omega":"512","Cycloid sigma":"513","Cyclops":"514","Devo":"515","Dark donald":"516","D kanna":"517","D-rugal":"518","Bloodbane":"519","Death adder":"520","Daffy duck":"521","Daigo":"522","Piccolo daimaoh":"523","Daimon 71113":"524","Spy-dama":"525","Dan":"526","Dansai-san":"527","Dante":"528","Dante DMC4":"529","Violent dan":"530","D Chun-li":"531","Darkon":"532","Dark phoenix":"533","Darkseid":"534","Darkseid IS":"535","Darkwing duck":"536","Date masamune":"537","The dazzler":"538","Krang":"539","Shredder":"540","Dark chun-li":"541","Deadpool":"542","Dean":"543","Death13":"544","Death":"545","Death force":"546","Death maul":"547","Deathmask":"548","Death ogre":"549","Death black shot":"550","Dee bee kaw":"551","Dee jay":"552","Derp":"553","Despero":"554","Dare devil":"555","Blossom DG":"556","Bubbles DG":"557","Buttercup DG":"558","Dhalsim":"559","Dhalsims":"560","Diablo":"561","Diablo_skeleton":"562","Raptor":"563","Dinozord":"564","Dio":"565","Dio M":"566","Dio di musca":"567","Dio brando":"568","Ditto":"569","Poison":"570","Dizzy":"571","Donkey kong":"572","Grappler_hiyama":"573","Docock":"574","Dodoria":"575","Donatello":"576","Donald":"577","Don patch":"578","Doom vega":"579","Doomsday":"580","Doparmin":"581","Dopefish":"582","Doppo orochi":"583","Dora":"584","Doraemon":"585","Dosu":"586","Dudley Puppy":"587","Dracula":"588","Dracula IWBTG":"589","Mecha dragon":"591","Dragon ken":"592","Dragon claw":"593","D'raven":"594","Dr.doom":"595","Dr.gero":"597","Drill asamin":"598","Stupid little drill tank":"599","Drunk rock lee":"600","Chameleon DS":"601","Dark saber":"602","Duane":"603","Duck king":"604","Dudley":"605","Duke nukem":"606","Dulton":"607","Duolon":"608","Dark arcueid mk2":"609","Chiel":"610","Devil_daigo":"611","E-102r":"612","Eagle zero":"613","Earl":"614","Earthworm jim":"615","Eddie":"616","Edgar figaro":"617","Edward elrick":"618","Egg chamber":"619","Eiji kisaragi":"620","Evil kung fu man mkii":"621","Stingray":"622","Elastigirl":"623","Electro":"624","Elektra":"626","Elisabeth blanctorche xiii":"627","Ella":"628","Elongated man":"629","Elsa_maria":"630","Emerald":"631","Emerl":"632","Emma frost":"633","Emperor":"634","Enoch":"635","Enya":"636","Eric":"637","Eri_hasumi":"638","Ryu Evil":"639","Erza":"640","Esmeralda":"641","Espio":"642","Etna":"643","Etrigan":"644","Evil Ash":"645","Dark ash":"646","Evil homer":"647","Evil reiji oyama":"648","Street fighter is boring you idiots":"650","Evil dan":"651","E Ken":"652","Evil ken":"653","Evil ranger":"654","E Ryu":"656","More Evil Ryu":"657","Lord shaolin lee":"658","Evil soul":"659","Evil zodiac":"660","Ex adamas":"661","Exile":"662","Exocist(dnf)":"663","Ex snow":"664","Fukumen senshi":"666","Fakir":"668","False valkyrie":"669","Family dog":"670","Fang":"671","Fangore":"672","Ms. fanservice":"674","Mr buu":"675","Faust":"676","Rockman":"677","Fei-long":"678","Felicia":"679","Fix-it felix":"680","Felix the cat":"681","Tin's fernandeath":"682","Ferroman":"683","Kung fu man":"684","Fighter":"685","Final sigma w":"686","Finn and jake":"688","Fio":"689","Firebrand":"690","Fireman":"691","Firestar":"692","Flandre scarlet":"693","Flash":"694","Flonne":"695","Floren":"696","Footee":"697","Fou-lu":"698","Fox mccloud":"699","Foxy":"700","Frankenstein":"701","Fray":"702","Freddy krueger":"703","Fred Krueger":"704","Freeza 100%":"705","Death freeza":"706","Frieza":"707","Fubuki sakuragasaki":"708","Fugo":"709","Fullmoon_suika":"710","Kung fun man":"711","Fuuma Kotaro":"712","Fygar":"713","Orochi vega":"714","Saisyuu_dokusyo_bouei_system":"715","G-akiha":"716","G silver":"717","God ken":"718","Golgo13":"719","Armor jack":"720","Antman 64":"721","Arale":"722","Barom1":"723","Bekkamu":"724","Bekkamu2":"725","C3po & r2d2":"726","Caramelman no.2":"727","Devil seaman":"728","Daimajin":"729","Devil daimajin":"730","Darth vader":"731","Diamondeye":"732","Doruge":"733","Ecco":"734","Exredking":"735","Gamera":"736","Giron":"737","Goa":"738","Gold lightan":"739","Gyaban":"740","Gyaos":"741","Heart":"742","Jabba the hut":"743","Kaonasi":"744","Kenshiro 64":"745","Kinyo roadshow":"746","Kudora":"747","Kurohige":"748","Lafiras":"749","Magma":"750","Medamaoyaji":"751","Megaroman":"752","Michael":"753","Nabeatu":"754","Nikumaru":"755","Gregorius:nmky":"756","Paul":"757","Piyokong":"758","Monster ball":"759","Polon":"760","Rocky":"761","Asamiya saki x":"762","Skiboots":"763","Slalingaru":"764","Sppaman":"765","Thunder mask":"766","Tiblekun":"767","Tingle":"768","Totoro":"769","Ufo":"770","Uminin":"771","Wario 64":"772","Zabi":"773","Zabogar":"774","Gaara":"775","Gachapin":"776","Gadalar":"777","Gagi_ex":"778","Gaibon":"779","Gajeel":"780","Gambit":"781","Remy Etienne LeBeau":"782","Gaogaigar":"783","Garagaranda":"784","Garfield":"785","Garlic junior":"786","Gato z2":"787","G-bit":"788","Geese Howard":"789","Geki de oso":"790","Gengetu":"791","Genkai":"792","Genma saotome":"793","Genpaku":"794","Gentarou&foze":"795","Gertrud":"796","Gundam heavy arms":"797","Ghetto warmachine":"798","Ghetto Warmachine 420":"799","Ghiaccio":"800","Ghost rider":"801","Giano":"802","Giant Ultraman":"803","Gideon":"804","Gill":"805","Ginew":"806","Captain ginyu":"809","Genyew":"810","Giorno giovanna":"811","Giratina":"812","Buttercup SS":"813","Giro":"815","Glacius":"816","Glenn":"817","Great s. man":"818","Go hibiki":"819","Goat":"820","Gobotenn":"821","God yuri":"822","God alosson":"823","Godman":"824","Godzilla":"825","King godzilla":"826","God gundam":"827","God orochi":"828","God Boss Orochi":"829","G rugal":"830","Goenitz":"831","Gogeta ssj4":"832","Gogeta super saiyan 3":"833","Saiyan Jerk SSJ4":"834","Gogeta ssj":"836","Ssj4gohan":"837","Gohan fight money":"838","Gohan school":"839","Gohan ssj4":"840","Gohan zeta":"841","Gohan saiya-jin ex":"842","Mystic gohan":"843","Gohan  grande normale":"844","Gohan ssj2":"845","Gohan ssj5":"846","Goku db":"847","Goku sayajin":"848","Goku gt ssj3":"849","Salty Goku GT":"850","Goku normal hd":"851","Goku nex":"852","Goku ssj2":"853","Goku ssj3":"854","Goku transformer":"855","Goku gt":"856","Goku":"857","Goku kid":"858","Goku kaiouken x4":"859","Goku pce":"860","Goku sb1":"861","Ssj goku":"862","Goku ssj gt":"863","Goku ssj 3":"864","Gokussj4d":"865","Goku ssj4 db final bout":"866","Ssj5 goku":"867","Goku z2":"868","The gold ranger":"869","Gold warmachine":"870","Warmachine MVC":"871","Warmachine":"872","Gonzales":"873","Gorunks ssj4":"874","Goten":"875","Goten gt":"876","Goten gt nex":"878","Gotenks gt":"879","Ssj3 gotenks":"880","Gotenks ssj":"881","Gou hibiki":"882","Gouken":"883","Gray fly":"884","Great gohan":"885","Guy gardner":"886","Green lantern":"887","Green arrow":"888","Green goblin":"889","Green ranger":"890","Grievous":"891","Tizoc":"892","Grover":"893","Guido":"894","Guile":"895","Guillotine gen":"896","Guldo":"897","Gulool ja ja":"898","Gustavo":"899","Guts":"900","Armor Guts":"901","Guy":"902","Green lantern gg":"903","Guy CVS":"904","Deathscythe":"905","Epyon":"906","Heavyarms":"907","Mercurius":"908","Sandrock":"909","Shenlong":"910","Tallgeese":"911","Vayeate":"912","Wing":"913","Wing.0":"914","Tara-gyouza":"915","H-duolon":"916","Hagen":"917","Mike Haggar":"918","Haizilyo":"919","Haku":"920","Hal jordan":"921","Hamster":"922","Hana akuma":"923","Hanny":"924","Hanyuu":"925","Hanzo":"926","Hanzo Hattori":"927","Haohmaru":"928","Harley quinn":"929","Harpagos":"930","Haruhi suzumiya":"931","Haruno sakura":"932","Hatate_himekaidou":"933","Hatchetman":"934","Hauzer":"935","Havok":"936","Hawkman":"937","Ryu hayabusa":"938","Syo hayate":"939","Hayato":"940","Hyper buu":"941","He-man":"942","Hebiitigo":"943","Heika-ss":"944","Heita zinnai":"945","Hei_f":"946","Hellboy":"947","Henri":"948","H.h. harn":"949","Hideo&kyoko":"950","Hiei":"951","Hiel":"952","Strider hien":"953","Highway star":"954","Higyo-pam":"955","Hikaru":"956","Hikaru Shidou":"957","Himan zellode":"958","Hina":"959","Hinako shijo":"960","Hinata":"961","Strider hiryu":"962","Hiryu":"963","Hisui":"964","Hisui&kohaku":"965","Holy ken":"966","Hobgoblin":"967","Hobgoblin 2009":"968","Hokage":"969","Hol horse":"970","Hol 'butt king' funtimes":"971","Holy flandre":"972","Homer":"973","E. honda":"974","Meirin":"975","Hoshi kage":"976","Hotaru futaba":"977","Hugo Simpson":"978","Hulk":"979","Hulk 2099":"980","Hwa jai":"981","Hwoarang":"982","Hydron":"983","Hyoga de cisne":"984","High dio":"985","Mokou":"986","I-no":"987","I-no(ac)":"988","Ibuki":"989","Ibuki IV":"990","Vanilla ice":"991","Iceman":"992","Iceman 2":"993","Iceman SP":"994","Ichi":"995","Iggy":"996","Insane hiryu":"997","Ikemen":"998","Ikisan":"999","Ikkaku":"1000","Ikki":"1001","Ikkyu":"1002","Nagae iku":"1003","Ossan":"1004","Kumao":"1005","Infinity mijinion":"1006","Ino":"1007","Invisible woman":"1008","Iori 71113":"1009","Iori yagami":"1010","Ioro":"1011","Ichijo akari":"1012","Cc iron clara":"1013","Iron lantern":"1014","Ironman":"1015","Ironpatriot":"1016","Isabeau":"1017","Ivy":"1018","Isaiah bradley":"1019","Itachi":"1020","Ichigo Kurosaki":"1021","Balrog IV":"1022","Iwao":"1023","J'onn j'onnz":"1024","Gallon":"1025","Jabu":"1026","Jack turner ex":"1027","Jack-hamma":"1028","Jackie chan":"1029","Jackie Drunken Fist":"1030","Jack frost":"1031","Jagi":"1032","Det. garret laurel":"1033","Commissioner gordon":"1034","Jamian di corvus":"1035","Jam(ac)":"1036","Jason voorhees":"1037","Jason todd":"1038","Ju do man":"1039","Jean grey":"1040","Phoenix":"1041","Jecht":"1042","Jedah":"1043","Jeice":"1044","Jenny":"1045","Jet":"1046","Bimmy Lee":"1047","Jin":"1048","Jin O":"1049","Jinbei":"1050","Jin saotome":"1051","Jiroubou":"1052","Jissou seki":"1053","Nega joe":"1054","Joe higashi":"1055","Johnny":"1056","Johnny cage":"1057","Green lantern js":"1058","Jotaro kujo":"1059","The joker":"1060","Jonathan":"1061","Jonathon Morris":"1062","Jones":"1063","Jorei san":"1064","Jose":"1065","Young joseph":"1067","Joseph the b.b.":"1068","Jotaro":"1070","Jo jo":"1071","Jigglypuff":"1072","Jay Flash":"1073","Jay garrick":"1074","Juan":"1075","Juda-(nericya)":"1076","Judith":"1077","Juggernaut":"1078","Juggy":"1079","Julius belmont":"1080","Juri":"1081","Justice":"1082","Nico":"1083","Ape man":"1084","Cirno J":"1085","Jay crush":"1086","Flan":"1087","Hotaru Futaba J":"1088","Marisa":"1089","Saber":"1090","Tensi":"1091","Yukari":"1092","True k'":"1093","Dudley K":"1094","Gully":"1095","Mike bison":"1096","Sagat":"1098","Yang K":"1099","Buu Hyper Dimension":"1100","K'":"1101","Kabal":"1102","Kaede_hioh":"1103","Frog":"1104","Kaf ka":"1105","Kagome":"1106","Kagura":"1107","Kain":"1108","Kaioh-retsu":"1109","Kaio shin":"1110","Kairi":"1111","Kamen rider kaixa":"1112","The nightmare":"1113","Kakashi":"1114","Kaku":"1115","Kam'lanaut":"1118","Mestre kame":"1119","Hyper neo-kamek":"1120","Kamek":"1121","Kamiccolo":"1122","Kamineko":"1123","Kanako yasaka":"1124","Kang":"1125","Kanmi chan":"1126","Kanna":"1127","Kano":"1128","Kanon":"1129","Kanorin":"1130","Kaori&shiori":"1131","Puppetmaster":"1132","Karin kanzuki":"1133","Karla":"1134","Karnov":"1135","Kasumi todo":"1136","Kathumi orochi":"1137","Kitty":"1138","Kazu":"1140","Kazama kazuki":"1141","K' xiii":"1142","Keel":"1143","Keiji":"1144","Keine":"1145","Keion chan":"1146","Keith wayne":"1147","Ken":"1148","Ken SF4":"1149","Ken & gang":"1150","Shin scrub ken":"1151","Kenshin":"1152","'gou no ken' kenshirou":"1153","Kenshirou":"1154","Kenshiro":"1155","Kensou":"1156","Keiji thomas":"1158","Yoko yuki":"1159","Kung fu head":"1160","Kung fu man v-ism":"1161","KungFu Man":"1162","Kung fu man neo":"1163","Kid gohan ssj1":"1164","Khan":"1165","Inuzuka kiba":"1166","Kiba":"1167","Kid gohan":"1168","Kikuri":"1169","Kikyo_ex":"1170","Yoshikage killa":"1171","Kilyousuke":"1172","Kim":"1173","Kimberly":"1174","Kaguya kimimaro":"1175","Kim XIII":"1176","Kingbehinnmoth":"1177","King ki":"1178","King lion":"1179","Kingpin":"1180","King":"1181","Kino":"1182","Kira":"1183","Kira daidoji":"1184","Kirby":"1185","Kiriko":"1186","Kisume":"1187","Kitanaininjya":"1188","Kliff":"1189","Klonoa":"1190","Knuckles":"1191","Shin Knuckles":"1192","Kobun 43":"1193","Sanae":"1194","Saiki":"1195","Kogasa":"1196","Kohaku":"1197","Kohaku K":"1198","Koichi":"1199","Katakura kojuro":"1200","Kokesz":"1201","Angel":"1202","Demitri":"1203","Spider-man":"1204","Wolvie":"1205","Komepo":"1206","Kon":"1207","Kon-el":"1208","Superboy":"1209","Konngara":"1210","Kongou":"1211","Koola":"1212","Koopa clown car":"1213","Koryu":"1214","Kosmos":"1215","Kouryu":"1216","Kousaku":"1217","Kou":"1218","Kraidgief":"1219","Kraken":"1220","Wolfgang Krauser":"1221","Krauser":"1222","Krillin":"1223","Krizalid":"1224","Krizalid N":"1225","Krusty":"1226","Koopa troopa":"1227","Knucks":"1228","Kuando":"1229","Kui":"1230","Kunagi_tenrou":"1231","Timmy turner":"1232","Kung lao":"1233","Kurama":"1234","Kurihan":"1235","Crilin sposato":"1236","Captain kuro":"1237","Kurokishi":"1238","Shirai_kuroko":"1239","Kusaregedo":"1240","Kuuga":"1241","Kuwabara":"1242","Killer whale":"1243","Ky":"1244","Ky Kiske":"1245","Kyko":"1246","Kyle dunamis":"1247","Kyon":"1248","Kyosuke":"1249","Kyouki":"1250","Kyouko":"1251","Kyo kusanagi":"1252","Ky GG":"1253","Ky Slash":"1254","Lady deathstrike":"1255","Laststarman":"1256","Hel'lauren":"1257","Lavia":"1258","Lavos core":"1259","Lavos spawn":"1260","Layla":"1261","Leela":"1262","Lee Chaolan":"1263","Lee Cosplay":"1264","Lei-lei":"1265","Lelouch":"1266","Lemontea-san":"1267","Len and w. len":"1268","Leo":"1269","Leo FM":"1270","Leon":"1271","Leone abbacchio":"1272","Leonoyne":"1273","Lesty":"1274","Letty whiterock":"1275","Li sheng long":"1276","Lightning":"1277","Mega lilde":"1278","Li'l gohan":"1279","Lili":"1280","Lilin":"1281","Lilith aensland":"1282","Lilith":"1283","Hyrule Link":"1284","Link":"1285","Lion magnus":"1286","Lion(coh)":"1287","Lion-o":"1288","Lipsyncher":"1289","Lisa":"1290","Li xiangfei":"1291","Lizardman":"1292","Lobo":"1293","Lomias":"1294","Lord zedd":"1295","Lou":"1296","Loud Demon M1":"1297","Loud demon":"1298","Lucca":"1299","Lucia morgan":"1300","Lucky 71113":"1301","Monky d luffy":"1302","Monkey.d.luffy":"1303","Luigi":"1304","Luke cage":"1305","Lunasa prismriver":"1306","Lupin the 3rd":"1307","Lex luthor":"1308","M Gohan":"1309","Mystic son gohan":"1310","Mr. buu":"1311","Majin Virginia":"1312","Mac os-x siam":"1313","Mad dog":"1314","Maeda keiji":"1315","Mageres":"1316","Magikarp":"1317","Magma-dragoon":"1318","Magneto":"1319","Magus":"1321","Mahoken":"1322","Mai shiranui":"1323","Mai S":"1324","Mai_k":"1325","Majin vegeta ssj6":"1326","Makaryudo":"1327","Mako":"1328","Makoto":"1329","Mama":"1330","Mamizou":"1331","Manbou":"1332","Manic":"1333","Maou":"1334","Maraiah":"1335","Marco":"1336","Marge":"1337","Mariah":"1338","Maria":"1339","Marie":"1340","Old school mario":"1341","Markerman":"1342","Marle":"1343","Hory marlu":"1344","Marona(beta)":"1345","Marrow":"1346","Mars people":"1347","Marvel Marrow":"1349","Omega Rad":"1350","Marvel spider-man":"1351","La mascara":"1352","Mash figaro":"1353","Masked_dedede":"1354","Masta gambit":"1355","Master chief":"1356","Master shake":"1357","Viga":"1358","Ryu Master":"1359","Master sakura":"1360","Matou sakura":"1361","Maat":"1362","Mature":"1363","Mauru":"1364","X":"1365","Maxima XIII":"1366","Maxima":"1367","Maxim kischine":"1368","Mayko":"1369","May":"1370","May(ac)":"1371","M.bison":"1372","Windows me":"1373","Mech zangief":"1374","Mech gouki":"1376","Medicine melancholy":"1377","Medoi-san":"1378","Medusa":"1379","Mega gohan":"1380","Megaman":"1381","Megaman.exe":"1382","Megatron":"1383","Megazord":"1384","Mega weapon":"1385","Hong meiling":"1386","Mekazawa":"1387","Mephisto":"1388","Meta-knight":"1389","Metallo":"1390","Metalman":"1391","Metool":"1393","Super metroid":"1394","Maximum frieza":"1395","Cloud":"1396","Capt Commando":"1397","Mastr Hand":"1398","Master hand":"1399","Mickey":"1400","Midler":"1401","Mighty":"1402","Michaelangelo":"1403","Mike tyson":"1404","Mike Tyson IWBTG":"1405","Miko":"1406","Asahina mikuru":"1407","Milan flare":"1408","Millia Rage":"1409","Millia":"1410","Mima":"1411","Mimic":"1412","Minis mahn":"1413","Minoriko aki":"1414","Minotaur":"1415","Mio":"1416","Mio Kouzuki":"1417","Mishio":"1418","Missmarvel":"1419","Mista":"1420","Lacerta Misty":"1421","Mito_mashiro":"1422","Miyazato erika":"1424","Misery":"1425","Melty_magic_tenko":"1426","Dink smallwood":"1427","Kung fu fiunn":"1428","Franko":"1429","Moorhunn":"1430","Dooby dummy":"1431","Missingno.":"1432","Missingnumber":"1433","Mobo":"1434","Modoi-san":"1435","The thing":"1436","Moleman":"1437","Momizi":"1438","Wonder momo":"1439","Mongul":"1440","Monk":"1441","Moogle":"1442","Mora":"1443","Moraga":"1444","Mordecai":"1445","Morfo":"1446","Morgiana":"1447","Minakata moriya":"1448","Morph":"1449","Morrigan Aensland":"1450","Moses maddigan":"1451","Motokoaoyama":"1452","Mouri motonari":"1453","Hotaru":"1454","Yuriesbyfe":"1455","Moyomoto":"1456","Muscle power":"1457","Mega piccolo":"1458","Mr Karate":"1459","Mr. bear":"1460","Mr. fantastic":"1461","Shin mr. karate":"1462","Mr satan":"1463","Mister x":"1464","Mr. increible":"1465","Mr_shihan_ky":"1466","Ms.archer":"1467","Mugetu":"1468","Mukai":"1469","Mukuro":"1470","Kenji":"1471","Multiple man":"1472","Mumor":"1473","Munch":"1474","Murasa":"1475","Musashi akatsuki":"1476","Musashi":"1477","Musu-p":"1478","Dark psylocke":"1479","Homero":"1480","Anakaris":"1481","Blackheart":"1482","Donovan":"1483","Drdoom":"1484","Servbot":"1485","Silversamurai":"1486","Sonson":"1487","Spiral":"1488","Warmachine MVC2":"1489","Weregarurumon":"1490","Ken MVC3":"1491","Super Skrull MVC":"1492","Mega vegeta":"1493","Myon":"1494","M power":"1495","Mystia":"1496","Mystique":"1497","Misty":"1498","Mr burns":"1499","Geese":"1500","Remilia scarlet":"1501","Suika":"1502","Reimu hakurei":"1503","Nachi":"1504","Nagato yuki":"1505","Nail":"1506","Naitou":"1507","Naji":"1508","Nakoruru":"1509","Namazu":"1510","Namek gohan":"1511","Namor":"1512","Nanase(+d)&mayu":"1513","Nanaya shiki":"1514","Nanaya":"1515","Nanoha takamachi":"1516","Nanoha xp":"1517","Nappa":"1518","Maxime":"1519","Naruto kun":"1520","Naruto":"1521","Nate summers":"1522","Natsu":"1523","Nazrin":"1524","Neco chaos":"1525","Neco":"1526","Neco-arc chaos":"1527","Neco-arc":"1528","Necoarc_abyss":"1529","Necochaosblackg666mk2":"1530","Necorsair":"1531","Neji Cosplay":"1532","Myuu":"1533","Kungfumithra":"1534","Nekomo":"1535","Nekonin":"1536","Nenaikodareda":"1537","Neodio":"1538","Kyo 71113":"1539","Kyo":"1540","Lynn baker":"1541","Neo Sonic":"1542","Nero":"1543","Nrvnqsr chaos":"1544","Nero DMC4":"1545","Silversurfer":"1546","New Nakoruru":"1547","Neyufeulle":"1548","Neji":"1549","Nighmare snake":"1550","Nightcrawler":"1551","Nightmare":"1552","Nightmare yamazaki":"1553","Nightmare the jujin lv3":"1554","Nightwing":"1555","Nightwolf":"1556","Nina":"1557","The ninja":"1558","Ninja megazord":"1559","Nitori":"1560","Noah":"1563","Nobuhiko":"1564","Real Nobu":"1565","Nobunaga":"1566","Chibi naruto":"1567","Norimaro":"1568","Norimaro MVC3":"1569","Noroko":"1570","Nega ryo":"1571","Nucoarc":"1572","Nue houjuu":"1573","Heihachi mishima":"1574","Ryu NXC":"1575","Toron":"1577","Nyamo":"1578","Nyaonyao":"1579","Nyoki":"1580","Obsidian":"1581","Obstinate_tank":"1582","Oda nobunaga":"1583","Order-sol":"1584","Ogitafanada":"1585","Ogre akuma":"1586","Oichi":"1587","Ojisama":"1588","Ojisama-chaos":"1589","Omegamon":"1590","Last adult goku":"1591","Omega red":"1592","Omega":"1593","Onekonin":"1594","Oni kyo":"1595","Onpu segawa":"1596","Onslaught":"1597","Onslaught 1st":"1598","Onslaught 2":"1599","Oozaru":"1600","Orchid":"1601","Ore":"1602","Orione":"1603","Orochi akuma":"1604","Orochimaru":"1605","Orochi":"1606","Otto&wifes":"1607","Omega Woods":"1608","Overlord":"1609","Tengu gou hibiki":"1610","Oyashirorika":"1611","Prince vegeta":"1612","Pachet":"1614","Pan":"1615","Parasite":"1616","Patchouli":"1617","Patchouli_swr":"1619","Patrick":"1620","P. chunli":"1621","Princess peach":"1622","Picapiedra":"1623","Peketo":"1624","Pelecanus":"1625","Pengintou":"1626","Pepe":"1627","Cell SS":"1629","Peter":"1630","Petshop":"1631","Professor farnsworth":"1632","Possessed heita":"1634","Phobos":"1636","Fenice":"1637","Piccolo":"1638","Piccoloco":"1639","Pickle":"1640","Picurin":"1641","Pika":"1642","Pikachu":"1643","Pingu":"1644","Pinkie pie":"1645","Pitt":"1646","Pizza":"1647","Proofed up matt":"1648","Dan NGPC":"1649","Luigi NGPC":"1650","Metal mario":"1651","Pocket Mario":"1652","Pocket Akuma":"1653","Pocket Dan":"1654","Pocket Felicia":"1655","Pocket Ibuki":"1656","Pocket Ken":"1657","Pocket Cloud":"1658","Lei lei":"1659","Pocket Morrigan":"1660","Pocket Ryu":"1661","Pocket Sakura":"1662","Pocket Gouki":"1663","Pocket Tessa":"1664","Zangief":"1665","Jp Polnareff":"1666","Polaris":"1667","Polnareff":"1668","Popeye":"1669","Poppy":"1670","Porky minch":"1671","Potemkin":"1672","Potemkin-ogre":"1673","Powergirl":"1674","Practice Vegeta":"1675","Priere":"1676","Primeus":"1677","Princess":"1678","Daisy":"1679","Prince of all saiyans":"1680","Prinny":"1681","Professor x":"1682","Team nicktoon":"1683","Psycho shredder[s] 3.0":"1684","Psyduck":"1685","Psychopath kyo":"1686","Psylocke":"1688","Punisher":"1689","Pupazz":"1690","Puri*princess":"1691","Pyro":"1692","Pyron":"1693","Politank z":"1694","Prinny asagi":"1695","Prinny P":"1696","Queen bee":"1697","Alien queen":"1698","Queen beryl":"1699","Quicksilver":"1700","Robo rock":"1701","Rip Saber":"1702","Reject no. 253":"1703","Lord raptor":"1704","Rhadamantis":"1705","Radel":"1706","Radish ssj4":"1707","Raditz":"1708","Rai":"1709","God Rai":"1710","Raiden":"1711","Raiya":"1712","Aoko":"1713","Arcueid":"1714","Dhalsim R":"1715","R. lilith":"1716","Rajaamaki":"1717","Mech-hisui":"1718","Nero chaos":"1719","Roa":"1720","Satsuki":"1721","Shiki tohno":"1722","Sion":"1723","Super girl":"1724","Warachia":"1725","Rajaayuri":"1726","Ralf":"1727","Wreck-it ralph":"1728","Ramon 71113":"1729","Randy m. green":"1730","Ranma saotome":"1731","Ran yakumo":"1732","Raoh":"1733","Raph":"1734","Rare akuma":"1735","Raval":"1736","Ravange":"1737","Lord ravenous":"1738","Rayman":"1739","Ray":"1740","Razor claws":"1741","Reisen deadpool inaba":"1742","Real Ryu":"1743","Small Ryu":"1744","Recoom":"1745","Recoome":"1746","Red ranger":"1747","Red tornado":"1748","Regina":"1749","Rei":"1750","Reiji oyama":"1751","Reimi jyahana":"1752","Reimu":"1753","Reisen":"1754","Reisen_swr":"1755","Remilia":"1756","Ren_idagawa":"1757","Renamon":"1758","Renamon Dv2":"1759","Ren idagawa":"1760","Ren":"1761","Renna":"1762","Reptile":"1763","Requiem giorno(amaai)":"1764","Blade":"1765","Rhino":"1766","Richter belmont":"1767","Rick strowd":"1768","Rider":"1769","Masked rider 1st":"1770","Riesbyfe":"1771","Rigby":"1772","Rikard":"1773","Rikku":"1774","Rikuo":"1775","Rimle":"1776","Rimururu":"1777","Rin natsume":"1778","Rinfa":"1779","Rin rin":"1780","Risty":"1781","Raging joe higashi":"1782","Lee":"1783","Airman":"1784","Roll RMM":"1785","Roast_uncle":"1786","Robert":"1787","Robert garcia":"1788","Robin":"1789","Robin NW":"1790","Rob lucci":"1791","Robo":"1792","Robocop":"1793","Robo-ky XX":"1794","Robo-ky":"1795","Robo-kyii":"1796","Rock howard":"1797","Golem":"1798","Rock volnutt":"1799","Rogue":"1800","Rogue SP":"1802","Rolf":"1803","Roll":"1804","Roll MVC":"1805","Ronald":"1806","Roomi":"1807","Rorschach":"1808","Rosa":"1809","Rose":"1810","Rouga_zanma":"1811","Rouga(coh)":"1812","Rouge":"1813","Roxy":"1814","Royal guard":"1815","Rozaly":"1816","Rubber soul":"1817","Ruby heart":"1818","Ruckus":"1819","Rugal":"1820","Ruili":"1821","Rumia":"1822","Araki runa":"1823","Rydia of mist":"1824","Ryoko asakura":"1825","Ryoko kano":"1826","Shiki Ryougi":"1827","Shiki vp":"1829","Evil ryu":"1830","Master ryu":"1831","Normal Ryu":"1832","Ryu":"1833","Dark ryu":"1834","Ryu A":"1835","Ryu DG":"1836","Yamazaki 71113":"1837","Ryu hoshi":"1838","Ryu plus":"1839","Ryu-san":"1840","Ryutan":"1841","Ryuuguu rena":"1842","Ryuuoutan":"1844","Ryu XIII":"1845","Saba":"1846","Sabretooth":"1847","Sabu":"1848","Hato sabure":"1849","Sachiel":"1850","Sad claps":"1851","Boss sagat":"1852","Sailor chibi moon":"1853","Chris sakurigan":"1854","Sailor pluto":"1855","Sailor saturn":"1856","Sailor jupiter":"1857","Sailor moon":"1858","Sailor uranus":"1859","Jupiter":"1860","Sailor mars":"1861","Sailor mercury":"1862","Sailor neptune":"1863","Sailor venus":"1864","Saint kyo":"1865","Saito":"1866","Great saiyaman":"1867","Saizo hattori":"1868","Sajin":"1869","Sakaki":"1870","Sakon":"1871","Sakura Kasugano":"1872","Sakura":"1873","Sakura Cosplay":"1874","Sakuya_swr":"1875","Samurai jack":"1876","Sanada yukimura":"1877","Sandman":"1878","Sango":"1880","Sanji 13":"1881","Sanzou_kongoumaru":"1882","Sasquatch":"1883","Sasquatch 71113":"1884","Sasuke kun":"1885","Sasuke Cosplay":"1886","Mr.satan":"1887","Hercule gt":"1888","Satan z2":"1889","Satoko":"1890","Satori":"1891","Satsuki yumiduka":"1892","Saya":"1893","Sayuri kurata":"1894","Salty goku":"1895","Scarecrow":"1896","Scarlet witch":"1897","Schlussel":"1899","Scolipede":"1900","Scorpion MK":"1901","Scorpion":"1902","Scorpion SIK":"1903","Scream":"1905","Dio S":"1906","98se":"1907","Segalow":"1909","Yuri di aaaaaaa":"1910","Seiza uranai-san":"1911","Senna vp":"1912","Sentinel":"1914","Sentry":"1916","Sephiroth":"1917","Sephiroth AK":"1918","Seravy":"1919","Serika":"1920","Seth":"1921","Setsuna":"1922","Elena SF3":"1923","Oro":"1924","Q":"1925","Urien":"1926","Hugo":"1927","Alex":"1928","Elena":"1929","Juri SF4":"1930","Evil Ryu SF4":"1931","Ken IV":"1932","Ryu SF4":"1933","Sagat SF4":"1934","Seth SF4":"1935","Zangief sf4":"1936","Spider girl":"1937","Nash shadow":"1938","Shadowcat":"1939","Shadow dio":"1940","Shadow geist":"1941","Shadow lady":"1942","Shadowman cfas":"1943","Shadow vegeta":"1944","Shaft":"1945","Shaky jake":"1946","Shanghai":"1947","Shangtsung":"1948","Shanoa":"1949","Shantae":"1950","Shantotto":"1951","Shapeshifter a.o.s.":"1952","Shaq Diesel":"1953","Shaq":"1954","Shar-makai":"1955","Shazam":"1956","She-hulk":"1957","Sheen":"1958","Shen":"1959","Shermie":"1960","Shikamaru":"1961","Shimo":"1962","Shin":"1963","Shin bison":"1964","Shingo":"1965","ShinGouki":"1966","Shin gouki":"1967","Shino":"1968","Shin ryu":"1969","Shin Valdoll":"1970","Shin vega":"1971","Shion":"1972","Shiori misaka":"1973","1":"1974","Guerrero divino del dragn":"1976","Shishio":"1977","Shishiwakamaru":"1978","Shiva":"1979","Shizuha aki":"1980","Hisame shizumaru":"1981","Shocker":"1982","Shotoborg mk. ii":"1983","Shadir":"1984","Shuh":"1985","Kszsk-shuko":"1986","Shuma":"1987","Shun":"1989","Shura":"1990","Siegfried":"1991","Siharai-san":"1992","Shikieiki yamaxanadu":"1993","Yatogi tetsu":"1994","Princess silver":"1995","Silver surfer":"1996","Silver horns":"1997","Silver samurai":"1998","Simba":"1999","Simon Belmondo":"2000","Simon B":"2001","Simon belmont":"2002","Simmon":"2003","Simonkin2005":"2004","Simonkin2006":"2005","Simonkin2007":"2006","Simonking":"2007","Sinestro":"2008","Sinki":"2009","Sinku":"2010","Sion_tatari":"2011","Sirohime":"2012","Sissy":"2013","Skeletor":"2014","Skullman":"2015","Skullomania":"2016","Slamdunk":"2017","Slash":"2018","Slayer":"2019","Dark Slayer":"2020","(sman)":"2021","Spider-man 2099":"2022","Smoker":"2023","Solid snake":"2024","Snake eyes":"2025","Super nightmare geese":"2026","Sniper":"2027","Snoopy":"2028","Snow":"2029","Sodom":"2030","Kazama sogetsu":"2031","Solbadguy":"2032","Sol":"2033","Real chibi scex":"2034","Soma cruz ex":"2035","SonGohan":"2036","Son goku":"2037","Sonia":"2038","Sonic the hedgehog":"2039","Sonic MH":"2040","Sonic 2 style sonic":"2041","Sonic V2":"2042","Son of sun":"2043","Son gohan":"2044","Sophitia":"2045","Rare Sophitia":"2046","Sora":"2047","Soujiro":"2048","Soulgen":"2049","Ermac mk2":"2050","Noob saibot mk2":"2051","Rain mk2":"2052","Reptile mk2":"2053","Scorpion mk2":"2054","Smoke mk2":"2055","Soul ninja mk2":"2056","Sub-zero mk2":"2057","Aoi-ko":"2058","Andore jr":"2059","Blaze agent":"2060","Chun-lee dark bolt":"2061","G project":"2062","Heavy strike":"2063","MB-02":"2064","T. kawk":"2065","Psycho Cammy":"2066","Sean matsuda":"2067","M. bison":"2068","Guile machine":"2069","Scott pilgrim":"2070","Space warrior":"2071","Sparta_heika":"2072","Spawn":"2073","Mega Spawn":"2074","Spenoza":"2075","Spider-carnage":"2076","Spiderman":"2077","Spiny":"2078","Rick":"2079","Sponge bob":"2080","Spongebob":"2081","S.p.o. ryu":"2082","Squall JP":"2083","Squall":"2084","Enja":"2085","Ness":"2086","Super3 goku":"2087","Ssj4 goten":"2088","Ultra ssj5 vegeta":"2089","Goku ssj5":"2090","Boo ssj":"2091","Ssj gohan":"2092","Ssjgoku":"2093","Super goku":"2094","Super vegeta":"2096","Ssj goku z2":"2097","Starfire":"2098","Steel":"2099","Stickykeys":"2100","Dark Stimpy":"2101","Stimpy":"2102","Storm":"2103","Storm eagle":"2104","Ichigo":"2105","Perfect storm x":"2106","Strawbelly jam":"2107","Strider H":"2108","Strong guy":"2109","Sub-zero":"2110","Subzero Ninja":"2111","Sub zero":"2112","Succubus":"2113","Sue sakamoto":"2114","Suigintou":"2115","Suika ibuki":"2116","Sula":"2117","Sun god":"2118","Sun wu kong":"2119","Supes":"2120","Super #13":"2121","Superarabian":"2122","Super androide 17 hd":"2123","Supergirl":"2124","Super man":"2125","Superman":"2126","Super-Mario":"2127","Super mario":"2128","Super skrull":"2129","Super soldier":"2130","Super buu":"2131","Suwako moriya":"2132","Heika":"2133","Mr.karate":"2134","Syaoran":"2135","Sylphie":"2136","Symbiote spider-man":"2137","Symbiote onslaught":"2138","Synn":"2139","Shuma MVC3":"2140","Real Shuma":"2141","Sakura shingouji":"2142","T.hawk":"2143","Cyborg t-8p":"2144","Tabasa":"2145","Tessa":"2146","Tails":"2147","Miles Prower":"2148","Takano_miyo":"2149","Takenaka hambe":"2150","Taki":"2151","Takobue":"2152","Jon talbain":"2155","Talon":"2156","Tamika":"2157","Tao":"2158","Tao jun":"2159","Mai-ling":"2160","Tapion":"2161","Taros":"2162","Tatsuki":"2163","Tatsuki Arisawa":"2164","Tayuya":"2165","TBonne":"2166","Team reimisen":"2167","Temari":"2168","Ten":"2169","Tenkochan":"2170","Tenma-sama":"2171","Tenshi":"2172","Ten-sing":"2173","Tenshinham":"2174","Tensinhan":"2175","Tenten":"2176","E-terry 71113":"2177","Terry":"2178","Tesse":"2179","Testament":"2180","Tetris":"2181","Tetsu yatogi":"2182","Tetsuo":"2183","Tewi_inaba":"2184","Thanoseid":"2185","TheJoker":"2186","New Joker":"2187","The mask":"2188","The atom":"2189","The flash":"2190","The guy":"2191","The moon":"2192","TheThing":"2193","The king":"2194","Thing":"2195","Think":"2196","Thirteen":"2197","Thor":"2198","Thouther":"2199","Thunder megazord":"2200","Tibigintou":"2201","The tick":"2202","Tien":"2203","Tiger":"2204","Black tiger":"2205","Tin star":"2206","Tintin":"2207","Thierry henry":"2208","Leonardo":"2209","Raphael":"2210","Giygas":"2212","Master toadman":"2215","Toejam":"2216","Toguro 100%":"2217","Toguro 30%":"2218","Toguro 80%":"2219","Toki":"2221","White ranger":"2222","Tomo takino":"2223","Tony tony chopper":"2224","Toramaru syou":"2225","Torao onigawara":"2226","Toro inoue":"2227","Trevor belmont":"2228","Trevor B":"2229","Kamakura-kun":"2230","Pinksheep":"2231","Rosesub":"2232","Santos":"2233","Trish":"2234","Trist":"2235","Tristan":"2236","Tron bonne":"2237","Trouble man":"2238","Trunks":"2239","Future trunks":"2242","Trunks ssj4":"2243","Tsugumi":"2244","Tsunamidusher":"2245","Jyuzumaru":"2246","Pocket tylor":"2247","Tylor":"2248","Mirai trunks":"2249","Tung fu rue":"2250","Tyouunn-shiryu":"2253","T ninja":"2254","Ubu":"2255","Chibi ubuu":"2256","Uesugi":"2257","Uesugi kensin":"2258","Ukitake":"2259","Ultimate sula":"2260","Rockman x":"2261","Ultimate cap":"2262","Ultimat goku":"2263","Barney":"2264","Ultraman":"2265","Clark":"2266","K9999":"2267","Ultrassjgoku":"2268","Ultron":"2269","Shang tsung":"2270","Umvc_sentinel":"2271","Undeadhero":"2272","Unknown":"2273","Unzan&ichirin":"2274","Uppercut":"2275","Ultimate pretty suika":"2276","Urban champion":"2277","Uryuu":"2278","Usapi-":"2279","Sasuke":"2280","Utsuho reiuji":"2281","Uzaku":"2282","Yuuka kazami":"2283","Violent Ken":"2284","Vaan":"2285","V.akiha":"2286","Valdoll":"2287","Vanessa":"2288","Vanilla h":"2289","VanillaIce":"2290","Varnage":"2291","Main Man Knuckles":"2292","Sonic":"2294","Miles":"2296","Naked Vega":"2298","Vega Mask":"2299","Vega Claw":"2300","Vega":"2301","Vega 2":"2302","Vegeta":"2303","Virginia":"2304","Majin vegeta":"2306","Vegeta sb1":"2307","Virginia SSJ":"2308","Vegeta ssj1":"2309","Vegeta ssj3":"2310","Evil Vegeta":"2311","Vegeta ultra ssj":"2312","Vegeta z2":"2313","Ssj vegeto":"2314","Venom":"2315","Venom scorpion":"2316","Venom GG":"2317","Venom MMV":"2318","Venon":"2320","Vergil":"2321","Vertigo":"2322","Vice":"2323","Vicviper":"2324","Videl":"2325","Viewtiful joe":"2326","Vita":"2327","Viuda negra":"2328","Vivi_ornitier":"2329","Vixen":"2330","Crash bandicoot":"2331","Vp frey":"2332","Vegeta ssj5":"2333","Adon":"2334","Vulture":"2335","Vyres":"2336","Waha-":"2338","Wakko":"2339","Wally West":"2341","Waluigi":"2342","Wang chang":"2344","Wapiko":"2345","Warakia":"2346","War machine":"2349","White Buffalo M1":"2350","White buffalo":"2351","Well":"2352","Wesker":"2353","Whispy woods":"2354","Fuuma":"2356","Hanzou":"2357","Neo-dio":"2358","Geegus":"2359","Ryoko izumo":"2360","Wildcat":"2362","Wild woody":"2363","Wind":"2365","Winnie the pooh":"2367","White len":"2369","Wolvenom":"2371","The pacifier":"2373","Wonderman":"2375","Worm":"2377","Wriggle":"2379","Wyldestar":"2380","W len ar":"2381","Xanmi chan":"2382","Ken X":"2383","Xiangfei":"2384","Clark Steel XIII":"2386","Fuuma NBC":"2387","Hanzo NBC":"2388","Kusanagi-sp":"2389","Jill":"2391","Hayato MVC":"2392","Xp(pro)":"2393","Xxx2":"2394","Yagumo":"2396","Yakui san":"2397","Yamame":"2398","Yamcha by tomur":"2399","Yamiyuki-san":"2400","Yang":"2401","Yashaoh":"2402","Yellow devil":"2403","Yellow-pipo":"2404","Yoh":"2405","Yoko":"2406","Youhei":"2409","Youki-so-suika":"2410","Youmu konpaku":"2411","Young Link":"2412","Yue":"2413","Yuugi":"2414","Hirasawa_yui":"2415","Yujiro-hanma":"2416","Yukari Tanizaki":"2417","Yukari yakumo":"2418","Yukari_swr":"2419","Yuki":"2421","Yuki Orochi":"2422","Yuki ex":"2423","Yukimura":"2424","Yuki in midday":"2425","Yumemi":"2427","Yumi":"2428","Yun":"2429","Yuna":"2430","Yuri sakazaki":"2431","Yusuke":"2433","Yuyuko & youmu":"2434","Z-akuma":"2436","Tonberry":"2437","Zabuza":"2438","Zaku":"2439","Zaku Chibi":"2440","Zaku Cosplay":"2441","Zangya":"2442","Zantetsu":"2443","Zappa":"2444","Zarbom":"2445","Zatanna":"2446","Zeeky h. bomb":"2447","Zemial":"2449","Zeppeli":"2451","Zero Cloud":"2453","Zero Hotaru":"2454","Zeroko":"2455","Zero Marrow":"2457","Zettaiaku":"2458","Zidane":"2459","Kenpachi":"2461","Test a.i.":"2463","Aile":"2466","Vent":"2467","Mathias":"3542","Suika_ibuki":"3543","Saizo_hattori":"3544","Unyuho":"3545","Bellyache":"3546","Gunter":"3547","Lt.kurosawa":"3548","Abobo 0D":"3549","Adon sfa":"3550","Anthony hawk":"3551","Astro":"3552","Big bear 0D":"3553","Birdie sfa":"3554","Mysterious budo":"3555","Burnie":"3556","Burnov":"3557","Bushou":"3558","Cheng_fu":"3559","Claus":"3560","Lucky colt":"3561","Cyborg_d-9f":"3562","Dan 0d":"3563","Deejay sfa":"3564","Dougster":"3565","Drew 0D":"3566","Duke":"3567","Fang 0d":"3568","Feilong sfa":"3569","Gen sfa":"3570","Missing iq gomes":"3571","Harima":"3572","Iyo":"3573","Jean_pau":"3574","Jeff howard":"3575","John anderson":"3576","Kamui":"3577","Kimala the bouncer":"3578","Kinniku suguru":"3579","Kousonsyou":"3580","Kensuke kudou":"3581","Lio convoy":"3582","Major alan dutch schaefer":"3583","Makai":"3584","Syouzan matsuo":"3585","Mitsuji tanimati":"3586","Mike macho haggar":"3587","Victor ortega":"3588","Masamichi oyama":"3589","Ratking":"3590","Rick simpsons":"3591","Robinmask":"3592","Rip_saber":"3593","Sheep the royal":"3594","Shinsaku maekawa":"3595","Shishin":"3596","Sodom sfa":"3597","El stinger":"3598","Cyborg_t-8p":"3599","Titan the great":"3600","Terryman":"3601","Thawk sfa":"3602","Donatello 0d":"3603","Leonardo 0d":"3604","Michelangelo 0d":"3605","Raphael 0d":"3606","Tyssa willing":"3607","Wong_fei_h":"3608","Wong fei hung":"3609","Wraith":"3610","Yuki fujiwara":"3611","Alexey zalazof":"3612","Zeldia":"3613","Zeldia 0D":"3614","Pocchi":"3615","Han bae dal":"3616","Kim hoon":"3617","Lee hae gwan":"3618","Ryo fu":"3619","Hoya":"3620","Milchael sobut":"3621","Rob vincent":"3622","Chou hi":"3623","Kim gil":"3624","Ys":"3625","2nd death star":"3626","Rugal b.":"3627","King 95":"3628","Andy bogard":"3629","Geki":"3630","Joe A":"3631","A-ko":"3632","A-lee":"3633","Mike":"3634","Retsu":"3635","A-utsuho":"3636","Duck king pne":"3637","Ranma +":"3638","<> ( 0)<>/2":"3639","Abigail":"3640","Abobo":"3641","Absolute_white_len":"3642","Abubo":"3643","James jerkenson":"3644","Adol":"3645","Adon f22":"3646","Atari dragon":"3647","Ae86":"3648","Aimi":"3649","Akainu sakazuki":"3650","Akaitsuki":"3651","Akane tendo":"3652","Akari kamigishi":"3653","Akashima":"3654","Akashi_kaoru":"3655","Kung fu girl":"3656","Akiha tohno":"3657","Akiko":"3658","Akira kogami":"3659","Akira":"3660","Angel kof":"3661","Hyper rare akuma":"3662","Al":"3663","Alfred airhawk":"3664","Alice-as":"3665","Alice's gensokyo":"3666","Allen o'neill":"3667","Alpaca":"3668","Alsa":"3669","Alt eisen":"3670","Alvan":"3671","Amakusa":"3672","Amber lamps":"3673","Ando":"3674","Hugo andore jr. ff2":"3675","Hugo andore jr.":"3676","Andy bogard ff":"3677","Andy bogard rb":"3678","Ange":"3679","Angel dx":"3680","Angela":"3681","Anne":"3682","Anny":"3683","Anonym":"3684","Another clone ash":"3685","Jack":"3686","John":"3687","King aof1":"3688","Lee aof1":"3689","Mrkarate aof":"3690","Robert aof1":"3691","Ryo aof1":"3692","Todo":"3693","Eiji":"3694","Geese aof2":"3695","Micky":"3696","Mr big":"3697","Robert garcia aof3":"3698","Ryo-sakazaki":"3699","Aokiji kuzan":"3700","Arashi":"3701","Cola":"3702","Muhi":"3703","Silvermoon":"3704","Mageko":"3705","Archers":"3706","Ark":"3707","Arturo":"3708","Arx-7":"3709","Asborb":"3710","Aselia":"3711","Ash 2":"3712","Asuka":"3713","Dark athena 2nd":"3714","Comrade athena":"3715","Atlas":"3716","Avalanche":"3717","Axel hawk":"3718","Axl gg":"3719","Aya":"3720","Ayaka-mvc":"3721","Ayane_ikuse":"3722","Azteca":"3723","Bai-hu":"3724","Balrog f":"3725","Barns":"3726","Franco bash":"3727","Batman 2":"3728","Battler ushiromiya":"3729","Mr. bean":"3730","Beelzebub":"3731","Bifrost":"3732","Mr.big":"3733","Super big bird":"3734","Big zam":"3735","Billy kane rbs":"3736","Binran":"3737","Birdie":"3738","Fps bison trooper":"3739","Bully in the launderette":"3740","Black viper":"3741","Black zero":"3742","Jonathan blade":"3743","Bloo":"3744","Blue suede goo":"3745","Bobby":"3746","Bob wilson":"3747","Boshy":"3748","Bousou oni-chiduru":"3749","Brahms":"3750","Bristol-d":"3751","Brokken":"3752","Broly lssj3":"3753","Bubba":"3754","Bugs bunny":"3755","Bunny tracy":"3756","Buntaro":"3757","Burai yamamoto":"3758","Buster bunny":"3759","Hijiri byakuren":"3760","B cirno":"3761","Cpt.falcon":"3762","Calnarsa":"3763","Captain.cat.kit":"3764","Captain agent":"3765","Carlos ff2":"3766","Carriage driver":"3767","Eric cartman":"3768","Catherine-mvc":"3769","Cathey":"3770","Akira yuki":"3771","Chaoz_gf":"3772","Chaves":"3773","Atomic r chelnov":"3774","Cheng zinzang":"3775","Chenshiro":"3776","Chen the weasel":"3777","Chibi kuroko":"3778","Chieshen":"3779","Chinnen":"3780","Chippzanuff":"3781","Choi special":"3782","Chonrei":"3783","Chrome dome":"3784","Chie_rumiko":"3785","Ciel":"3786","Cirno brando":"3787","Cius":"3788","Ickybod clay":"3789","Cliff-tsunade-godaime":"3790","Cliff-zabuza-nzc":"3791","Classic wagyan":"3793","Cobra":"3794","Cody CFJ2":"3795","Cody GH":"3796","Combine tentacle":"3797","Princess comet":"3798","Common akuma":"3799","Tank":"3800","Crane":"3801","Crispy":"3802","Crocodile worm":"3803","Cruelty blood arcueid":"3804","Cube":"3805","Curfue":"3806","Guile cvs2":"3807","Karin CVS":"3808","R.mika":"3809","Rolento CVS":"3810","Cvs sakura":"3811","Cvs yun":"3812","Cvs raiden":"3813","D":"3814","Ogichi inner hollow":"3815","Dbloodbane":"3816","Daiyousei":"3817","Damnd":"3818","Daniel":"3819","Dante2":"3820","Dark champion":"3822","Dark order sol":"3823","Dark cornian":"3824","Dark ernie":"3825","Dimlos":"3826","Grebam":"3827","Hugo dc":"3828","Mictlan":"3829","Amon":"3830","Dd eddie":"3831","Dead kung fu man":"3832","Deadpool mvc3":"3833","Dee jay sfm":"3834","Deidara":"3835","Deidara nzc":"3836","Demonica":"3837","Demoniho":"3838","Devil devan":"3839","Dies":"3840","Dies irae":"3841","Diokles":"3842","Dios":"3843","Dirtyfat":"3844","Deviljin":"3845","Shark bonus":"3846","Doge":"3847","Dogma":"3848","Donaiya":"3849","Donkeykongjr":"3850","Donpatch-mvc":"3851","Doremi":"3852","Dorniar ex":"3853","Dorothy":"3854","Dracula & dragon":"3855","Dragon rider":"3856","Drake":"3857","Drew":"3858","Drunken master":"3859","Dual shears sp":"3860","Duane!":"3861","D_minoriko":"3862","Eagle f22":"3863","Ebifrygon":"3864","Ed":"3865","Edi":"3866","Eins":"3867","Existence-less":"3868","Element":"3869","Elena jc":"3870","Elfin":"3871","Elias patrick":"3872","Elirin":"3873","Emily":"3874","Emily barnet":"3875","Equus":"3876","Eregion":"3877","Erza scarlet":"3878","Eslash":"3879","Evil donald":"3880","Extramyon":"3881","Eyedol":"3882","Fat_tony":"3883","Faud":"3884","Ferishia":"3885","Felden":"3886","Billy kane ff1":"3887","Duck king ff1":"3888","Ff1 geese howard":"3889","Ff1 joe higashi":"3890","Richard myer":"3891","Ff1 tung fu rue":"3892","Black":"3893","Blaze":"3894","Cody":"3895","Ff guy":"3896","Ff rei":"3897","Retsu ff":"3898","Billy kane ffsp":"3899","Fidei":"3900","Filea":"3901","Final peketo":"3902","Firestorm":"3903","Flen_d":"3904","Fox_mccloud":"3905","Frank archer":"3906","Gai":"3907","Galactus":"3908","Galivan":"3909","Ganondorf":"3911","Gardevoir":"3912","Gato 2k3":"3913","Geki f22":"3914","Gengar":"3915","Genma human by jhfer":"3916","Gen":"3917","George goodlake":"3918","Gerdon":"3919","Gg-ky":"3920","Ky and sol":"3921","Ghost kick":"3922","G akiha nightmare":"3923","Giant jackson":"3924","Gi gi":"3925","Gill hero":"3926","Giant katamari of random characters":"3927","Gliformoth":"3928","Green lantern lucario":"3929","Gloria":"3930","Goat_b":"3931","God-gundam":"3932","Godslayer shin meep140":"3933","Goketuji oume":"3934","Go kidokoro":"3935","Golden axe":"3936","Byakuren hijiri":"3937","Chen":"3938","Gon":"3939","Gonzales s-r":"3940","Goofy":"3941","Gordon bowman":"3942","Gosunkugi":"3943","Gouken sf4":"3944","Gozu":"3945","Grant":"3946","Gray fullbuster":"3947","Great dragonian":"3948","Wiler":"3949","Big bear":"3950","Gulpfer":"3951","Rx-78-2 gundam":"3952","Gundam double zeta":"3953","Gundam rx-78 gp02a":"3954","Psycho mkiii":"3955","Gundam zeta":"3956","Gustab m.":"3957","Gustoff":"3958","Gyokuto":"3959","Heavyarms custom":"3960","Mayor of earth":"3961","Haiji":"3962","Hakureimu":"3963","Hamusu":"3964","Hamutaro":"3965","Happo":"3966","Haruka_amami":"3967","Sakura haruno":"3968","Hayate":"3969","Hayato gou":"3970","Hazama":"3971","Chipp zanuff h":"3972","He-fonba":"3973","Heart&heart":"3974","Heihachi m":"3976","Helga":"3977","Hell chaos":"3978","Herb":"3979","Hammerin' harry":"3980","Joe":"3981","Hige":"3982","Hinako 2k3":"3983","Hinata Shippuden":"3984","Hina kagiyama":"3985","Hitosyura":"3986","Homura":"3987","Houoh":"3988","Bruce banner":"3989","Human paladin":"3990","Hwa jai 2":"3991","Hyouken":"3992","Hyuuga hinata":"3993","Fujiwara no mokou":"3994","Iari":"3995","Iceclimber":"3996","If_sakuya":"3997","Igniz":"3998","Imagine breaker":"3999","Imoge":"4000","Imouto":"4001","Int karate fighter":"4002","Inuyasha":"4003","Iria":"4004","Iron-man":"4005","Cc iron ryuji":"4006","Itachi uchiha":"4007","Itachi uchiha nzc":"4008","Eiki-judgment":"4009","Jack13":"4010","Jcvd":"4011","Jiban":"4012","Jimmy":"4013","Jin kisaragi":"4014","Isao jinrai":"4015","Jin chonrei":"4016","Jin bros":"4017","Jiraiya":"4018","Bone dino":"4019","Joe kusanagi":"4020","Joe F22":"4021","Joker_sf":"4022","Homer simpson":"4023","Jubei yamada":"4024","Judgment":"4025","Juri pf":"4026","Justice ao":"4027","Juugo":"4028","Yami yugi":"4029","Hachune miku":"4030","Jyazu":"4031","Jyubei yagyu":"4032","Chen-mao":"4033","Juli":"4034","Miyako":"4035","Nanaya_s":"4036","Kaguya houraisan":"4038","Kain blade":"4039","Kairu":"4040","Kakashi hatake":"4041","Kamaitachi":"4042","Kamijo toma":"4043","Kanaka":"4044","Kaname":"4045","Kaname madoka":"4046","Kang rotd":"4047","Kanji":"4048","Kanna-mvc":"4049","Karasu":"4050","Karin":"4051","Kasen":"4052","Katana":"4053","Kato":"4054","Kazuma":"4055","Shishimaru":"4056","Kenbo":"4057","Kenny mccormick":"4058","Fulgore":"4059","Killa and ren":"4060","Killua":"4061","Kim kap hwan":"4062","Kim_sueil":"4063","Mister king":"4064","King kong":"4065","King 13":"4066","Kinopio":"4067","Kirara":"4068","Kirby c":"4069","Kisarah":"4070","Kiyoko":"4071","Kizaru borsalino":"4072","Clone koa":"4073","Kodachi":"4074","Wyvern":"4075","Roomi kof":"4076","Richard meyer":"4077","Kokoro":"4078","Koldan":"4079","Komachi":"4080","Konan":"4081","Konata":"4082","Koneko":"4083","Konoha-ss":"4084","Koopa troopa djhr":"4085","Kotoe":"4086","Kryo":"4087","Ktullanux":"4088","Jun":"4089","Kumi":"4090","Kunagi":"4091","Kunagi tenrou":"4092","Kunio kun":"4093","Kunoichi":"4094","Tatewaki kunou":"4095","Kurara":"4096","Kyle broflovski":"4097","Kyoko_typea":"4098","Kyosuke pj":"4099","Kyoushirou senryou":"4100","Adelheid":"4101","Carol stanzack":"4102","Max eagle":"4103","K joker":"4104","Nicola zaza":"4105","Lady aozaki":"4107","Larcen":"4108","Lasher":"4109","Laurence":"4110","Laurence blood":"4111","Layban":"4112","Layzner":"4113","Lee f22":"4114","Lee_chen":"4115","Lenalee-mvc":"4116","Leon c":"4117","Leopaldon":"4118","Lester":"4119","Leviathan":"4120","Lilith a":"4121","Lie meiling":"4122","Lightning bd":"4123","Light":"4124","Light yagami":"4125","Lin":"4126","Lloyd irving":"4127","Lola bunny":"4128","Long_way":"4129","Lotus master":"4130","Lion sora":"4131","Lucifer":"4132","Lucy diclonius":"4133","Luka":"4134","Luke":"4135","Lyndis":"4137","M-monk":"4138","Madara uchiha":"4139","Madotsuki":"4140","Magaki":"4141","Maggilla":"4142","Magician":"4143","Magna":"4144","Ultra magnus":"4145","Mai 2k2":"4146","Mai maino":"4147","Mai tokiha ex":"4148","Makoto nanaya":"4149","Makoto mizoguchi":"4150","Mami":"4151","Mamiya":"4152","The manticore the queen and the dragon":"4153","Thiele":"4154","Maplestory mage":"4155","Marcia":"4156","Marian":"4157","Mariko konjou":"4158","Mark sein":"4159","Marvel frozen":"4160","Mary 2k2":"4161","Masaru_takahara":"4162","Mashiro":"4163","Masked warrior":"4164","Master lue":"4165","Mf viga":"4166","Master huang":"4167","Maverick zero":"4168","May s":"4169","M.bison sf2ww":"4170","Mc hisui":"4171","Neo meep140":"4172","Meep140 s-type":"4173","Mega tigerzord":"4174","Megaman fp":"4175","Megaman x":"4176","Megu asuhara":"4177","Meiya":"4178","Meiya_striker":"4179","Metal golem":"4181","Mezu":"4182","Michael jackson":"4183","Michael max":"4184","Micky ls":"4185","Micky13":"4186","Midknight":"4187","Millia tnt":"4188","Minmin":"4189","Miopinja":"4190","Misaka mikoto":"4191","Mishio&makoto":"4192","Misuzu":"4193","Miyako(coh)":"4194","Miyazato_erika":"4195","Miyuki":"4196","Mizore s.":"4197","Mizuchi-type-m":"4198","Mo-mo-dainamaitu":"4199","Moldy snail":"4200","Momiji inubashiri":"4201","Monaka tokihoshi":"4202","Monako ogura":"4203","Monami ogura":"4204","Mongori":"4205","Kintaro":"4206","Shao kahn":"4207","Mother":"4208","Mousse by ?":"4209","Mpccgenerals":"4210","Mrheart":"4211","Bad mr frosty":"4212","Mr. jones":"4213","Mt":"4214","Muaythaiman":"4215","Mullah abba":"4216","M.u.s.a.f.a.r.":"4217","Mutron kun":"4218","Ken mvc":"4219","The real doom":"4220","Gill mvc2":"4221","Zero maverick hunter":"4222","Batsu":"4223","Vega mvc2":"4225","Mecha-gorilla":"4226","Nagato":"4227","Nanase-mvc":"4228","Nanmushi":"4229","Naomi":"4230","Ghost nappa":"4231","Naruto kid":"4232","Naruto uzumaki":"4233","Natsume":"4234","Natsumi":"4235","Hinata natumi":"4236","Nausicaa":"4237","Nayuta":"4238","N.boss":"4239","Neff":"4240","Little nemo":"4241","Neo kazuma":"4242","Neozekrom mk2":"4243","Nimuge president":"4244","Ninja yumi":"4245","Ninja":"4246","Ni_san":"4247","Kasumi":"4248","Nm hayate":"4249","Noel":"4250","Nogami_aoi":"4251","Noel vermillion":"4252","Nu-13":"4253","Nucrear cirno":"4254","Nukesaku":"4255","Demitri nxc":"4256","Sakura&karin":"4257","Morrigan nxc":"4258","Oboromaru":"4259","Ohaou":"4260","Amaterasu":"4261","Old robo-ky":"4262","Olof":"4263","Omega_rugal":"4264","Omega agk":"4265","Omni-psych super dizzy lv 3":"4266","Omni-psych chipp":"4267","Omni-psych jam":"4268","Omni-psych justice":"4269","Omake":"4270","Onomatopoeia":"4271","Orochi ball":"4272","Orochi tenko":"4273","Orochimaru nzc":"4274","Orsted":"4275","Orsted_w":"4276","Otane":"4277","Otane oume":"4278","Ouyang feng":"4279","P-ciel":"4280","P3 hero":"4281","P3 heroine":"4282","P4 hero":"4283","Pan transform":"4284","Pantyhose taro":"4285","Pein nzc":"4286","Perfectakishimai":"4287","Perfectakishimai 2":"4288","Kintaro pim":"4289","Pittan-san":"4290","Pi_annie":"4291","Keith":"4292","Oume":"4293","Hinata wakaba":"4294","Plok":"4295","Pocket sol badguy":"4296","Pogo":"4297","Poison qyc":"4298","Pokeathena":"4299","Popura":"4300","Porygon-z":"4301","Private":"4302","Prizm-star":"4303","Producer":"4304","Pteranodon":"4305","Petit charat":"4306","Mizuki takase":"4307","Peach mizuki":"4308","Qb":"4309","Q-bee":"4310","Q-mantha":"4311","Akiba":"4312","Ragna bloodedge":"4313","Raiden ff":"4314","Raidou":"4315","Rainbow":"4316","Ralf 2k2":"4317","Ramses iii":"4318","Rancid":"4319","Rangle":"4320","Ranko":"4321","Ranmaru":"4322","Raptor ls":"4324","Ratix":"4325","Rax coswell":"4326","Razorclaws":"4327","Rbff master geese":"4328","Hon fu":"4329","Master krauser":"4330","Hon-fu":"4331","Kim kaphwan":"4332","Blue mary":"4333","Red skull":"4334","Red snake":"4335","Rei-kugo":"4336","Reiji":"4337","Reika murasame":"4338","Reiko mikami":"4339","Reimi":"4340","Reimu hakurei rp":"4341","Reon":"4342","Rera":"4343","Revlius":"4344","Alsion3rd":"4345","Maherl":"4346","Rev saizo":"4347","Rhina":"4348","Rick rb":"4349","Riggs":"4350","Rinnosuke_morichika":"4351","Rin":"4352","Riyoh_nagasaki":"4353","Robert 2k3":"4354","Robin_mask":"4355","Robo-jam":"4356","Robo-ky type-p":"4357","Robo-len":"4358","Robo-sol":"4359","Robo-segalow":"4360","Rocket tank":"4361","Rock of spirit":"4362","Rocky balboa":"4363","Rody birts":"4364","Rokurouta":"4365","Rolento":"4366","Ron max":"4367","Rosa me":"4368","Rosa nl":"4369","Rosemary":"4370","Rouga-zanma":"4371","Rouge unsou":"4372","Roza":"4374","Rufuu":"4375","Ryoga hibiki":"4376","Ryoko":"4377","Ryu hayabusa nes":"4378","Ryu hayabusa x":"4379","Ryuhi":"4380","Ryuhi SD":"4381","Debonea":"4382","Ryuko":"4383","Ryuko2nd":"4384","Team ryuko":"4385","Sacola man":"4386","Sacola man nes":"4387","Sagat f22":"4388","Sagawa":"4389","Sagojo":"4390","Sailormoon":"4391","Saizohattori":"4392","Saizo pi":"4393","Sai":"4394","Saki-mvc":"4395","Saki mitonoya":"4396","Saki tsuzura":"4397","Sakura haruno nzc":"4398","Sakuya ex":"4399","Sakuya.brando":"4400","Sakuya izayoi":"4401","Sammo-hacka":"4402","Samus":"4403","Sanada_yukimura":"4404","Sanae_x":"4405","Sannomiya_shiho":"4406","Santaurus":"4407","Saojin":"4408","Sarashina":"4409","Sara_cat":"4410","Sasuke ex":"4411","Uchiha sasuke":"4412","Sasuke storm":"4413","Sasuke uchiha":"4414","Satsujinki":"4415","Sawada":"4416","Scarlet spider":"4417","Schwartzenguard":"4418","Misaka":"4419","Seiya":"4420","Sekkimaru":"4421","Senator":"4422","Zangief sf2":"4423","Guy sf2":"4424","Haggar sf2":"4425","Yang um":"4426","Gill sf3":"4427","Remy sf3":"4428","Dan hibiki":"4429","Ken master":"4430","Gouki sf":"4431","Shining gundam":"4432","Shadowec":"4433","Shampoo":"4434","Shazzer":"4435","Shikamaru nara":"4436","Grappler shiki":"4437","Shin eddie":"4438","Shinki":"4439","Shinku":"4440","Shin meep140":"4441","Shinobu":"4442","Shintaro":"4443","Siver sonic v2":"4444","Cheng sinzan":"4445","Sion(coh)":"4446","Sion tatari":"4447","Sittara":"4448","Skelegon":"4449","Skythe":"4450","Smoo":"4451","Snorlax":"4452","Socket":"4453","Sokaku.m":"4454","Sol-pw":"4455","Sonans":"4456","Sonia rotd":"4457","Sora com":"4458","Southside jim":"4459","Spark boy":"4461","Spelunker":"4462","Spera":"4463","Spidermanu":"4464","Spin youmu":"4465","Spy larue e":"4466","Squidward":"4467","Legendary super saiyan akuma":"4469","Starship-kirby":"4470","Stegosaurus":"4471","Steve":"4472","Steven seagal":"4473","Suave dude":"4474","Sumiremaru":"4475","Sundown-kid":"4476","Super hyper ultra mega awesome wtf barney":"4477","Super dizzy angel":"4478","Superbot":"4479","Heitasupermode":"4480","Super clara":"4481","Supermario64":"4482","Superoverlord meep":"4483","Shinji_san":"4484","Stefanie":"4485","Suwako":"4486","Svc genjyuro":"4487","Akari":"4488","Symbiote thanos":"4489","Syubababa":"4490","Cless-f":"4491","Crea-f":"4492","Sayia-f":"4493","Taffy":"4494","Taideo":"4495","Dig dug":"4496","Tak":"4497","Yoshiyuki takagi":"4498","Takezo":"4499","Takumi hattori":"4500","Tarantulra_dfo":"4501","Tatsuo":"4502","Tau army":"4503","Taz":"4504","The deadly dragon":"4505","God tewi":"4506","Shinjuro":"4507","Tenko":"4508","Tenrou kunagi":"4509","Pocket terry":"4511","Terumi":"4512","The mythical dacentrurian":"4513","The scyther":"4514","The kung fu man":"4516","The fabled sagileocorn":"4517","The orochimaru":"4518","The territorial mammoth":"4519","Thin nen":"4520","Tiger mm":"4521","Tigst_aggressi":"4522","Ninja turtles":"4524","Toki hakurei":"4526","Tony won":"4527","Hitsugaya":"4528","Evil ryu sf3":"4529","Touka":"4530","T-rex":"4532","Triceratops":"4533","Tsubaki yayoi":"4537","Tukuyo":"4540","Giant snowman":"4541","Tusk soldier":"4542","Twitch waifu chan-hd":"4543","Twitch waifu chan-sd":"4544","Ultimate aizen":"4548","Um-krizalid-2k1":"4549","Ume_age18":"4550","Ishida uryu":"4551","Vergil2":"4553","Vergil3":"4554","Videl fight money":"4556","Voltage zero":"4558","Walkure":"4560","Wang-fu":"4562","Wangchang":"4563","Warcueid t":"4565","Edward newgate":"4567","C.kidd":"4569","Wif":"4570","Wyler xi ver":"4572","Goodman":"4573","Xavier pendragon":"4575","Xenophage":"4576","Xerxes":"4577","Chun li xi":"4578","Hakumen":"4580","Lambda 11":"4581","Mu 12":"4582","Nu 13":"4583","Rachel alucard":"4585","Mia touma":"4587","Ren mizusaka":"4588","Yu asuka":"4589","Yacopu":"4590","Yamcha":"4591","Yami_miko":"4593","Yashiro nanakase":"4595","Noid":"4597","Yorihime watatsuki":"4598","Yuen-joe":"4600","Yuiran":"4601","Yui_kutuna":"4603","Yukino":"4604","Yuki kushinada":"4605","Yumel":"4606","Yuuka":"4607","Zako-c":"4610","Zako-dan":"4611","Zan-b":"4612","Zangief cfj":"4613","Zazie muhaba":"4615","Zen":"4616","Zero ariel":"4617","Zinsuke":"4618","Zodiac":"4619","Tsukushi_mio":"4621"};
var tier        = {"S":"1","A":"2","B":"3","P":"4"};
var id1;
var id2;
var chat;
var bal;

$("#balance").text(comma($("#balance").text()));
$('#leaderboardrank').text("(0)");
updateStats();
$("body").append('<div id="newB" style="display:none;"></div>');
var newBal;

$("#chatStream").click(function () {
    chat = "on";
    $("#chatframePlus").hide();
    $("#chatframeStream").show();
    $( "#videoEmbed" ).css({"margin":"","right":"","left":""});
    setAspectRatioSBP();
});

$("#chatOff").click(function () {
    chat = "off";
    $("#chatframeStream").hide();
    $("#chatframePlus").hide();
    $( "#videoEmbed" ).css({"margin":"0","right":"0px","left":"auto"});
    setAspectRatioSBP();
});

function loadP1Gif(src) {
  var img = new Image();
  img.onload = function() {
      // code to set the src on success
      $("#p1gif").html('<img src="'+src+'" style="margin-left:auto;display: block;margin-right:auto;">');
  };
  img.onerror = function() {
    // doesn't exist or error loading
    //console.log('Image: "'+src+'" doesn\'t exist');
  };

  img.src = src; // fires off loading of image
}

function loadP2Gif(src) {
  var img = new Image();
  img.onload = function() {
      // code to set the src on success
      $("#p2gif").html('<img src="'+src+'" style="margin-left:auto;display: block;margin-right:auto;">');
  };
  img.onerror = function() {
    // doesn't exist or error loading
    //console.log('Image: "'+src+'" doesn\'t exist');
  };

  img.src = src; // fires off loading of image
}

function comma(nStr)
{
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function setAspectRatioSBP() {
        $('#videoEmbed').each(function() {
            $(this).width($(this).height()*(4/3) -32);
        });
        if( chat === "off"){
            $('#sbettorswrapper, #chatWrapper').css('width',(($('body').width()-$('#videoEmbed').width())));
        } else {
            $('#sbettorswrapper, #chatWrapper').css('width',(($('body').width()-$('#videoEmbed').width())/2));
        }
        //$('#sbettors1, #sbettors2').css('width',(($('#sbettorswrapper').width())/2) - 10);
        }
        
setAspectRatioSBP();   
$(window).resize(setAspectRatioSBP);

var betstate;
var x;
var p1n;
var p2n;
var p1te;
var p2te;
var p1to;
var p2to;
var varAlert;
var balance = $("#b").val();
var u = $("#u").val();
var _data;

var socket = io.connect("http://www-cdn-twitch.saltybet.com:8000");
socket.on("message", function (data) {
    try {
        $('input[type="submit"]').attr("disabled", "disabled");
        updateState()
    } catch (e) {
        console.log("invalid data");
        return
    }
});

function increaseBalance( bal, b ) {
    if( parseInt(bal) < parseInt(b+1) ){
        console.log(bal+" : "+b);
        $('#balance').html(bal).show();
        setTimeout(increaseBalance(++bal,b), 30);
    }
}

function decreaseBalance( bal, b ) {
    if( parseInt(bal) >  parseInt(b-1) ){
        console.log(bal+" : "+b);
        $('#balance').html(bal).show();
        setTimeout(decreaseBalance(--bal,b), 30);
    }
}

function updateState() {
    $.ajax({
        type: "get",
        url: "../state.json",
        contentType: "application/json; charset=utf-8",
        data: "",
        dataType: "json",
        cache: "false",
        timeout: 30000,
        success: function (data) {
            betstate = data.status;
            x = data.x;
            p1n = data.p1name;
            p2n = data.p2name;
            id1 = character[p1n];
            id2 = character[p2n];
            p1te = data.p1total;
            p2te = data.p2total;
            p1to = parseInt(p1te.replace(/,/g, ""));
            p2to = parseInt(p2te.replace(/,/g, ""));
            varAlert = data.alert;
            $("#p1name").text(p1n);
            $("#p2name").text(p2n);
            $("#player1wager").text("$" + p1te || 0);
            $("#player2wager").text("$" + p2te || 0);
            
            //updateBalance( newBal );
            //$( "#balance" ).load("http://www.saltybet.com #balance", function(){ bal = parseInt($("#balance").text()); $("#balance").hide().html(comma($('#balance').text())).fadeIn("slow"); });
            if(localStorage["buttons"] === '1' ){
                    $( "#redsbbuttonblock" ).fadeOut("fast");
                    $( "#blusbbuttonblock" ).fadeOut("fast");
            }
            if (!varAlert) {
                if (betstate == "open") {
                    $("#player1wager").hide().html('<img src="images/potload.gif" />').fadeIn("slow");
                    $("#player2wager").hide().html('<img src="images/potload.gif" />').fadeIn("slow");
                    $('input[type="submit"]').removeClass("greybutton").removeClass("greyerbutton");
                    $('input[type="submit"]').removeAttr("disabled");
                    $("#sbpbettorscount").html("");
                    $("#betstatus").hide().html('<span class="greentext">Bets are OPEN!</span>').fadeIn("slow");
                    if( $("#lastbet").text().indexOf("$") > -1 ) {
                        $( "#lastbet" ).html( 'N/A' );
                    }
                    $( "#odds" ).html( 'N/A' );                
                    if( pan == true ){
                        $( "#wager" ).fadeIn("slow");
                        $( ".hudtext:not(:first)" ).fadeOut("slow");
                        $( "#lastbet" ).fadeOut("slow");
                        $( "#odds" ).fadeOut("slow");                             
                    } else {
                        $( "#wager" ).fadeIn("slow");
                        $( ".hudtext:not(:first)" ).fadeIn("slow");
                        $( "#lastbet" ).fadeIn("slow");
                        $( "#odds" ).hide().removeClass("hidden").fadeIn("slow");
                    }
                    if ( g === true) {
                        getLastBet();
                    }
                    if(state != "open"){
                        state = "open";
                        updateStats();
                        
                        $('#newB').load("http://www.saltybet.com #balance", function(){ 
                            oldBal = $('#balance').text().replace(/,/g, '');
                            newBal = $('#newB').text();
                            bal = newBal;
                            jQuery({aniBal: oldBal}).animate({aniBal: newBal}, {
                                duration: 1000,
                                easing:'easeOutExpo',
                                step: function() {
                                    $('#balance').text(comma(Math.ceil(this.aniBal)));
                                },
                                complete: function() {
                                    $('#balance').text(comma(newBal));
                                }
                            });
                        });

                        $("#sbpbettors1").hide().html('<span class="redtext">'+data["p1name"]+'</span><div id="p1gif" style="border-top: 1px solid rgb(176, 68, 68);"></div><div id="sbpbettors1s"><img style="margin-left:auto;display: block;margin-right:auto;" src="images/potload.gif"></div><span class="redtext" style="text-align:center;margin-left:auto;margin-right:auto;">'+data["p1name"]+' Buffs/Nerfs</span><div id="p1log" style="border-top: 1px solid rgb(176, 68, 68);"><img style="margin-left:auto;display: block;margin-right:auto;" src="images/potload.gif"></div>').fadeIn("slow");
                        $("#sbpbettors2").hide().html('<span class="bluetext">'+data["p2name"]+'</span><div id="p2gif" style="border-top: 1px solid rgb(2, 81, 155);"></div><div id="sbpbettors2s"><img style="margin-left:auto;display: block;margin-right:auto;"src="images/potload.gif"></div><span class="bluetext" style="text-align:center;margin-left:auto;margin-right:auto;">'+data["p2name"]+' Buffs/Nerfs</span><div id="p2log" style="border-top: 1px solid rgb(2, 81, 155);"><img style="margin-left:auto;display: block;margin-right:auto;" src="images/potload.gif"></div>').fadeIn("slow");
                        
                        loadP1Gif("http://planetbanhammer.com/gif/"+id1+".gif");
                        loadP2Gif("http://planetbanhammer.com/gif/"+id2+".gif");                             
                        
                        if( $(".goldtext:first").text() === $("a").eq(3).text() ){
                            g = true;
                        } else {
                            g = false;
                        }
                        getStats();
                        $( "#slider-range-min" ).slider({
                            range: "min",
                            value: 0,
                            min: 0,
                            max: 100,
                            animate: "fast",
                            slide: function( event, ui ) {
                                var maxp = 100;                               
                                var maxv = Math.log(balance);
                                var scale = (maxv) / (maxp);
                                
                                console.log(Math.exp(scale*(ui.value)))
                                $( "#wager" ).val(Math.exp(scale*(ui.value)).toFixed(0));
                            }
                        });
                        }                        
                } else {
                    if (betstate == "locked") {
                    if( pan == true ){
                        $( "#wager" ).fadeOut("slow");
                        $( ".hudtext:not(:first)" ).fadeIn("slow");
                        $( "#lastbet" ).fadeIn("slow");
                        $( "#odds" ).hide().removeClass("hidden").fadeIn("slow");
                    } else {
                        $( "#wager" ).fadeIn("slow");
                        $( ".hudtext:not(:first)" ).fadeIn("slow");
                        $( "#lastbet" ).fadeIn("slow");
                        $( "#odds" ).fadeIn("slow"); 
                    }
                    $('input[type="submit"]').addClass("greybutton");                    
                    $('input[type="submit"]').attr("disabled", "disabled");
                    $('#bluebtn0').removeClass("greybutton")
                    $('#redbtn0').removeClass("greybutton")
                    $('#redbtn0').addClass("greyerbutton");
                    $('#bluebtn0').addClass("greyerbutton");
                    $("#betstatus").hide().html("Bets are locked until the next match.").fadeIn("slow")
                    if( state != "locked"){
                        updateStats();
                        updateData();                        
                        $('#bluebtn0').removeClass("greybutton")
                        $('#redbtn0').removeClass("greybutton")
                        getOdds();
                        }
                    } else {
                        betstate == "1" ? $("#betstatus").hide().html('<span class="redtext">' + p1n + " wins! Payouts to Team Red.</span>").fadeIn("slow") : $("#betstatus").hide().html('<span class="bluetext">' + p2n + " wins! Payouts to Team Blue.</span>").fadeIn("slow")
                    }
                    $( "#slider-range-min" ).slider().slider( "option", "max", 0 );
                    $( "#slider-range-min" ).slider().slider( "option", "value", 0 );
                }
            } else {
                $("#betstatus").hide().html(varAlert).fadeIn("slow")
            } if (x == 1) {
                updateData();
            }
        }
    })
}

function updateData() {
    $.ajax({
        type: "get",
        url: "../zdata.json",
        contentType: "application/json; charset=utf-8",
        data: "",
        dataType: "json",
        cache: "false",
        timeout: 20000,
        success: function (data) {
            if (betstate == "locked") {            
                $("#sbpbettors1").html('<span class="redtext">'+data.p1name+'</span><div id="sbpbetlisthl1" style="border-top: 1px solid rgb(176, 68, 68);"></div><div id="sbpbetlist1" style="border-top: 1px solid rgb(176, 68, 68);"></div>');
                $("#sbpbettors2").html('<span class="bluetext">'+data.p2name+'</span><div id="sbpbetlisthl2" style="border-top: 1px solid rgb(2, 81, 155);"></div><div id="sbpbetlist2" style="border-top: 1px solid rgb(2, 81, 155);"></div>');
                getOdds();
                var watch = JSON.parse(localStorage.getItem("watch"));
                if ( watch === null) {
                    watch = ["kdt"];
                }
                var p1wager = data.p1total.replace(/,/g , "");
                var p2wager = data.p2total.replace(/,/g , "");
                var p1 = ([],[]);
                var p2 = ([],[]);
                $.each( data, function(i, val){
                    var z = 0;
                    $.each( watch, function(i, v){
                        if( v === val.n ){ z = 1 };
                    });
                    if(val.p == 1){
                        var tempArr = [val.w, val.b, val.n, val.g, val.r, z];
                        p1.push(tempArr);
                    }
                    if(val.p == 2){
                        var tempArr = [val.w, val.b, val.n, val.g, val.r, z];
                        p2.push(tempArr);
                    }            
                });
                p1.sort(function(a,b) {return b[0]-a[0];});
                p2.sort(function(a,b) {return b[0]-a[0];});
                var odd=true;
                var hlodd=true;
                $.each( p1, function(i, val) {
                    var name = '<strong>'+val[2]+'</strong>';
                    var dash = '<span class="redtext"> - </span>';
                    var wager = '<span class="greentext">$'+abbrNum(val[0], 1)+'</span>';
                    var percent = (val[0]/val[1])*100
                    var postwager = '<span class="greentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                    var gain = Math.ceil((parseInt(val[0])/parseInt(p1wager))*parseInt(p2wager));
                    if( val[0] == val[1] ){
                        postwager = '<span class="greentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                    }  
                    var img = '<img src="../images/ranksmall/rank'+val[4]+'.png" class="levelimage">';
                    var cssClass = '';
                    if( val[2] == $("a").eq(3).text() ) {
                        $( "#lastbet" ).html( '$'+val[0]+' on <span class="redtext">'+data.p1name+'</span>');
                        if( parseInt(p1wager) > parseInt(p2wager) ){
                            $( "#odds" ).html('<span class="redtext">' + (p1wager/p2wager).toFixed(1) + '</span>:<span class="bluetext">1</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        } else {
                            $( "#odds" ).html( '<span class="redtext">1</span>:<span class="bluetext">' + (p2wager/p1wager).toFixed(1) +'</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        }
                    };
                    if (val[4] == 0){ img = ""; }                
                    if(val[3] == 1){ name = '<strong class="goldtext">'+val[2]+'</strong>'; }
                    if( val[5] == 1 ) {
                        hlodd = !hlodd;
                        name = '<strong class="redtext">'+val[2]+'</strong>';
                        if( black == false ){
                            if( hlodd == true){
                                cssClass = "redblackoddhl"
                            } else {
                                cssClass = "redblackevenhl"
                            }
                        } else {
                            wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                            postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                            if( val[0] == val[1] ){
                                postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                            } 
                            if( hlodd == true){
                                cssClass = "redwhiteoddhl"
                            } else {
                                cssClass = "redwhiteevenhl"
                            }
                        }
                        $("#sbpbetlisthl1").append('<div class="'+val[2]+' bar '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                            if ($.inArray( val[2], watch) == -1){
                                watch.push( val[2] );
                                localStorage["watch"] = JSON.stringify(watch);
                                updateData();
                            } else {
                                var index = watch.indexOf( val[2] );
                                if (index > -1) {
                                    watch.splice(index, 1);
                                    localStorage["watch"] = JSON.stringify(watch);
                                }
                                updateData();
                            }
                        });
                    } else {
                        odd = !odd;
                        if( black == false ){
                            if( odd == true){
                                cssClass = "redblackodd"
                            } else {
                                cssClass = "redblackeven"
                            }
                        } else {
                            if(val[3] == 1){ name = '<strong class="ngoldtext">'+val[2]+'</strong>'; }
                                wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                                postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                                if( val[0] == val[1] ){
                                    postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                                } 
                                if( odd == true){
                                    cssClass = "redwhiteodd"
                                } else {
                                    cssClass = "redwhiteeven"
                                }
                        }
                        $("#sbpbetlist1").append('<div class="'+val[2]+' bar '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                            if ($.inArray( val[2], watch) == -1){
                                watch.push( val[2] );
                                localStorage["watch"] = JSON.stringify(watch);
                                updateData();
                            } else {
                                var index = watch.indexOf( val[2] );
                                if (index > -1) {
                                    watch.splice(index, 1);
                                    localStorage["watch"] = JSON.stringify(watch);
                                }
                                updateData();
                            }
                        });
                    }
                });
                $.each( p2, function(i, val) {            
                    var name = '<strong>'+val[2]+'</strong>';
                    var dash = '<span class="bluetext"> - </span>';
                    var wager = '<span class="greentext">$'+abbrNum(val[0], 1)+'</span>';
                    var gain = Math.ceil((parseInt(val[0])/parseInt(p2wager))*parseInt(p1wager));
                    var percent = (val[0]/val[1])*100
                    var postwager = '<span class="greentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                    if( val[0] == val[1] ){
                        postwager = '<span class="greentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                    }   
                    var img = '<img src="../images/ranksmall/rank'+val[4]+'.png" class="levelimage">';
                    var cssClass = '';
                    if( val[2] == $("a").eq(3).text() ) {
                        $( "#lastbet" ).html( '$'+val[0]+' on <span class="bluetext">'+data.p2name+'</span>');
                        if( parseInt(p1wager) > parseInt(p2wager) ){
                            $( "#odds" ).html('<span class="redtext">' + (p1wager/p2wager).toFixed(1) + '</span>:<span class="bluetext">1</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        } else {
                            $( "#odds" ).html( '<span class="redtext">1</span>:<span class="bluetext">' + (p2wager/p1wager).toFixed(1) +'</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        }
                    };
                    if (val[4] == 0){ img = ""; }                
                    if(val[3] == 1){ name = '<strong class="goldtext">'+val[2]+'</strong>'; }
                    if( val[5] == 1 ) {
                        hlodd = !hlodd;
                        name = '<strong class="bluetext">'+val[2]+'</strong>';
                        if( black == false ){
                            if( hlodd == true){
                                cssClass = "blublackoddhl"
                            } else {
                                cssClass = "blublackevenhl"
                            }
                        } else {
                            wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                            postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                            if( val[0] == val[1] ){
                                postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                            } 
                            if( hlodd == true){
                                cssClass = "bluwhiteoddhl"
                            } else {
                                cssClass = "bluwhiteevenhl"
                            }
                        }
                        $("#sbpbetlisthl2").append('<div class="'+val[2]+' bar '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                            if ($.inArray( val[2], watch) == -1){
                                watch.push( val[2] );
                                localStorage["watch"] = JSON.stringify(watch);
                                updateData();
                            } else {
                                var index = watch.indexOf( val[2] );
                                if (index > -1) {
                                    watch.splice(index, 1);
                                    localStorage["watch"] = JSON.stringify(watch);
                                }
                                updateData();
                            }
                        });
                    } else {
                        odd = !odd;
                        if( black == false ){
                            if( odd == true){
                                cssClass = "blublackodd"
                            } else {
                                cssClass = "blublackeven"
                            }
                        } else {
                            if(val[3] == 1){ name = '<strong class="ngoldtext">'+val[2]+'</strong>'; }
                            wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                            postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                            if( val[0] == val[1] ){
                                postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                            } 
                            if( odd == true){
                                cssClass = "bluwhiteodd"
                            } else {
                                cssClass = "bluwhiteeven"
                            }
                        }
                        $("#sbpbetlist2").append('<div class="'+val[2]+' bar '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                        if ($.inArray( val[2], watch) == -1){
                            watch.push( val[2] );
                            localStorage["watch"] = JSON.stringify(watch);
                            updateData();
                        } else {
                            var index = watch.indexOf( val[2] );
                            if (index > -1) {
                                watch.splice(index, 1);
                                localStorage["watch"] = JSON.stringify(watch);
                            }
                            updateData();
                        }
                        });
                    }
                });
                $( "#sbpbettorscount" ).html('Salty Bettors : <strong>' + (p1.length+p2.length) +'</strong> (<strong class="redtext">' + p1.length + '</strong> | <strong class="bluetext">'+p2.length+'</strong>)</br>');
                state="locked";
                
                //vanilla
                /*$("#lastbet").hide().html("N/A").fadeIn("slow");
                if (typeof data[u] != "undefined") {
                    lastWager = data[u]["w"];
                    lastPlayer = data[u]["p"];
                    if (p1to >= p2to) {
                        odds = ('<span class="redtext">' + (Math.round((p1to / p2to) * 10) / 10) + "</span>:1")
                    } else {
                        odds = ('1:<span class="bluetext">' + (Math.round((p2to / p1to) * 10) / 10) + "</span>")
                    }
                    payout = (data[u]["p"] == "1" ? ((lastWager / p1to) * p2to) : ((lastWager / p2to) * p1to));
                    payout = Math.ceil(payout);
                    $("#odds").html(odds + ' (<span class="greentext">$' + (payout || 0) + "</span>)");
                    (lastPlayer == "1" ? $("#lastbet").hide().html("$" + lastWager + ' on <span class="redtext">' + p1n + "</span>").fadeIn("slow") : $("#lastbet").hide().html("$" + lastWager + ' on <span class="bluetext">' + p2n + "</span>").fadeIn("slow"))
                }
                $("#sbettorscount").html("");
                $("#sbettors1").hide().html('<span class="redtext"><strong>' + p1n + '</strong></span><div id="bettors1"></div>').fadeIn("slow");
                $("#sbettors2").hide().html('<span class="bluetext"><strong>' + p2n + '</strong></span><div id="bettors2"></div>').fadeIn("slow");
                var bettors = [];
                var count = 0;
                var level;
                var mylevel;
                var levelimage;
                for (var p in data) {
                    bettors[+p] = data[p];
                    if (data[p] != null) {
                        if (data[p]["w"] != null) {
                            count++
                        }
                    }
                }
                bettors.sort(function (a, b) {
                    return parseFloat(b.w) - parseFloat(a.w)
                });
                $("#sbettorscount").html("Salty Bettors:<strong> " + count + "</strong><br/>");
                $.each(bettors, function (i, v) {
                    if (bettors[i] != null) {
                        levelimage = "";
                        level = bettors[i]["r"];
                        if (data[u] != null) {
                            if (data[u]["n"] == bettors[i]["n"]) {
                                mylevel = level
                            }
                        }
                        if (level > 0) {
                            levelimage = '<img src="../images/ranksmall/rank' + level + '.png" class="levelimage">'
                        }
                        if (bettors[i]["p"] == "1") {
                            $("#bettors1").append(levelimage + "<p><strong " + (bettors[i]["g"] == 1 ? 'class="goldtext"' : "") + ">" + bettors[i]["n"] + '</strong> <span class="redtext">-</span> <span class="greentext">$' + bettors[i]["w"] + "</span> <span"  + (bettors[i]["w"] == bettors[i]["b"] ? ' class="redtext"' : "") +  ">(" + (Math.ceil((bettors[i]["w"] / bettors[i]["b"]) * 100))  + "%)</span></p>")
                        } else {
                            if (bettors[i]["p"] == "2") {
                                $("#bettors2").append(levelimage + "<p><strong " + (bettors[i]["g"] == 1 ? 'class="goldtext"' : "") + ">" + bettors[i]["n"] + '</strong> <span class="bluetext">-</span> <span class="greentext">$' + bettors[i]["w"] + "</span> <span" + (bettors[i]["w"] == bettors[i]["b"] ? ' class="redtext"' : "") +  ">(" + (Math.ceil((bettors[i]["w"] / bettors[i]["b"]) * 100))  + "%)</span></p>")
                            }
                        }
                    }
                })
            } else {
                if (typeof data[u] != "undefined") {
                    balance = data[u]["b"] || 0;
                    $("#balance").hide().html(balance).fadeIn("slow");
                    if (mylevel > 0) {
                        $("#rank").html('<img src="../images/ranksmall/rank' + mylevel + '.png" class="levelimage">')
                    }
                    $("#wager").rules("add", {
                        max: balance
                    })
                    
                }
            }*/
        }
        }
    });
}

function buttonPress( p ) {
        if (betstate == "locked") {
            console.log("Bets are locked.")
        } else {
            if (isNaN(Number($("#wager").val())) == true) {
                console.log("Please enter a number.")
            } else {
                var selectedPlayer = p;
                $("#selectedplayer").val(selectedPlayer);
                if(selectedPlayer === 'player1')
                {
                    $("#lastbet").hide().html('<img src="../images/loadred.GIF">').fadeIn("slow")
                } else if(selectedPlayer === 'player2') {
                    $("#lastbet").hide().html('<img src="../images/loadblue.GIF">').fadeIn("slow")
                }
                if (Number($("#wager").val()) > Number(bal)) {
                    console.log(Number($("#wager").val())+" > "+Number(bal))
                    console.log("You don't have enough Salty Bucks.")
                } else {
                    $('#hoverbuttonred').fadeOut("slow");$('#hoverbuttonblue').fadeOut("slow");
                    $("#fightcard").submit();
                    return false;
                }
            }
        }    
}

//Button colouring events
function callback(i){
    return function(){
    localStorage["sbbtnrh"+i] = $("#rhex").val();
    localStorage["sbbtnbh"+i] = $("#bhex").val();  
    makeButtons();
    }
}

//Button set to $ Events
function callbackDol(i){
    return function(){
        console.log(i);
        localStorage["sbbtn"+i+"val"] = $("#betinp").val();  
        localStorage["sbbtn"+i+"typ"] = "$";
        $( "#betinp" ).focus();
        makeButtons();
    }
}

//Button set to % Events
function callbackPer(i){
    return function(){
        localStorage["sbbtn"+i+"val"] = $("#betinp").val();  
        localStorage["sbbtn"+i+"typ"] = "%";
        $( "#betinp" ).focus();
        makeButtons();
    }
}

//Buttons quick-bet red Events
function callbackRed(i){
    return function(){
        if( localStorage["sbbtn"+i+"typ"] == "$"){
            var salt=parseInt(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseInt($("input#wager").val()) + parseInt(salt) | 0); } else {  $("input#wager").val(parseInt(salt) | 0); }
            //document.getElementsByName("player1")[0].click();
        } else {
            var pct=parseFloat(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseFloat($("input#wager").val()) + parseFloat(bal,10)*pct/100 | 0); } else {  $("input#wager").val(parseFloat(bal,10)*pct/100 | 0); console.log(bal);}
            //document.getElementsByName("player1")[0].click();
        }
        if(parseInt($("input#wager").val()) > parseInt(bal)){
                $("input#wager").val(bal);
        }
        buttonPress( 'player1' );
        //document.getElementsByName("player1")[0].click();
    }
}

//Buttons quick-bet blueEvents
function callbackBlu(i){
    return function(){
        if( localStorage["sbbtn"+i+"typ"] == "$"){
            var salt=parseInt(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseInt($("input#wager").val()) + parseInt(salt) | 0); } else {  $("input#wager").val(parseInt(salt) | 0); }
        } else {
            var pct=parseFloat(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseFloat($("input#wager").val()) + parseInt(bal)*pct/100 | 0); } else {  $("input#wager").val(parseFloat(bal)*pct/100 | 0); console.log(bal); }
        }
        if(parseInt($("input#wager").val()) > parseInt(bal)){
            $("input#wager").val(bal);
        }
        buttonPress( 'player2' );
        //document.getElementsByName("player2")[0].click();
    }        
}

//Events to hide/show buttons when you click on p1/p2name
$("#p1name").click( function(e) {
    localStorage["buttons"] = localStorage["buttons"]^1
    $( "#redsbbuttonblock" ).fadeToggle("slow");
    $( "#blusbbuttonblock" ).fadeToggle("slow");
});

$("#p2name").click( function(e) {
    localStorage["buttons"] = localStorage["buttons"]^1
    $( "#redsbbuttonblock" ).fadeToggle("slow");
    $( "#blusbbuttonblock" ).fadeToggle("slow");
});

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Check if Opera/non-chrome blink based browser
var isFirefox = typeof InstallTrigger !== 'undefined';
// Check if Firefox
var isChrome = !!window.chrome && !isOpera;
// Check if Chrome

if ( localStorage.getItem("watch") === null || localStorage.getItem("watch") === "undefined" ) {
    var watch = ["kdt"];
} else {
	if( isFirefox == true){
		var watch = JSON.parse(localStorage.getItem("watch"));	
	} else {
    		var watch = JSON.parse(window.localStorage["watch"]);
	}
}

//Main init after loading NOTY, as most things crash if loaded before this library
requireNOTY("http://planetbanhammer.com/noty-2.2.1/js/noty/jquery.noty.js");

//variable declarations
var xmlhttp;
var hidden = false;
var info;

var p1name;
var p1id;
var p1tier;
var p1totalmatches;
var p1wins;
var p1winrate;
var p1life;
var p1meter;
var p2name;
var p2id;
var p2tier;
var p2totalmatches;
var p2wins;
var p2winrate;
var p2life;
var p2meter;
var p1log = "";
var p2log = "";

var p1w;
var p2w;

var oldStatus;
var newStatus;

var left;
var right;
var bottom;

var lastBet;
var oldRank;
var newRank;

var lastAnnounce;

var waiting = false;
var waitinghb = false;
var waitinglb = false;

var zdata;
var obj;

var g;

var lastBetInfo;

var version = "SaltyBet+ v2.0.13";
// Remember to increment
// x.y.z.a Format
// x = Major Release
// y = New Feature
// z = Feature updates, such as additional buttons etc.
// a = Minor bugfix

var black;

var stop = false;
var noti = true;

var pan = false;

var state;

function getLastBet(){
    var xmlhttp = new XMLHttpRequest();
    
            xmlhttp.onreadystatechange=function()
            {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                var html = xmlhttp.responseText;
                var start = html.indexOf('<td>')+4;
                var end = html.indexOf("</td>", start);
                event = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                match = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                wager = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                winner = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                payout = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                time = html.substring(start,end);
                
                lastBetInfo = '$'+wager + " (" + match + ") <br /> $"+payout + " ("+oldRank+" -> "+newRank+")";
                
                if(lastBet === time){
                    
                } else {
                    if(payout != '') {
                        if(payout > 0){
                            if( noti === true ){
                                //var first = noty({layout: 'topRight', text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: 2500, type: 'success'});
                            }
                            //var second = $("#chatWrapper").noty({text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: false, force: true, type: 'success'});
                        } else {
                            if( noti === true ){
                                //var first = noty({layout: 'topRight', text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: 2500, type: 'warning'});
                            }
                            //var second = $("#chatWrapper").noty({text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: false, force: true, type: 'warning'});
                        }
                            lastBet = time;
                            localStorage["lastBet"] = lastBet;
                            oldRank = newRank;
                    }
                }
                
                localStorage["oldRank"] = oldRank;
            }            
            };
            xmlhttp.open("GET", "http://www.saltybet.com/stats?mystats=1", true);
            xmlhttp.send();
}

function getRealtime() {
    $.ajax({
        type: "get",
        url: "/ajax_get_stats.php",
        data: "",
        dataType: "json",
        cache: "false",
        timeout: 50000,
        success: function (data) {
            p1log = "";
            p2log = "";
           p1name = data.p1name;
           p1totalmatches = data.p1totalmatches;
           p1winrate= data.p1winrate;
           p1tier = data.p1tier;
           p1life = data.p1life;
           p1meter = data.p1meter;

           p2name = data.p2name;
           p2totalmatches = data.p2totalmatches;
           p2winrate = data.p2winrate;
           p2tier = data.p2tier;
           p2life = data.p2life;
           p2meter = data.p2meter; 
            
           $( "#sbpbettorscounts" ).remove();
           $("#sbpbettors1s").html('<div style="border-top: 1px solid rgb(176, 68, 68);"><h1 style="text-align:center">' + p1totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p1winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p1tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p1life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p1meter +'</h1><p style="text-align:center">METER</p></div>');
           $("#sbpbettors2s").html('<div style="border-top: 1px solid rgb(2, 81, 155);"><h1 style="text-align:center">' + p2totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p2winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p2tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p2life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p2meter +'</h1><p style="text-align:center">METER</p></div>');            
           $( "#p1log" ).load("http://www.saltybet.com/compendium?tier="+tier[p1tier]+"&character="+id1+" #charlog");
           $( "#p2log" ).load("http://www.saltybet.com/compendium?tier="+tier[p2tier]+"&character="+id2+" #charlog");
           console.log("http://www.saltybet.com/compendium?tier="+tier[p1tier]+"&character="+id1);
           console.log("http://www.saltybet.com/compendium?tier="+tier[p2tier]+"&character="+id2);
        },
        error: function(){
            if( noti === true ){
                var first = noty({layout: 'topRight', text: 'Error: getRealTime request failed', timeout: 2500, type: 'error'});
            }
            var second = $("#chatWrapper").noty({text: 'Error: getRealTime request failed', timeout: false, force: true, type: 'error'});
        }
    });
}

function getStats() { 
            if ( g === true ){
                getRealtime();
            }
}             

function updateStats() {
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var html = xmlhttp.responseText;
            var start = html.indexOf("#", html.indexOf("#", html.indexOf("#")+5 )+5)-1;
            var end = html.indexOf(")", start)+1;
            
            oldRank = $('#leaderboardrank').text().replace(/[ ,#()]/g, '');
            console.log(oldRank);
            newRank = html.substring(start+2,end-1);
            console.log(newRank);
            jQuery({aniRank: oldRank}).animate({aniRank: newRank}, {
                duration: 1500,
                easing:'easeOutExpo', // can be anything
                step: function() {
                    $('#leaderboardrank').text(" (#"+comma(Math.ceil(this.aniRank))+")");
                },
                complete: function() {
                    $('#leaderboardrank').text(" (#"+comma(newRank)+")");
                }                
            });
            //$("#leaderboardrank").html(" " + html.substring(start,end));
            newRank = html.substring(start+2, end-1)
            
            start = html.indexOf('<span id="rank" class="nomargin">')+33;
            end = html.indexOf("</span>", start);
            if ( $( "#rank" ).html() !== html.substring(start, end) ) {
                $( "#rank" ).html(html.substring(start, end));
            }
        }
    };
    
    xmlhttp.open("GET", "http://www.saltybet.com/leaderboard", true);
    xmlhttp.send();
}

function insert(element, array){
    array.push(element);
    array.sort(function(a,b) {return a-b});
    return array;
}

function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (var i=3; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < 3)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}

function togPan(){
    pan = !pan;
    makeButtons();
    updateState();
    if( pan == true){
        $( '#bottomcontent' ).css("min-height", "1px");
        $( '#bottomcontent' ).css("height", "81px");
        $( '#bottomcontent' ).css("bottom", "0px");
        $( '.betcard' ).addClass("short");
        $( '#options' ).removeClass("short");
        $( '#stream' ).css("bottom", "81px");
        
        $( '#status' ).fadeOut("fast");
        $( '#footer' ).fadeOut("fast");
        $( '.betcard .left br' ).eq(1).hide();
        $( '.betcard .right br' ).eq(1).hide();
        //$( '.field' ).addClass("hidden");
    } else {
        $( '#bottomcontent' ).css("min-height", "1px");
        $( '#bottomcontent' ).css("height", "171px");
        $( '#bottomcontent' ).css("bottom", "45px");
        $( '.betcard' ).removeClass("short");
        $( '#stream' ).css("bottom", "215px");
        
        $( '#status' ).css("display", "block");
        $( '#footer' ).css("display", "block");
        $( '.betcard .left br' ).eq(1).show();
        $( '.betcard .right br' ).eq(1).show();
        //$( '.field' ).removeClass("hidden");
    }
    if(localStorage["buttons"] === 1){
        $( "#redsbbuttonblock" ).css("display", "none");
        $( "#blusbbuttonblock" ).css("display", "none");
    }
    setAspectRatioSBP();
    //$(window).trigger('resize');
}

function getOdds(){
    if($( "#odds").text() === "N/A"){
        p1w = parseInt($( "#player1wager").text().replace(/,/g, '').substring(1) );
        p2w = parseInt($( "#player2wager").text().replace(/,/g, '').substring(1) );
        
        if( p1w > p2w ){
            $( "#odds" ).html('<span class="redtext">' + (p1w/p2w).toFixed(1) + '</span>:<span class="bluetext">1</span>');
        } else {
            $( "#odds" ).html( '<span class="redtext">1</span>:<span class="bluetext">' + (p2w/p1w).toFixed(1) +'</span>');
        }
    }   else    {
    }
}

function getAnn(){
    /*$.ajax({
        url: "http://www.planetbanhammer.com/sb+.js",
        dataType: "script",
        async: false,
        success: function () {
            if(sbplusid != lastAnnounce){
                announce();
                lastAnnounce = sbplusid;
                localStorage["lastAnnounce"] = lastAnnounce;
            }
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
    
    window.setTimeout(getAnn, 5000);*/
}

function toggleWideScreen(){
    if(hidden===false){
        $("#sbettorswrapper").hide();
        $("#chatWrapper").hide();
    } else {
        $("#sbettorswrapper").show();
        $("#chatWrapper").show();
    }
    if(hidden) { hidden = false; } else { hidden = true; }
}

function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

function toggleBlack(){
    black = !black;
    $('style:first').remove();
    if( black === true ){
        $( 'head' ).prepend('<style> body ::-webkit-scrollbar { width: 12px;}  ::-webkit-scrollbar-track { background-color: #212121 !important; }::-webkit-scrollbar-thumb { background-color: #cdcdcd !important; } ::-webkit-scrollbar-thumb:hover { background-color: #dddddd !important; } </style>');
        $( 'body' ).css({"background-color": "#212121", "color": "#CDCDCD"}); 
        $( '#status' ).css({"background": "linear-gradient(#414141,#252525)", "color": "rgb(187, 187, 187)"});
        $( '#logo ').eq(0).html('<img src="http://www.planetbanhammer.com/images/smallogo.png">');
        $( 'body' ).addClass('black-bar').removeClass('white-bar');
    } else {
        $( 'head' ).prepend('<style> body ::-webkit-scrollbar { width: 12px;}  ::-webkit-scrollbar-track { background-color: #FFFFFF !important; }::-webkit-scrollbar-thumb { background-color: #212121 !important; } ::-webkit-scrollbar-thumb:hover { background-color: #424242 !important;} </style>');
        $( 'body' ).css({"background-color": "", "color": ""});
        $( '#status' ).css({"background": "linear-gradient(#FFFFFF,#E6EAED)", "color": "rgb(0, 0, 0)"});
        $( '#logo ').eq(0).html('<img src="http://www.planetbanhammer.com/images/smallogo2.png">');
        $( 'body' ).removeClass('black-bar').addClass('white-bar');    }
    
    //console.log(black);
    localStorage["black"] = black;
}

function toggleNoti(){
    noti = !noti;
    localStorage["NOTIFICATIONS"] = noti;
    if ( noti === true ){
        var first = noty({layout: 'topRight', text: 'Pop-ups have been enabled!', timeout: 2500, type: 'success'});
    } else {
        var first = noty({layout: 'topRight', text: 'Pop-ups have been disabled!', timeout: 2500, type: 'success'});
    }
    getStats();
}

function makeButtons(){
    $( '#blusbbuttonblock').remove();
    $( '#redsbbuttonblock').remove();
    $( '#hoverbuttonred' ).html("");
    $( '#hoverbuttonblue' ).html("");
    $( '.betbuttonblue' ).parent().parent().parent().append('<div id="blusbbuttonblock" class="left"></div>');    
    $( '.betbuttonred' ).parent().parent().parent().append('<div id="redsbbuttonblock" class="right"></div>');
    
    if(pan == false){    
    makeButton("sbbtn10val", "sbbtn10typ", "btn10", 40, localStorage['sbbtnrh10'], localStorage['sbbtnbh10']);
    makeButton("sbbtn11val", "sbbtn11typ", "btn11", 40, localStorage['sbbtnrh11'], localStorage['sbbtnbh11']);
    makeButton("sbbtn12val", "sbbtn12typ", "btn12", 40, localStorage['sbbtnrh12'], localStorage['sbbtnbh12']);
    makeButton("sbbtn7val", "sbbtn7typ", "btn7", 40, localStorage['sbbtnrh7'], localStorage['sbbtnbh7']);
    makeButton("sbbtn8val", "sbbtn8typ", "btn8", 40, localStorage['sbbtnrh8'], localStorage['sbbtnbh8']);
    makeButton("sbbtn9val", "sbbtn9typ", "btn9", 40, localStorage['sbbtnrh9'], localStorage['sbbtnbh9']);
        makeHoverButton("sbbtn4val", "sbbtn4typ", "btn4", 40, localStorage['sbbtnrh4'], localStorage['sbbtnbh4']);
        makeHoverButton("sbbtn5val", "sbbtn5typ", "btn5", 40, localStorage['sbbtnrh5'], localStorage['sbbtnbh5']);
        makeHoverButton("sbbtn6val", "sbbtn6typ", "btn6", 40, localStorage['sbbtnrh6'], localStorage['sbbtnbh6']);
        makeHoverButton("sbbtn1val", "sbbtn1typ", "btn1", 40, localStorage['sbbtnrh1'], localStorage['sbbtnbh1']);
        makeHoverButton("sbbtn2val", "sbbtn2typ", "btn2", 40, localStorage['sbbtnrh2'], localStorage['sbbtnbh2']);
        makeHoverButton("sbbtn3val", "sbbtn3typ", "btn3", 40, localStorage['sbbtnrh3'], localStorage['sbbtnbh3']);
    } else {
        makeNonHoverButton("sbbtn7val", "sbbtn7typ", "btn7", 90, localStorage['sbbtnrh7'], localStorage['sbbtnbh7']);
        makeNonHoverButton("sbbtn8val", "sbbtn8typ", "btn8", 90, localStorage['sbbtnrh8'], localStorage['sbbtnbh8']);
        makeNonHoverButton("sbbtn9val", "sbbtn9typ", "btn9", 90, localStorage['sbbtnrh9'], localStorage['sbbtnbh9']);
        makeHoverButton("sbbtn4val", "sbbtn4typ", "btn4", 40, localStorage['sbbtnrh4'], localStorage['sbbtnbh4']);
        makeHoverButton("sbbtn5val", "sbbtn5typ", "btn5", 40, localStorage['sbbtnrh5'], localStorage['sbbtnbh5']);
        makeHoverButton("sbbtn6val", "sbbtn6typ", "btn6", 50, localStorage['sbbtnrh6'], localStorage['sbbtnbh6']);
        makeHoverButton("sbbtn1val", "sbbtn1typ", "btn1", 40, localStorage['sbbtnrh1'], localStorage['sbbtnbh1']);
        makeHoverButton("sbbtn2val", "sbbtn2typ", "btn2", 40, localStorage['sbbtnrh2'], localStorage['sbbtnbh2']);
        makeHoverButton("sbbtn3val", "sbbtn3typ", "btn3", 40, localStorage['sbbtnrh3'], localStorage['sbbtnbh3']);
    }
    updateState();
}

function m(n,d){
x=(''+n).length,
p=Math.pow,
d=p(10,d)
x-=x%3
if( n < 1000) return n;
return Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3]}

function shadeColor(color, percent) {   
    var num = parseInt(color,16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

function makeNonHoverButton(button, buttontype, id, height, rh, bh){

	value= localStorage[button];
	type = localStorage[buttontype];

	if(value===undefined)
		value=10;
        
    if(type===undefined)
        type = "$";
    localStorage[button] = value;
    localStorage[buttontype] = type;
	// HTML injection
    if( type == "$"){
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    }
}

function makeHoverButton(button, buttontype, id, height, rh, bh){

	value= localStorage[button];
	type = localStorage[buttontype];

	if(value===undefined)
		value=10;
        
    if(type===undefined)
        type = "$";
    localStorage[button] = value;
    localStorage[buttontype] = type;
	// HTML injection
    if( type == "$"){
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    }
}

function makeButton(button, buttontype, id, height, rh, bh){
	value= localStorage[button];
	type = localStorage[buttontype];

	if(value===undefined)
		value=10;
        
    if(type===undefined)
        type = "$";
    localStorage[button] = value;
    localStorage[buttontype] = type;
	// HTML injection
    if( type == "$"){
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    }
}

function makeColButton( ele, id, value, height, width, rr, rg, rb){
    $(ele).prepend('<div style="height:'+height+'px; float:left; padding-bottom:12px; padding-left:5px;"><button style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center !important; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7) !important;" name="" type="submit" value="'+value+'" class="newsmbetbuttonred" id="'+id+'">SET!</button></div> ');
}    

function requireUI(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {            
            if( localStorage["top"] === 'undefined' || localStorage["left"] === 'undefined' ){
                localStorage["top"] = "41px;"
                localStorage["left"] = "66%";    
            }
    
            $( 'body' ).append('<div id="options" class="betcard redborder" style="position: absolute;top: '+localStorage["top"]+'px;left: '+localStorage["left"]+'px;width:300px;height:auto;display: none;color: white;">\
            \
            <div id="hovergen" style="clear:both;">\
                <div id="gentext"style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>General Options</span></div>\
                <div id="geninput" style="text-align:center;display: none;">\
                </div>\
                <div id="genselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;">\
                    <button id="toggle">Toggle Notifications</button></br>\
                    <button id="toggleButtons">Toggle Hover Buttons</button></br>\
                </div>\
            </div>\
            \
            \
            <div id="hoverthm" style="clear:both;">\
                <div id="thmtext"style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>Theme Options</span></div>\
                <div id="thminput" style="text-align:center;display: none;">\
                <span>Just Kidding! Not implemented yet</span>\
                </div>\
                <div id="thmselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;"></div>\
            </div>\
            \
            <div id="hoverbetinp" style="clear:both;cursor:pointer">\
                <div id="bettext"style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>Bet Button Options</span></div>\
                <div id="betinput" style="text-align:center;display: none;">\
                    <input style="margin-left:auto;margin-right:auto;font-size: 1.4em;width: 60%;border: 2px solid #D14836;border-radius: 10px;background: rgb(99, 99, 99);color: white;outline: none;}" id="betinp"; type="text"><br/>\
                </div>\
                <div id="betselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;">\
                <div id="dolwrap" style="float:left;">\
                    <div id="doltext "style="text-align:center;border-bottom: 1px solid #D14836;margin-bottom:5px;"><span>Dollar Buttons</span></div>\
                    <div id="dolselect" style="margin-left:auto;margin-right:auto;width: 230px;"></div>\
                </div><div id="perwrap" style="float:left;">\
                    <div id="pertext "style="text-align:center;border-bottom: 1px solid #025199;margin-bottom:5px;"><span>Percent Buttons</span></div>\
                    <div id="perselect" style="margin-left:auto;margin-right:auto;width: 230px;"></div>\
                </div>\
                </div>\
            </div>\
            \
            <div id="hovercolour" style="clear:both;">\
            <div id="colourtext"  style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>Colour Options</span></div>\
            <div id="colourinput" style="text-align:center;display: none;">\
            <input style="margin-left:auto;margin-right:auto;font-size: 1.4em;width: 60%;border: 2px solid #D14836;border-radius: 10px;background: rgb(99, 99, 99);color: white;outline: none;}" id="rhex" value="b04444" type="text"><br/>\
            <input style="margin-left:auto;margin-right:auto;font-size: 1.4em;width: 60%;border: 2px solid #025199;border-radius: 10px;background: rgb(99, 99, 99);color: white;outline: none;}" id="bhex" value="349EFF" type="text"><br/>\
            </div>\
            <div id="colourselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;"></div>\
            </div>\
            <div style="clear:both;">\
            '+version+'\
            </div>\
            </div>');
            
            for(i = 12; i>0; i--){
                makeColButton("#colourselect", "btn"+i, "SET!", "20", "", 176, 68, 68 );
                makeColButton("#dolselect", "btn"+i+"dol", "SET!", "20", "", 176, 68, 68 );
                makeColButton("#perselect", "btn"+i+"per", "SET!", "20", "", 68, 68, 176 );                 
            }
            //RED: <input style="width:10%;" type="text" id="rr"> <input style="width:10%;" type="text" id="rg"> <input style="width:10%;" type="text" id="rb"><br/>\
            //BLUE:<input style="width:10%;" type="text" id="br"> <input style="width:10%;" type="text" id="bg"> <input style="width:10%;" type="text" id="bb">\
            //<input name="but1" type="button" value="1" class="" id="but1"><input name="but2" type="button" value="2" class="" id="but2"><input name="but3" type="button" value="3" class="" id="but3"><input name="but4" type="button" value="4" class="" id="but4"><input name="but5" type="button" value="5" class="" id="but5"><input name="but6" type="button" value="6" class="" id="but6"><br/>\
            //<input name="but7" type="button" value="7" class="" id="but7"><input name="but8" type="button" value="8" class="" id="but8"><input name="but9" type="button" value="9" class="" id="but9"><input name="but10" type="button" value="10" class="" id="but10"><input name="but11" type="button" value="11" class="" id="but11"><input name="but12" type="button" value="12" class="" id="but12">\
            
    
            $( "#options" ).draggable();
            $( "#options" ).on( "dragstop", function( event, ui ) {
                localStorage["top"] = $( "#options" ).position().top;
                localStorage["left"] = $( "#options" ).position().left;
            });

            makeButtons();    
            $(".betcard").eq(0).prepend('<div id="hoverred" class="right" style="height: 95%;"><input name="player1" type="submit" value="" class="newbetbuttonred" id="redbtn0"><div id="hoverbuttonred" style="position:absolute;bottom:0px;left:33%;margin:0px;padding:5px;width:230px;height:auto !important;z-index:1;display: none;" class="betcard left redborder"></div></div>');
            $(".betcard").eq(2).prepend('<div id="hoverblu" class="left" style="height: 95%;"><input name="player2" type="submit" value="" class="newbetbuttonblue" id="bluebtn0"><div id="hoverbuttonblue" style="position:absolute;bottom:0px;right:33%;margin:0px;padding:5px;width:230px;height:auto !important;z-index:1;display: none;" class="betcard right blueborder"></div></div>');
                
            /*$('#hoverred').live({
                mouseenter: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').removeClass('hidden'); } }, 
                mouseleave: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').addClass('hidden'); } }
            });*/
            
            
            $('#gentext').on("mousedown",
                function(){$('#geninput').slideToggle("fast"); $('#genselect').slideToggle("fast");}
            );
            //.on( "mouseleave", function(){$('#geninput').slideToggle("fast"); $('#genselect').slideToggle("fast"); });
            
            $('#thmtext').on("mousedown", function(){$('#thminput').slideToggle("fast"); $('#thmselect').slideToggle("fast");});
            //.on( "mouseleave",                function(){$('#thminput').slideToggle("fast"); $('#thmselect').slideToggle("fast");            });
            
            $('#bettext').on("mousedown", function(){$('#betinput').slideToggle("fast"); $('#betselect').slideToggle("fast");});
            //.on( "mouseleave", function(){$('#betinput').slideToggle("fast"); $('#betselect').slideToggle("fast");});
            
            $('#colourtext').on("mousedown",function(){$('#colourinput').slideToggle("fast"); $('#colourselect').slideToggle("fast");})
            //.on( "mouseleave", function(){$('#colourinput').slideToggle("fast"); $('#colourselect').slideToggle("fast");});
            
            
            $('#hoverred').on("mouseenter",
                function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').fadeIn("slow");}
            }).on( "mouseleave",
                function(){ $('#hoverbuttonred').fadeOut("slow");});
            
            $('#hoverblu').on("mouseenter",
                function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonblue').fadeIn("slow");}
            }).on( "mouseleave",
                function(){$('#hoverbuttonblue').fadeOut("slow");});
            
            $('#fightcard').on( "click", "#redbtn0" ,function(){
                buttonPress( 'player1' );
            });
            
            $('#fightcard').on( "click", "#bluebtn0" ,function(){
                buttonPress( 'player2' );
            });
            
            
$("#fightcard").on('submit', function( e ){
    e.preventDefault();
    $.ajax({
        type: "post",
        url: "../ajax_place_bet.php",
        data: $("form").serialize(),
        success: function () {
            console.log("YAY");
        },
        error: function(){
            console.log("NAY");
        }
    });
    return false;
});
            
            $("ul:first").append("<li><button id='optionsbut'>+</button></li>");
            document.getElementById('optionsbut').onclick = function(){ $("#options").toggle(); };
            document.getElementById('toggle').onclick = toggleNoti;
            document.getElementById('toggleButtons').onclick = function() {hover = !hover; localStorage['sbHover'] = hover;}
            for( i = 1; i < 13; i++){
                $('body').on( "mousedown", '#btn'+i, callback( i ) );
                $('body').on( "mousedown", '#btn'+i+'dol', callbackDol( i ) );
                $('body').on( "mousedown", '#btn'+i+'per', callbackPer( i ) );
                //document.getElementById('but'+i+'dol').onclick = callbackDol( i );
                //document.getElementById('but'+i+'per').onclick = callbackPer( i );
                $('body').on( "mousedown", '#redbtn'+i, callbackRed( i ) );
                $('body').on( "mousedown", '#blubtn'+i, callbackBlu( i ) );
            }
            makeButtons();
            $(window).resize(setAspectRatioSBP);
        }, 
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

function requireJQUERY(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () { 
            requireUI("http://code.jquery.com/ui/1.10.3/jquery-ui.js");    
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}
    
function requireNOTY(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {
        if( localStorage["black"] === undefined){
            black = false; 
        } else { 
            black = !JSON.parse(localStorage["black"]);
        }
        
    $( "label:first" ).after('<input type="radio" id="chatPlus" name="radio" style="position:relative; width: inherit;" class="ui-helper-hidden-accessible"><label for="chatPlus" class="ui-state-active ui-button ui-widget ui-state-default ui-button-text-only ui-middle" role="button" aria-disabled="false" aria-pressed="false"><span class="ui-button-text">+</span></label>')
    $( "#chatRadio" ).buttonset("destroy");
    $( "#chatRadio" ).buttonset();
    $( "#chatWrapper" ).prepend('<iframe id="chatframePlus" width="325" style="float: right; display: block;" frameborder="0" scrolling="no" class="chat_embed" src="http://twitch.tv/chat/embed?channel=SaltyBetPlus&amp;popout_chat=true" "=""></iframe>');
    $( "#chatframePlus" ).hide();
    $( "#chatPlus" ).click(function(){ chat = "on"; $( "#chatframeStream").hide(); $( "#chatframePlus").show(); $( "#videoEmbed" ).css({"margin":"","right":"","left":""}); setAspectRatioSBP(); });
    //$( "#chatframeStream" ).hide();    
        
    $("ul li:first ").append('<h2><a href="http://www.saltybet.com/leveling" class="menu" target="_blank">'+$("a").eq(2).html()+'</a><a href="http://www.saltybet.com/options" target="_blank">'+$("a").eq(3).html()+'</a><span id="leaderboardrank"> (#0)</span></h2>');
    $("ul li h2:first").html("");
    //$( '#wagerwrapper .menu' ).addClass("hidden");   
    //$( '#lastbet' ).css("display", "none");
    $( 'head' ).prepend('<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/themes/base/jquery-ui.css" type="text/css" media="all" />');
    $( 'head' ).prepend('<style>    #wagerwrapper br {        display: none;    }    .goldborder {        border: 1px solid darkgoldenrod !important;        border-top-color: darkgoldenrod !important;        border-top-style: solid;        border-top-width: 1px;\border-right-color: darkgoldenrod !important;        border-right-style: solid;        border-right-width: 1px;        border-bottom-color: darkgoldenrod !important;        border-bottom-style: solid;        border-bottom-width: 1px;        border-left-color: darkgoldenrod !important;\border-left-style: solid;        border-left-width: 1px;}</style>');
    $( 'head' ).prepend('<style>.newbetbuttonred, .newbetbuttonblue{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;    padding: 4px;    -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 140px;    height:100%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);    background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-repeat: repeat-x;     background: rgb(176, 68, 68) url(../images/bet1.png) no-repeat center center;    -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) url(../images/bet1.png) no-repeat center center;}    .newbetbuttonred:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.newbetbuttonblue:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>.newsmbetbuttonred, .newsmbetbuttonblue{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;   -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 70px;    height:100%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);    background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-repeat: repeat-x;     background: rgb(176, 68, 68) no-repeat center center;    -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newsmbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) no-repeat center center;}    .newsmbetbuttonred:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.newsmbetbuttonblue:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>.bar{overflow-x:hidden;border-bottom: 1px solid rgb(0, 0, 0) !important;padding-left: 5px !important;padding-right: 5px !important;margin-right: -10px !important;padding-top: 2px !important;padding-bottom: 3px !important;line-height: 16px !important;box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.04) inset !important;}</style>');
    $( 'head' ).prepend('<style>.blublackodd {background-color:#DCDCDC;} .blublackeven {background-color:#CCCCCC;} .bluwhiteodd {background-color:#212121;} .bluwhiteeven {background-color:#313131;}</style>');
    $( 'head' ).prepend('<style>.redblackodd {background-color:#DCDCDC;} .redblackeven {background-color:#CCCCCC;} .redwhiteodd {background-color:#212121;} .redwhiteeven {background-color:#313131;}</style>');
    $( 'head' ).prepend('<style>.blublackoddhl {background-color:#DDDDDD;} .blublackevenhl {background-color:#EEEEEE;} .bluwhiteoddhl {background-color:#111111;} .bluwhiteevenhl {background-color:#161616;}</style>');
    $( 'head' ).prepend('<style>.redblackoddhl {background-color:#DDDDDD;} .redblackevenhl {background-color:#EEEEEE;} .redwhiteoddhl {background-color:#111111;} .redwhiteevenhl {background-color:#161616;}</style>');
    $( 'head' ).prepend('<style>div:hover p{display : block;}</style>')
    //$( 'head' ).prepend('<style>.smredbutton, .smblubutton{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;    padding: 4px;    -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 70px;    height:40%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);  -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) url(../images/bet1.png) no-repeat center center;}    .smredbutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.smblubutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>#p1name, #p2name {font-size: 1.0em !important;} p {font-size: .7em !important;margin: 0;line-height: 26px;}</style>');
    $( 'head' ).prepend('<style>.hidden {display: none !important;}</style>');
    $( 'head' ).prepend('<style>.short {height: 35px !important;}</style> .pointer {cursor: pointer;} ');
    $( 'head' ).prepend('<style>.greybutton {background: rgb(66, 66, 66) no-repeat center center !important;  box-shadow: 0px 9px 0px rgba(33, 33, 33, 1), 0px 9px 25px rgba(0,0,0,.7) !important;}</style>');
    $( 'head' ).prepend('<style>.greyerbutton {background: rgb(66, 66, 66) url(../images/bet1.png) no-repeat center center !important;  box-shadow: 0px 9px 0px rgba(33, 33, 33, 1), 0px 9px 25px rgba(0,0,0,.7) !important;}</style>');
    $( 'head' ).prepend('<style>.ngreentext {color: #54870F !important;}</style>');
    $( 'head' ).prepend('<style>.ngoldtext {color: #F4E790 !important;}</style>');
    //$( 'head' ).prepend('<style>#hoverbuttonred, #hoverbuttonblue {display: none !important;} {display: none !important;}</style>');
    //$( 'head' ).prepend('<style>#hoverbuttonred {display: none; } #hoverred:hover ~ #hoverbuttonred {display: block !important;}</style>')
    $( 'head' ).prepend('<style>.redbutton {font-size: 14px;letter-spacing: 1px;font-weight: bold;cursor: pointer;color: white;position: relative;display: block;margin-right:5%;-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;-webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);width: 45%;height: 35px;text-align: center;border: none;background-color: rgb(176, 68, 68);background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;background-repeat: repeat-x;background: rgb(176, 68, 68) no-repeat center center;-webkit-transition: all .1s ease;-moz-transition: all .1s ease;-ms-transition: all .1s ease;-o-transition: all .1s ease;transition: all .1s ease;margin-bottom:5px;}.blubutton{-webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);background-color: rgb(52, 158, 255);background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));background-repeat: repeat-x;background: rgb(52, 158, 255)  no-repeat center center;width: 45%;height: 35px;text-align: center;border: none;-webkit-transition: all .1s ease;-moz-transition: all .1s ease;-ms-transition: all .1s ease;-o-transition: all .1s ease;transition: all .1s ease;font-size: 14px;letter-spacing: 1px;font-weight: bold;cursor: pointer;color: white;position: relative;display: block;margin-left:5%;-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;margin-bottom:5px;}.redbutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);position: relative;top: 6px;}.blubutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);position: relative;top: 6px;}.protectedred{background-color: rgb(150, 68, 68);-webkit-box-shadow: 0px 9px 0px rgba(101, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(101, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(101, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);}.protectedblu{-webkit-box-shadow: 0px 9px 0px rgba(13, 83, 164, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(13, 83, 164, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(13, 83, 164, 1), 0px 9px 25px rgba(0,0,0,.7);background-color: rgb(52, 128, 205);}.protectedred:active{  -webkit-box-shadow: 0px 3px 0px rgba(101, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(101, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(101, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);}.protectedblu:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 83, 164, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 83, 164, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 83, 164, 1), 0px 3px 6px rgba(0,0,0,.9);}#redsbbuttonblock{padding-bottom:16px;width:230px;height:100%;position: relative;margin-right:0.5%;}#blusbbuttonblock{padding-bottom:16px;width:230px;height:100%;position: relative;margin-left:0.5%;}.bottom{margin-top:12px;position:relative;bottom:12px;}</style>');
    $( 'head' ).prepend('<style>.tipsy { font-size: 12px; position: absolute; padding: 5px; z-index: 100000; }  .tipsy-inner { background-color: #000; color: #FFF; max-width: 200px; padding: 5px 8px 4px 8px; text-align: center; } .tipsy-inner { border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; } .tipsy-arrow { position: absolute; width: 0; height: 0; line-height: 0; border: 5px dashed #000; }  .tipsy-arrow-n { border-bottom-color: #000; }  .tipsy-arrow-s { border-top-color: #000; }  .tipsy-arrow-e { border-left-color: #000; }  .tipsy-arrow-w { border-right-color: #000; }.tipsy-n .tipsy-arrow { top: 0px; left: 50%; margin-left: -5px; border-bottom-style: solid; border-top: none; border-left-color: transparent; border-right-color: transparent; } .tipsy-nw .tipsy-arrow { top: 0; left: 10px; border-bottom-style: solid; border-top: none; border-left-color: transparent; border-right-color: transparent;}.tipsy-ne .tipsy-arrow { top: 0; right: 10px; border-bottom-style: solid; border-top: none;  border-left-color: transparent; border-right-color: transparent;}.tipsy-s .tipsy-arrow { bottom: 0; left: 50%; margin-left: -5px; border-top-style: solid; border-bottom: none;  border-left-color: transparent; border-right-color: transparent; }    .tipsy-sw .tipsy-arrow { bottom: 0; left: 10px; border-top-style: solid; border-bottom: none;  border-left-color: transparent; border-right-color: transparent; }.tipsy-se .tipsy-arrow { bottom: 0; right: 10px; border-top-style: solid; border-bottom: none; border-left-color: transparent; border-right-color: transparent; }  .tipsy-e .tipsy-arrow { right: 0; top: 50%; margin-top: -5px; border-left-style: solid; border-right: none; border-top-color: transparent; border-bottom-color: transparent; }.tipsy-w .tipsy-arrow { left: 0; top: 50%; margin-top: -5px; border-right-style: solid; border-left: none; border-top-color: transparent; border-bottom-color: transparent; }</style>');
    $( 'head' ).prepend('<style>.black-body{background-color: #212121; color: #CDCDCD; } .black-status{background: linear-gradient(#414141, #252525); color: rgb(187, 187, 187);}</style>');
    $( 'head' ).prepend('<style> body ::-webkit-scrollbar { width: 12px;}  ::-webkit-scrollbar-track { background-color: #FFFFFF !important; }::-webkit-scrollbar-thumb { background-color: #212121 !important; } ::-webkit-scrollbar-thumb:hover { background-color: #424242 !important;} </style>');
    $( 'head' ).prepend('<style> .options{ position: absolute; top: 41px; right: 0px; width: 30%; height: 500px;}</style>');
    $( 'head' ).prepend('<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">');
    toggleBlack();
    $("#logo").removeAttr("href");
    $( "#chat" ).css("background-color", "#CDCDCD");
    $( "#status" ).css("height", "25px");
    //$( '#logo ').html('<img src="http://www.planetbanhammer.com/images/smallogo2.png">');
    $( '#sbettorswrapper' ).css({'overflow-y': 'auto'});
    
    $( ".greentext" ).addClass( "ngreentext" );
    $( ".menu" ).addClass( "ngreentext" );

    $("#sbettorswrapper").append('<div id="sbpbettorscount"></div><div id="sbpbettors1" style="width:50%; display:block; float:left;"></div><div id="sbpbettors2" style="width:50%; display:block; float:right;"></div>');
    $( "#sbettorscount" ).remove();
    $("#sbettors1").remove();
    $("#sbettors2").remove();    
    $( ".betbuttonred" ).hide();
    $( ".betbuttonblue" ).hide();
    
    document.getElementById('logo').onclick = toggleBlack;
    //document.getElementById('notification').onclick = notyOptions;
    //$(".betcard.left.redborder").append('<div id="redinfo" class="left" style="margin-left:25px;text-align:center;"></div>');   
    //$(".betcard.right.blueborder").append('<div id="blueinfo" class="right" style="margin-right:25px;text-align:center;"></div>');  


            lastBet = localStorage["lastBet"];
            oldRank = localStorage["oldRank"];
            lastAnnounce = localStorage["lastAnnounce"];
            if( localStorage["NOTIFICATIONS"] === undefined ){
                noti = true;
            } else {
                noti = JSON.parse(localStorage["NOTIFICATIONS"]);
            }
            
            if( localStorage["sbHover"] === undefined ){
                hover = false;
                localStorage["sbHover"] = hover;
            } else {
                hover = JSON.parse(localStorage["sbHover"]);
            }
           
            //require("https://raw.github.com/jaz303/tipsy/master/src/javascripts/jquery.tipsy.js");
            //require("https://raw.github.com/needim/noty/master/js/noty/layouts/top.js");
            //require("http://planetbanhammer.com/inline.js");
            //require("http://planetbanhammer.com/bottomLeft.js");
            //require("http://planetbanhammer.com/topRight.js");
            //require("http://planetbanhammer.com/default.js");
            requireJQUERY("http://code.jquery.com/jquery-1.9.1.js");
            
            /*$( 'body' ).prepend('<div id="dialog" title="Options">\
                    <p>Colour Scheme</p>\
                    <div id="radio">\
                        <input type="radio" id="radio1" name="radio"><label for="radio1">Black</label>\
                        <input type="radio" id="radio2" name="radio" checked="checked"><label for="radio2">White</label>\
                    </div>\
                </div>');
                
            $( "#radio" ).buttonset();
            $( "#radio1" ).click(function() { black = true; toggleBlack(); });
            $( "#radio2" ).click(function() { black = false; toggleBlack(); });
            $( "#dialog" ).dialog();*/
            
            $("ul:first").append('<li id="pan"><img src="http://planetbanhammer.com/images/pan.png"></li>');
            document.getElementById('pan').onclick = togPan;
            getAnn();
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

console.log(version+" Loaded");
