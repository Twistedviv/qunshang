头像：
http://pic.51yuansu.com/pic2/cover/00/27/31/57fd98ab8e47b_610.jpg
http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg

### 群商数据库的创建

```sql
create database db_qunshang
default character set utf8
default collate utf8_general_ci;
use db_qunshang;
```
### 用户模块
#### 创建用户表tbl_user
```sql
create  table tbl_user(
uid int(10) unsigned zerofill not null auto_increment comment  '用户编号',
utel char(11) not null comment '用户手机号',
upass varchar(32) not null comment '密码',
uname char(10) not null comment '用户名',
headimage varchar(100) not null comment '头像',
gender tinyint not null comment '性别',
introduce varchar(50) default "这个人很懒，什么也没写..." not null comment '简介',
identity tinyint not null comment '身份',
preidentity tinyint not null comment '预定身份',
regtime timestamp not null default  current_timestamp comment '注册时间',
invitecode char(10) not null default 0 comment '邀请码',
inviteid int(10) not null comment '邀请人',
invitenum int not null comment '邀请人数',
credit double not null default 0  comment '行为积分',
wallet double not null default 0  comment '礼物钱包',
primary key (uid)
)engine=InnoDB  default charset=utf8;
```


#### 创建社群主类表tbl_groupclass
```sql
create  table tbl_groupclass(
groupclassid int not null auto_increment comment  '社群主类编号',
groupclassname char(10) not null comment '社群主类名称',
primary key (groupclassid)
)engine=InnoDB  default charset=utf8;
```

