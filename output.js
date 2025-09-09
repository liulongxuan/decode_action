//Tue Sep 09 2025 02:21:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  if ("undefined" == typeof $response || 0 === Object.keys($response).length) {
    if (-1 != $request.url.indexOf("/rest/2.0/pcs/file") && -1 != $request.url.indexOf("method=locatedownload")) {
      {
        var c = $request.headers;
        c ? (c.Cookie = "BDUSS=khmSlF3YVhOWjFzR1Q1bmpxd3paVks1NlA5LWlwdFVzTURDV34xQ2dtb3JlT1pvSVFBQUFBJCQAAAAAAQAAAAEAAAAddbqcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvrvmgr675oY;BAIDUID=9481FED957FE66A9892418BF02C5D37F:FG=1;PANPSC=8701629596438590929%3AnHZOtuqy9auq5RMe05lnn1cS2d9ns3O5C61tf8CKQkhmugw7qAyuYA3MPJHnDhkCz81ttRoL0tCAzpMjKfHvSlpTycqKrL7QhSPaGPSGwk9CNDWYUdN3xXW236T0Jqd7BYuwRMPExkvncjoc%2Bq5tcK34yop26WlusG7YZLnfZ%2BWv%2BjYtLTMR3k7lFdQwCLYSwGAdcgrxQsE7r%2BPehKJmBl9l5VLCkYtGk92zS0zIOrEcqOaOlONF0ZKxVlqrIDxM;STOKEN=59784d7120ed68a5785b2220ead3edecfac5ab78a20bfb2c629b228771b35562;BDPP_GID=uC2gEly550h3M9mGyIt1gVEOpxzP_nR3IYum9qiVfWVfoSXyb9eQun5H6NF8H2rYsqTC9GcVfdAGCPmg3K9ewcg;BDPP_NDID=uC2gEly550h3M9mGyIt1gVEOpxzP_nR3IYum9qiVfWVfoSXyb9eQun5H6NF8H2rYsqTC9GcVfdAGCPmg3K9ewcg;ndut_fmt=D85EAE2C801931A68DFD679CB55D001A2993AFB643E57BF5FC67B177EDF4B7A6;ND_FTID=v1TX8VIPQGMj6YAvowepgeLS+DPkC94l/J436V6ZMs80/Qv4yVbHCwhwLXNMujjQnwUaFEdtzUaAhyC/4p8iuOmUIvJUrkeXpDzJsuqnwQM=", $done({
          headers: c
        })) : $done({});
      }
    } else {
      $done({});
    }
  } else {
    if (-1 != $request.url.indexOf("/membership/user")) {
      $done({
        body: "{\"currenttime\":1573473597,\"request_id\":7501873289383875000,\"product_infos\":[{\"product_id\":\"5310897792128633390\",\"end_time\":32493834549,\"buy_time\":\"1417260485\",\"cluster\":\"offlinedl\",\"start_time\":1417260485,\"detail_cluster\":\"offlinedl\",\"product_name\":\"gz_telecom_exp\"},{\"product_name\":\"svip2_nd\",\"product_description\":\"超级会员\",\"function_num\":0,\"start_time\":1553702399,\"buy_description\":\"\",\"buy_time\":1417260485,\"product_id\":\"1\",\"auto_upgrade_to_svip\":0,\"end_time\":32493834549,\"cluster\":\"vip\",\"detail_cluster\":\"svip\",\"status\":0}],\"reminder\":{\"reminderWithContent\":[],\"advertiseContent\":[]}}"
      });
    } else {
      if (-1 != $request.url.indexOf("/user/getinfo")) {
        {
          var d = JSON.parse($response.body);
          d.records[0].nick_name = "t.me/GieGie777";
          d.records[0].priority_name = "t.me/GieGie777";
          d.records[0].avatar_url = "https://zhongdu.oss-cn-beijing.aliyuncs.com/app/20250723/17532551159065978.jpg";
          var f = JSON.stringify(d);
          var g = {
            body: f
          };
          $done(g);
        }
      } else {
        $done({});
      }
    }
  }
})();