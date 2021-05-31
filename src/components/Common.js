import define from '@/assets/js/define'
import aspect_list from '@/assets/yml/aspect.yml'
import planet_list from '@/assets/yml/planet.yml'

export default{
  created(){
    
    window.setting = {
      orb:{
        midpoint: 1.5,
        harmonics: 5,
      },
      astronomical_model: "",
      year_milisecond: 365.2425 * 24 * 60 * 60 * 1000,
    }

    Number.prototype.abs = function(){
      return Math.abs(this)
    }

    String.prototype.abs = function(){
      return parseFloat(this).abs()
    }

    String.prototype.getAspectIcon = function(){
      return '/img/aspect/'+aspect_list[this].img
    }

    Number.prototype.getDegree = function(){
      return this.int() % 30 + 1;
    }

    Number.prototype.getDegreeMinute = function(){
      return (this.int() % 30)+'˚'+((this*60).int() % 60).zeroPadding(2)+'′';
    }

    Number.prototype.getImg = function(size){
      let img_base_url = define.IMG_BASE_URL
      switch(size){
        case 'full':
          img_base_url = define.FULL_SIZE_IMG_BASE_URL
          break
      }

      let _this = this % 360
      const sign = ((_this / 30).int() + 1).zeroPadding(2);
      const degree = ((_this % 30).int() + 1).zeroPadding(2);
      return img_base_url + sign + '/' + degree + '.jpg';
    }

    String.prototype.getImg = function(size){
      return parseFloat(this).getImg(size)
    }

    Number.prototype.getMinute = function(){
      return ((this*60).int() % 60).zeroPadding(2)
    }

    String.prototype.getPlanetIcon = function(){
      return '/img/planet/'+this+'.svg';
    }

    String.prototype.getSignNumber = function(){
      const this_sign = this.toUpperCase()
      const sign_list = {
        ARIES:0,
        TAURUS:1,
        GEMINI:2,
        CANCER:3,
        LEO:4,
        VIRGO:5,
        LIBRA:6,
        SCORPIO:7,
        SAGITTARIUS:8,
        CAPRICORN:9,
        AQUARIUS:10,
        PISCES:11
      }
      const sign_num = sign_list[this_sign]
      return (sign_num === null || sign_num === undefined) ? null : sign_num
    }

    Boolean.prototype.getSummerWinter = function(){
      return this ? 'S' : 'W'
    }

    Date.prototype.getSummerWinter = function(){
      return this.isSummertime() ? 'S' : 'W'
    }

    Date.prototype.getTimezone = function(){
      if(this.isSummertime()){
        return this.getTimezoneOffset() / -60 - 1;
      }
      else{
        return this.getTimezoneOffset() / -60;
      }
    }

    Date.prototype.getTimezoneStr = function(){
      return this.getTimezone().getTimezoneStr()
    }

    Number.prototype.getTimezoneStr = function(){
      const plus_minus = this < 0 ? 'W' : 'E'
      const time = this.intAbs().zeroPadding(2) + (this * 60 % 60).int().zeroPadding(2)
      return plus_minus + time
    }

    String.prototype.getTimezoneStr = function(){
      return this.int().getTimezoneStr()
    }


    Number.prototype.int = function(){
      return parseInt(this)
    }

    String.prototype.int = function(){
      return parseInt(this)
    }

    Number.prototype.intAbs = function(){
      return Math.abs(this).int()
    }

    String.prototype.intAbs = function(){
      return parseFloat(this).intAbs()
    }

    Date.prototype.isSummertime = function(){
      return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }

    // サマータイム判定
    Date.prototype.stdTimezoneOffset = function(){
      var jan = new Date(this.getFullYear(), 0, 1)
      var jul = new Date(this.getFullYear(), 6, 1)
      return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
    }

    Date.prototype.toStr = function(type){
      this.setHours(this.getHours() + this.getTimezoneOffset() * -1/60)
      const dt = this.toISOString()
      //this.setHours(this.getHours() + this.getTimezoneOffset() * 1/60)

      switch(type){
        case "yyyy-MM-dd": 
          return dt.slice(0,10)
        case "HHmm":
          return dt.slice(11,16).replace(":", "")
        case "HH:mm":
          return dt.replace(/(\d{2})(\d{2})/, "$1:$2")
        case "yyyyMMddHHmm":
          return dt.slice(0,4)+dt.slice(5,7)+dt.slice(8,10)+dt.slice(11,13)+dt.slice(14,16)
      }
    }

    Number.prototype.zeroPadding = function(digit){
      var zero = "";
      for(var i=1; i<digit; i++){
        zero += "0";
      }
      return (zero + this).substr(-digit);
    }

    String.prototype.zeroPadding = function(digit){
      return this.int().zeroPadding(digit)
    }

  },
  mounted(){

  },

  methods: {
    $$(selector){
      return document.querySelector(selector);
    },

    $$$(selector){
      return document.querySelectorAll(selector);
    },


    addPlanetsInfo(planets, houses){
      if(!this.current_planet_list) this.setAstronomicalModel()

      if(!planets) planets = {}

      this.current_planet_list.forEach((p)=>{
        if(!planets[p]) planets[p] = {}
        planets[p] = Object.assign(planets[p], this.getPlanetInfo(p))

        if(planets[p].longitude){
          planets[p] = Object.assign(planets[p], this.getDegreeInfo(planets[p].longitude))
        }
      })

      if(houses && houses[10]){
        planets.Asc = {}
        planets.Asc.longitude = houses[1]
        planets.Asc = Object.assign(planets.Asc, this.getPlanetInfo('Asc'))
        planets.Asc = Object.assign(planets.Asc, this.getDegreeInfo(houses[1]))
        planets.Mc = {}
        planets.Mc.longitude = houses[10]
        planets.Mc = Object.assign(planets.Mc, this.getPlanetInfo('Mc'))
        planets.Mc = Object.assign(planets.Mc, this.getDegreeInfo(houses[10]))

        if(this.$route.query.m === 'asc_aries' || this.$route.query.m === 'mc_capricorn'){
          let house_sabian_planets = {}

          this.current_planet_list.forEach((p)=>{
            house_sabian_planets[p] = {}
            house_sabian_planets[p] = Object.assign(house_sabian_planets[p], this.getPlanetInfo(p))

            if(planets[p].longitude){
              if(this.$route.query.m === 'asc_aries'){
                house_sabian_planets[p].longitude = planets[p].longitude - houses[1]
              }
              else if(this.$route.query.m === 'mc_capricorn'){
                house_sabian_planets[p].longitude = planets[p].longitude - houses[10] + 270
              }
              if(house_sabian_planets[p].longitude < 0) house_sabian_planets[p].longitude += 360
              
              house_sabian_planets[p] = Object.assign(house_sabian_planets[p], this.getDegreeInfo(house_sabian_planets[p].longitude))
            }
          })

          return house_sabian_planets
        }
      }

      return planets
    },

    changeDatetimeQueryFormat(query, type){
      if(!this.checkDatetimeQuery(query)) return false

      let year = query.slice(0,4)
      let month =query.slice(4,6)
      let day = query.slice(6,8)
      let hour = query.slice(8,10)
      let minute = query.slice(10,12)
      let timezone_plus_minus = query[12] === 'E' ? 1 : -1
      let timezone = timezone_plus_minus * (query.slice(13,15).int() + query.slice(15,17) / 60)
      let unknown_time = 0
      let summertime = query[17] === 'S' ? 1 : 0
      if(query.slice(8,12) === '----'){
        hour = '12'
        minute = '00'
        unknown_time = 1
      }

      switch(type){
        case "TEXT":
          if(unknown_time) return this.changeDatetimeQueryFormat(query, 'TEXT_DATE')
          return this.$t('calculator.datetime_view').replace('{year}', year).replace('{month}', this.getMonth(month)).replace('{day}', day.int()).replace('{hour}', hour).replace('{minute}', minute)
        case "TEXT_DATE":
          return this.$t('calculator.date_view').replace('{year}', year).replace('{month}', this.getMonth(month)).replace('{day}', day.int())
        case "yyyy-MM-dd": 
          return year + '-' + month + '-' + day
        case "HH:mm":
          return hour + ':' + minute
        case 'yyyy-MM-ddTHH:mm:00':
          return year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00'
        case 'array':
          return {year: year, month: month, day: day, hour: hour, minute: minute, timezone: timezone+summertime}
        case 'timezone':
          return timezone
        case 'summertime_flg':
          return query[17] === 'S' ? 1 : 0
        case 'unknown_flg':
          return unknown_time
      }
    },

    changeDatetimeToQuery(date, time, timezone, summertime, unknown){
      let str = ''
      str += date.slice(0,4)+date.slice(5,7)+date.slice(8,10)
      if(unknown){
        str += '----'
      }
      else{
        str += time.slice(0,2)+time.slice(3,5)
      }

      str += timezone.getTimezoneStr()
      str += summertime.getSummerWinter()

      return str
    },

    checkDatetimeQuery(datetime_query){
      if(datetime_query && datetime_query.match(/^([0-2][0-9]{3})(0[1-9]|1[0-2])([0-2]\d|3[01])(([01][0-9]|2[0-3])([0-5][0-9])|----)([EW][01][0-9][0-5][0-9])([SW])$/)) return true
      return false
    },

    changeLocationToQuery(lat_ns, lat_degree, lat_minute, lon_ew, lon_degree, lon_minute){
      let res = ''

      res += lat_ns === 'S' ? 'S' : 'N'
      res += lat_degree.zeroPadding(2)
      res += lat_minute.zeroPadding(2)
      res += lon_ew === 'W' ? 'W' : 'E'
      res += lon_degree.zeroPadding(3)
      res += lon_minute.zeroPadding(2)

      return res
    },

    changeLocationQueryFormat(query, type){
      if(!this.checkLocationQuery(query)){
        return false
      }

      const NS = query.slice(0, 1)
      const lat_degree = query.slice(1, 3).int()
      const lat_minute = query.slice(3, 5).int()
      const EW = query.slice(5, 6)
      const lon_degree = query.slice(6, 9).int()
      const lon_minute = query.slice(9, 11).int()
      const NS_plus_minus = NS === 'N' ? 1 : -1
      const EW_plus_minus = EW === 'E' ? 1 : -1

      switch(type){
        case 'NS':
          return NS
        case 'lat_degree':
          return lat_degree
        case 'lat_minute':
          return lat_minute
        case 'EW':
          return EW
        case 'lon_degree':
          return lon_degree
        case 'lon_minute':
          return lon_minute
        case 'lat_num':
          return NS_plus_minus * (lat_degree + lat_minute / 60)
        case 'lon_num':
          return EW_plus_minus * (lon_degree + lon_minute / 60)
      }
    },

    checkLocationQuery(location_query){
      if(location_query && location_query.match(/^[NS]\d{4}[EW]\d{5}$/)) return true
      return false
    },

    drawHoroscope(r){
      const canvas = this.$$('#horo')
      const ctx = canvas.getContext('2d')
      const circle_radius = 220
      const outer_circle_radius = 250
      const planet_radius = 185
      const house_radius = 40
      const color_dark = '#a7a5bd'
      const planets = define.PLANET_LIST
      const color_change = {
        house: {},
        planet: {},
      }

console.log(r, define.SIGN_LIST)

      const ASC = r.pl.houses[1]
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      if(r.input_child && r.input_child.horo && r.input_child.horo){
        const horo = r.input_child.horo
        if(horo.significator){
          const color = '#e08e14'
          const house = horo.significator.house
          const planet = r.c.house[house.int()].ruler
          color_change.house[house] = color
          color_change.planet[planet] = color
        }
      }

      //原点調整
      ctx.translate(300, 300)

      //背景
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(0, 0, outer_circle_radius, 0, 7, false)
      ctx.fill()

      //ハウスとサイン
      ctx.lineWidth = outer_circle_radius - circle_radius
      ctx.fillStyle = '#aaa'//文字の色
      for(let i=0; i<12; i++){
        //ハウス番号
        const house_rad = Math.PI * (180 + (ASC%30) - (i+0.5)*30) / 180
        const house_x = Math.cos(house_rad)
        const house_y = Math.sin(house_rad)
        ctx.fillText((i+1), house_x * house_radius, house_y * house_radius)

        //星座の背景
        const start = Math.PI * (180 + (ASC%30) - i*30) / 180
        const end = Math.PI * (180 + (ASC%30) -(i+1)*30) / 180
        if(color_change.house[i+1]){
          ctx.strokeStyle = color_change.house[i+1]
        }
        else{
          ctx.strokeStyle = color_dark
        }
        ctx.beginPath()
        ctx.arc(0, 0, outer_circle_radius - 15, start, end, true)
        ctx.stroke()

        //星座アイコン
        const sign_rad = Math.PI * (180 + ASC - (i+0.5)*30) / 180
        const sign_x = Math.cos(sign_rad)
        const sign_y = Math.sin(sign_rad)
        const sign = new Image()
        sign.src = '/img/sign/'+define.SIGN_LIST[i].key+'.svg'
        sign.onload = () => {
          ctx.drawImage(sign, sign_x*circle_radius*1.06-10, sign_y*circle_radius*1.06-10, 20, 20)
        }
      }


      // //サンビーム
      // ctx.strokeStyle = '#fffbb5'
      // let convast_start= Math.PI * (180 + ASC - (sun_lon - 8.5)) / 180
      // let convast_end = Math.PI * (180 + ASC - (sun_lon + 8.5)) / 180
      // ctx.arc(0, 0, circle_radius - 5, sunbeam_start, sunbeam_end, true)
      // ctx.stroke()
      // //コンバスト
      // ctx.beginPath()
      // ctx.lineWidth = 10
      // const sun_lon = v.pl.planets.Sun.longitude
      // const convast_start = Math.PI * (180 + ASC - (sun_lon - 17)) / 180
      // const convast_end = Math.PI * (180 + ASC - (sun_lon + 17)) / 180
      // ctx.arc(0, 0, circle_radius - 5, convast_start, convast_end, true)


      //目盛
      ctx.strokeStyle = '#c9c9c9'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(0, 0, outer_circle_radius, 0, Math.PI * 2, true)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, 0, circle_radius, 0, Math.PI * 2, true)
      ctx.stroke()
      for(let i=0; i<360; i++){
        const x = Math.cos(Math.PI * (ASC + i) / 180)
        const y = Math.sin(Math.PI * (ASC + i) / 180)
        const ratio = i % 30 ? (i % 5 ? 0.96 : 0.92) : -1.14
        ctx.beginPath()
        ctx.moveTo(x*circle_radius, y*circle_radius)
        ctx.lineTo(x*circle_radius*ratio, y*circle_radius*ratio)
        ctx.stroke()
      }
      
      //惑星
      ctx.lineWidth = 1
      r.planets.forEach((planet)=>{
        const p = planets[planet.key]
        const text = p.text
        const r = p.ratio ? p.ratio : 1
        const bold = p.bold ? 'bold' : ''
        const rad = Math.PI * (180 - planet.longitude + ASC) / 180
        const x = Math.cos(rad) * planet_radius
        const y = Math.sin(rad) * planet_radius
        const p_rad = Math.PI * (180 - planet.icon_degree + ASC) / 180
        const p_x = Math.cos(p_rad) * planet_radius
        const p_y = Math.sin(p_rad) * planet_radius

        //色
        if(color_change.planet[planet.key]){
          ctx.strokeStyle = color_change.planet[planet.key]
          ctx.fillStyle = color_change.planet[planet.key]
        }
        else{
          ctx.strokeStyle = color_dark
          ctx.fillStyle = '#aaa'//文字の色
        }

        ctx.font = parseInt(40 * r) + 'px ' + bold + ' sans-serif'
        ctx.fillText(text, p_x*0.87, p_y*0.87)
        ctx.font = '10px sans-serif'
        ctx.fillText((planet.longitude%30).int().zeroPadding(2), p_x, p_y)

        ctx.beginPath()
        ctx.moveTo(p_x*1.05, p_y*1.05)
        ctx.lineTo(x*circle_radius/planet_radius, y*circle_radius/planet_radius)
        ctx.stroke()

        //スピード
        if(p.speed){
          let speed_flg = 1
          if(planet.longitudeSpeed < 0) speed_flg = -1
          else if(planet.longitudeSpeed > p.speed) speed_flg = 2

          draw_triangle(speed_flg, p_rad)
        }
        else if(planet.key === 'Sun' || planet.key === 'Moon'){
          draw_triangle(1, p_rad)
        }
      })

      //スピードの矢印
      function draw_triangle(speed_flg, p_rad){
        let arrow_start, arrow_end
        switch(speed_flg){
          case 1:
            arrow_start = -0.05
            arrow_end = -0.03
            break
          case -1:
            arrow_start = 0.05
            arrow_end = 0.03
            break
          case 2:
            arrow_start = -0.05
            arrow_end = -0.025
            break
        }

        for(let i=0; i<Math.abs(speed_flg); i++){
          const speed_rad = p_rad + arrow_start
          const speed_x1 = Math.cos(speed_rad+arrow_end) * planet_radius * 1.0
          const speed_x2 = Math.cos(speed_rad) * planet_radius * 1.02
          const speed_x3 = Math.cos(speed_rad) * planet_radius * 0.98
          const speed_y1 = Math.sin(speed_rad+arrow_end) * planet_radius * 1.0
          const speed_y2 = Math.sin(speed_rad) * planet_radius * 1.02
          const speed_y3 = Math.sin(speed_rad) * planet_radius * 0.98
          ctx.beginPath()
          ctx.moveTo(speed_x1, speed_y1)
          ctx.lineTo(speed_x2, speed_y2)
          ctx.lineTo(speed_x3, speed_y3)
          ctx.fill()

          arrow_start += arrow_end
        }
      }
    },

    getAspect(degree1, degree2, accepted_orb){
      var diff = this.getDiffAbs(degree1, degree2);

      for(var i in aspect_list){
        var orb = Math.abs(diff - aspect_list[i].degree);

        if(orb < accepted_orb){
          return {aspect: aspect_list[i], orb: orb};
        }
      }
      return null;
    },

    getConditions(){
      const res = {
        Sun:{},
        Moon:{},
        Mercury:{},
        Venus:{},
        Mars:{},
        Jupiter:{},
        Saturn:{},
        POF:{},
      }
      const essential_planets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'POF']
      const planet_list = define.PLANET_LIST
      const sign_list = define.SIGN_LIST
      const ASC = this.pl.houses[1]
      const pl = this.pl.planets
      const ayanamsha = this.pl.getAyanamsha()
      const Algol = (72.66 + ayanamsha) % 360
      const Regulus = (133.33 + ayanamsha) % 360
      const Spica = (187.33 + ayanamsha) % 360

      pl.POF = {
        longitude: (this.pl.houses[1] + this.pl.planets.Moon.longitude - this.pl.planets.Sun.longitude) % 360
      }

      //コンバストの範囲
      const sun_longitude = pl.Sun.longitude
      const sun_sign_start = (sun_longitude / 30).int() * 30
      const sun_sign_end = sun_sign_start + 30
      res.Sun.cazimi_start = sun_longitude - 17/60 < sun_sign_start ? sun_sign_start : sun_longitude - 17/60
      res.Sun.cazimi_end = sun_longitude + 17/60 > sun_sign_end ? sun_sign_end : sun_longitude + 17/60
      res.Sun.combust_start = sun_longitude - 8.5 < sun_sign_start ? sun_sign_start : sun_longitude - 8.5
      res.Sun.combust_end = sun_longitude + 8.5 > sun_sign_end ? sun_sign_end : sun_longitude + 8.5
      res.Sun.sunbeam_start = (sun_longitude - 17 + 360) % 360
      res.Sun.sunbeam_end = (sun_longitude + 17) % 360

      //夜か昼か
      const is_night = (ASC - sun_longitude + 360) % 360 > 180
      res.is_night = is_night
      //時
      const is_AM = this.pl.sd.hour + this.pl.timezone < 12
      //アワールーラー
      let weekday_num = this.pl.sd.getDayOfWeekNr()
      weekday_num = this.pl.sd.hour < 0 ? this.pl.sd.hour >= 24 ? weekday_num + 1 : weekday_num - 1 : weekday_num
      //午前かつ太陽が夜は、前の曜日
      const weekday_num_adjusted = is_night && is_AM ? (weekday_num + 6) % 7 : weekday_num
      const weekday_p = define.WEEK_ORDER[weekday_num_adjusted]
      let hour_num = 1//n時間目
      for(let i=12; i>=1; i--){
        const house_end = this.pl.houses[i]
        const house_start = i === 13 ? this.pl.houses[1] : this.pl.houses[i+1]
        const house_mid = house_start < house_end ? (house_start + house_end + 360) / 2 : (house_start + house_end) / 2
        if(sun_longitude < house_start && sun_longitude >= house_mid ||
           house_start < house_mid && sun_longitude < house_start ||
           house_start < house_mid && sun_longitude >= house_mid){
          hour_num = (12 - i) * 2 + 1
        }
        else if(sun_longitude < house_mid && sun_longitude >= house_end ||
           house_mid < house_end && sun_longitude < house_mid ||
           house_mid < house_end && sun_longitude >= house_end){
          hour_num = (12 - i) * 2 + 2
        }
      }
      const hour_ruler_num = (planet_list[weekday_p].chaldean_order + hour_num - 2) % 7
      res.hour_ruler = define.CHALDEAN_ORDER[hour_ruler_num]
      res.hour_num = hour_num

      //ハウスのルーラ
      res.house = Array(13)
      for(let i=0; i<12; i++){
        const cusp = ((ASC/30).int() + i) * 30 % 360

        res.house[i+1] = {}
        res.house[i+1].ruler = sign_list[((ASC/30).int() + i) % 12].ruler
        res.house[i+1].cusp = cusp
        res.house[i+1].sign = sign_list[(cusp/30).int()]
        res.house[i+1].planets = []
      }
      
      //エッセンシャルディグニティ
      essential_planets.forEach((p)=>{
        const longitude = pl[p].longitude
        const sign_num = (longitude / 30).int()
        const degree = longitude % 30
        const sign_info = sign_list[sign_num]
        const which_tripricity = is_night ? 'night_triplicity' : 'day_triplicity'

        //普通に度数
        res[p].sign = pl[p]
        res[p].sign_info = sign_info

        res[p].dignity = {}
        res[p].dignity.domicile = {
          is: sign_info.ruler === p,
          p: sign_info.ruler,
        }
        res[p].dignity.exaltation = {
          is: sign_info.exaltation.p === p,
          p: sign_info.exaltation.p
        }
        res[p].dignity.triplicity = {
          is: sign_info[which_tripricity] === p,
          p: sign_info[which_tripricity],
        }
        res[p].dignity.detriment = {
          is: sign_info.detriment === p,
          p: sign_info.detriment,
        }
        res[p].dignity.fall = {
          is: sign_info.fall === p,
          p: sign_info.fall,
        }

        res[p].dignity.term = {
          is: false,
          p: null,
        }
        sign_info.term.forEach((v,i)=>{
          const min_degree = i ? sign_info.term[i-1].n : 0
          if(degree >= min_degree && degree < v.n){
            res[p].dignity.term.p = v.p
            if(p === v.p) res[p].dignity.term.is = true
            return
          }
        })

        res[p].dignity.face = {
          is: false,
          p: null,
        }
        sign_info.face.forEach((v,i)=>{
          const min_degree = i * 10
          if(degree >= min_degree && degree < (i+1)*10){
            res[p].dignity.face.p = v
            if(p === v) res[p].dignity.face.is = true
            return
          }
        })
      })

      //ミューチュアルレセプション
      essential_planets.forEach((p)=>{
        res[p].dignity.domicile.mutual = !res[p].dignity.domicile.is && p === res[res[p].dignity.domicile.p].dignity.domicile.p
        res[p].dignity.exaltation.mutual = !res[p].dignity.exaltation.is && res[res[p].dignity.exaltation.p] && p === res[res[p].dignity.exaltation.p].dignity.exaltation.p
        res[p].dignity.triplicity.mutual = !res[p].dignity.triplicity.is && p === res[res[p].dignity.triplicity.p].dignity.triplicity.p
        res[p].dignity.detriment.mutual = !res[p].dignity.detriment.is && p === res[res[p].dignity.detriment.p].dignity.detriment.p
        res[p].dignity.term.mutual = !res[p].dignity.term.is && p === res[res[p].dignity.term.p].dignity.term.p
        res[p].dignity.face.mutual = !res[p].dignity.face.is && p === res[res[p].dignity.face.p].dignity.face.p
        res[p].dignity.fall.mutual = !res[p].dignity.fall.is && res[res[p].dignity.fall.p] && p === res[res[p].dignity.fall.p].dignity.fall.p
      })
      
      //アスペクト
      essential_planets.forEach((p1)=>{
        res[p1].aspect = {}

        essential_planets.forEach((p2)=>{
          const light_p = planet_list[p1].chaldean_order > planet_list[p2].chaldean_order ? p1 : p2
          const heavy_p = planet_list[p1].chaldean_order < planet_list[p2].chaldean_order ? p1 : p2
          const light_lon = pl[light_p].longitude
          const heavy_lon = pl[heavy_p].longitude
          const light_sign = (light_lon/30).int()
          const heavy_sign = (heavy_lon/30).int()
          const orb = (planet_list[p1].orb + planet_list[p2].orb) / 2
          const longitude_diff = (light_lon - heavy_lon + 360) % 360
          const longitude_diff_short = longitude_diff > 180 ? 360 - longitude_diff : longitude_diff
          const sign_diff = (light_sign - heavy_sign + 12) % 12
          const sign_diff_short = sign_diff > 6 ? 12 - sign_diff : sign_diff
          let aspect, dexter_sinister, approaching_separating, is_narrow_diff, partile

          if(longitude_diff_short < orb && sign_diff === 0){
            aspect = 'Conjunction'
            is_narrow_diff = false
            partile = light_lon.int() === heavy_lon.int()
          }
          else if((longitude_diff_short - 60).abs() < orb && sign_diff_short === 2){
            aspect = 'Sextile'
            is_narrow_diff = longitude_diff_short < 60
          }
          else if((longitude_diff_short - 90).abs() < orb && sign_diff_short === 3){
            aspect = 'Square'
            is_narrow_diff = longitude_diff_short < 90
          }
          else if((longitude_diff_short - 120).abs() < orb && sign_diff_short === 4){
            aspect = 'Trine'
            is_narrow_diff = longitude_diff_short < 120
          }
          else if((longitude_diff_short - 180).abs() < orb && sign_diff_short === 6){
            aspect = 'Opposition'
            is_narrow_diff = true
          }
          //アンティション
          else if((light_lon + heavy_lon - 180).abs() < orb && (light_sign + heavy_sign + 6) % 12 === 11){
            aspect = 'Antition'
            is_narrow_diff = light_lon + heavy_lon - 180 < 0
          }
          else if((light_lon + heavy_lon - 360).abs() < orb && (light_sign + heavy_sign) === 11){
            aspect = 'Contition'
            is_narrow_diff = light_lon + heavy_lon - 360 > 0
          }

          //惑星のみ
          if(aspect && planet_list[p1].chaldean_order && planet_list[p2].chaldean_order){
            const light_speed = pl[light_p].longitudeSpeed > 0 ? 1 : 0
            approaching_separating = is_narrow_diff ^ light_speed ^ (longitude_diff > 180) ? 'Separating' : 'Approaching'

            //デクスター・シニスター
            if(['Sextile', 'Square', 'Trine', 'Antition', 'Contition'].indexOf(aspect) >= 0){
              dexter_sinister = 'Dexter'
              if(sign_diff === sign_diff_short){
                dexter_sinister = 'Sinister'
              }
            }
          }

          res[p1].aspect[p2] = {
            aspect: aspect,
            dexter_sinister: dexter_sinister,
            approaching_separating: approaching_separating,
            partile: partile,
          }
        })
      })

      //惑星のサイクルとのアスペクト
      define.CHALDEAN_ORDER.forEach(_p=>{
        if(_p !== 'Moon') return

        res[_p].cycle = []
        const target_longitude = pl[_p].longitude
        const target_sign = (target_longitude / 30).int()

        essential_planets.forEach((p)=>{
          const p_sign = (pl[p].longitude / 30).int()
          let target_aspect = null
          const sign_diff = (target_sign - p_sign + 12) % 12
          const sign_diff_short = sign_diff > 6 ? 12 - sign_diff : sign_diff

          if(sign_diff_short === 0) target_aspect = 'Conjunction'
          else if(sign_diff_short === 2) target_aspect = 'Sextile'
          else if(sign_diff_short === 3) target_aspect = 'Square'
          else if(sign_diff_short === 4) target_aspect = 'Trine'
          else if(sign_diff_short === 6) target_aspect = 'Opposition'

          res[_p].cycle.push({
            p: p,
            degree: pl[p].longitude % 30,
            target_aspect: target_aspect,
          })
        })
        res[_p].cycle.sort(function(a,b){
          if(a.degree <= b.degree) return -1
          if(a.degree > b.degree) return 1
        })
        res[_p].void = true
        let after_target_planet = false
        res[_p].cycle.forEach(v=>{
          if(after_target_planet && v.target_aspect && define.CHALDEAN_ORDER.indexOf(v.p) >= 0) res[_p].void = false
          if(v.p === _p) after_target_planet = true
        })
      })

      //その他
      essential_planets.forEach(p=>{
        const longitude = pl[p].longitude

        //オリエンタル・オクシデンタル
        if(p !== 'Sun'){
          res[p].Sun = {}
          const diff_p_sun = (sun_longitude - longitude + 360) % 360
          res[p].Sun.oriental_occidental = diff_p_sun >= 0 && diff_p_sun < 180 ? 'Oriental' : 'Occidental'

          res[p].Sun.diff = null
          //カジミ
          if(longitude > res.Sun.cazimi_start && longitude < res.Sun.cazimi_end){
            res[p].Sun.diff = 'Cazimi'
          }
          //コンバスト
          else if(longitude > res.Sun.conbust_start && longitude < res.Sun.conbust_end){
            res[p].Sun.diff = 'Conbust'
          }
          //サンビーム
          else if(longitude > res.Sun.sunbeam_start && longitude < res.Sun.sunbeam_end ||
                  res.Sun.sunbeam_start > res.Sun.sunbeam_end && longitude >= res.Sun.sunbeam_start ||
                  res.Sun.sunbeam_start > res.Sun.sunbeam_end && longitude < res.Sun.sunbeam_end ){
            res[p].Sun.diff = 'Sunbeam'
          }
        }

        // 恒星・ノード
        res[p].conjunction = {
          degree5_Algol: (Algol - longitude).abs() < 2.5,
          partile_Regulus: longitude.int() === Regulus.int(),
          partile_Spica: longitude.int() === Spica.int(),
          partile_NorthNode: longitude.int() === pl.TrueNode.longitude.int(),
          partile_SouthNode: longitude.int() === (pl.TrueNode.longitude + 180).int() % 360,
        }

        //ハウス
        for(let i=1; i<=12; i++){
          const ii = i == 12 ? 1 : i+1
          const n1 = res.house[i].cusp
          const n2 = res.house[ii].cusp
          if(longitude >= n1 && longitude < n2 ||
             n1 > n2 && longitude >= n1 ||
             n1 > n2 && longitude < n2){
            res[p].house = i
            res.house[i].planets.push(p)
          }
        }
      })

      //プロヒビション
console.log(res, is_night)
      return res
    },


    getDegreeInfo(longitude, is_int){
      if(longitude < 0) longitude += parseInt(longitude / 360 + 1) * 360
      longitude = parseFloat(longitude) % 360

      if(is_int === 'int' ||
        (is_int && longitude == longitude.toFixed(3))){
        is_int = true;
      }
      else{
        is_int = false;
      }

      let planet = {}
      planet.img = longitude.getImg()
      planet.sign_degree = this.getSignDegree(longitude)
      planet.degree_minute = longitude.getDegreeMinute();
      planet.sabian = this.$t('sabian['+longitude.int()+']')
      //planet.sabian_description = sabian_descriptions[parseInt(longitude)];
      planet.param = {
        sign: define.SIGN_LIST[(longitude / 30).int()].key,
        degree: (longitude % 30).int() + 1,
        minute: longitude.getMinute(),
      }
      planet.is_int = is_int;
      planet.symbol_minute = (longitude * 60 % 60).int();
      planet.alt = this.$t('common.sabian_symbol') + ' ' + planet.sign_degree + ': ' + planet.sabian

      return planet
    },

    getDiff(degree1, degree2){
      var d1 = degree1 % 360;
      var d2 = degree2 % 360;

      if(d1 > d2) d2 += 360;

      if(d2 - d1 > 180) return (d2 - d1) - 360;
      else return d2 - d1;
    },

    getDiffAbs(degree1, degree2){
      return Math.abs(this.getDiff(degree1, degree2));
    },

    getDiffYear(){
      //時間の差を計算
      const natal_date = new Date(this.changeDatetimeQueryFormat(this.$route.query.n, 'yyyy-MM-ddTHH:mm:00'));
      const forecast_date = new Date(this.changeDatetimeQueryFormat(this.$route.query.f, 'yyyy-MM-ddTHH:mm:00'));
      return (forecast_date - natal_date) / define.year_milisecond;
    },

    getMonth(num){
      return this.$t('calculator.month['+(num.int() -1)+']')
    },

    getPlanetIcon(planet){
      planet = planet.replace(/(True|Mean)/, '')
      return '/img/planet/'+planet+'.svg';
    },

    getPlanetInfo(planet){
      let res = {}
      res.key = planet_list[planet].key
      res.name = this.$t('planet_list.'+planet+'.name');
      res.description = this.$t('planet_list.'+planet+'.description');
      res.icon = this.getPlanetIcon(planet);
      return res
    },

    getSign(longitude){
      const sign_num = (longitude % 360 / 30).int()
      return this.$t('sign_list['+sign_num+']')
    },

    getSignDegree(longitude){
      longitude %= 360;
      if(window.lang === 'ja') return this.getSign(longitude) + longitude.getDegree() + '度';
      return this.getSign(longitude) + ' ' + longitude.getDegree()
    },

    getSummertime(now){
      return this.isSummertime(now) ? 'S' : 'W';
    },

    getThisYear(){
      var now = new Date();
      return now.getFullYear();
    },

    getVectorAverage(degrees){
      let x = 0
      let y = 0
      degrees.map(degree => (
        x += Math.cos(degree / 180 * Math.PI),
        y += Math.sin(degree / 180 * Math.PI)
      ));

      var radian = Math.acos(x / (x**2 + y**2) ** (1/2));
      var degree = radian / Math.PI * 180;
      degree = y >= 0 ? degree : 360 - degree;
      return degree;
    },

    hide_set_datetime(){
      if(this.$$('#set_datetime')){
        this.$$('#set_datetime').classList.add("hide");
        this.$$('#set_datetime').classList.remove("show");
        this.$$('body').classList.remove("fix");
      }
    },

    isAspect(degree1, degree2, orb, aspect_name){
      var aspect = aspect_list[aspect_name];
      if(!aspect) return false;
//console.log(degree1, degree2, orb, aspect_name)
      var aspect_degree = aspect.degree;
      var diff = this.getDiffAbs(degree1, degree2);

      if(diff >= aspect_degree - orb && diff <= aspect_degree + orb){
        return true;
      }

      return false;
    },
