require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
//获取图片相关的数据
var imageDatas=require('../data/imageDatas.json');
//利用自执行函数,将图片信息转换成图片URL路径信息
imageDatas=(function genImageURL(imageDatasArr){
	for(var i=0,j=imageDatasArr.length;i<j;i++){
		var singleImageData=imageDatasArr[i];
		singleImageData.imageURL=require('../images/'+singleImageData.fileNmae);
		imageDatasArr[i]=singleImageData;
	}
	return imageDatas;
})(imageDatas);
class AppComponent extends React.Component {
  render() {
    return (
    	<div className="content">
    		<section className="stage">
     		<section className="img-sec">
     		</section>
     		<nav className="controller-nav">
     		</nav>
     	</section>
    </div>     	
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
