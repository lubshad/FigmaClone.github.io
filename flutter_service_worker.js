'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "59b2d59d06971198fd14849d69c7d32a",
".git/config": "d8a6e84070a55ffa02c54d6c810d260b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1e6e0e83c6cf1221633a229a0a163280",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "0e07461e91354a2276ef119884edb8ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f61aa0fc80ae96312c727e66d3068ef6",
".git/logs/refs/heads/master": "f61aa0fc80ae96312c727e66d3068ef6",
".git/logs/refs/remotes/origin/master": "a36db194fe239e61775ceb829eba689e",
".git/objects/03/a87b1cfd100e5ee269c989c867aac340802258": "832e264ed26d2502854fc721e07e796a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/85ebef4bd8678290627ddcfe56bdca92d2f42a": "d17a9aacc7e0844c7cc6db89fa75c200",
".git/objects/06/aac84d15683e367bc8a407acf568957c010083": "f165bda671f1fb5126773c3e89c6fc41",
".git/objects/07/9759998b089fa7f4953d772bb3cef2bb56a519": "78f4f46f22c589232f7141ca92128efa",
".git/objects/09/b32a560511ac699e7bb70c98f3d7bbbce4cff7": "ea8e849c04bb54e0bc6bcaf9e62b4f36",
".git/objects/0c/72f1b92c62d7145fb24065de183c05139bfc17": "ce2157dd1ee3fc2826e8d6be6c902a51",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/2de911910635f8df61cf47f83c8009e00e362f": "8df508f55d89c2b4a215767327325f5f",
".git/objects/0e/bea4f54a0f64c81ea96e6cfc9542ba4316ce05": "89cfc45d7b84290273547dc525e1ebe7",
".git/objects/0f/6bf6ea69a9e8f60bd7eea023ee242711d677e6": "291e771d6674c80bfb649059433fe33d",
".git/objects/13/8098c7f66a92093f432bf36bad90b11c4f5d72": "547806737d9939523b4cae0b10e69502",
".git/objects/15/2d6f280134556c8e11e1f5b0f33506242958df": "00c94707525b6d80eb87437c802a0c50",
".git/objects/1d/7b40eaeea2e6f810729a588c3ead54a3568ade": "d030eb93e07a30956cf2615d64402988",
".git/objects/1e/f23b63115b13e76657c26840ae14c8a70f07e7": "1af96ccb07765bf1ec1a88c9e3e00359",
".git/objects/24/76d96202c928e4c1a1d0a15f7a77e5c899cbdc": "5c249f313aa4d637d88cb0a036a54d60",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/3975c5b4fb1b83c2873b89523ab877dc365cad": "6972e54eaf52892a6f150dab99cea8b6",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/2b/8c92f2e63f96321e0e55dc3dbbc8cfcc40c9e2": "35ab469a4e8642ee4da46413cd981017",
".git/objects/2c/a2cebc72fee0b68cef936497f8bed60912f971": "7615e2e6eaf490b8c9e5a5dd226fd623",
".git/objects/2d/3e59f364d3c17558e1cf4ba91a4aa79f0e32e9": "2cb53f0e00602cad07cf4f01486a8a6b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/3c914768e8db28c10f1583fea185ae38308bec": "cf2f0a5575d6171279e4f8531ad44eb9",
".git/objects/31/79540e41ad96c63124cf83cfc12655719af227": "7e595bfe1a97c13087514ed32fab2dbc",
".git/objects/32/baf8e1fda38b24b3efbed1b9f4781eb9493fff": "f2c911067ca48d9e2a9dfee456f144b4",
".git/objects/33/e82a686ee4010a18b9ad3c6a1e704a124b4574": "ef5e39f0865dd464f99b5891faab34d8",
".git/objects/35/408cc776739242f4421196b91794cf23d965a0": "a2e10b5e1acb3d73a2763069caccb8bf",
".git/objects/35/b4b539987aa3ad54a7ae5bbdc13d5b59f0fa51": "46808b4b91c800863d3901a6c9bc7346",
".git/objects/37/431fd6c70dd84b14aeae6636c62c949e951480": "87260fb3bc3430e00567b58b50ca5f32",
".git/objects/39/1110cf2ddfd55b52330061591b45ec6c292258": "60e21821e27b4f030e9c7b269c3dc1b3",
".git/objects/3a/0136452c65c3a3bff35a6f6045687c98196b89": "7e9fbce3a72205b27941ed1b83f1d8f0",
".git/objects/3a/0678d60dd552af69a16985d0b538f2ba7a4801": "d141d3c980302285376578f6db4a34fd",
".git/objects/3a/c2830f6f81f2dd3afde9c859c8852a52b2e468": "a8b53d2becaf15b4a5053a0e2e0464ce",
".git/objects/3b/a4aa0e516b9d902c0ed7bd04fe367cf33548ad": "e7bdfb6a8ca17a5b9d1853bfe194b716",
".git/objects/3f/6a7e0a6e6893053bd6f6ecc606a1dfc6256c86": "cab8065390386e5093daa8137b984c2e",
".git/objects/43/f2fc0c80f94b661ece64bfedec9a488ddac40a": "7085479f02963f0c408e7e2e25954e9f",
".git/objects/46/1a13fee639e09dcf5e58acdd89fa9a1c336ae8": "ac8c7a48382b19b6b7e6d74da182c035",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/9d116d6ea8f012a7c7c8ab7a8f5c0868b71682": "b442433f84f3ccdb48794e5d7fc74975",
".git/objects/4a/cb8a1a625cab48d66ea843dbf2473123f802bc": "6ead75e5d5ac57838b78e4f4c5a80306",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/fa25cba3318d3ac8e88b3bf27441d7ff8712ec": "1569b353865a75dca7aa41165cfdc952",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/eef2abe4b3150753ef7988ebd67b26fe7181d7": "61b2d8970c22d1f2532da0025e4f6da1",
".git/objects/56/8793edeeba0156c80e8a7184416bc0afe98bec": "7c6ab6b6822320da3637670904e83f65",
".git/objects/58/c88069311cf73db18442af3f54dcecda8159bc": "dc35143303ba64107f20fc6956c7f3af",
".git/objects/5e/c18c14312b7fe9292bc46bb9edb8316f6df5ac": "95d70a619df5be53f86561a59d7700cc",
".git/objects/60/3cba07c7115b987d45bcf1940a7fbbe2f18913": "ca661fcdbf98f13049abbe003f487b78",
".git/objects/61/cf0dc91e31b90df1d56dd8faf91e0611609da2": "23a6423c4927199be1fd4cecf137fb9d",
".git/objects/63/26a6a1f442e55964e9adf6f57096cf6130febd": "8897dcf958c5eb45854267eaf268d7ee",
".git/objects/69/8012ee2f443016924eb38ef400fef2e802b5e0": "8fbd09ef6cc7871e81a8489bbc712306",
".git/objects/6c/5db61d9a4ae06a159e00b8c74859ef4c571b9c": "52ea93690d18738fa2a70c9e9394055d",
".git/objects/6f/2739ace11af93959d4cf0e9966ddc5b522cec0": "57dea69b52b5d7f92017fd0c53e509bb",
".git/objects/6f/cb436c10848367472b35c8dd2a1e76f9a5e665": "bb6dc9e94f23a18a9f37eaa92bbf2ee8",
".git/objects/73/73dda56844e4c1e6758a7d827989ad07e08b23": "b0716dfa486afa1a67ac8e25515f3114",
".git/objects/75/b56f6e171a477ba1ef4e0f286f5cfb5b7c0168": "d51523c5ca69753ddf774590f286ac8e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/b7bdff9db4c5c204672fcc871ba5d0946a6a9c": "be90a0e864e096ea6bf31ec0f63bd5c9",
".git/objects/87/9fc9cc382275ce21a048ce9f751e2c1e37ba69": "920566fba3fbc093d9c2adb782e3d415",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3073075209b5ce636ea268046c0391e36f0432": "f55778185b970ac4634694c3dac1716e",
".git/objects/93/57efc7f1aae9e124553361e0793e93dac1f183": "5a7cd2e61cf37f9c20c7d60236136bb3",
".git/objects/93/5816af50b3ebf5d5e69911b10bcab688c53858": "652381c61037f84d9b4490196a86b282",
".git/objects/97/1c76b1000d64b98d6676a925504ba992446680": "38e76bc1306c53b279eb5777d829f327",
".git/objects/9b/a9b20a6ca7e6f8ecd6531b638f0a6bb807112b": "d4648e42bab7f36978b5b54016fbbe0a",
".git/objects/9c/1bf92695942d859e696235666e375c51d63030": "bcaa55f27b1bc1fdc83249c0b11796cf",
".git/objects/9f/6a4a2b0b126109a3f39b1c8aa116d28af287a0": "c4be60dccd950ae79c81d2324ab53559",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/18e001f1ca347e3c660755946f517476734c0e": "c9eb15c484ebaf6f9b840d68d18b8bf1",
".git/objects/a6/64c80794b9564fdb74901463f17ad85de6935b": "17bd5b5ea661ad623901b34d2a805e75",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/09226d1de1a3904dc3e85e284b977d9337aaa3": "a3b118f6cee25c3a439a44befe48dd5e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/76239005965808e94b1e286209818df901ee7a": "1e84b9ed72b4c1660523dcf9cc1a0280",
".git/objects/ae/78e40f5a4be4441170103d42d6398449fc9276": "f5c78ce8aa0f4c37eec521198badf142",
".git/objects/b1/15efd15cd10b94329824c00db47ee2d8dfff7a": "60789e510c331b705af4a7ee7bd5236f",
".git/objects/b6/5fe480aeaa8bdd0957db1b680d031ff1ca8ce3": "17647426e2ae2885ec78e8ad45b18e12",
".git/objects/b6/61eb9650e4635a2953346f9d7534e3d768606e": "151c240116ca0b0b4671453a5642ef3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/14f2cef9195bb04f703465c6ecfd4f5ac498bc": "efe8e272f0b67d9a73569d2cfcfaee16",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/cf0c0a78f21c4bd7308426697cc955f22f7520": "163019d96359fb5f22f0108c435e6c25",
".git/objects/bd/25d57612d9dbda1177d6ab0742021da07c6f10": "cf8d3a794d43e51ef35f54960cc9deaa",
".git/objects/bf/066998c55ad43daa8e671a4d6173128ec667b3": "b21916e7addc8077d4c67b864f7f0889",
".git/objects/bf/2818222e2c79fc1de39d712f2bceb135299424": "3ffe69b305354f0cac4ae39313fd7c10",
".git/objects/bf/c16464021387999048fd7c35f2ad9af4c99f82": "b01a59e48f3150fa14492e76cd202a7f",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/d14f2ff9ff56d78b7aceb73b5c3f19e4dbd862": "10dc34486be560a51d2786aec617f5e3",
".git/objects/ca/0022e2cdf6b0790fcfffc716590b7a029bc863": "06d538063849c9571d2fab077bd3d46c",
".git/objects/d1/0d89c24c4a774ffd95c6a7a6debe84b4ad1f75": "3d1d18d3e145d50ec17de2f955b25f0a",
".git/objects/d3/8782f9394f28aacf329a851b7655db2c18908e": "cb52500994e95721a0d09749510d1266",
".git/objects/d3/91f539c6cf6cf7efeb87118ccfb3f9b8bcd8ea": "2ccc76b9090def7c4f7109cfca1df333",
".git/objects/d3/b153eaa24f469ebfffac482d3ef7707146ef2b": "6d272fb12ac1f13fed01c829b6662dae",
".git/objects/d4/c2aeb27e8446e6a52aad7e8250801917737ad2": "822cf6b03298f1ca07c8fc13cf7ce671",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/23933272ea4482f8f795369079ab6ec6ffb15f": "d4d03830e4f2e7f73a93a3f368d5c03f",
".git/objects/e2/0bd00f35e19383ffc8641f6860e3771d26bd80": "864694fbdc01fdf824a28ecc7a8f078a",
".git/objects/e2/5b2b4177a6b7e21f376448a675b7e53a6c5020": "38f8d7a0d85ad95c6196d0df4c83d868",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/99215b2dd5fd038382ed57e5c8b6828dd94bbc": "57d31a4f9436630f96abeeae5f27da63",
".git/objects/e7/bb8e49195e4e5bb659409aaf04b129e673cd64": "2f1c8b4278c861b143bbc97b82575f6b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/3164f12250c317ec0f97e5a321974f6d0c072c": "31dacdcff061dfe6d460ee815ee54ac4",
".git/objects/f0/7e8befd0fb872577f382fa7f2f7e532c2c4b78": "3ccc7fb5daea63c7926975930c309ce6",
".git/objects/f1/6b6de40a83c979d0f9b71b9ed99a845d9d8b79": "58c45893ff9a13fb598ae90c561dd46a",
".git/objects/f8/79b7a6b1481ababae459f7d980ea5ef6fec3be": "44656f4f96ee725cec5d988647bbef03",
".git/objects/fd/eb6916b6087877009ebee8152c37d695a89905": "e5b5649b36b3911204fad21033b533a4",
".git/objects/ff/ec4d7da05067627ae719e3cca47a25dc1b59fe": "bb7860b213afe3bf7e324524b14f5859",
".git/ORIG_HEAD": "2421511fb7b2b380e3046a98076e2561",
".git/refs/heads/master": "7017ca231f179f97bce56900218ff42c",
".git/refs/remotes/origin/master": "7017ca231f179f97bce56900218ff42c",
"assets/AssetManifest.json": "aff4295ec7471ea1d08f2ad13c2989c1",
"assets/assets/pngs/iphone_13.png": "6f29683558d5d55d6f1bff42fc696258",
"assets/assets/pngs/notch.png": "2ab3e442f228e5e8b14d5b0575bee6d6",
"assets/assets/svgs/fixing.svg": "b508973163d9c47e55d60aeaa07ab2da",
"assets/assets/svgs/iphone_13.svg": "22f808d64a3a86e7b12b69ac2a5df6bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "370e9dab90d2b1a25994c9ff1dfaf612",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07f6353eae8dae9bbc8d5cc08fdd3035",
"/": "07f6353eae8dae9bbc8d5cc08fdd3035",
"main.dart.js": "65814df81d1db155cca1cb53d000e720",
"manifest.json": "62a9e15c20916b8c5ec627ca2e6d007a",
"README.md": "352abd6f38177f9f141d1b67483a0830",
"version.json": "5aae4b99d11cbb71f6afd2800ea4df4a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