/*
    onBlurDate(input_id){
      var date_val = this.$$('#'+input_id).value;
      if(!date_val ||
        date_val.match(/^[3-9]/) ||
        date_val.match(/^00/)
      ){
        var date = new Date();
        var yyyy = date.getFullYear();
        var MM = ("0"+(date.getMonth()+1)).slice(-2);
        var dd = ("0"+date.getDate()).slice(-2);

        this.$$('#'+input_id).value = yyyy+'-'+MM+'-'+dd;
      }
    },*/

    onBlurTime(input_id){
      var time_val = this.$$('#'+input_id).value;
      if(!time_val){
        var date = new Date();
        var HH = ("0"+date.getHours()).slice(-2);
        var mm = ("0"+date.getMinutes()).slice(-2);

        this.$$('#'+input_id).value = HH+':'+mm;
      }
    },

    setAstronomicalModel(){
      const pl_list = ['n', 'p', 'f']

      if(this.$route.query.m === 'helio'){
        pl_list.forEach((i)=>{
          if(this[i] && this[i].pl) this[i].pl.setHeliocentric();
        })
        this.current_planet_list = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
        this.main_planet_list = ["Pluto", "Neptune"]
        this.$$('html').classList.add('special_astro_model');
      }

      else{
        pl_list.forEach((i)=>{
          if(this[i] && this[i].pl) this[i].pl.unsetHeliocentric();
        })

        let true_mean_node = this.$cookies.get('true_mean_node') == 1 ? 'MeanNode': 'TrueNode'
        let true_mean_lilith = this.$cookies.get('true_mean_lilith') == 1 ? 'MeanLilith': 'TrueLilith'
        this.current_planet_list = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", true_mean_node, true_mean_lilith]
        this.main_planet_list = ["Sun", "Moon"]

        //ハウスサビアン
        if(this.$route.query.m === 'asc_aries' || this.$route.query.m === 'mc_capricorn'){
          this.$$('html').classList.add('special_astro_model');
        }

        //ノーマル
        else{
          if(this.$route.query.n &&
             !this.changeDatetimeQueryFormat(this.$route.query.n, 'unknown_flg')){
            this.current_planet_list.push('Asc')
            this.current_planet_list.push('Mc')
          }

          this.$$('html').classList.remove('special_astro_model');
        }
      }
    },

    setImgCookie(longitude){
      if(!longitude) this.$cookies.remove('img')

      longitude = longitude.int() + 1
      longitude %= 360
      
      this.$cookies.set('img', longitude)
    },

    toggle_set_datetime(){
      if(this.$$('#set_datetime')){
        if(this.$$('#set_datetime').classList.contains("show")){
          this.$$('#set_datetime').classList.add("hide");
          this.$$('#set_datetime').classList.remove("show");
          this.$$('body').classList.remove("fix");
        }
        else{
          this.$$('#set_datetime').classList.add("show");
          this.$$('#set_datetime').classList.remove("none");
          this.$$('#set_datetime').classList.remove("hide");
          this.$$('body').classList.add("fix");
        }
      }
    },

  }
}
