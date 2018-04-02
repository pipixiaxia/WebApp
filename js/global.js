/**
 * 所有js文件共享
 */

//将图片转为base64
function convertImgToBase64(url, callback, outputFormat) {
	var canvas = document.createElement('canvas'),
		　　ctx = canvas.getContext('2d'),
		　　img = new Image;
	img.onload = function() {　　
		canvas.height = img.height;　　
		canvas.width = img.width;　　
		ctx.drawImage(img, 0, 0);　　
		var dataURL = canvas.toDataURL(outputFormat || 'image/jpeg');　　
		callback.call(this, dataURL);
		canvas = null;
	};
	img.src = url;
}

//将日期y.m.d转为日期y年m月d日
function dateArrToDate(date) {
	var dateArr = date.split(".");
	var y = dateArr[0];
	var m = dateArr[1];
	var d = dateArr[2];
	return y + "年" + m + "月" + d + "日";
}