#### 创建社群子类表tbl_groupclasschild
```sql
create  table tbl_groupclasschild(
groupclasschildid int unsigned not null auto_increment comment  '社群子类编号',
groupclasschildname char(10) not null comment '社群子类名称',
groupclassid int not null comment  '社群主类编号',
primary key (groupclasschildid),
foreign  key(groupclassid) references tbl_groupclass(groupclassid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建社群表tbl_group
```sql
create  table tbl_group(
groupid smallint unsigned not null auto_increment comment  '社群编号',
groupname char(10) not null comment '社群名',
uid int(10) unsigned zerofill not null comment  '群主编号',
groupclassid int not null comment '社群类别',
establishtime timestamp not null default current_timestamp comment '成立时间',
primary key (groupid),
foreign  key(groupclassid) references tbl_groupclass(groupclassid) ,
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建用户社群表tbl_useringroup
```sql
create  table tbl_useringroup(
useringroupid int unsigned not null auto_increment comment  '用户社群编号',
groupid smallint unsigned not null comment '社群编号',
uid int(10) unsigned zerofill not null comment  '群主编号',
primary key (useringroupid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(groupid) references tbl_group(groupid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建群商初始社群表tbl_begingroup
```sql
create  table tbl_begingroup(
begingroupid mediumint unsigned not null auto_increment comment  '初始社群编号',
groupid smallint unsigned not null comment '社群编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
primary key (begingroupid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(groupid) references tbl_group(groupid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建邀请表tbl_invite
```sql
create  table tbl_invite(
inviteid int unsigned not null auto_increment comment  '邀请编号',
invitedid int(10) unsigned zerofill not null comment '被邀请人编号',
inviterid int(10) unsigned zerofill not null comment  '邀请人编号',
primary key (inviteid),
foreign  key(invitedid) references tbl_user(uid) ,
foreign  key(inviterid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建系统管理员表tbl_admin
```sql
create  table tbl_admin(
adminid int not null auto_increment comment  '系统管理员编号',
adminname char(10) not null comment '管理员用户名',
adminpass char(20) not null comment  '管理员密码',
primary key (adminid)
)engine=InnoDB  default charset=utf8;
```

#### 创建用户实名表tbl_realname
```sql
create  table tbl_realname(
realnameid int unsigned not null auto_increment comment  '用户实名编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
realname char(10) not null comment  '姓名',
realidentity char(18) not null comment  '身份证号',
realaddress varchar(30) not null comment  '用户地址',
realgender tinyint not null comment  '用户性别',
realbirth char(8) not null comment '用户出生日期',
realnation tinyint not null comment  '用户民族',
primary key (realnameid),
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建会员用户情况表tbl_membercase
```sql
create  table tbl_membercase(
caseid int unsigned not null auto_increment comment  '会员用户情况编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
identity tinyint not null comment '身份',
turnintotime timestamp not null default current_timestamp comment '成为时间',
primary key (caseid),
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建公司认证表tbl_companycertification
```sql
create  table tbl_companycertification(
certificationid int not null auto_increment comment  '公司认证编号',
primary key (certificationid),
)engine=InnoDB  default charset=utf8;
```

#### 创建视频表tbl_video
```sql
create  table tbl_video(
videoid int unsigned not null auto_increment comment  '短视频编号',
url varchar(100) not null comment '短视频地址',
posterurl varchar(10) not null comment '短视频传递者地址',
videodesc varchar(50) not null comment  '视频描述',
publishid int(10) unsigned zerofill not null comment  '发布者编号',
uname char(10) not null comment '作者名称',
headimage varchar(100) not null comment '作者头像',
publishtime timestamp not null default current_timestamp comment '发布时间',
primary key (videoid),
foreign  key(publishid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建视频点赞表tbl_videolike
```sql
create  table tbl_videolike(
likeid int unsigned not null auto_increment comment  '短视频点赞编号',
videoid int unsigned not null comment '短视频编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
publishid int(10) unsigned zerofill not null comment  '发布者编号',
liketime timestamp not null default current_timestamp comment '点赞时间',
primary key (likeid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(videoid) references tbl_video(videoid) ,
foreign  key(publishid) references tbl_user(uid) ,
unique(videoid,uid)
)engine=InnoDB  default charset=utf8;
```

#### 创建视频评论表tbl_videoreply
```sql
create  table tbl_videoreply(
replyid int unsigned not null auto_increment comment  '短视频评论编号',
videoid int unsigned not null comment '短视频编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
replycontent varchar(50) not null comment  '评论内容',
replytime timestamp not null default current_timestamp comment '评论时间',
primary key (replyid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(videoid) references tbl_video(videoid) 
)engine=InnoDB  default charset=utf8mb4;
```

### 直播模块
#### 创建直播间表tbl_liveroom
```sql
create  table tbl_liveroom(
liveroomid int unsigned not null auto_increment comment  '直播间编号',
url varchar(100) not null comment '直播间地址',
liverid int(10) unsigned zerofill not null comment  '主播编号',
livenum int not null default 0 comment  '当前人数',
begintime timestamp not null default current_timestamp comment '开始时间',
finishtime timestamp null comment '结束时间',
primary key (liveroomid),
foreign  key(liverid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建直播观众表tbl_liveaudience
```sql
create  table tbl_liveaudience(
liveaudienceid int unsigned not null auto_increment comment  '直播观众编号',
liveroomid int unsigned not null comment  '直播间编号',
uid int(10) unsigned zerofill not null comment  '观众编号',
uname char(10) not null comment '用户名',
headimage varchar(100) not null comment '头像',
primary key (liveaudienceid),
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建直播礼物表tbl_livegift
```sql
create  table tbl_livegift(
livegiftid int unsigned not null auto_increment comment  '直播礼物编号',
giftname char(10) not null comment  '礼物名称',
giftprice double not null default 0 comment  '礼物价格',
giftimage varchar(100) not null comment '礼物图片',
primary key (livegiftid)
)engine=InnoDB  default charset=utf8;
```

#### 创建直播送礼表tbl_givegift
```sql
create  table tbl_givegift(
givegiftid int unsigned not null auto_increment comment  '直播送礼编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
liverid int(10) unsigned zerofill not null comment  '主播编号',
livegiftid int unsigned not null comment  '直播礼物编号',
giftnum tinyint not null default 0 comment  '礼物数量',
givegifttime timestamp not null default current_timestamp comment '送礼时间',
primary key (givegiftid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(liverid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建直播礼物钱包充值表tbl_giftcharge
```sql
create  table tbl_givecharge(
giftchargeid int unsigned not null auto_increment comment  '礼物充值编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
chargeprice double not null comment  '充值金额',
chargetime timestamp not null default current_timestamp comment '充值时间',
chargeway tinyint not null default 0 comment  '支付方式',
chargenum int not null default 0 comment  '支付订单流水号',
primary key (giftchargeid),
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

### 平台收益模块
#### 创建会员费收益表tbl_memberprofit
```sql
create  table tbl_memberprofit(
memberprofitid int unsigned not null auto_increment comment  '会员费收益编号',
memberid int(10) unsigned zerofill not null comment  '会员编号',
upgradeid int(10) unsigned zerofill not null comment  '池主编号',
payfeenum tinyint not null default 0 comment '缴费次数',
settlenum tinyint not null default 0 comment '结算次数',
primary key (memberprofitid),
foreign  key(memberid) references tbl_user(uid) ,
foreign  key(upgradeid) references tbl_user(uid)
)engine=InnoDB  default charset=utf8;
```

#### 创建群商注册费收益表tbl_qsloginprofit
```sql
create  table tbl_qsloginprofit(
qsloginprofitid int unsigned not null auto_increment comment  '群商注册费收益编号',
qunshangid int(10) unsigned zerofill not null comment  '群商编号',
qsprofitfirstid int(10) unsigned zerofill not null comment  '收益群商1编号',
qsprofitsecondid int(10) unsigned zerofill not null comment  '收益群商2编号',
qsprofitthirdid int(10) unsigned zerofill not null comment  '收益群商3编号',
agentid int(10) unsigned zerofill not null comment  '代理商编号',
primary key (qsloginprofitid),
foreign  key(qunshangid) references tbl_user(uid) ,
foreign  key(qsprofitfirstid) references tbl_user(uid),
foreign  key(qsprofitsecondid) references tbl_user(uid),
foreign  key(qsprofitthirdid) references tbl_user(uid)
)engine=InnoDB  default charset=utf8;
```

### 商品模块
#### 创建分类父表tbl_productclass
```sql
create  table tbl_productclass(
productclassid tinyint unsigned not null auto_increment comment  '分类父类编号',
classname char(4) not null comment  '分类名称',
classimage varchar(100) not null comment  '分类图标',
classpriority tinyint not null comment '优先级',
primary key (productclassid)
)engine=InnoDB  default charset=utf8;
```

#### 创建分类子表tbl_productclasschild
```sql
create  table tbl_productclasschild(
classchildid tinyint unsigned not null auto_increment comment  '分类子类编号',
productclassid tinyint unsigned not null comment  '分类父类编号',
classchildname char(4) not null comment  '分类名称',
classchildimage varchar(100) not null comment  '分类图标',
classchildpriority tinyint not null comment '优先级',
primary key (classchildid),
foreign  key(productclassid) references tbl_productclass(productclassid)
)engine=InnoDB  default charset=utf8;
```

#### 创建商品表tbl_product
```sql
create  table tbl_product(
productid int unsigned not null auto_increment comment  '商品编号',
productname char(30) not null comment  '商品名称',
productcover varchar(100) not null comment  '商品封面',
productoldprice double not null default 0 comment  '商品原价',
productnewprice double not null default 0 comment  '商品促销价',
storenum int not null default 0 comment  '商品库存',
productdesc varchar(255) not null default "商品暂无描述" comment  '商品描述',
commissionrate tinyint not null comment  '佣金比例',
sellerid int(10) unsigned zerofill not null comment  '卖家编号',
productstate tinyint not null default 2 comment  '商品状态',
classchildid tinyint unsigned not null comment  '分类子类编号',
shoppingmall tinyint not null default 1 comment  '所属商城',
primary key (productid),
foreign  key(sellerid) references tbl_user(uid),
foreign  key(classchildid) references tbl_productclasschild(classchildid)
)engine=InnoDB  default charset=utf8;
```

#### 创建商品图片表tbl_productimage
```sql
create  table tbl_productimage(
productimageid int unsigned not null auto_increment comment  '产品图片编号',
productid int unsigned not null comment  '商品编号',
imagename char(30) not null comment  '商品图片名称',
productimageurl varchar(100) not null comment  '产品图片地址',
primary key (productimageid),
foreign  key(productid) references tbl_product(productid)
)engine=InnoDB  default charset=utf8;
```

#### 创建购物车表tbl_shoppingcart
```sql
create  table tbl_shoppingcart(
cartid int unsigned not null auto_increment comment  '购物车编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
productid int unsigned not null comment  '商品编号',
productnum tinyint not null comment  '商品数量',
primary key (cartid),
foreign  key(productid) references tbl_product(productid),
foreign  key(uid) references tbl_user(uid)
)engine=InnoDB  default charset=utf8;
```

### 订单模块
#### 创建收获地址表tbl_shippingaddress
```sql
create  table tbl_shippingaddress(
addressid int unsigned not null auto_increment comment  '收货地址编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
urealname char(10) not null comment  '收货人姓名',
utel char(11) not null comment  '手机号',
Realaddress varchar(50) not null comment  '地址',
primary key (addressid),
foreign  key(uid) references tbl_user(uid)
)engine=InnoDB  default charset=utf8;
```

#### 创建订单主表tbl_mainorder
```sql
create  table tbl_mainorder(
mainorderid int unsigned not null auto_increment comment  '订单主表编号',
ordertime timestamp not null default current_timestamp comment '生成时间',
orderstate tinyint not null comment '订单状态',
uid int(10) unsigned zerofill not null comment  '买家编号',
paytime timestamp not null comment '支付时间',
payway tinyint not null comment  '支付方式',
paynum int not null comment  '支付订单流水号',
addressid int unsigned not null comment  '收货地址编号',
totalprice double not null comment '总价',
countprice double not null default 0 comment '优惠',
finalprice double not null comment '实付',
primary key (mainorderid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(addressid) references tbl_shippingaddress(addressid) 
)engine=InnoDB  default charset=utf8;
```

#### 创建订单从表tbl_minororder
```sql
create  table tbl_minororder(
minororderid int unsigned not null auto_increment comment  '订单从表编号',
mainorderid int unsigned not null comment  '订单主表编号',
orderstate tinyint not null comment '订单状态',
sellerid int(10) unsigned zerofill not null comment  '卖家编号',
totalprice double not null comment '总价',
countprice double not null default 0 comment '优惠',
finalprice double not null comment '实付',
logisticsname char(10) not null comment  '物流公司名称',
trackingnum char(15) not null comment  '快递单号',
primary key (minororderid),
foreign  key(mainorderid) references tbl_mainorder(mainorderid) ,
foreign  key(sellerid) references tbl_user(uid)  
)engine=InnoDB  default charset=utf8;
```

#### 创建订单项表tbl_orderitem
```sql
create  table tbl_orderitem(
orderitemid int unsigned not null auto_increment comment  '订单项编号',
minororderid int unsigned not null comment  '订单从表编号',
productid int unsigned not null comment  '商品编号',
commissionrate tinyint not null comment '佣金比例',
productnum int not null default 0 comment  '商品数量',
productname char(30) not null comment '商品名称',
productimage varchar(100) not null comment '商品主图URL',
preprice double not null default 0 comment '单价',
primary key (orderitemid),
foreign  key(minororderid) references tbl_minororder(minororderid) ,
foreign  key(productid) references tbl_product(productid)  
)engine=InnoDB  default charset=utf8;
```

#### 创建优惠券表tbl_discount
```sql
create  table tbl_discount(
discountid int unsigned not null auto_increment comment  '优惠券编号',
productid int unsigned not null comment  '对应商品编号',
sillprice double not null default 0 comment '门槛金额',
discountprice double not null default 0 comment '优惠金额',
discountnum int not null default 0 comment '优惠券数量',
primary key (discountid),
foreign  key(productid) references tbl_product(productid)  
)engine=InnoDB  default charset=utf8;
```

#### 创建优惠券领取表tbl_discountget
```sql
create  table tbl_discountget(
discountgetid int unsigned not null auto_increment comment  '优惠券领取编号',
discountid int unsigned not null comment  '优惠券编号',
uid int(10) unsigned zerofill not null comment  '用户编号',
primary key (discountgetid),
foreign  key(discountid) references tbl_discount(discountid),
foreign  key(uid) references tbl_user(uid)
)engine=InnoDB  default charset=utf8;
```

#### 创建退货订单表tbl_returnorder
```sql
create  table tbl_returnorder(
returnorderid int unsigned not null auto_increment comment  '退货订单编号',
minororderid int unsigned not null comment  '订单从表编号',
returndesc char(100) not null default "暂无退货描述" comment  '退货描述',
returnorderstate tinyint not null comment '退货订单状态',
primary key (returnorderid),
foreign  key(minororderid) references tbl_minororder(minororderid)
)engine=InnoDB  default charset=utf8;
```

#### 创建省表tbl_province
```sql
create  table tbl_province(
provinceid int not null auto_increment comment  '省编号',
provincename char(5) not null comment  '省名',
primary key (provinceid)
)engine=InnoDB  default charset=utf8;
```

#### 创建市表tbl_city
```sql
create  table tbl_city(
cityid int not null auto_increment comment  '市编号',
cityname char(15) not null comment  '市名',
primary key (cityid)
)engine=InnoDB  default charset=utf8;
```

