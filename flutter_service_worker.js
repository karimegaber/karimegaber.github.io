'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2daa01a6ed6bcc6192869a580ba7deb8",
".git/config": "46fcc95a0b63eded9f97f2aa327de37e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab3e0c9175965116ee8b720434ec7164",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c08098a6abafbd71617a62ad696b78a3",
".git/logs/refs/heads/master": "c08098a6abafbd71617a62ad696b78a3",
".git/logs/refs/remotes/origin/master": "83cae9aeed8b60198259f93e7d345eac",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/02/15c9a2b5f4e9e773202ddcee54e20bf108ded3": "bf7ea9022b183cd04987a3bf107d1801",
".git/objects/04/ac019df85608379893eb3ba513cc24ca50812d": "a47b9ced8951cd7eed146fb22a6b08be",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/14/9c0e39aa68590f833fed35869feec6d3bef5fd": "40602af585715f5d72c6fc8e1eed84e5",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/c571bfff81906724a4cb2d0072c2bb38d2d0de": "6b5f1faeb39478041c49783bf0cc9508",
".git/objects/19/cac7363f8dafea246e3e8868f3139724ba54ce": "8a77b12e1138faff43a830b9867f7794",
".git/objects/1b/c8cd9dc6b5e63c6af1381a6f7c8e6645289f36": "f82a6982cded536b461b130685ef406c",
".git/objects/1d/1ac8bb407e825e1b66ef0b495ee162f2ceac4b": "9a85c26b647d31ded16eb0ce26df8fd9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/ca15bb65e7e586b49fbbb46a49f6eae6bc5a02": "56f21ab2b926ff3a4f2a6df810946875",
".git/objects/21/202c437437fc30087c0d8a2647528248815df2": "1da0d1243209a6bc8260b94e4d2d759d",
".git/objects/24/a2fc74ac8477eeed7ab5c36a8ba90fc832c3a6": "e9082a09d319e265a17bee0594806017",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/545de6bc1a9a66142e3fb5c9688ec96c2dca42": "aefa16d76621d206696b353630d2d0e9",
".git/objects/2c/35e4d87e49f4850ccd7bf16ac8a60ee9a5146e": "0150e761700a2051cadc43a038f39280",
".git/objects/2c/67d5d1713494cb3a489d50e1284975983d0397": "ec73d079abefce5edf1c2b9664ecbea5",
".git/objects/2e/8b7b4d951edad9325c8fe496978a0c77e9e7a3": "b8489537f5b94caf5d594de8fb3159c6",
".git/objects/2f/1d929e1bdd6cb7f631ddaa4b891c4cee8248d3": "cf22365cc4caff533d8064bbc1d12d18",
".git/objects/34/4f3523b6efdcdff4cf4b644504ffb31c820fa6": "306023d0eb4259a3d7a4bad1131f55cc",
".git/objects/37/6e4e9ea1547bc8bbf99123222e3d2ad3b28c04": "7ebc099592b38dc8ddc577852c7835e6",
".git/objects/3b/34cb3a3c7e4dd5e2704d7d90dc810314ea25fb": "e221d1c34ad8984e7511c534fa5db664",
".git/objects/3c/40958c4632c774465438a8c698c90cdebc704d": "c50c99833b74d6cfff948eacec53796f",
".git/objects/49/1040c3bf834a3818dedd4074933d358045cffd": "dcb99e47f2c5d8a24faf40492057c890",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/48109094a25e82c57f731f84515ff563431887": "abf5621566d23208441d303522ea1b65",
".git/objects/55/12e226b4c2232c0f32856849f719fa7d58a2cd": "554f02df993a8665373ac4a382a49b06",
".git/objects/59/d9bd08dfbb9379f8e838e77ee6884043adc254": "3e938d313ec4fb9901d83ca1c600ec99",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/62/0949b1f1a0cd741fdf1be6491408ccd18b693b": "d15d8bf224a112766b7be210dd899afd",
".git/objects/6b/d1e5891fb51e100a6832efc298061b928b2b71": "bf7f7a5b26036e740972e2589bd8f89c",
".git/objects/6d/fc4be48f24241ac5f557f147141cc14b865678": "f7812f22947fc81eacd4959ed8ee41e5",
".git/objects/6e/8f0443c2590bd013bf0309ba77c40fb62ac899": "1e44789c381289d4cd38ef93a2d958bc",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/563489a114e579cd311f23292b6df49fcbbea2": "09afce9a2e92cd5d87fe582e5d07113d",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/0693836737c08a1ab5957eac623115eb2d8ae6": "44277e7f054ac5d6b84085abf806486d",
".git/objects/7d/69075492283bfd710957b24e1b41721143e19d": "a7263ac32116db3cd29f2e32c42d5b8c",
".git/objects/7f/1f2aa1dd416cfe3fa93347d45c5f375fe921d1": "2ba648c79ae9a1594ab0b58fd85762e3",
".git/objects/81/5bb0a2fe4d24e0776e02e7b7fdf47d13942b65": "2c174066281100118a5a1f5e0821b3e0",
".git/objects/81/6ae3b8732055569171b7990451b03be77261b7": "7e99682f08fa2c286192ae9da61b30b6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/89/6209f0a85cc2b1642a965c9eacdcf2421eef7d": "329313a3795d4644fd3b89cfd9caefe9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f033ad6b76f4ae53f46c8486e56fa2be7c6b93": "372a559052e9d9b55f4725fdfe579eb9",
".git/objects/8c/098a30a4bbb04fe7003a9fc687abaafd8b45ee": "b8a4b5a1dfc482585e7204792d7116c9",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/ba9860e20e89be2abf6073f10899ea85ad0a4a": "50224a2dcc4f237750699e4ca9703c15",
".git/objects/9a/6355cb30c2e3cf551b5c216f5d381d7f78d140": "bf74824a55beb6f6d7ba6f87f94cccb3",
".git/objects/9a/eb030a750a4d3261498fdf76c2be67c057a894": "6b28447185723a49c4ec48847323e214",
".git/objects/9b/936f26289dd9441653ad3fdf2c8a7a2a76d796": "57ffeb857866f33a092149efbddfabc4",
".git/objects/9d/f0f9043c93a2ab18c007b68c8a30cf45641fd3": "a50bf4341105ed0feff48e066b82f591",
".git/objects/a1/4fffe55de6f133d500a165968de92c6112cce0": "b6639a2012b9e33d5c319a63312edf1b",
".git/objects/a5/5aa405ee490c99ff9d84bca26a530c56d9adaf": "f68270a850b204ce465213c5b320912b",
".git/objects/ad/1209aba2c30afc2aa28414a6c3fffd95f1cb2f": "e2796eb75332e31fadd5a923c98df994",
".git/objects/ad/fd1e50231381c53882faf376f78184a8391a3e": "218a753f2eade7effe7647a8180aff2f",
".git/objects/af/2c2392b8534f079a1cbb46c54c94a035bdaf61": "b2969d19f0b460c98c9b10bad3f857d4",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/a08de461c2db995d018a0cfbaf2ad5edfc00c5": "b05d273e6a335f4db9ba1bf33a439f59",
".git/objects/b3/9a7d145b22e5b3e3ea11eb61028701c74a5ad8": "f835084084895b82d99203a8b3cc3749",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b9/e3ea0d4888a66dcff70f17ce1ed59ae8049b6e": "b3ad5d2f42be200dbfcfc55bc02974dd",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/1e5f9186d75e4f1114049dbc4d591a9894057c": "316127124a30b6d54662a8821075e653",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/474d49d78f897fb6ea3005019be397de216794": "93fb311a50bb90dec18e8f6f24d938a5",
".git/objects/cc/bba8a93d662e4540eeda1f588e6d8be642355a": "9176198c1bcceb7f343f3bccadc24495",
".git/objects/cf/87649c5e408e6b8baeac810fc0064e935847dd": "8326acebe150b3f8252b642394ecf9a7",
".git/objects/d1/bf35fdca9ed01d5c8f611caf0ecde9492f7fb0": "0819ded1f42fe6306f994426f7ce6a81",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3ab3ad978ec2bca113f80f286145f027148f80": "d443787339f2b992ebd8e4c53f3e509e",
".git/objects/d6/cb973b66b935bbf8755187dc102c32d6c391ea": "368480e69d97f57927ef3070c0c3b57a",
".git/objects/d7/14e8b4b4294df701d0f3b5b95049ea80d1c43d": "f65f7a0320e0557203895030cbdfaea0",
".git/objects/d8/efc9a943b7b084db2b777008fd6b82ba47f483": "4a7713828b15c61fd2d35547a9692106",
".git/objects/d9/347afaaa66939b84f496c051c5d0692e644ce1": "d0750dcd329c2d65f33998ece42feb25",
".git/objects/d9/8519aebf41487473af705553478078b7ddc08c": "8de681e18792c7fc7408695dc821f744",
".git/objects/e7/47b420283a0aa80db8797afad400893d9e5975": "f292c9382132e03f47317a70748bd01e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/f4f750438b1c626c8af3232fa92b2d720c72ae": "53d479b963613d5ce641a7018ad8d129",
".git/objects/f0/4aa5996f290ea053275cbfd0d9df72e6d2011d": "824d42a873215b297f8785c11ff7a469",
".git/objects/f0/5f1db1c8f528fc29ba8813be05d5c1452ccb3b": "996e47c6b01b86e4716f31e7e8698ee3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c04d888e0dc0ec802189bbbd1c2235b8e72711": "6841538f8aa5a067cd8e7a313f5fe2ed",
".git/objects/f6/65f3cdbe2a9e5b06960361569c3851b5cea3f2": "0de2ba5ef00feea5eb147c9babc263a3",
".git/objects/f7/635f747bae7d69e953566b47abfcc3f86519c6": "d8de0c534258b04c0bfafe23575c0b0b",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/refs/heads/master": "7f86fa6088bc8ebc15f78bb2fb189cca",
".git/refs/remotes/origin/master": "7f86fa6088bc8ebc15f78bb2fb189cca",
"assets/AssetManifest.bin": "468260f0e42944c90c59558ed6e66b18",
"assets/AssetManifest.bin.json": "caf6a8fb6db659e86f259cd8e24615db",
"assets/AssetManifest.json": "34a1d2c410e281621f2802acf4d74219",
"assets/assets/files/Karim%2520Gaber%2520Flutter%2520Developer%2520CV.pdf": "ca1ffb23a971fe4dd2d2b7eb833175bd",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/MaterialIcons-Regular.otf": "200a1d852fcd010ebfe71f6300025a1f",
"assets/assets/icons/android.svg": "21adcf318482abebd68c34d937d92af6",
"assets/assets/icons/apple.svg": "ee597c6de7e2151393e6136ea13005c3",
"assets/assets/icons/barbell.svg": "188c2392d551b376f06cf99578aec944",
"assets/assets/icons/book.svg": "828599dc7886c171a008d0d8ede6ac91",
"assets/assets/icons/briefcase.svg": "242da72785b69cf07813995246160c8e",
"assets/assets/icons/call.svg": "139c748540ba7e4f86886089dece09f7",
"assets/assets/icons/home.svg": "c70080e69060dd63e8c02776e2c920e2",
"assets/assets/icons/laptop-outline.svg": "d0a39cf93ebbfe0a717497d10c7791cb",
"assets/assets/icons/logo-github.svg": "77b7892864c4bff358ac48be5666db44",
"assets/assets/icons/logo-linkedin.svg": "63e2027ad3ec33d2394f10c8eafa4223",
"assets/assets/icons/logo-whatsapp.svg": "7dd9357eb09275cea0bad4576d427406",
"assets/assets/icons/moon.svg": "bab0793bea5cee36831785d59fb16e74",
"assets/assets/icons/person.svg": "dd98ebe1becdfffa38f6afce0fdd65d5",
"assets/assets/icons/sunny.svg": "5c90937f84ea76b0c9feb91cb6ed64f2",
"assets/assets/images/png/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/png/home_img.png": "8ff0d2f20496863a3e67a7e51f26ecf4",
"assets/assets/images/png/who_i_am_pic.png": "ae434b0dba6c48f6649d7c8ec601893c",
"assets/FontManifest.json": "0cddc52c133b0737da461c23427c4026",
"assets/fonts/MaterialIcons-Regular.otf": "9f1785ce336486dd5546e09c5d6b03c6",
"assets/NOTICES": "13a8ccfd3431481d67d4255cfd2f7f40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f3f4410553f18d08a08f62943a4018d1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "60b8aff46257f557c2dac56412e6835a",
"icons/android-icon-192x192.png": "2cece4ffb7e7e89440db0436525a8452",
"icons/android-icon-36x36.png": "0ad77ca59c3606dbcb01844f84740f99",
"icons/android-icon-48x48.png": "82f720212a5edb2a8c2f73310a05ccf8",
"icons/android-icon-72x72.png": "89a105cdb56d981860036fbb41967cd8",
"icons/android-icon-96x96.png": "ad6b8d66512622f67aad6c744681425e",
"icons/apple-icon-114x114.png": "32f40425ce17740702e2a43b63541674",
"icons/apple-icon-120x120.png": "263b3c84b50e764516f9d744c6a16d89",
"icons/apple-icon-144x144.png": "59bb085182d6fb0eea3bfb3164480ef7",
"icons/apple-icon-152x152.png": "fa27bc37d3ef1782f06162e6da6a7964",
"icons/apple-icon-180x180.png": "db2d9247b67eddc8a6c0cbe2d4284bb2",
"icons/apple-icon-57x57.png": "d0d64d73c04bc36eb960ae11fa73be0c",
"icons/apple-icon-60x60.png": "9a8f37f0efa2806d36121e95e7404eb4",
"icons/apple-icon-72x72.png": "6211d7a92b62e49f1877c4bf833de97e",
"icons/apple-icon-76x76.png": "4ab3ac9151b8e68d2c7320e20570901a",
"icons/apple-icon-precomposed.png": "d20992463ca4d6c4bf65a35b2ecdb804",
"icons/apple-icon.png": "d20992463ca4d6c4bf65a35b2ecdb804",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "d66d508595e4f9b77aa2281d0a8104da",
"icons/favicon-32x32.png": "957c6dd729c2fc74d4a2e3978cc6cd93",
"icons/favicon-96x96.png": "02f843857002b459acf8805ab4549340",
"icons/favicon.ico": "2c28bdb77b86a24bdcea48a3a79db005",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "59bb085182d6fb0eea3bfb3164480ef7",
"icons/ms-icon-150x150.png": "df242d141d298af8c01fd0727d7ca644",
"icons/ms-icon-310x310.png": "b85cd525573c0c8b96fef86bce3af23a",
"icons/ms-icon-70x70.png": "b155408fe67b92c348abd9344db49d76",
"index.html": "394127518d7f0dd1168297e84f44999e",
"/": "394127518d7f0dd1168297e84f44999e",
"main.dart.js": "4ee933b5715574663f43a4ad6e5190bc",
"manifest.json": "1029c17519c33c4b91ba433abea8cf41",
"version.json": "1b91f299394cac49451d77353326bf85"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
