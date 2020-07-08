# API

## 粉丝升级

### 拉新（注册）
    insert db（新人注册信息）（？）
    邀请人的邀请人数++;
    for(i=0;i<bili.length;i++){
        if (邀请人身份>=会员) {
            邀请人积分+100*bili[i];
        }
        if (上一个邀请人 != 0) 邀请人id = 上一个邀请人id;
        else break;
    }
    if (邀请人数>100 && 身份==‘粉丝’) update 会员 （多张表）
    

### 氪金升级会员
    支付接口
    success：
        update 会员 （多张表）
        while（邀请人身份<群商） 领主 = 上一个邀请人的id （找到最近的一个群商）
        //记录会员支付以及上级领主会员费收益
        insert/update 会员费表 会员id，领主id，count++
        //消费行为积分收益
        for(i=1;i<bili.length;i++){
            if (邀请人身份>=会员) {
                邀请人积分+200*bili[i];
            }
            if (上一个邀请人 != 0) 邀请人id = 上个邀请人id;
            else break;
        }

### 升级成群商
    if(实名认证+企业认证)
    支付接口
    success：
        update 身份
        //注册费收益,s为上级邀请人数组
        while(ans<3){
            if (身份>=群商){
                s.append(id);
                ans++;
            }
            if (上一个邀请人！=0) 邀请人id = 上个邀请人id;
            else break;
        }
        insert into 注册费表， 群商id  s[0]  s[1]  s[2];

        //消费行为积分收益
        for(i=1;i<bili.length;i++){
            if (邀请人身份>=会员) {
                邀请人积分+100000*bili[i];
            }
            if (上一个邀请人！=0) 邀请人id = 上个邀请人id;
            else break;
        }
    

### 买卖商品
    
    