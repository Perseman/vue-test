/**
 * 首页数据接口：
 * 定位接口数据；
 * banner广告数据；
 * 用户个人信息数据；
 * 商家列表接口数据；
 */

var Mock = require("mockjs");

/**
 * 获取定位信息
 */
Mock.mock("/getLocationInfo", {
  data: {
    addresses: [{
      address: "万福中心",
      address_detail: "6楼",
      city_id: 9,
      city_name: "",
      created_at: 1537153503,
      district_id: 502,
      entry_id: 3,
      geohash: 0,
      id: 2500444624577765,
      is_valid: 1,
      name: "一拳超人",
      phone: "13556655127",
      phone_bk: "",
      poi_type: 0,
      sex: 1,
      st_geohash: "wssu0udcv2gr",
      tag: "公司",
      tag_type: 3,
      user_id: 16331100
    }],
    has_address: true,
    type: 2
  },
  code: 0,
  msg: "success"
});

/**
 * 获取4张广告banner图片地址
 *
 */
Mock.mock("/getBannerimgs", {
  data: {
    banner: [
      "http://www.gywfo.com/vueSell_v2/imgs/banners/01.jpg",
      "http://www.gywfo.com/vueSell_v2/imgs/banners/02.jpg",
      "http://www.gywfo.com/vueSell_v2/imgs/banners/03.jpg",
      "http://www.gywfo.com/vueSell_v2/imgs/banners/04.jpg"
    ]
  },
  code: 0,
  msg: "success"
});

/**
 * 获取到商家列表数据
 *
 */
