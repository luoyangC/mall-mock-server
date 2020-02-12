const Router = require('koa-router')
const router = new Router()
const baseUrl = 'https://vue-mall-template.oss-cn-hangzhou.aliyuncs.com/static/images'

const categories = []
const titles = ['新品首发', '居家生活', '服装鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色', '超级会员']

const sorts = []
const texts = [
  ['居家生活', '服饰鞋包', '美食酒水', '个护清洁', '运动旅行', '母婴亲子', '数码家电', '全球特色'], 
  ['秋冬好物', '主题床品', '北欧原木', '餐厨爆款'],
  ['热销爆款', '好物上新', '抄底特惠', '男式短袖', '男式牛仔', '男式裤装', '男式衬衫', '男式针织', '男式外套'], 
  ['肉类零食', '小食糖巧', '饼干糕点', '坚果干货', '上新美味', '居家保健', '宅家美食'], 
  ['口腔护理', '身体护理', '洗发护理', '护肤工具', '卸妆洁面', '基础护理'], 
  ['儿童睡衣', '儿童外套', '儿童卫衣', '尾货秒杀', '初春换新', '宅家好物', '防疫榜单'], 
  ['运动鞋品', '运动短袖', '运动外套', '运动裤装', '运动卫衣', '出行好物', '健身系列'], 
  ['科技新品', '手机配件', '3C数码', '智能出行', '智能家居', '甄选爆款', '秋冬热销'], 
  ['当季新品', '时尚搭配', '高级珠宝', '特色手工', '礼品点卡', '好评推荐', '全球防护'], 
  ['美食酒水', '周边特色', '海外精选', '数码家电', '母婴亲子', '运动旅行', '个护清洁', '服饰鞋包', '居家生活']]

for (let i = 0; i < 10; i++) {
  categories.push({
    id: i + 1,
    title: titles[i],
    image: `${baseUrl}/category-${i + 1}.${i === 9 ? 'gif' : 'png'}`
  })
}

for (let i = 0; i < 10; i++) {
  const _cate = []
  for (let j = 0; j < texts[i].length; j++) {
    _cate.push({
      id: i * 100 + j,
      title: texts[i][j],
      image: `${baseUrl}/cate-${i + 1}-${j + 1}.webp`
    })
  }
  sorts.push(_cate)
}

router.get('/dev-api/categories', (ctx) => {
  ctx.body = {
    code: 20000,
    data: categories
  }
})

router.get('/dev-api/sorts', (ctx) => {
  const { id } = ctx.request.query || 1
  const index = parseInt(id) - 1
  ctx.body = {
    code: 20000,
    data: {
      banner: {
        image: `${baseUrl}/cate-banner-${id}.webp`
      },
      sorts: [
        ...sorts[index]
      ]
    }
  }
})

module.exports = router
