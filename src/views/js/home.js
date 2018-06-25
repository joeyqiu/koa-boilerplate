var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
  	originBalls:['', '01','02','03','04','05','06','07','08','09','10',
  		'11','12','13','14','15','16','17','18','19','20',
  		'21','22','23','24','25','26','27','28','29','30',
  		'31','32','33', ''],
  	balls: [],
    loading: true
  },
  mounted: function() {
  	this.getBallList();
  },

  methods:{
  	getBallList(size=30) {
  		let that = this;
      that.loading = true;
	  	axios.get('ball/getInfo?size='+size, {
	  		timeout: 5000
	  	}).then(function (res) {
        that.loading = false;
	  		let data = res.data;
	  		if (data.resultCode == 0) {
	  			// 成功获取数据
	  			that.balls = data.data;
	  		}
			}).catch(function (error) {
		    console.log(error);
        that.loading = false;
		  });
	  }
  }
});