Mock.mock("/getSellers", {
  data: {
    has_next: true,
    items: [{
        restaurant: {
          act_tag: 0,
          imgurl: "http://www.gywfo.com/vueSell_v2/imgs/sellers/seller01.jpg",
          activities: [{
              attribute: '{"34": {"1": 15.0, "0": 0}, "20": {"1": 8.0, "0": 0}, "50": {"1": 22.0, "0": 0}, "70": {"1": 27.0, "0": 0}}',
              description: "满20减8，满34减15，满50减22，满70减27",
              icon_color: "f07373",
              icon_name: "减",
              id: 1898721018,
              is_exclusive_with_food_activity: true,
              name: "自营销复杂满减活动",
              tips: "满20减8，满34减15，满50减22，满70减27",
              type: 102
            },
            {
              description: "特价商品0.01元起",
              icon_color: "f1884f",
              icon_name: "特",
              id: 1343828210,
              name: "单品定价",
              tips: "单品定价"
            },
            {
              attribute: "25.0",
              description: "新用户下单立减25元",
              icon_color: "70bc46",
              icon_name: "首",
              id: 2133010274,
              is_exclusive_with_food_activity: true,
              name: "华北ka直营城市25-17",
              tips: "新用户下单立减25元",
              type: 103
            }
          ],
          address: "福建省福州市闽侯县上街镇建平村金上大道博士后家园05店面",
          authentic_id: 5334529233154456,
          business_info: '{"lemon_support_tags": [{"color": "cce23028", "text": "20减8", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "34减15", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "50减22", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "70减27", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0.01元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减25", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
          closing_count_down: 0,
          delivery_fee_discount: 2,
          description: "",
          distance: 2212,
          favored: false,
          flavors: [{
              id: 209,
              name: "盖浇饭"
            },
            {
              id: 265,
              name: "简餐"
            }
          ],
          float_delivery_fee: 1.1,
          float_minimum_order_amount: 15,
          has_story: false,
          id: "E7449391685367941478",
          image_path: "0e417d524d0c946edc43517f2739947cpng",
          is_new: false,
          is_premium: true,
          is_star: false,
          is_stock_empty: 0,
          is_valid: 1,
          latitude: 26.051301,
          longitude: 119.206181,
          max_applied_quantity_per_order: -1,
          name: "马来一号·海南鸡饭(闽侯大学城店)",
          next_business_time: " 今天10:00",
          only_use_poi: false,
          opening_hours: ["10:00/14:30", "15:30/19:30"],
          order_lead_time: 35,
          out_of_range: false,
          phone: "15659999637",
          piecewise_agent_fee: {
            description: "配送费¥1.1",
            extra_fee: -1.4,
            is_extra: true,
            no_subsidy_fee: "¥3.1",
            rules: [{
              fee: 1.1,
              price: 15
            }],
            tips: "配送费¥1.1"
          },
          platform: 0,
          posters: [],
          promotion_info: "现烹鲜制 ！拒绝料包！品质快餐，无工业料包，未来会一直如此！ 我们坚持做健康餐饮，坚持初心不忘怀。坚持现烹， 每天采购新鲜放心的食材，严格把关精细环节，过不了自己的口就不要卖！ 简单食，健康食，现烹才是硬道理",
          rating: 3.5,
          rating_count: 386,
          recent_order_num: 2555,
          recommend: {
            image_hash: "731111f3f9379e772eedf4855beae8a1jpeg",
            is_ad: false,
            track: '{"rankType":"27"}'
          },
          recommend_reasons: [{
              name: "味道超赞"
            },
            {
              name: "回头客多"
            }
          ],
          regular_customer_count: 0,
          scheme: "https://h5.ele.me/shop/#id=E7449391685367941478",
          status: 5,
          support_tags: [{
            border: "dddddd",
            color: "666666",
            icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            text: "盖浇饭",
            type: 1
          }],
          supports: [{
            border: "90dddddd",
            description: "商家原因导致订单取消，赔付代金券",
            icon_color: "999999",
            icon_name: "赔",
            id: 10,
            name: "拒单赔",
            text_color: "666666",
            two_characters_icon_name: ""
          }],
          target_tag_path: "d53fc0cb4dc67973038cbc591938a1b6png",
          theme: {
            default_color: "2395ff",
            header_style: 0,
            hongbao_style: 0,
            price_color: "ff5339",
            third_tab_name: "商家",
            vanish_fields: []
          },
          type: 0
        }
      },
      {
        restaurant: {
          act_tag: 0,
          imgurl: "http://www.gywfo.com/vueSell_v2/imgs/sellers/seller02.jpg",
          activities: [{
              attribute: '{"130": {"1": 88.0, "0": 0}, "100": {"1": 66.0, "0": 0}, "69": {"1": 44.0, "0": 0}, "46": {"1": 32.0, "0": 0}, "23": {"1": 22.0, "0": 0}}',
              description: "满23减22，满46减32，满69减44，满100减66，满130减88",
              icon_color: "f07373",
              icon_name: "减",
              id: 1911459162,
              is_exclusive_with_food_activity: true,
              name: "自营销复杂满减活动",
              tips: "满23减22，满46减32，满69减44，满100减66，满130减88",
              type: 102
            },
            {
              description: "特价商品1.8元起",
              icon_color: "f1884f",
              icon_name: "换",
              id: 21507471770,
              name: "超值换购",
              tips: "超值换购"
            },
            {
              attribute: "14.0",
              description: "新用户下单立减14元",
              icon_color: "70bc46",
              icon_name: "首",
              id: 2084815994,
              is_exclusive_with_food_activity: true,
              name: "新用户立减(不与其他活动共享)",
              tips: "新用户下单立减14元",
              type: 103
            },
            {
              attribute: "1.0",
              description: "本店新用户立减1元",
              icon_color: "00b762",
              icon_name: "新",
              id: 803353018,
              is_exclusive_with_food_activity: true,
              name: "门店新客立减",
              tips: "本店新用户立减1元",
              type: 108
            },
            {
              description: "折扣商品2.8折起",
              icon_color: "f07373",
              icon_name: "折",
              id: 1602051682,
              name: "单品折扣",
              tips: "单品折扣"
            }
          ],
          address: "福建省福州市闽侯县上街镇大学城科技路第24号临时市场摊位",
          authentic_id: 4354569229340941,
          business_info: '{"lemon_support_tags": [{"color": "cce23028", "text": "23减22", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "46减32", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "69减44", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "100减66", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "130减88", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "门店新客减1", "border": "4ce23028", "background": null, "type": 6, "icon": null}, {"color": "cce23028", "text": "2.8折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "1.8元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减14", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
          closing_count_down: 0,
          delivery_fee_discount: 0,
          description: "欢迎光临十年老店；洁尽全力；追求领鲜，做最健康营养的美食。（本店外卖自行配送，不送上楼哦i谢谢）",
          distance: 1943,
          favored: false,
          flavors: [{
            id: 265,
            name: "简餐"
          }],
          float_delivery_fee: 0,
          float_minimum_order_amount: 10,
          has_story: false,
          id: "E11959683938255344696",
          image_path: "a6d5764a31577aa1314800fd3f12eecbjpeg",
          is_new: false,
          is_premium: false,
          is_star: false,
          is_stock_empty: 0,
          is_valid: 1,
          latitude: 26.033254,
          longitude: 119.205457,
          max_applied_quantity_per_order: -1,
          name: "天九王炝肉",
          next_business_time: " 今天10:00",
          only_use_poi: false,
          opening_hours: ["10:00/14:00", "16:00/21:00"],
          order_lead_time: 33,
          out_of_range: false,
          phone: "15959147362 18359196603",
          piecewise_agent_fee: {
            description: "免配送费",
            extra_fee: 0,
            is_extra: false,
            no_subsidy_fee: "",
            rules: [{
              fee: 0,
              price: 10
            }],
            tips: "免配送费"
          },
          platform: 0,
          posters: [],
          promotion_info: "欢迎光临十年老店；洁尽全力；追求领鲜，做最健康营养的美食。（本店外卖自行配送，不送上楼哦，谢谢）",
          rating: 4.4,
          rating_count: 759,
          recent_order_num: 7187,
          recommend: {
            color: "#e8470b",
            image_hash: "ac124c767ffa7fd296d3e2d6f01798c6png",
            is_ad: false,
            reason: "口碑人气好店"
          },
          recommend_reasons: [{
            name: "配送飞快"
          }],
          regular_customer_count: 0,
          scheme: "https://h5.ele.me/shop/#id=E11959683938255344696",
          status: 5,
          support_tags: [{
            border: "dddddd",
            color: "666666",
            icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            text: "简餐",
            type: 1
          }],
          supports: [{
              border: "90dddddd",
              description: "商家原因导致订单取消，赔付代金券",
              icon_color: "999999",
              icon_name: "赔",
              id: 10,
              name: "拒单赔",
              text_color: "666666",
              two_characters_icon_name: ""
            },
            {
              border: "90dddddd",
              description: "该商户食品安全已由国泰产险承担，食品安全有保障",
              icon_color: "999999",
              icon_name: "保",
              id: 7,
              name: "食安保",
              text_color: "666666",
              two_characters_icon_name: "保险"
            }
          ],
          tags: [],
          theme: {
            default_color: "2395ff",
            header_style: 0,
            hongbao_style: 0,
            price_color: "ff5339",
            third_tab_name: "商家",
            vanish_fields: []
          },
          type: 0
        }
      },
      {
        restaurant: {
          act_tag: 0,
          imgurl: "http://www.gywfo.com/vueSell_v2/imgs/sellers/seller03.jpg",
          activities: [{
              attribute: '{"75": {"1": 38.0, "0": 0}, "60": {"1": 28.0, "0": 0}, "29": {"1": 16.0, "0": 0}, "46": {"1": 22.0, "0": 0}}',
              description: "满29减16，满46减22，满60减28，满75减38",
              icon_color: "f07373",
              icon_name: "减",
              id: 21477197098,
              is_exclusive_with_food_activity: true,
              name: "满减",
              tips: "满29减16，满46减22，满60减28，满75减38",
              type: 102
            },
            {
              description: "折扣商品3折起",
              icon_color: "f07373",
              icon_name: "折",
              id: 21489581466,
              name: "单品折扣",
              tips: "单品折扣"
            },
            {
              attribute: "17.0",
              description: "新用户下单立减17元",
              icon_color: "70bc46",
              icon_name: "首",
              id: 2078370306,
              is_exclusive_with_food_activity: true,
              name: "新用户立减(不与其他活动共享)",
              tips: "新用户下单立减17元",
              type: 103
            },
            {
              description: "特价商品3.5元起",
              icon_color: "f1884f",
              icon_name: "换",
              id: 2117802130,
              name: "超值换购",
              tips: "超值换购"
            }
          ],
          address: "福建省福州市闽侯县上街大学城蔗洲村2号地商业网店第二幢第一层110、111号店面",
          authentic_id: 8314589224379813,
          business_info: '{"lemon_support_tags": [{"color": "cce23028", "text": "29减16", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "46减22", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "60减28", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "75减38", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "3折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "3.5元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减17", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
          delivery_fee_discount: 1,
          delivery_mode: {
            border: "",
            color: "2395FF",
            gradient: {
              rgb_from: "00AAFF",
              rgb_to: "0085FF"
            },
            icon_hash: "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
            id: 1,
            is_solid: true,
            text: "蜂鸟专送",
            text_color: "FFFFFF"
          },
          description: "小马哥金牌卤肉饭源自台湾配方，选用上等带膘五花肉经过5小时慢火熬制。我们把特色和地道的台湾味道呈现在您的面前，希望在快节奏的都市生活通过我们的食品能让您感受到一份来自宝岛的浓浓情意和问候。",
          distance: 3317,
          favored: false,
          flavors: [{
              id: 265,
              name: "简餐"
            },
            {
              id: 237,
              name: "地方小吃"
            }
          ],
          float_delivery_fee: 3.6,
          float_minimum_order_amount: 20,
          has_story: false,
          id: "E9662298010520822491",
          image_path: "a6587ded877fd8d2e30dcd349d4f8a06png",
          is_new: false,
          is_premium: true,
          is_star: false,
          is_stock_empty: 0,
          is_valid: 1,
          latitude: 26.033075,
          longitude: 119.192544,
          max_applied_quantity_per_order: -1,
          name: "小马哥卤肉饭(蔗洲村店)",
          next_business_time: "明天 09:30",
          only_use_poi: false,
          opening_hours: ["09:30/20:30"],
          order_lead_time: 34,
          out_of_range: false,
          phone: "021-60782942",
          piecewise_agent_fee: {
            description: "远距离配送费¥3.6",
            extra_fee: 0.6,
            is_extra: true,
            no_subsidy_fee: "¥4.6",
            rules: [{
              fee: 3.6,
              price: 20
            }],
            tips: "远距离配送费¥3.6"
          },
          platform: 0,
          posters: [],
          promotion_info: "欢迎进入“小马哥卤肉饭”。订餐须知：为了确保能及时用餐，希望您提前45分钟以上预定下单，避开高峰时期。享受500元满减优惠，须提前1小时预定，谢谢~",
          rating: 4.8,
          rating_count: 385,
          recent_order_num: 2570,
          recommend: {
            image_hash: "731111f3f9379e772eedf4855beae8a1jpeg",
            is_ad: false,
            track: '{"rankType":"5"}'
          },
          recommend_reasons: [{
              name: "味道超赞"
            },
            {
              name: "回头客多"
            }
          ],
          regular_customer_count: 0,
          scheme: "https://h5.ele.me/shop/#id=E9662298010520822491",
          status: 1,
          support_tags: [{
            border: "dddddd",
            color: "666666",
            icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            text: "简餐",
            type: 1
          }],
          supports: [],
          tags: [],
          target_tag_path: "d53fc0cb4dc67973038cbc591938a1b6png",
          theme: {
            default_color: "2395ff",
            header_style: 0,
            hongbao_style: 0,
            price_color: "ff5339",
            third_tab_name: "商家",
            vanish_fields: []
          },
          type: 0
        }
      },
      {
        restaurant: {
          act_tag: 0,
          imgurl: "http://www.gywfo.com/vueSell_v2/imgs/sellers/seller04.jpg",
          activities: [{
              attribute: '{"120": {"1": 100.0, "0": 0}, "35": {"1": 33.0, "0": 0}, "68": {"1": 66.0, "0": 0}}',
              description: "满35减33，满68减66，满120减100",
              icon_color: "f07373",
              icon_name: "减",
              id: 1829529546,
              is_exclusive_with_food_activity: true,
              name: "自营销复杂满减活动",
              tips: "满35减33，满68减66，满120减100",
              type: 102
            },
            {
              description: "折扣商品3折起",
              icon_color: "f07373",
              icon_name: "折",
              id: 21519186882,
              name: "疯狂周末特价3折",
              tips: "疯狂周末特价3折"
            },
            {
              attribute: "14.0",
              description: "新用户下单立减14元",
              icon_color: "70bc46",
              icon_name: "首",
              id: 2084949178,
              is_exclusive_with_food_activity: true,
              name: "新用户立减(不与其他活动共享)",
              tips: "新用户下单立减14元",
              type: 103
            },
            {
              attribute: "1.0",
              description: "本店新用户立减1元",
              icon_color: "00b762",
              icon_name: "新",
              id: 808116362,
              is_exclusive_with_food_activity: true,
              name: "门店新客立减",
              tips: "本店新用户立减1元",
              type: 108
            },
            {
              description: "特价商品1元起",
              icon_color: "f1884f",
              icon_name: "换",
              id: 1912578802,
              name: "超值换购",
              tips: "超值换购"
            }
          ],
          address: "福建省福州市闽侯县上街镇蔗洲村（李荣华宅）",
          authentic_id: 1344559220596479,
          bidding: '{"core":{"index":3,"extraInfo":"{\\"bidding\\":\\"{}\\",\\"rankId\\":\\"1eea4117d60d4f639832eea9035c4325\\",\\"rankType\\":\\"8\\",\\"adLogo\\":\\"{\\\\\\"url\\\\\\":\\\\\\"https://cube.elemecdn.com/9/ef/55d00981847aa0e5e7860ed9af58bpng.png\\\\\\",\\\\\\"position\\\\\\":\\\\\\"right-bottom\\\\\\"}\\",\\"latitude\\":\\"26.04065\\",\\"rankTime\\":\\"1553478752\\",\\"cityId\\":\\"9\\",\\"userId\\":\\"16331100\\",\\"longitude\\":\\"119.216653\\"}","target":{"restaurantId":1960479,"weight":91,"probability":0.11511000245809555},"come_from":0,"next":{"restaurantId":170453808,"weight":81,"probability":0.1298699975013733}}}',
          business_info: '{"lemon_support_tags": [{"color": "cce23028", "text": "35减33", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "68减66", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "120减100", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "门店新客减1", "border": "4ce23028", "background": null, "type": 6, "icon": null}, {"color": "cce23028", "text": "3折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "1元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减14", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
          delivery_fee_discount: 0,
          description: "",
          distance: 2026,
          favored: false,
          flavors: [{
              id: 265,
              name: "简餐"
            },
            {
              id: 209,
              name: "盖浇饭"
            }
          ],
          float_delivery_fee: 0,
          float_minimum_order_amount: 10,
          has_story: false,
          id: "E16738768607207394444",
          image_path: "ccca0e70e92b62f9aaf61ce3f784acd3jpeg",
          is_new: false,
          is_premium: false,
          is_star: false,
          is_stock_empty: 0,
          is_valid: 1,
          latitude: 26.033004,
          longitude: 119.204923,
          max_applied_quantity_per_order: -1,
          name: "东北菜餐厅",
          next_business_time: "15:50",
          only_use_poi: false,
          opening_hours: ["09:50/13:50", "15:50/19:50"],
          order_lead_time: 40,
          out_of_range: false,
          phone: "15359183891 15880101558",
          piecewise_agent_fee: {
            description: "免配送费",
            extra_fee: 0,
            is_extra: false,
            no_subsidy_fee: "",
            rules: [{
              fee: 0,
              price: 10
            }],
            tips: "免配送费"
          },
          platform: 0,
          posters: [],
          promotion_info: "在中午11点之前，12点之后和下午6点之前下单的顾客每人赠送一份饮料，预定单除外，以下单时间为准。                                                请大家注意，单点的不配米饭，需另点。本店概不送上楼，带来不便，敬请谅解",
          rating: 4.5,
          rating_count: 291,
          recent_order_num: 4371,
          recommend: {
            image_hash: "731111f3f9379e772eedf4855beae8a1jpeg",
            is_ad: true,
            reason: "广告",
            track: '{"rankType":"8"}'
          },
          recommend_reasons: [{
            name: "味道超赞"
          }],
          regular_customer_count: 0,
          scheme: "https://h5.ele.me/shop/#id=E16738768607207394444",
          status: 1,
          support_tags: [{
            border: "dddddd",
            color: "666666",
            icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            text: "简餐",
            type: 1
          }],
          supports: [{
              border: "90dddddd",
              description: "商家原因导致订单取消，赔付代金券",
              icon_color: "999999",
              icon_name: "赔",
              id: 10,
              name: "拒单赔",
              text_color: "666666",
              two_characters_icon_name: ""
            },
            {
              border: "90dddddd",
              description: "该商户食品安全已由国泰产险承担，食品安全有保障",
              icon_color: "999999",
              icon_name: "保",
              id: 7,
              name: "食安保",
              text_color: "666666",
              two_characters_icon_name: "保险"
            }
          ],
          theme: {
            default_color: "2395ff",
            header_style: 0,
            hongbao_style: 0,
            price_color: "ff5339",
            third_tab_name: "商家",
            vanish_fields: []
          },
          type: 0
        }
      },
      {
        restaurant: {
          act_tag: 0,
          imgurl: "http://www.gywfo.com/vueSell_v2/imgs/sellers/seller05.jpg",
          activities: [{
              attribute: '{"25": {"1": 15.0, "0": 0}, "75": {"1": 26.0, "0": 0}, "49": {"1": 21.0, "0": 0}}',
              description: "满25减15，满49减21，满75减26",
              icon_color: "f07373",
              icon_name: "减",
              id: 21505446218,
              is_exclusive_with_food_activity: true,
              name: "自营销复杂满减活动",
              tips: "满25减15，满49减21，满75减26",
              type: 102
            },
            {
              description: "折扣商品4.9折起",
              icon_color: "f07373",
              icon_name: "折",
              id: 21505565138,
              name: "单品折扣",
              tips: "单品折扣"
            },
            {
              attribute: "17.0",
              description: "新用户下单立减17元",
              icon_color: "70bc46",
              icon_name: "首",
              id: 21493227018,
              is_exclusive_with_food_activity: true,
              name: "新用户立减(不与其他活动共享)",
              tips: "新用户下单立减17元",
              type: 103
            }
          ],
          address: "福建省福州市闽侯县上街镇蔗洲村广贤路16-133号",
          authentic_id: 8324589234867808,
          bidding: '{"core":{"index":4,"extraInfo":"{\\"bidding\\":\\"{}\\",\\"rankId\\":\\"1eea4117d60d4f639832eea9035c4325\\",\\"rankType\\":\\"8\\",\\"adLogo\\":\\"{\\\\\\"url\\\\\\":\\\\\\"https://cube.elemecdn.com/9/ef/55d00981847aa0e5e7860ed9af58bpng.png\\\\\\",\\\\\\"position\\\\\\":\\\\\\"right-bottom\\\\\\"}\\",\\"latitude\\":\\"26.04065\\",\\"rankTime\\":\\"1553478752\\",\\"cityId\\":\\"9\\",\\"userId\\":\\"16331100\\",\\"longitude\\":\\"119.216653\\"}","target":{"restaurantId":170453808,"weight":81,"probability":0.1298699975013733},"come_from":0,"next":{"restaurantId":168028721,"weight":90,"probability":0.11680000275373459}}}',
          business_info: '{"lemon_support_tags": [{"color": "cce23028", "text": "25减15", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "49减21", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "75减26", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "4.9折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "返红包", "border": "4ce23028", "background": null, "type": 9, "icon": null}, {"color": "cce23028", "text": "首单减17", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
          delivery_fee_discount: 2.5,
          description: "",
          distance: 1905,
          favored: false,
          flavors: [{
              id: 215,
              name: "包子粥店"
            },
            {
              id: 265,
              name: "简餐"
            }
          ],
          float_delivery_fee: 0.1,
          float_minimum_order_amount: 15,
          folding_restaurant_brand: "三米粥铺",
          folding_restaurants: [{
            distance: 5112,
            id: "E1076939502188795905",
            name: "三米粥铺(福州新上街店)",
            order_lead_time: 35,
            scheme: "https://h5.ele.me/shop/#id=E1076939502188795905",
            type: 0
          }],
          has_story: false,
          id: "E15182788996661928495",
          image_path: "fae454e4c12fb31acfd741d05d2699fapng",
          is_new: true,
          is_premium: false,
          is_star: false,
          is_stock_empty: 0,
          is_valid: 1,
          latitude: 26.033361,
          longitude: 119.20571,
          max_applied_quantity_per_order: -1,
          name: "三米粥铺(福州上街师大店)",
          next_business_time: "16:00",
          only_use_poi: false,
          opening_hours: ["07:30/14:00", "16:00/22:00"],
          order_lead_time: 31,
          out_of_range: false,
          phone: "18850133168",
          piecewise_agent_fee: {
            description: "配送费¥0.1",
            extra_fee: -2.4,
            is_extra: true,
            no_subsidy_fee: "¥2.6",
            rules: [{
              fee: 0.1,
              price: 15
            }],
            tips: "配送费¥0.1"
          },
          platform: 0,
          posters: [],
          promotion_info: "三米粥铺新店开业，三米为了让大家吃得好好的，有一大波满减优惠活动等着大家。如餐品上有任何质量问题，请务必提前联系我们后再做评论，我们会给大家满意的解决方案。\n请致电：18850133168\n",
          rating: 4.4,
          rating_count: 88,
          recent_order_num: 434,
          recommend: {
            image_hash: "731111f3f9379e772eedf4855beae8a1jpeg",
            is_ad: true,
            reason: "广告",
            track: '{"rankType":"8"}'
          },
          recommend_reasons: [{
            name: "配送飞快"
          }],
          regular_customer_count: 0,
          scheme: "https://h5.ele.me/shop/#id=E15182788996661928495",
          status: 1,
          support_tags: [{
            border: "dddddd",
            color: "666666",
            icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            text: "包子粥店",
            type: 1
          }],
          supports: [],
          target_tag_path: "2ee2741ca9ac548f5efce60c645668cbpng",
          theme: {
            default_color: "2395ff",
            header_style: 0,
            hongbao_style: 0,
            price_color: "ff5339",
            third_tab_name: "商家",
            vanish_fields: []
          },
          type: 0
        }
      },
      {
        restaurant: {
          act_tag: 0,
          imgurl: "http://www.gywfo.com/vueSell_v2/imgs/sellers/seller06.jpg",
          activities: [{
              attribute: '{"33": {"1": 25.0, "0": 0}, "50": {"1": 50.0, "0": 0}}',
              description: "满33减25，满50减50",
              icon_color: "f07373",
              icon_name: "减",
              id: 21490207250,
              is_exclusive_with_food_activity: true,
              name: "自营销复杂满减活动",
              tips: "满33减25，满50减50",
              type: 102
            },
            {
              description: "特价商品7.98元起",
              icon_color: "f1884f",
              icon_name: "特",
              id: 2129814650,
              name: "单品定价",
              tips: "单品定价"
            },
            {
              attribute: "14.0",
              description: "新用户下单立减14元",
              icon_color: "70bc46",
              icon_name: "首",
              id: 2125295874,
              is_exclusive_with_food_activity: true,
              name: "新用户立减(不与其他活动共享)",
              tips: "新用户下单立减14元",
              type: 103
            },
            {
              attribute: "1.0",
              description: "本店新用户立减1元",
              icon_color: "00b762",
              icon_name: "新",
              id: 806527250,
              is_exclusive_with_food_activity: true,
              name: "门店新客立减",
              tips: "本店新用户立减1元",
              type: 108
            }
          ],
          address: "闽侯县上街镇大学城科技路第3、4、5、6幢三层第B3号临时店面（广贤路16-270号）",
          authentic_id: 1344509233037971,
          business_info: '{"lemon_support_tags": [{"color": "cce23028", "text": "33减25", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "50减50", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "门店新客减1", "border": "4ce23028", "background": null, "type": 6, "icon": null}, {"color": "cce23028", "text": "7.98元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减14", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
          delivery_fee_discount: 0,
          description: "",
          distance: 1822,
          favored: false,
          flavors: [{
              id: 265,
              name: "简餐"
            },
            {
              id: 215,
              name: "包子粥店"
            }
          ],
          float_delivery_fee: 0,
          float_minimum_order_amount: 0,
          has_story: false,
          id: "E15576916451969518143",
          image_path: "6113cba762df1d24a1775bac792d2889jpeg",
          is_new: true,
          is_premium: false,
          is_star: false,
          is_stock_empty: 0,
          is_valid: 1,
          latitude: 26.034383,
          longitude: 119.20565,
          max_applied_quantity_per_order: -1,
          name: "巴西烤肉饭(师大店)",
          next_business_time: "15:30",
          only_use_poi: false,
          opening_hours: ["09:00/13:30", "15:30/22:00"],
          order_lead_time: 33,
          out_of_range: false,
          phone: "17859580232",
          piecewise_agent_fee: {
            description: "免配送费",
            extra_fee: 0,
            is_extra: false,
            no_subsidy_fee: "",
            rules: [{
              fee: 0,
              price: 0
            }],
            tips: "免配送费"
          },
          platform: 0,
          posters: [],
          promotion_info: "欢迎光临，用餐高峰期间请提前预定，谢谢！",
          rating: 4.8,
          rating_count: 64,
          recent_order_num: 569,
          recommend: {
            image_hash: "731111f3f9379e772eedf4855beae8a1jpeg",
            is_ad: false,
            track: '{"rankType":"6","trafficCardId":"56798738"}'
          },
          recommend_reasons: [{
              name: "回头客多"
            },
            {
              name: "配送飞快"
            }
          ],
          regular_customer_count: 0,
          scheme: "https://h5.ele.me/shop/#id=E15576916451969518143",
          status: 1,
          support_tags: [{
            border: "dddddd",
            color: "666666",
            icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            text: "简餐",
            type: 1
          }],
          supports: [{
            border: "90dddddd",
            description: "该商户食品安全已由国泰产险承担，食品安全有保障",
            icon_color: "999999",
            icon_name: "保",
            id: 7,
            name: "食安保",
            text_color: "666666",
            two_characters_icon_name: "保险"
          }],
          target_tag_path: "2ee2741ca9ac548f5efce60c645668cbpng",
          theme: {
            default_color: "2395ff",
            header_style: 0,
            hongbao_style: 0,
            price_color: "ff5339",
            third_tab_name: "商家",
            vanish_fields: []
          },
          type: 0
        }
      },
      {
        restaurant: {
          act_tag: 0,
          imgurl: "http://www.gywfo.com/vueSell_v2/imgs/sellers/seller07.jpg",
          activities: [{
              attribute: '{"16": {"1": 9.0, "0": 0}, "120": {"1": 78.0, "0": 0}, "90": {"1": 59.0, "0": 0}, "60": {"1": 40.0, "0": 0}, "30": {"1": 20.0, "0": 0}}',
              description: "满16减9，满30减20，满60减40，满90减59，满120减78",
              icon_color: "f07373",
              icon_name: "减",
              id: 2055041187,
              is_exclusive_with_food_activity: true,
              name: "自营销复杂满减活动",
              tips: "满16减9，满30减20，满60减40，满90减59，满120减78",
              type: 102
            },
            {
              description: "特价商品1.8元起",
              icon_color: "f1884f",
              icon_name: "换",
              id: 21507532482,
              name: "超值换购",
              tips: "超值换购"
            },
            {
              attribute: "14.0",
              description: "新用户下单立减14元",
              icon_color: "70bc46",
              icon_name: "首",
              id: 2083232754,
              is_exclusive_with_food_activity: true,
              name: "新用户立减(不与其他活动共享)",
              tips: "新用户下单立减14元",
              type: 103
            },
            {
              description: "折扣商品3折起",
              icon_color: "f07373",
              icon_name: "折",
              id: 2055025667,
              name: "单品折扣",
              tips: "单品折扣"
            }
          ],
          address: "福建省福州市闽侯县上街镇新洲村67号",
          authentic_id: 3324589228247317,
          business_info: '{"lemon_support_tags": [{"color": "cce23028", "text": "16减9", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "30减20", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "60减40", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "90减59", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "cce23028", "text": "120减78", "border": "4ce23028", "background": null, "type": 1, "icon": null}, {"color": "a25c03", "text": "6元会员红包", "border": "4ca25c03", "background": null, "type": 2, "icon": null}, {"color": "cce23028", "text": "品质联盟", "border": "4ce23028", "background": null, "type": 4, "icon": null}, {"color": "cce23028", "text": "0元配送", "border": "4ce23028", "background": null, "type": 12, "icon": null}, {"color": "cce23028", "text": "3折", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "1.8元特价", "border": "4ce23028", "background": null, "type": 7, "icon": null}, {"color": "cce23028", "text": "首单减14", "border": "4ce23028", "background": null, "type": 5, "icon": null}], "ad_info": null}',
          delivery_fee_discount: 0,
          description: "未填写叫外卖上饿了吗！！！",
          distance: 1610,
          favored: false,
          flavors: [{
              id: 265,
              name: "简餐"
            },
            {
              id: 263,
              name: "其他菜系"
            }
          ],
          float_delivery_fee: 0,
          float_minimum_order_amount: 10,
          has_story: false,
          id: "E10119905166552787895",
          image_path: "c72ab5374c113725a6097432a3b39b71jpeg",
          is_new: false,
          is_premium: false,
          is_star: false,
          is_stock_empty: 0,
          is_valid: 1,
          latitude: 26.030551,
          longitude: 119.219147,
          max_applied_quantity_per_order: -1,
          name: "海西高新大排档",
          next_business_time: "16:00",
          only_use_poi: false,
          opening_hours: ["09:30/13:00", "16:00/23:00"],
          order_lead_time: 36,
          out_of_range: false,
          phone: "15705953180",
          piecewise_agent_fee: {
            description: "免配送费",
            extra_fee: 0,
            is_extra: false,
            no_subsidy_fee: "",
            rules: [{
              fee: 0,
              price: 10
            }],
            tips: "免配送费"
          },
          platform: 0,
          posters: [],
          promotion_info: "雨天和周末请提前预定，用餐高峰期延迟送达请谅解，本餐厅由饿了吗监督，希望给您带来更好的用餐体验，谢谢",
          rating: 4.5,
          rating_count: 173,
          recent_order_num: 1534,
          recommend: {
            is_ad: false,
            reason: ""
          },
          recommend_reasons: [],
          regular_customer_count: 0,
          scheme: "https://h5.ele.me/shop/#id=E10119905166552787895",
          status: 1,
          support_tags: [{
            border: "dddddd",
            color: "666666",
            icon: "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            text: "简餐",
            type: 1
          }],
          supports: [{
            border: "90dddddd",
            description: "该商户食品安全已由国泰产险承担，食品安全有保障",
            icon_color: "999999",
            icon_name: "保",
            id: 7,
            name: "食安保",
            text_color: "666666",
            two_characters_icon_name: "保险"
          }],
          theme: {
            default_color: "2395ff",
            header_style: 0,
            hongbao_style: 0,
            price_color: "ff5339",
            third_tab_name: "商家",
            vanish_fields: []
          },
          type: 0
        }
      }
    ],
    meta: {
      rank_id: "1eea4117d60d4f639832eea9035c4325"
    }
  },
  code: 0,
  msg: "success"
});
