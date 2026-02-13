//Fri Feb 13 2026 04:02:20 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
body = $response.body.replace(/\"energy":\d+/g, "\"energy\":0").replace(/\"base":\w+/g, "\"base\":true").replace(/\"isBuy":\w+/g, "\"isBuy\":true").replace(/\"only_vip\":\w+/g, "\"only_vip\":true").replace(/\"energy":\d+/g, "\"energy\":88888").replace(/\"vip_flag":\d+/g, "\"vip_flag\":1").replace(/\"user_type":\d+/g, "\"user_type\":1").replace(/\"name\":\".*?\"/g, "\"name\":\"微信小程序：屌丝博客\"");
$done({
  "body": body
});