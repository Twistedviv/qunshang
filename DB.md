头像：
http://pic.51yuansu.com/pic2/cover/00/27/31/57fd98ab8e47b_610.jpg
http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg

###群商数据库的创建
```sql
create database db_qunshang
default character set utf8
default collate utf8_general_ci;
use db_qunshang;
```
创建表tbl_user
```sql
create  table tbl_user(
uid int(11) not null auto_increment comment  '用户编号',
utel varchar(11) not null comment '用户手机号',
upass char(20) not null comment '密码',
uname char(20) not null comment '用户名',
headimage varchar(200) not null comment '头像',
identity tinyint(1) not null comment '用户身份',
sign varchar(100) comment '个性签名',
primary key (uid)
)engine=InnoDB  default charset=utf8;
```
创建表tbl_group
```sql
create  table tbl_group(
groupid tinyint(10) not null auto_increment comment  '社群编号',
groupname char(20) not null comment '社群名',
uid int(11) not null comment  '用户编号',
primary key (groupid),
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```
创建表tbl_useringroup
```sql
create  table tbl_useringroup(
useringroupid int(10) not null auto_increment comment  '加入社群序号',
groupid tinyint(10) not null comment '社群编号',
uid int(11) not null comment  '用户编号',
primary key (useringroupid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(groupid) references tbl_group(groupid) 
)engine=InnoDB  default charset=utf8;
```
创建表tbl_begingroup
```sql
create  table tbl_begingroup(
begingroupid int(10) not null auto_increment comment  '初始社群编号',
groupid tinyint(10) not null comment '社群编号',
uid int(11) not null comment  '用户编号',
primary key (begingroupid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(groupid) references tbl_group(groupid) 
)engine=InnoDB  default charset=utf8;
```
创建表tbl_invite
```sql
create  table tbl_invite(
inviteid int(10) not null auto_increment comment  '邀请编号',
invitedid int(11) not null comment '被邀请人编号',
inviterid int(11) not null comment  '邀请人编号',
primary key (inviteid)
)engine=InnoDB  default charset=utf8;
```
创建表tbl_video
```sql
create  table tbl_video(
videoid int(10) not null auto_increment comment  '短视频编号',
url varchar(200) not null comment '短视频地址',
videodesc tinytext not null comment  '视频描述',
primary key (videoid)
)engine=InnoDB  default charset=utf8;
```
创建表tbl_like
```sql
create  table tbl_like(
likeid int(10) not null auto_increment comment  '点赞编号',
videoid int(10) not null comment '短视频编号,
uid int(11) not null comment  '用户编号',
primary key (likeid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(videoid) references tbl_video(videoid) ,
unique(videoid,uid)
)engine=InnoDB  default charset=utf8;
```
创建表tbl_reply
```sql
create  table tbl_reply(
replyid int(10) not null auto_increment comment  '评论编号',
videoid int(10) not null comment '短视频编号',
uid int(11) not null comment  '用户编号',
content tinytext not null comment  '评论内容',
primary key (replyid),
foreign  key(uid) references tbl_user(uid) ,
foreign  key(videoid) references tbl_video(videoid) 
)engine=InnoDB  default charset=utf8;
```

商品模块
创建表tbl_product
```sql
create  table tbl_product(
productid int(10) not null auto_increment comment  '商品编号',
productname char(20) not null comment '商品名称',
price double not null comment '单价',
quantity int(10) not null comment '库存',
productdesc text not null comment '描述',
commissionrate tinyint(10) not null comment '佣金比例',
uid int(11) not null comment  '卖家编号',
primary key (productid),
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```
创建表tbl_productimg
```sql
create  table tbl_productimg(
productimgid int(10) not null auto_increment comment  '商品图片编号',
productid int(10) not null comment '商品编号',
imgname char(20) not null comment '图片名',
imgurl varchar(200) not null comment '商品图片地址',
primary key (productimgid),
foreign  key(productid) references tbl_product(productid) 
)engine=InnoDB  default charset=utf8;
```
创建表tbl_productitem
```sql
create  table tbl_productitem(
productitemid int(10) not null auto_increment comment  '商品项编号',
productid int(10) not null comment '商品编号',
productnum int(10) not null comment '商品数量',
primary key (productitemid),
foreign  key(productid) references tbl_product(productid) 
)engine=InnoDB  default charset=utf8;
```
创建表tbl_shoppingcart
```sql
create  table tbl_shoppingcart(
cartid int(10) not null auto_increment comment  '购物车编号',
productid int(10) not null comment '商品编号',
uid int(11) not null comment  '用户编号',
primary key (cartid),
foreign  key(productid) references tbl_product(productid) ,
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

创建表tbl_order
```sql
create  table tbl_order(
orderid int(10) not null auto_increment comment  '订单编号',
ordertime timestamp not null default  current_timestamp comment '生成时间',
orderstate tinyint(10) not null comment '订单状态',
paytime timestamp not null comment '支付时间',
uid int(11) not null comment  '用户编号',
payway tinyint(20) not null comment  '支付方式',
payid int(10) not null comment  '支付订单号',
freight double(10) not null comment '运费',
totalprice double(10) not null comment '总价',
finalprice double(10) not null comment '实付',
primary key (orderid),
foreign  key(uid) references tbl_user(uid) 
)engine=InnoDB  default charset=utf8;
```

