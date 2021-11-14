// JavaScript Document

	//mainimage
	setInterval(function(){
		$(".mainimage ul li:first-child").fadeOut().next("li").fadeIn().end().appendTo(".mainimage ul");
	},5000);


$(function(){
	//ハンバーガーナビ
	$(document).on('click','#bars',function(e){
		e.preventDefault();
		$('.menu-trigger').toggleClass('active');
	});

	$(window).on('scroll',function(){
		const $win = $(this);
		let scrollTop = $win.scrollTop();
		let scrollPos = $win.height() + scrollTop;
		const $target = $('.js-inview');
		
		$target.each(function(){
			const $element = $(this);
			const elementPos = $element.offset().top;
			if( scrollPos > elementPos && !$element.hasClass('is-animated')){
				$element.addClass('is-animated');
			}
		});
	});
	$(window).scroll(function(){
		$(".marker").each(function(){
		let position = $(this).offset().top;
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();
			if(scroll > position - windowHeight){
				$(this).addClass('animation');
			}
		});
	});
	
	$(document).on('click','.pagetop',function(e){
		$("body,html").animate({'scrollTop':'0'},"slow");
		e.preventDefault();
	});	
	$(window).scroll( function(){
		if( $(this).scrollTop() > 50 ){
			$('.pagetop').fadeIn('fast');
		}else {
			$('.pagetop').fadeOut('fast');
		}
	});

	$(document).on('click','#bars',function(e){
		e.preventDefault();
		$('.sp_nav').slideToggle('slow');
	});
});

function CountdownTimer(elm, tl, mes) {
	this.initialize.apply(this, arguments);
}

CountdownTimer.prototype = {
	initialize: function (elm, tl, mes) {
	this.elem = document.getElementById(elm);
	this.tl = tl;
	this.mes = mes;
	}, countDown: function () {
	var timer = '';
	var today = new Date();
	var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
	var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
	var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
	var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
	var me = this;

	if ((this.tl - today) > 0) {
		if (day)
		timer += '<span class="timer_t">開催まで</span>あと' + '<span class="bold2">' + '' + day + '</span>' + '日！';
		if (hour)
		//timer += '' + hour + '時間';
		/*timer += '' + this.addZero(min) + '分' +
			this.addZero(sec) + '秒';*/
		this.elem.innerHTML = timer;
		tid = setTimeout(function () {
		me.countDown();
		}, 10);
	} else {
		this.elem.innerHTML = this.mes;
		return;
	}
	}, addZero: function (num) {
		return ('0' + num).slice(-2);
		}
	}
	function CDT() {
	var tl = new Date('2021/12/10 00:00:00');// ここで日付を指定
	var timer = new CountdownTimer('CDT', tl, '開催中！');
	timer.countDown();
	}

	window.onload = function () {
	CDT();
	}
