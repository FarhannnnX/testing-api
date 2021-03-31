const express = require("express");
const router = express.Router();
const dir = process.cwd();

const {
  whois
} = require(dir + "/function/lainya");
const {
  igStalk,
  igDownload
} = require(dir + "/function/ig");
const {
  getApk,
  searchApk
} = require(dir + "/function/rexdl");
const {
  artiNama,
  artiMimpi,
  ramalJodoh,
  nomorHoki
} = require(dir + "/function/primbon");
const {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pTikTok,
  pDoubleHeart,
  pCoffeCup
} = require(dir + "/function/photooxy");
const {
  ytdl
} = require(dir + "/function/yt");

const listkey = ["test", "pikey", "ads"];

router.post("/key", (req, res) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.send({
      msg: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.send({
      msg: 'berhasil mendaftarkan apikey'
    });
  }
});

router.get("/key", (req, res) => {
  const key = req.query.key;
  if(listket.includes(key)) {
    res.send('apikey terdaftar');
  } else {
    res.send('apikey tidak terdaftar');
  }
});

router.get("/", (req, res) => {
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.cookie('some_cross_domain_cookie', 'http://api.masagus.space', { domain: 'api.masagus.space', encode: String });
  res.sendfile(dir + "/public/index.html");
});

router.get("/primbon/artinama", (req, res) => {
  const nama = req.query.q;
  artiNama(nama)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/primbon/artimimpi", (req, res) => {
  const mimpi = req.query.q;
  artiMimpi(mimpi)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/primbon/jodoh", (req, res) => {
  const nama1 = req.query.nama1;
  const nama2 = req.query.nama2;
  ramalJodoh(nama1, nama2)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/primbon/nomor-hoki", (req, res) => {
  const nomor = req.query.nomor || req.query.q || req.query.nomer
  nomorHoki(nomor)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/ig/stalk", (req, res) => {
  const username = req.query.u || req.query.username || req.query.user || req.query.q;
  igStalk(username)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/ig/download", (req, res) => {
  const url = req.query.url || req.query.link;
  igDownload(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/whois", (req, res) => {
  const domain = req.query.q || req.query.domain;
  whois(domain)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/rexdl/search", (req, res) => {
  const apkname = req.query.q;
  searchApk(apkname)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/rexdl/get", (req, res) => {
  const url = req.query.url;
  getApk(url)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/photooxy/shadow", (req, res) => {
  const text1 = req.query.text1;
  pShadow(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/romantic", (req, res) => {
  const text1 = req.query.text1;
  pRomantic(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/smoke", (req, res) => {
  const text1 = req.query.text1;
  pSmoke(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/burn-papper", (req, res) => {
  const text1 = req.query.text1;
  pBurnPapper(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/naruto", (req, res) => {
  const text1 = req.query.text1;
  pNaruto(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/love-message", (req, res) => {
  const text1 = req.query.text1;
  pLoveMsg(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/message-under-grass", (req, res) => {
  const text1 = req.query.text1;
  pMsgGrass(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/tiktok", (req, res) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  pTikTok(text1, text2)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/double-heart", (req, res) => {
  const text1 = req.query.text1;
  pDoubleHeart(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get("/photooxy/coffe-cup", (req, res) => {
  const text1 = req.query.text1;
  pCoffeCup(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.get('/ytdl', (req, res) => {
  const url = req.query.url || req.query.link;
  ytdl(url)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.use(function (req, res, next) {
  res
  .status(404)
  .set("Content-Type", "text/html")
  .sendfile(dir + "/public/404.html");
});

module.exports = router;