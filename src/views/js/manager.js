$(function() {
	manager.init();
});

const manager = {
	init() {
		console.log('manager init---');

		/**
		 * 点击后更新双色球数据，并返回更新结果
		 */
		$('#updateBall').on('click', (e)=>{
			$.get( "/ball/updateInfo", (data)=>{
				console.log(data);
				data = JSON.parse(data);
				
			});
		});
	}
}