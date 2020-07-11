# API
- 需要触发人的id中间变量

## 相关池算法对应方法

### 拉新（注册）
    insert db（新人注册信息）（？）
    邀请人的邀请人数++;
    for(i=0;i<bili.length;i++){
        if (邀请人身份>=会员) {
            邀请人积分+100*bili[i];
        }
        if (上一个邀请人！=0) set 上个邀请人
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
            if (上一个邀请人！=0) set 上个邀请人
            else break;
        }

### 升级成群商 （群商注册费一定会向上找到3个群商给予）
    if(实名认证+企业认证)
    支付接口
    success：
        update 身份
        //注册费收益,s为上级邀请人数组
        id = 当前人id
        tmp = id
        while(ans<3){
            if (身份>=群商){
                s.append(tmp);
                ans++;
            }
            if (上一个邀请人！=0) tmp=上个邀请人id
            else break;
        }
        tmp = id
        while(身份<代理商){
            tmp=上一个邀请人id；
        }
        insert 注册费表 群商id 邀请人数组[012] 代理商id

        //消费行为积分收益
        for(i=1;i<bili.length;i++){
            if (邀请人身份>=会员) {
                邀请人积分+100000*bili[i];
            }
            if (上一个邀请人！=0) set 上个邀请人
            else break;
        }
    

### 注册费/会员费结算
    //注册费
    if (judge) 是否结算过
    //会员费，count会员缴费次数，judgeCount结算次数
    会费激励【105】{50，40，30，20，10,10...}
    for (i=judgeCount;i<count;i++){
        sum+=会费激励[i];
    }

	if(过期) count、judgecount = 0；
## 行为积分算法

### 