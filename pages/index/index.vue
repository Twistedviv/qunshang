<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item" id="item1"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" id="item2"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" id="item3"></view>
			</swiper-item>
		</swiper>
		<view class="grid">
			<view class="grid-left" @click="draw">抽奖夺宝</view>
			<view class="grid-right">
				<view class="grid-right-item" id="right-item-1" @click="sign">
					<view class="item-left">
						每日签到
					</view>
					<view class="item-right">
						>
					</view>
				</view>
				<view class="grid-right-item" id="right-item-2" @click="group">
					<view class="item-left">
						社群日常
					</view>
					<view class="item-right">
						>
					</view>
				</view>
				<view class="grid-right-item" id="right-item-3" @click="inviting">
					<view class="item-left">
						邀请好友
					</view>
					<view class="item-right">
						>
					</view>
				</view>
			</view>
		</view>
		<view class="notice">
			<view class="title">
				发 现
			</view>
			<view class="content">
				<view class="content-left">
					<view class="content-item" v-for="item,index in leftList">
						<image class="item-poster" :src="item.posterSrc" mode="contain"></image>
						<view class="item-intro">{{item.intro}}</view>
						<view class="item-info">
							<image class="headimg" :src="item.headimg" mode="aspectFit"></image>
							<view class="name">徐凤年</view>
							<view class="like">
								<image class="like-image" src="../../static/img/index/heart-solid.png" mode="aspectFill"></image>
								<view class="like-number">2963</view>
							</view>
						</view>
					</view>
				</view>

				<view class="content-right">
					<view class="content-item" v-for="item,index in rightList">
						<image class="item-poster" :src="item.posterSrc" mode="contain"></image>
						<view class="item-intro">{{item.intro}}</view>
						<view class="item-info">
							<image class="headimg" :src="item.headimg" mode="aspectFit"></image>
							<view class="name">徐凤年</view>
							<view class="like">
								<image class="like-image" src="../../static/img/index/heart-solid.png" mode="aspectFill"></image>
								<view class="like-number">2963</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				user: JSON.stringify(this.$store.state.userInfo),
				findList: [{
						index:0,
						src: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fc80000brcq4qpevctv7pnq6thg&ratio=720p&line=0",
						posterSrc: "https://p9-dy.byteimg.com/img/tos-cn-p-0015/1805c9ca6dd8497eb37159c3c9faf5f6~c5_300x400.jpeg?from=2563711402_large",
						intro: "为什么学习？最佳是兴趣，最俗是一技之长",
						headimg: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg"
					},
					{	
						index:1,
						src: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fe70000bquvmisthbi0h53ah6d0&ratio=720p&line=0",
						posterSrc: "https://p6-dy-ipv6.byteimg.com/img/tos-cn-p-0015/3a4b743cf25a404da6cb2a159b0b8a9d~c5_300x400.jpeg?from=2563711402_large",
						intro: "终于知道铁丝网这么做的了",
						headimg: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg"
					},
					{
						index:2,
						src: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f5c0000bru6m13pqv6apkc3cke0&ratio=720p&line=0",
						posterSrc: "https://p3-dy.byteimg.com/img/tos-cn-p-0015/1939bd44c2a246538be941193d8f360b~c5_300x400.jpeg?from=2563711402_large",
						intro: "啤酒瓶升值计划",
						headimg: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg"
					},
					{
						index:3,
						src: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f4f0000brrbntdahtm68pamna30&ratio=720p&line=0",
						posterSrc: "https://p3-dy.byteimg.com/img/tos-cn-p-0015/2a162ac9461e4f068ca85b444afaf214_1593228282~c5_300x400.jpeg?from=2563711402_large",
						intro: "小小年纪一挑二，面对大鹅真是毫无畏惧",
						headimg: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg"
					},
					{
						index:4,
						src: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f7f0000brq6mkkmavf54vk2get0&ratio=720p&line=0",
						posterSrc: "https://p29-dy.byteimg.com/img/tos-cn-p-0015/bc140896d4cc4c44bb05a5409edcf874~c5_300x400.jpeg?from=2563711402_large",
						intro: "大家帮帮看看这是不是“土猫”",
						headimg: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg"
					},
					{
						index:5,
						src: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f3c0000bruns0l9688i25vnv0hg&ratio=720p&line=0",
						posterSrc: "https://p3-dy.byteimg.com/img/tos-cn-p-0015/ce6ac3088eb84b509cb532bdfdcb892f~c5_300x400.jpeg?from=2563711402_large",
						intro: "他看起来很焦虑，自从有了可升降的防洪闸，他不知道洪水什么时候才能淹了他家。",
						headimg: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg"
					},
					{
						index:6,
						src: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f090000brtuno32ap943039khmg&ratio=720p&line=0",
						posterSrc: "https://p9-dy.byteimg.com/img/tos-cn-p-0015/612c71d71a6b4d838aba339b0ce2602f_1593568307~c5_300x400.jpeg?from=2563711402_large",
						intro: "老爸请长辈喝他埋藏多年的某儿红 可是这个意外来得太突然",
						headimg: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg"
					}
				]
			}
		},
		computed: {
			rightList: function() {
				return this.findList.filter(function(item) {
					return item.index % 2 === 0;
				})
			},
			leftList: function() {
				return this.findList.filter(function(item) {
					return item.index % 2 === 1;
				})
			}
		},
		onLoad() {
			console.log(this.user);
		},
		methods: {
			onNavigationBarButtonTap() {
				let _this = this;
				console.log("tap scan!");
				uni.scanCode({
					success: function(res) {
						console.log("scan success!");
						console.log("内容为：" + res.result);
						if(res.result)
						console.log("路径为：" + res.path);
						uni.request({
							url:"app后端扫码登录接口?token="+res.result+"&uid="+_this.$store.state.userInfo.uid
						})
					}
				})
			},
			draw() {
				uni.navigateTo({
					url: "draw/draw"
				})
			},
			sign() {
				uni.navigateTo({
					url: "sign/sign"
				})
			},
			group() {
				uni.navigateTo({
					url: "group/group"
				})
			},
			inviting() {
				uni.navigateTo({
					url: "inviting/inviting",
					success: function() {
						console.log("跳转邀请页面成功！");
					}
				})
			}

		}
	}
