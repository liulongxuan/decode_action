//Mon Nov 03 2025 03:25:03 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var Baby = JSON.parse($response.body);
!Baby.data && (Baby.data = []);
var featureObjects = [{
  "feature_code": "aicloud-3223-stt",
  "used_val": 0,
  "id": 229696607,
  "expire_time": 253370764800,
  "m_ver": 0,
  "create_time": 1699606502,
  "total_val": 99999,
  "is_expired": 0,
  "pid": 10789
}, {
  "feature_code": "aicloud-3223-tts",
  "used_val": 0,
  "id": 229696603,
  "expire_time": 253370764800,
  "m_ver": 0,
  "create_time": 1699606502,
  "total_val": 99999,
  "is_expired": 0,
  "pid": 10788
}, {
  "feature_code": "consume_device",
  "used_val": 2,
  "id": 229692655,
  "expire_time": 253370764800,
  "m_ver": 0,
  "create_time": 1699606502,
  "total_val": 5,
  "is_expired": 0,
  "pid": 3223
}, {
  "feature_code": "miao-android-effects",
  "used_val": 0,
  "id": 229691675,
  "expire_time": 253370764800,
  "m_ver": 0,
  "create_time": 1699606503,
  "total_val": 0,
  "is_expired": 0,
  "pid": 4394
}, {
  "feature_code": "miao-effects-store",
  "used_val": 0,
  "id": 229691671,
  "expire_time": 253370764800,
  "m_ver": 0,
  "create_time": 1699606502,
  "total_val": 0,
  "is_expired": 0,
  "pid": 10726
}, {
  "feature_code": "miao-pp",
  "used_val": 2,
  "id": 229711371,
  "expire_time": 253370764800,
  "m_ver": 0,
  "create_time": 1699711940,
  "total_val": 0,
  "is_expired": 0,
  "pid": 10768
}];
for (var i = 0; i < featureObjects.length; i++) {
  var found = false;
  for (var j = 0; j < Baby.data.length; j++) {
    if (Baby.data[j].feature_code === featureObjects[i].feature_code) {
      found = true;
      break;
    }
  }
  !found && Baby.data.push(featureObjects[i]);
}
for (var k = 0; k < Baby.data.length; k++) {
  Baby.data[k].expire_time = 253370764800;
}
$done({
  "body": JSON.stringify(Baby)
});