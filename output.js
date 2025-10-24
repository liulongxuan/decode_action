//Fri Oct 24 2025 10:07:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ENV = {
  isQX: typeof $task !== "undefined",
  isLoon: typeof $loon !== "undefined",
  isSurge: typeof $httpClient !== "undefined" && !$loon
};
function modifyBody(_0x2195bf) {
  let _0x5ef017 = _0x2195bf.replace(/"video_type":\s*\d+/g, "\"video_type\":0");
  if ($request?.["url"]?.["includes"]("/getAdvertiseList")) {
    try {
      const _0x2e3001 = JSON.parse(_0x5ef017);
      if (_0x2e3001.data) {
        _0x2e3001.data.poster = "https://zdimg.lifeweek.com.cn/app/20251003/17594842473853729.jpg";
        _0x2e3001.data.contract = "https://t.me/GieGie777";
        if (_0x2e3001.data.adList && Array.isArray(_0x2e3001.data.adList)) {
          {
            _0x2e3001.data.adList.forEach(_0x141178 => {
              _0x141178.ad_time = 0;
              _0x141178.close_time = 0;
              _0x141178.poster = "https://zdimg.lifeweek.com.cn/app/20251003/17594842473853729.jpg";
              _0x141178.url = "https://t.me/GieGie777";
            });
          }
        }
      }
      _0x5ef017 = JSON.stringify(_0x2e3001);
    } catch (_0x4061e6) {}
  }
  if ($request?.["url"]?.["includes"]("/getIndexCarouselList")) {
    {
      try {
        {
          const _0x4f1eff = JSON.parse(_0x5ef017);
          _0x4f1eff.data?.["adList"] && (_0x4f1eff.data.adList = []);
          _0x5ef017 = JSON.stringify(_0x4f1eff);
        }
      } catch (_0x23b8b0) {}
    }
  }
  if ($request?.["url"]?.["includes"]("/video/index")) {
    try {
      const _0x1cb3d1 = JSON.parse(_0x5ef017);
      _0x1cb3d1.data?.["suggest"]?.["ad"] && (_0x1cb3d1.data.suggest.ad = {});
      _0x5ef017 = JSON.stringify(_0x1cb3d1);
    } catch (_0x2a5fc5) {}
  }
  if ($request?.["url"]?.["includes"]("/v/index") && !$request?.["url"]?.["includes"]("/getAdvertiseList") && !$request?.["url"]?.["includes"]("/getIndexCarouselList")) {
    try {
      {
        const _0x54997e = JSON.parse(_0x5ef017);
        if (_0x54997e.data) {
          {
            _0x54997e.data?.["suggest"]?.["ad"] && (_0x54997e.data.suggest.ad = {});
            _0x54997e.data?.["cartoon"]?.["ad"] && (_0x54997e.data.cartoon.ad = {});
            _0x54997e.data?.["ad"] && (_0x54997e.data.ad = []);
            if (_0x54997e.data?.["tag"] && Array.isArray(_0x54997e.data.tag)) {
              {
                _0x54997e.data.tag.forEach(_0x4c0d2d => {
                  {
                    _0x4c0d2d?.["ad"] && (_0x4c0d2d.ad = {});
                  }
                });
              }
            }
          }
        }
        _0x5ef017 = JSON.stringify(_0x54997e);
      }
    } catch (_0x1b5ad1) {}
  }
  return _0x5ef017;
}
function main() {
  const _0x1f10c4 = function () {
    {
      let _0xd27a31 = true;
      return function (_0x4ffe27, _0x5346b7) {
        const _0x5c8457 = _0xd27a31 ? function () {
          {
            if (_0x5346b7) {
              const _0x5e38a2 = _0x5346b7.apply(_0x4ffe27, arguments);
              _0x5346b7 = null;
              return _0x5e38a2;
            }
          }
        } : function () {};
        _0xd27a31 = false;
        return _0x5c8457;
      };
    }
  }();
  const _0x2917af = _0x1f10c4(this, function () {
    const _0x234ab7 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    const _0x18bc31 = function () {
      const _0x2201d0 = new _0x234ab7.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !_0x2201d0.test(_0x2917af);
    };
    return _0x18bc31();
  });
  _0x2917af();
  if (!$response) {
    return $done({});
  }
  try {
    $done({
      body: modifyBody($response.body)
    });
  } catch (_0x298074) {
    $done({});
  }
}
ENV.isQX || ENV.isLoon || ENV.isSurge ? main() : $done({});