</script>

<style>
	page {
		background-color: rgb(240, 240, 240);
	}

	swiper {
		height: 200px;
		width: 750rpx;
	}

	.swiper-item {
		height: 100%;
	}

	#item1 {
		background: url(../../static/img/index/banner3.jpg) no-repeat;
		background-size: contain;
	}

	#item2 {
		background: url(../../static/img/index/banner2.jpg) no-repeat;
		background-size: contain;
	}

	#item3 {
		background: url(../../static/img/index/banner1.jpg) no-repeat;
		background-size: contain;
	}

	.grid {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 10px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.grid-left {
		width: 280rpx;
		height: 150px;
		line-height: 40px;
		box-sizing: border-box;
		border-radius: 10px;
		font-size: 18px;
		text-align: center;
		background: url(../../static/img/index/gift.png) no-repeat #ffffff;
		background-size: 70%;
		background-position: 50% 80%;
	}

	.grid-right {
		width: 400rpx;
		height: 150px;
		display: flex;
		font-size: 16px;
		flex-direction: column;
		justify-content: space-between;
	}

	.grid-right-item {
		height: 40px;
		box-sizing: border-box;
		line-height: 40px;
		text-indent: 1em;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-right: 10px;

	}

	#right-item-1 {
		background: url(data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQzYwRUVEMkJDREIxMUVBODdDMUE0QUZFNzJCRTlDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQzYwRUVEM0JDREIxMUVBODdDMUE0QUZFNzJCRTlDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFDNjBFRUQwQkNEQjExRUE4N0MxQTRBRkU3MkJFOUNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFDNjBFRUQxQkNEQjExRUE4N0MxQTRBRkU3MkJFOUNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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) no-repeat #ffffff;
		background-size: 15%;
		background-position: 52% 50%;
	}

	#right-item-2 {
		background: url(data:image/png;base64,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) no-repeat #ffffff;
		background-size: 17%;
		background-position: 52% 50%;
	}

	#right-item-3 {
		background: url(data:image/png;base64,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) no-repeat #ffffff;
		background-size: 13%;
		background-position: 52% 50%;
	}

	.notice {
		width: 715rpx;

		border-radius: 10px;
		margin: 10px auto;
		background-color: #FFFFFF;
	}

	.title {
		font-size: 18px;
		border-bottom: 1px rgb(225, 225, 225) solid;
		text-align: center;
		padding: 5px 0;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFXklEQVR4Xu2bXVIcNxDHuxdmXoNPEHyC4BPEnCDOCQwnCDwgFU/GT9SIB/AJjE8QOEHgBCEniH2CkFe2ZpX6U5qt2Vlp9DHaDy9RFUUVO6tR/7rV6m41TC988AuXnxYCQCm1R0Q/ExF+7xLRWwfoOyL6SkQPRHQvhMDvpY5sAIzQvxHROyLaSZTikYhuiOjTsmAMBlBV1XtmPjLaTpTb+rUHrfWVlPJLzkm7cyUDuLi4eKu1vlyA4N01PjDz8cnJCbZL9hEN4PLycufp6emD0Xr2BbkmhDWUZfnx+PgY2yTbiAJg9vnnUK1rrf9lZpgyHB1+poOZ4SB3tNZ7zPxDoERwkoc5/UMwACP8Hz4Hp7X+C46MmW9CF1pV1TtmxkkBB/qjBwYsYD90bh/YIABKqQMigub7xj0znw3dq+ZdZx4QgHAshLj2Cej73AvAaP7Pnom+MfPBUMG78wME9n3P9shiCb0AAsz+tiiKg9yOqYFxfn6+OxqNsJ1+cihgMAQnAHj78XiMPQ9nNTe01h+llDDVhQ5z6sAS3jte9FAUxX6qEpwAlFJXRITIzjbgiQfvvxhyVVVd90BA5IhgLHpYAZggB9pfmeZt71ZKIUz+xfYZM++n+CErAKUUnN6c6Wutv0gpcSKsZJjtcOfwCXdCiP3Yhc0B6DnyvhVFsZe612IX5noejllrDQhzwVOKFdgAWLWfMnkuobvzVFV1xswfLPNHW8EMgJ4zH7m6K6dflJzOec1W+OqIEd7ERIkzAFyedp2031DpsYKoE6FrAf90Y33E9lJKayywdNW3XmjiFKx3ZiDxklK+Dl3bFIDL/JcV8IQuuP2cUgo1ApTeZkZd169PT09nsk/X/FMAVVUdMTMKHN0RtadSBEn9Ts+agwO1tgXMBRnI56WUqfW9VLmCv4dcYWtr62/LNggO09sAbOa0Vt7fRkYppS1/D153G8DcRKuO/EJMoaoq1Ay72WI2AMGmFLLYRTzjcISPQohXIe/zWcD3AMCaIAkhvMUeAPofQGMmNmeyzjFAa92DnHevBRDRrRACldq1HQ4fkOQEB5FcFaFsx6AjEQr2pqsAkDUQcoWVWutfpZTwtGs3cqzZmwyZq+qkguOiibmSoaIoXoVWrrr1gMdukSE2vVy00M38PelwVPoeVBAxF5JLLYP7QLoKIrFHd1BJbN2swGgfWeBcphpTC5iJBBvijuQCHwfn2D7tDf3cVbpLSd5iyuKPdV2/Ca20DBXS9f2+y9qU2qU1YeixgkH3cEOhmHMfZXtbkSY4+muvI/pqjIiuhRCHQ4WJ/X7fZS0qV5PJZC/FOlMvR5cKwQj/u6vfMNbzey0AD3ju4UhrfVOW5WFowBGr8eZ5Y/YQ3lWaHxSuexskXPdwZoHZm5baoMwtNYT3FWaTLdJbNQlokUH0eLW9vf0plzUYrePuL+YmOgmCFwA0EtgkNRhEhh7EaAhBAAwE57V0d3/DPzDzXV3Xtz7P3GqshrZzXMFFQQgG0IKAVhVX05LL1z23uWqtn7s8mRl7Gj9RApvGy5CmymAIUQCa02E8HqM5ytU/lOrwnd+D4ESExukzT69Qe44gCNEAmjcYDw0Qc5eTmQnc13V90N5KOSEkA1g0CCQ2o9Ho2tX4lAvCYAANCOPM4MhC+n2tRtL0GU8mk2uf88QEOSBkA9CWyJzj+H+CXdMEDQfY7gq/b55HoIV/mSnL8i4ljhgKYSEAMvsA73RDIGwEgCHbYWMAREKYVrc2CkAEhGnxZOMABELYbAABEKa9hBtpAc2xYTsdEFaXZbnbHLkbDaCVyj/XFXC/UZblUTve2HgAviDixQP4D2sjE246ffW5AAAAAElFTkSuQmCC) no-repeat;
		background-position: 62% 60%;
		background-size: 5%;
	}

	.content {
		padding: 5px 10rpx;
		display: flex;
		flex-direction: row;
	}
	.content-left{
		width: 350rpx;
	}
	.content-right{
		width: 350rpx;
	}
	.content-item {
		width: 340rpx;
		border-radius: 10px;
		border: 1px solid rgb(240, 240, 240);
		

	}

	.item-poster {
		width: 100%;
		height: 200px;
		border-radius: 10px 10px 0 0;
	}

	.item-intro {
		padding: 0 7px;
		font-size: 14px;
		font-weight: 500;
		font-family:
	}

	.item-info {
		margin: 5px 0;
		padding: 0 7px;
		display: flex;
		flex-direction: row;

	}

	.headimg {
		width: 23px;
		height: 23px;
		border-radius: 50%;
	}

	.name {
		color: #808080;
		font-size: 10px;
		text-indent: 0.4em;
		line-height: 25px;
	}

	.like {
		margin-left: auto;
		display: flex;
		flex-direction: row;
	}

	.like-image {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}
	.like-number{
		color: #808080;
		font-size: 10px;
		line-height: 22px;
	}
</style>
