// 导入封装好的axios实例
import {
  get,
  post,
  put
} from "./request"

let reqHttp = 'http://coopera.xfd365.com'
// let reqHttp = 'http://172.168.0.50' // 周凯本地地址


let reqHttp1 = 'http://pay.xfd365.com'
// let reqHttp1 = 'http://172.168.0.39:8087' // 耿强本地地址

export const server = {
  // 获取工银理财登陆url
  yiNongUrl: function (paramObj) {
    return post(reqHttp1 + '/icbc/getUrl', paramObj)
  },
	
	// -------------  版本信息 ---------------
	
	// 不需要登录就根据版本id显示最新版本信息（当前为最新就不显示）
	nologin_get_new_version_upgrade: function (paramObj) { // 登录前用的--必传手机号
	  return post(reqHttp + '/api/index/nologin_get_new_version_upgrade', paramObj)
	},
	// 根据版本id显示当前版本信息
	get_now_version_upgrade: function (paramObj) {
	  return post(reqHttp + '/api/user/get_now_version_upgrade', paramObj)
	},

  // -------------  登录 ---------------

  // 根据账号判断用户有没有密码
  front_check_pwd: function (paramObj) { // 登录前用的--必传手机号
    return post(reqHttp + '/api/index/front_check_pwd', paramObj)
  },
  // 通用--用户第一次设置密码或使用旧密码修改密码
  user_set_pwd: function (paramObj) { // 登录前用的--必传手机号
    return post(reqHttp + '/api/user/user_set_pwd', paramObj)
  },
  // 发送验证码
  get_code: function (paramObj) {
    return post(reqHttp + '/api/index/get_code', paramObj)
  },
  // 绑定微信--验证码登录或注册
  login_code: function (paramObj) {
    return post(reqHttp + '/api/index/login_code', paramObj)
  },
  // 绑定微信--手机号密码登录（可用于商城登录）
  login: function (paramObj) {
    return post(reqHttp + '/api/login', paramObj)
  },
  // 微信登录--微信授权后绑定手机号（绑定微信或手机号）
  wx_bind_phone: function (paramObj) {
    return post(reqHttp + '/api/wechat/wx_bind_phone', paramObj)
  },
  // 微信登录--微信注册登录（绑定微信或手机号）
  wechatLogin: function (paramObj) {
    return post(reqHttp + '/api/wechat/login', paramObj)
  },
  // 社员忘记密码（登录前使用）（商城可用）
  forget_pwd: function (paramObj) {
    return post(reqHttp + '/api/index/forget_pwd', paramObj)
  },

  // -------------  首页  ---------------

  // 用户首页个人信息
  user_index: function (paramObj) {
    return post(reqHttp + '/api/user/user_index', paramObj)
  },
  // 益农宝--检测用户实名认证信息
  check_user_real_info: function (paramObj) {
    return post(reqHttp + '/api/user/check_user_real_info', paramObj)
  },
  // 益农宝--保存用户实名认证信息
  update_user_real_info: function (paramObj) {
    return post(reqHttp + '/api/user/update_user_real_info', paramObj)
  },



  // -------------  个人中心  ---------------
	// 用户个人中心
	userInfo: function(paramObj) {
		return post(reqHttp + '/api/user/user_info', paramObj)
	},	
	// 图片上传
	uploadImg: function(paramObj) {
		return post(reqHttp + '/user/auth/uploadImg', paramObj)
	},
	// 修改头像
	update_user_photo: function(paramObj) {
		return post(reqHttp + '/api/user/update_user_photo', paramObj)
	},
  // 修改用户基本信息（改为至少传一个参数）
	update_user_baseinfo: function(paramObj) {
		return post(reqHttp + '/api/user/update_user_baseinfo', paramObj)
	},
	// 用户个人中心购物车和收藏信息
	user_center_info: function(paramObj) {
		return post(reqHttp + '/api/user/user_center_info', paramObj)
	},
	// 判断用户有没有设置过支付密码（errno 有多个情况返回）
	user_check_pay_pwd: function(paramObj) {
		return post(reqHttp + '/api/user/user_check_pay_pwd', paramObj)
	},
	// 用户使用验证码修改支付密码
	user_update_pay_pwd_bycode: function(paramObj) {
		return post(reqHttp + '/api/user/user_update_pay_pwd_bycode', paramObj)
	},
	// 通用--判断用户之前有没有设置过密码（errno 有多个情况返回）
	user_check_pwd: function(paramObj) { // 啥都不用传
		return post(reqHttp + '/api/user/user_check_pwd', paramObj)
	},
	// 提交意见反馈
	add_feedback: function(paramObj) {
		return post(reqHttp + '/api/user/add_feedback', paramObj)
	},


	// -------------  消息  ---------------

	// 消息--用户消息列表
	user_notify_announce_lists: function(paramObj) {
		return post(reqHttp + '/api/user/user_notify_announce_lists', paramObj)
	},
	// 消息--用户消息详情
	user_notify_announce_detail: function(paramObj) {
		return post(reqHttp + '/api/user/user_notify_announce_detail', paramObj)
	},
	// 消息--标记消息全部已读
	read_all_notify_announce: function(paramObj) {
		return post(reqHttp + '/api/user/read_all_notify_announce', paramObj)
	},
	// 消息--用户删除消息-- 删除单条消息
	user_delete_notify_announce: function(paramObj) {
		return post(reqHttp + '/api/user/user_delete_notify_announce', paramObj)
	},
	// 消息--用户清空消息
	user_clear_all_notify_announce: function(paramObj) {
		return post(reqHttp + '/api/user/user_clear_all_notify_announce', paramObj)
	},
	// 消息--标记选择的消息为已读
	read_choose_notify_announces: function(paramObj) {
		return post(reqHttp + '/api/user/read_choose_notify_announces', paramObj)
	},
	// 消息--用户删除选择的消息
	user_delete_choose_notify_announces: function(paramObj) {
		return post(reqHttp + '/api/user/user_delete_choose_notify_announces', paramObj)
	},

	// -------------  账号管家  ---------------

  // 用户账户管家资产和收益
  user_wallet: function (paramObj) {
    return post(reqHttp + '/api/user/user_wallet', paramObj)
  },
  // 用户账户存入显示支付方式
  user_select_pay_type: function (paramObj) {
    return post(reqHttp + '/api/user/user_select_pay_type', paramObj)
  },
  // 用户账户存入支付
  user_wallet_pay: function (paramObj) {
    return post(reqHttp + '/api/user/user_wallet_pay', paramObj)
  },
  // 用户账户存入支付结果查询
  user_wallet_pay_orderQuery: function (paramObj) {
    return post(reqHttp + '/api/user/user_wallet_pay_orderQuery', paramObj)
  },
  // 用户账户提现到微信的微信用户信息
  user_wx_info: function (paramObj) {
    return post(reqHttp + '/api/user/user_wx_info', paramObj)
  },
  // 微信提现--绑定微信openid
  wechatbindLogin: function (paramObj) {
    return post(reqHttp + '/api/wechatbind/login', paramObj)
  },
	// 账户管家--用户账户取出首页
	user_wallet_out_index: function (paramObj) {
	  return post(reqHttp + '/api/user/user_wallet_out_index', paramObj)
	},
  // 用户账户转出提交申请
  user_wallet_take_out_apply: function (paramObj) {
    return post(reqHttp + '/api/user/user_wallet_take_out_apply', paramObj)
  },
  // 查看用户账户转出申请详情
  wallet_take_out_detail: function (paramObj) {
    return post(reqHttp + '/api/user/wallet_take_out_detail', paramObj)
  },
  // 查看用户账户转出申请列表
  wallet_take_out_lists: function (paramObj) {
    return post(reqHttp + '/api/user/wallet_take_out_lists', paramObj)
  },
  // 用户账户交易明细
  user_wallet_log: function (paramObj) {
    return post(reqHttp + '/api/user/user_wallet_log', paramObj)
  },
  // 用户账户收益明细
  user_wallet_profit_log: function (paramObj) {
    return post(reqHttp + '/api/user/user_wallet_profit_log', paramObj)
  },




  // -------------  账号管家 - 银行卡  ---------------

  // 通用--用户银行卡包
  user_bank: function (paramObj) {
    return post(reqHttp + '/api/user/user_bank', paramObj)
  },
	// 耿强接口 - 现在改用周凯接口
  // 查询银联所有省信息
  // selectAllYinlianProvince: function (paramObj) {
  //   return post(reqHttp1 + '/yinlian/yl/selectAllYinlianProvince', paramObj)
  // },
  //  // 根据银联省代码查询市信息
  //  selectByProvinceCode: function (paramObj) {
  //   return post(reqHttp1 + '/yinlian/yl/selectByProvinceCode', paramObj)
  // },
	// 通用--银行卡用户协议
	user_bank_agreement: function (paramObj) {
	  return post(reqHttp + '/api/user/user_bank_agreement', paramObj)
	},
	// 通用--查询银联所有省信息
	select_all_yinlian_province: function (paramObj) {
	  return post(reqHttp + '/api/user/select_all_yinlian_province', paramObj)
	},
	 // 通用--根据银联省代码查询市信息
	 select_by_province_code: function (paramObj) {
	  return post(reqHttp + '/api/user/select_by_province_code', paramObj)
	},
  // 通用--根据开户行获取支行列表
  get_branch_bank: function (paramObj) {
    return post(reqHttp + '/api/user/get_branch_bank', paramObj)
  },
  // 通用--用户添加、编辑银行卡
  user_change_bank: function (paramObj) {
    return post(reqHttp + '/api/user/user_change_bank', paramObj)
  },
  // 根据银行卡图片获取银行卡号
  get_aipocr_bank_no: function (paramObj) {
    return post(reqHttp + '/api/index/get_aipocr_bank_no', paramObj)
  },
  // 通用--用户银行卡详情
  user_bank_detail: function (paramObj) {
    return post(reqHttp + '/api/user/user_bank_detail', paramObj)
  },
  // 通用--用户根据银行卡号获取所属银行
  user_get_bank_by_banknum: function (paramObj) {
    return post(reqHttp + '/api/user/user_get_bank_by_banknum', paramObj)
  },
  // 通用--用户删除银行卡
  user_del_bank: function (paramObj) {
    return post(reqHttp + '/api/user/user_del_bank', paramObj)
  },

  // -------------  账号管家 - 合作社  ---------------

  // 显示用户所有合作社账户
  my_coopera_account: function (paramObj) {
    return post(reqHttp + '/api/user/my_coopera_account', paramObj)
  },
  // 用户在合作社的股金明细
  user_coopera_stock_log: function (paramObj) {
    return post(reqHttp + '/api/user/user_coopera_stock_log', paramObj)
  },
  // 用户在合作社互助金明细
  user_coopera_hz_passbook_log: function (paramObj) {
    return post(reqHttp + '/api/user/user_coopera_hz_passbook_log', paramObj)
  },
  // 用户在合作社收益明细
  user_coopera_passbook_log: function (paramObj) {
    return post(reqHttp + '/api/user/user_coopera_passbook_log', paramObj)
  },
  // 我的股金
  // myStockMoney: function(paramObj) {
  // 	return post(reqHttp + '/api/coopera/my_stock_money', paramObj)
  // },


  // -------------  加入合作社/合作联社申请  ---------------

  // 社员开户认证手机号-- 社员注册
  userAc: function (paramObj) {
    return post(reqHttp + '/user/auth/UserAc', paramObj)
  },
  // 获取省市区和合作社
  addresss: function (paramObj) {
    return post(reqHttp + '/user/auth/addresss', paramObj)
  },
  // 加入合作社--第一步用户选择加入的合作社或合作联社
  UserSeleCoopera: function (paramObj) {
    return post(reqHttp + '/api/user/UserSeleCoopera', paramObj)
  },
  // 身份证ocr识别身份证号
  idcardOcr: function (paramObj) {
    return post(reqHttp + '/user/auth/idcard_ocr', paramObj)
  },
  // 上传照片查询
  authImgDetail: function (paramObj) {
    return post(reqHttp + '/user/auth/img_detail', paramObj)
  },
  // 获取民族列表
  nation: function (paramObj) {
    return post(reqHttp + '/user/auth/nation', paramObj)
  },
  // 学历列表
  edu: function (paramObj) {
    return post(reqHttp + '/user/auth/edu', paramObj)
  },
  // 政治面貌列表
  politicalList: function (paramObj) {
    return post(reqHttp + '/user/auth/politicalList', paramObj)
  },
  // 加入合作社--第二步添加或修改用户社员基本信息
  newUserAuth: function (paramObj) {
    return post(reqHttp + '/api/user/newUserAuth', paramObj)
  },
  // 行业列表
  occList: function (paramObj) {
    return post(reqHttp + '/user/auth/occList', paramObj)
  },
  // 加入合作社--第三步添加或修改用户社员职业信息
  career: function (paramObj) {
    return post(reqHttp + '/api/user/career', paramObj)
  },
  // 加入合作社--显示用户社员信息详情
  user_info_detail: function (paramObj) {
    return post(reqHttp + '/api/user/user_info_detail', paramObj)
  },

  // -------------  身份模块  ---------------

  // 用户身份
  user_role: function (paramObj) {
    return post(reqHttp + '/api/user/user_role', paramObj)
  },
  // 用户进入已加入的合作社或合作联社显示所在合作社列表
  user_coopera_lists: function (paramObj) {
    return post(reqHttp + '/api/user/user_coopera_lists', paramObj)
  },
  // 根据所选合作社展示所有身份
  user_all_job_in_coopera: function (paramObj) {
    return post(reqHttp + '/api/coopera/user_all_job_in_coopera', paramObj)
  },
  // 选择合作社跟身份进入app（请求参数有改动）
  user_select_coopera: function (paramObj) {
    return post(reqHttp + '/api/coopera/user_select_coopera', paramObj)
  },
  // 用户是否是团长判断（我所拥有的团队）
  user_team_owner_check: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_owner_check', paramObj)
  },
  // // 用户身为团长所建的团队信息
  // userTeamInfo: function(paramObj) {
  // 	return post(reqHttp + '/api/user/user_team_info', paramObj)
  // },
  // 用户作为团员的所有所在团队列表
  user_as_member_team_lists: function (paramObj) {
    return post(reqHttp + '/api/user/user_as_member_team_lists', paramObj)
  },

  // -------------  申请创建群众团体 、 申请加入群众团体  ---------------

  // 获取团队成员数量列表
  user_team_numbers: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_numbers', paramObj)
  },
  // 用户创建团队或加入团队时自己的基本信息
  user_team_base_info: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_base_info', paramObj)
  },
  // 用户添加保存所建团队
  user_team_add: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_add', paramObj)
  },
  // 根据搜索的团队名称联想出来类似的团队名称
  src_team_name_lists: function (paramObj) {
    return post(reqHttp + '/api/user/src_team_name_lists', paramObj)
  },
  // 用户根据条件显示团队列表
  user_src_team_lists: function (paramObj) {
    return post(reqHttp + '/api/user/user_src_team_lists', paramObj)
  },
  // 用户选择加入团队
  user_join_team: function (paramObj) {
    return post(reqHttp + '/api/user/user_join_team', paramObj)
  },

  // -------------  互助金  ---------------

  // 互助金--互助金存入首页（返回参数去掉银行卡列表，加上定期、收益账户）
  passbook_index: function (paramObj) {
    return post(reqHttp + '/api/coopera/passbook_index', paramObj)
  },
  // 互助金--互助金明细（余额进出明细）（加入总条数总页数）（记录类型有变化）
  passbook_log: function (paramObj) {
    return post(reqHttp + '/api/coopera/passbook_log', paramObj)
  },
  // 互助金--互助金明细（账单详情）
  passbook_log_detail: function (paramObj) {
    return post(reqHttp + '/api/coopera/passbook_log_detail', paramObj)
  },
  // 互助金--互助金存入（微信支付宝银联）
  passbook_deposit_by_all: function (paramObj) {
    return post(reqHttp + '/api/coopera/passbook_deposit_by_all', paramObj)
  },
  // 互助金--互助金存入显示支付方式
  select_pay_type: function (paramObj) {
    return post(reqHttp + '/api/coopera/select_pay_type', paramObj)
  },
  // 互助金--互助金存入查询订单支付状态
  orderQuery: function (paramObj) {
    return post(reqHttp + '/api/coopera/orderQuery', paramObj)
  },
  // 互助金--互助金明细（余额与累计收益）（返回参数加上活期与定期总金额）
  passbook_money: function (paramObj) {
    return post(reqHttp + '/api/coopera/passbook_money', paramObj)
  },
  // 互助金--互助金取出提交申请
  submit_passbook_take_out: function (paramObj) {
    return post(reqHttp + '/api/coopera/submit_passbook_take_out', paramObj)
  },
  // 互助金--社员的定期互助金列表
  regular_lists: function (paramObj) {
    return post(reqHttp + '/api/coopera/regular_lists', paramObj)
  },
  // 互助金--社员的定期互助金取出申请
  submit_regular_money_take_out: function (paramObj) {
    return post(reqHttp + '/api/coopera/submit_regular_money_take_out', paramObj)
  },

  // 互助金--互助金转账银行列表
  bank_lists: function (paramObj) {
    return post(reqHttp + '/api/coopera/bank_lists', paramObj)
  },
  // 互助金--互助金转账根据户名跟账号查是不是合作社卡
  passbook_turn_src: function (paramObj) {
    return post(reqHttp + '/api/coopera/passbook_turn_src', paramObj)
  },
  // 互助金--互助金转账提交申请
  submit_passbook_turn: function (paramObj) {
    return post(reqHttp + '/api/coopera/submit_passbook_turn', paramObj)
  },
	
	// 互助金--互助金收益账户进出明细
	passbook_bonus_log: function (paramObj) {
	  return post(reqHttp + '/api/coopera/passbook_bonus_log', paramObj)
	},
	// 互助金--互助金收益账户提现申请提交成功后查看详情
	passbook_bonus_take_out_detail: function (paramObj) {
	  return post(reqHttp + '/api/coopera/passbook_bonus_take_out_detail', paramObj)
	},
	// 互助金--互助金收益账户当前所剩收益与累计收益
	passbook_bonus_money: function (paramObj) {
	  return post(reqHttp + '/api/coopera/passbook_bonus_money', paramObj)
	},
	// 互助金--互助金收益账户提现提交申请
	submit_passbook_bonus_take_out: function (paramObj) {
	  return post(reqHttp + '/api/coopera/submit_passbook_bonus_take_out', paramObj)
	},
	// 互助金--互助金收益账户提现明细
	passbook_bonus_out_log: function (paramObj) {
	  return post(reqHttp + '/api/coopera/passbook_bonus_out_log', paramObj)
	},
	
	

  // -------------  我要借款  ---------------

  // 我要借款--借款首页的借款产品（加入总条数总页数）
  loan_index_loan_product: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_index_loan_product', paramObj)
  },
  // 我要借款--借款首页我的借款信息（加入总条数总页数）
  loan_index_myloan: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_index_myloan', paramObj)
  },
  // 我要借款--我的基本信息
  my_info: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_info', paramObj)
  },
  // 我要借款--根据产品获取对应的借款时长、利率、最高借款金额、利率名称（进入申请借款页面使用）（请求参数改变）
  get_loan_rate: function (paramObj) {
    return post(reqHttp + '/api/coopera/get_loan_rate', paramObj)
  },
  // 我要借款--获取借款用途
  get_loan_use: function (paramObj) {
    return post(reqHttp + '/api/coopera/get_loan_use', paramObj)
  },
  // 我要借款--获取还款方式
  get_repayment: function (paramObj) {
    return post(reqHttp + '/api/coopera/get_repayment', paramObj)
  },
  // 我要借款--根据还款方式，借款时长利率id跟借款金额计算利息
  get_interest_by_rate: function (paramObj) {
    return post(reqHttp + '/api/coopera/get_interest_by_rate', paramObj)
  },
  // 我要借款--选择担保人（带搜索）（加入总条数总页数）
  select_guarantee: function (paramObj) {
    return post(reqHttp + '/api/coopera/select_guarantee', paramObj)
  },
  // 我要借款--提交借款申请（担保借款）
  submit_loan_apply: function (paramObj) {
    return post(reqHttp + '/api/coopera/submit_loan_apply', paramObj)
  },
  // 我要借款--借款详情
  user_loan_detail: function (paramObj) {
    return post(reqHttp + '/api/coopera/user_loan_detail', paramObj)
  },


  // -------------  我要还款  ---------------

  // 我要还款--当前总剩余应还贷款本金总额（返回参数修改）
  myAllLeftBackPrincipal: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_all_left_back_principal', paramObj)
  },
  // 我要还款--我要还款首页贷款列表（返回参数修改）（加入总条数总页数）
  myUserLoanBackIndex: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_user_loan_back_index', paramObj)
  },
  // 我要还款--待还款时我的还款计划（请求参数有增加）
  myRepaidLoanBackPlan: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_repaid_loan_back_plan', paramObj)
  },
  // 我要还款--已结清时我的还款记录（返回参数修改）
  myClearLoanBackLog: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_clear_loan_back_log', paramObj)
  },
  // 我要还款--已结清时我的提前还款记录中包含的逾期和未还的还款计划【已结清--提前还款】
  myPrebackLogIncludePlan: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_preback_log_include_plan', paramObj)
  },
  // 我要还款--已还详情（修改返回参数）
  myLoanBackDetail: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_loan_back_detail', paramObj)
  },
  // 我要还款--还款计划未还款的还款详情
  myPrepaidLoanBackDetail: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_prepaid_loan_back_detail', paramObj)
  },
  // 我要还款--按期还款显示所还明细【点击某一期--按期还款】
  loanBackByPlanDetail: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_back_by_plan_detail', paramObj)
  },
  // 我要还款--提前还款显示所还明细【点击---提前还款】
  loanBackByClearDetail: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_back_by_clear_detail', paramObj)
  },
  // 我要还款--提前还款支付（使用合作社卡、微信、支付宝、银联）
  payLoanBackClearByPassbook: function (paramObj) {
    return post(reqHttp + '/api/coopera/pay_loan_back_clear_by_passbook', paramObj)
  },
  // 我要还款--待还款时我的还款计划中的多期待还---按期还款--多期待还（可选模块）---点击---按期还款
  myRepaidLoanBackPlanTogether: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_repaid_loan_back_plan_together', paramObj)
  },
  // 我要还款--按期还款支付（使用合作社卡、微信、支付宝、银联）---某一期支付
  payLoanBackPlanByPassbook: function (paramObj) {
    return post(reqHttp + '/api/coopera/pay_loan_back_plan_by_passbook', paramObj)
  },
  // 我要还款--按期或提前还款）贷款还款查询还款支付状态（微信支付宝银联）---- 提前或者某一期
  loanBackOrderQuery: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_back_orderQuery', paramObj)
  },
  // 我要还款--计算待还款时我的还款计划中的选中的多期待还总金额--切换选择计算总金额
  myRepaidLoanBackPlanTogetherChoose: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_repaid_loan_back_plan_together_choose', paramObj)
  },
  // 我要还款--多期待还合并按期还款支付（使用合作社卡、微信、支付宝、银联）---多期支付
  payLoanBackPlanByPassbookTogether: function (paramObj) {
    return post(reqHttp + '/api/coopera/pay_loan_back_plan_by_passbook_together', paramObj)
  },
  // 我要还款--多期待还合并按期还款查询还款支付状态（微信支付宝银联）
  loanBackTogetherOrderQuery: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_back_together_orderQuery', paramObj)
  },
  // 我要还款--还款时显示支付方式
  loanBackSelectPayType: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_back_select_pay_type', paramObj)
  },


  // -------------  我要担保  ---------------

  // 我要担保--我的社内担保额度
  myGuaranteeLimit: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_guarantee_limit', paramObj)
  },
  // 我要担保--我的担保列表（加入总条数总页数）
  myGuaranteeLists: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_guarantee_lists', paramObj)
  },
  // 我要担保--担保借款详情
  guaranteeLoanDetail: function (paramObj) {
    return post(reqHttp + '/api/coopera/guarantee_loan_detail', paramObj)
  },
  // 我要担保--借款人历史借款信息
  userLoanHistory: function (paramObj) {
    return post(reqHttp + '/api/coopera/user_loan_history', paramObj)
  },
  // 我要担保--我的某一担保详情
  myGuaranteeDetail: function (paramObj) {
    return post(reqHttp + '/api/coopera/my_guarantee_detail', paramObj)
  },
  // 我要担保--确认担保借款（同意或拒绝）
  goLoanGuarantee: function (paramObj) {
    return post(reqHttp + '/api/coopera/go_loan_guarantee', paramObj)
  },
  // 我要担保--担保资产证明分类  房产 type_id=1   车产 type_id=2   其他 type_id=3
  loanGuaranteeType: function (paramObj) {
    return post(reqHttp + '/api/coopera/loan_guarantee_type', paramObj)
  },
  // 我要担保--获取我已上传的资产类型担保信息
  getTypeLoanGuaranteeAssets: function (paramObj) {
    return post(reqHttp + '/api/coopera/get_type_loan_guarantee_assets', paramObj)
  },
  // 我要担保--房产类型
  houseType: function (paramObj) {
    return post(reqHttp + '/api/coopera/house_type', paramObj)
  },
  // 我要担保--上传资产担保信息（选择资产担保同意担保提交前使用）
  submitLoanGuaranteeAssets: function (paramObj) {
    return post(reqHttp + '/api/coopera/submit_loan_guarantee_assets', paramObj)
  },
  // 我要担保--修改我已上传的该类资产担保信息
  updateLoanGuaranteeAssets: function (paramObj) {
    return post(reqHttp + '/api/coopera/update_loan_guarantee_assets', paramObj)
  },
  // 我要担保--删除我已上传的资产担保信息
  deleteLoanGuaranteeAssets: function (paramObj) {
    return post(reqHttp + '/api/coopera/delete_loan_guarantee_assets', paramObj)
  },
  // 我要担保--查看我上传的某一个资产担保详情
  oneLoanGuaranteeAssetsDetail: function (paramObj) {
    return post(reqHttp + '/api/coopera/one_loan_guarantee_assets_detail', paramObj)
  },
  // 我要担保--上传资产证明图片
  uploadGuaranteeImg: function (paramObj) {
    return post(reqHttp + '/api/coopera/upload_guarantee_img', paramObj)
  },
  // 我要担保--删除资产证明图片（上传后修改图片删除之前上传的图片时）
  deleteGuaranteeImg: function (paramObj) {
    return post(reqHttp + '/api/coopera/delete_guarantee_img', paramObj)
  },

  // -------------  团队  ---------------

  // 用户进入团队首页展示团队基本信息和推广统计信息
  userTeamIndex: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_index', paramObj)
  },
  // 用户发起团队个人收益提现
  userAddTeamWithdrawal: function (paramObj) {
    return post(reqHttp + '/api/user/user_add_team_withdrawal', paramObj)
  },
  // 团队个人提现列表
  userTeamWithdrawaLog: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_withdrawal_log', paramObj)
  },
  // 团队业务--团队中显示的团队分销商品一级分类
  teamFirstCategory: function (paramObj) {
    return post(reqHttp + '/api/user/team_first_category', paramObj)
  },
  // 团队业务--团队中分销商品列表（带分类带搜索）
  teamGoodslists: function (paramObj) {
    return post(reqHttp + '/api/user/team_goodslists', paramObj)
  },
  // 团队业务--获取团员加密后的主键id
  getTeamLockMemId: function (paramObj) {
    return post(reqHttp + '/api/user/get_team_lock_mem_id', paramObj)
  },
  // 团队业务--用户进入团队显示团队业务
  teamBusiness: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_business', paramObj)
  },

  // 团队业绩--业务收益统计
  teamProfitStatistics: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_profit_statistics', paramObj)
  },
  // 团队业绩--实时动态
  teamBusinessLog: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_business_log', paramObj)
  },
  // 团队业绩--实时动态下推广详情
  teamBusinessLogDetail: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_business_log_detail', paramObj)
  },

  // 我的团队--团队人数统计
  teamMemberStatistics: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_member_statistics', paramObj)
  },
  // 我的团队--团队成员状态
  teamMemberStatus: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_member_status', paramObj)
  },


  // 用户作为团长显示团员申请信息
  userTeaMembeInfo: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_member_info', paramObj)
  },
  // 用户作为团长审核团员申请信息
  userTeaMemberCheck: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_member_check', paramObj)
  },
  // 用户作为团长查看团员基本信息
  userTeaMemberDetail: function (paramObj) {
    return post(reqHttp + '/api/user/user_team_member_detail', paramObj)
  },



  // -------------  赏金任务-刘家军  ---------------

  // 赏金任务添加
  rewardAdd: function (paramObj) {
    return post(reqHttp + '/api/reward/reward_add', paramObj)
  },
  // 发布管理列表
  releaseLists: function (paramObj) {
    return post(reqHttp + '/api/reward/release_lists', paramObj)
  },
  // 悬赏开户
  capitalAccountAdd: function (paramObj) {
    return post(reqHttp + '/api/userreward/capitalAccountAdd', paramObj)
  },
  //个人中心-任务-数据展示
  userReDetail: function (paramObj) {
    return post(reqHttp + '/api/userreward/userReDetail', paramObj)
  },
  //帮助中心文章列表
  helpLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/helpLists', paramObj)
  },
  //帮助中心文章详情
  helpDetail: function (paramObj) {
    return post(reqHttp + '/api/userreward/helpDetail', paramObj)
  },
  //举报题目列表
  taskReportLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/taskReportLists', paramObj)
  },
  // 任务上/下架
  rewardIsShow: function (paramObj) {
    return post(reqHttp + '/api/reward/reward_is_show', paramObj)
  },
  // 获取接单限时，审核时间，做单次数配置信息
  getConfig: function (paramObj) {
    return post(reqHttp + '/api/reward/get_config', paramObj)
  },
  // 首页任务列表
  rewardLists: function (paramObj) {
    return post(reqHttp + '/api/reward/reward_lists', paramObj)
  },
  // 赏金任务详情
  rewardDetail: function (paramObj) {
    return post(reqHttp + '/api/reward/reward_detail', paramObj)
  },
  // 领取任务
  userRewardAdd: function (paramObj) {
    return post(reqHttp + '/api/userreward/userRewardAdd', paramObj)
  },
  // 用户领取任务列表
  userRewardLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/userRewardLists', paramObj)
  },
  // 取消任务
  userRewardDel: function (paramObj) {
    return post(reqHttp + '/api/userreward/userRewardDel', paramObj)
  },
  // 提交任务
  userRewardUp: function (paramObj) {
    return post(reqHttp + '/api/userreward/userRewardUp', paramObj)
  },
  // 用户关注列表
  guanLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/guanLists', paramObj)
  },
  // 用户关注
  guanAdd: function (paramObj) {
    return post(reqHttp + '/api/userreward/guanAdd', paramObj)
  },
  // 悬赏账户收支列表
  capitalLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/capitalLists', paramObj)
  },
  // 审核发布列表
  makeLists: function (paramObj) {
    return post(reqHttp + '/api/reward/make_lists', paramObj)
  },
  // 接单人查看任务详情
  reward_detail_make_user: function (paramObj) {
    return post(reqHttp + '/api/reward/reward_detail_make_user', paramObj)
  },
  // 任务完成情况
  makeDetail: function (paramObj) {
    return post(reqHttp + '/api/reward/make_detail', paramObj)
  },
  // 任务完成情况
  verify: function (paramObj) {
    return post(reqHttp + '/api/reward/verify', paramObj)
  },
  // 针对悬赏任务评论
  commentAdd: function (paramObj) {
    return post(reqHttp + '/api/userreward/commentAdd', paramObj)
  },
  // 针对当前悬赏任务评论列表
  commentLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/commentLists', paramObj)
  },
  // 个人中心我的评论列表
  myCommentLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/myCommentLists', paramObj)
  },
  // 删除评价
  commentDel: function (paramObj) {
    return post(reqHttp + '/api/userreward/commentDel', paramObj)
  },
  // 获取粉丝列表
  fenLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/fenLists', paramObj)
  },
  // 任务举报
  taskReportAdd: function (paramObj) {
    return post(reqHttp + '/api/userreward/taskReportAdd', paramObj)
  },
  // 任务发布-零钱支付
  payAdvanceByWallet: function (paramObj) {
    return post(reqHttp + '/api/reward/pay_advance_by_wallet', paramObj)
  },
  // 任务发布-银联/微信支付
  payAdvanceByUnion: function (paramObj) {
    return post(reqHttp + '/api/reward/pay_advance_by_union', paramObj)
  },
  // 赏金提现
  rewardWithdrawal: function (paramObj) {
    return post(reqHttp + '/api/reward/reward_withdrawal', paramObj)
  },
  // 已绑定银行卡列表
  rewardUserBank: function (paramObj) {
    return post(reqHttp + '/api/reward/user_bank', paramObj)
  },
  // 用户零钱信息
  rewardUserInfo: function (paramObj) {
    return post(reqHttp + '/api/reward/user_info', paramObj)
  },
  // 查询支付结果
  searchAdvanceByWallet: function (paramObj) {
    return post(reqHttp + '/api/reward/search_advance_by_wallet', paramObj)
  },
  // 账单详情
  capitalDetail: function (paramObj) {
    return post(reqHttp + '/api/userreward/capitalDetail', paramObj)
  },
  // 押金明细
  nocapitalLists: function (paramObj) {
    return post(reqHttp + '/api/userreward/nocapitalLists', paramObj)
  },
  // 手动完结任务
  rewardStatus: function (paramObj) {
    return post(reqHttp + '/api/reward/reward_status', paramObj)
  },
  // 判断是否为团长
	isTeam:function(paramObj){
		return post(reqHttp + '/api/reward/is_team',paramObj)
	},
	// 转发任务
	rewardForward:function(paramObj){
		return post(reqHttp + '/api/reward/reward_forward',paramObj)
	},



  // -------------  互助圈子-刘家军  ---------------
	// 动态发布
	userCircleAdd:function(paramObj){
		return post(reqHttp + '/api/circle/userCircleAdd',paramObj)
	},
	// 我关注的圈子列表
	myGuanLists:function(paramObj){
		return post(reqHttp + '/api/circle/myGuanLists',paramObj)
	},
	// 本人关注人发布的圈子
	guanUserCircleList:function(paramObj){
		return post(reqHttp + '/api/circle/guanUserCircleList',paramObj)
	},
	// 圈子列表
	circleLists:function(paramObj){
		return post(reqHttp + '/api/circle/circleLists',paramObj)
	},
	// 点赞
	giveAdd:function(paramObj){
		return post(reqHttp + '/api/circle/giveAdd',paramObj)
	},
	// 关注/取关用户
	guanUserAdd:function(paramObj){
		return post(reqHttp + '/api/circle/guanUserAdd',paramObj)
	},
	// 圈子详情
	circleDetail:function(paramObj){
		return post(reqHttp + '/api/circle/circleDetail',paramObj)
	},
	// 我的圈子被点赞列表
	mygiveLists:function(paramObj){
		return post(reqHttp + '/api/circle/mygiveLists',paramObj)
	},
	// 每个圈子的点赞列表
	giveLists:function(paramObj){
		return post(reqHttp + '/api/circle/giveLists',paramObj)
	},
	// 根据圈子ID显示评论列表
	circleCommentLists:function(paramObj){
		return post(reqHttp + '/api/circle/commentLists',paramObj)
	},
	// 根据圈子ID显示转发列表
	circleZfLists:function(paramObj){
		return post(reqHttp + '/api/circle/zfLists',paramObj)
	},
	// 评论添加
	circleCommentAdd:function(paramObj){
		return post(reqHttp + '/api/circle/commentAdd',paramObj)
	},
	// 获取用户信息
	userDetail:function(paramObj){
		return post(reqHttp + '/api/circle/userDetail',paramObj)
	},
	// 用户发布的圈子
	userCircleLists:function(paramObj){
		return post(reqHttp + '/api/circle/userCircleLists',paramObj)
	},
	// 我的圈子被评论列表
	myCircleCommentLists:function(paramObj){
		return post(reqHttp + '/api/circle/myCommentLists',paramObj)
	},
	// 关注的用户列表
	userGuanLists:function(paramObj){
		return post(reqHttp + '/api/circle/userGuanLists',paramObj)
	},

  // -------------  信用评分-龚欢欢  ---------------

  // 信用测评基本身份信息
      bankCreditAddOne: function(paramObj) {
            return post(reqHttp + '/api/credit/bankCreditAddOne', paramObj)
        },
        // 信用测评工作信息
        bankCreditAddTwo: function(paramObj) {
            return post(reqHttp + '/api/credit/bankCreditAddTwo', paramObj)
        },
        // 信用测评资产信息
        bankCreditAddThree: function(paramObj) {
            return post(reqHttp + '/api/credit/bankCreditAddThree', paramObj)
        },
        // 信用测评自评分数
        mycredit: function(paramObj) {
            return post(reqHttp + '/api/credit/mycredit', paramObj)
        },
        // 信用测评内部针对其他人员评分
        myCreditLists: function(paramObj) {
            return post(reqHttp + '/api/credit/bCreditLists', paramObj)
        },
        // 信用测评债务信息
        bankCreditAddFour: function(paramObj) {
            return post(reqHttp + '/api/credit/bankCreditAddFour', paramObj)
        },
        // 信用测评内部打分资格查询
        creditistc: function(paramObj) {
            return post(reqHttp + '/api/credit/isTc', paramObj)
        },
        // 信用测评内部打分成员列表
        teamLists: function(paramObj) {
            return post(reqHttp + '/api/credit/teamLists', paramObj)
        },
        // 信用测评内部打分开始
        addCredit: function(paramObj) {
            return post(reqHttp + '/api/credit/addCredit', paramObj)
        },
        // 信用测评内部评分题目
        scoreItem: function(paramObj) {
            return post(reqHttp + '/api/credit/scoreItem', paramObj)
        },
        // 信用测评内部评分内容
        addCreditScore: function(paramObj) {
            return post(reqHttp + '/api/credit/addCreditScore', paramObj)
        },


  // -------------  商城-段文静  ---------------
  // 一级分类
  shop_first_category: function (paramObj) {
    return post(reqHttp + '/api/shopindexhz/shop_first_category', paramObj)
  },
  // 根据一级分类显示二级分类
  shop_second_category: function (paramObj) {
    return post(reqHttp + '/api/shopindexhz/shop_second_category', paramObj)
  },
  // 商品列表
  shop_goodslists: function (paramObj) {
    return post(reqHttp + '/api/shopindexhz/shop_goodslists', paramObj)
  },
  // 购物车商品列表
  coopera_shop_cart: function (paramObj) {
    return post(reqHttp + '/api/carthz/coopera_shop_cart', paramObj)
  },
  // 加入购物车
  add_cart: function (paramObj) {
    return post(reqHttp + '/api/carthz/add_cart', paramObj)
  },
  // 商品详情
  shop_goodsdetail: function (paramObj) {
    return post(reqHttp + '/api/shopindexhz/shop_goodsdetail', paramObj)
  },
  // 收藏或取消收藏商品
  addordelete: function (paramObj) {
    return post(reqHttp + '/api/collecthz/addordelete', paramObj)
  },
  // 结算时获取商品信息接口
  coopera_shop_checkout: function (paramObj) {
    return post(reqHttp + '/api/carthz/coopera_shop_checkout', paramObj)
  },
  // 收货地址列表
  address_lists: function (paramObj) {
    return post(reqHttp + '/api/addresshz/address_lists', paramObj)
  },
  // 多店铺生成订单
  coopera_submit_order: function (paramObj) {
    return post(reqHttp + '/api/orderhz/coopera_submit_order', paramObj)
  },
  // 订单支付显示支付方式
  select_parent_pay_type: function (paramObj) {
    return post(reqHttp + '/api/payhz/select_parent_pay_type', paramObj)
  },
  // 获取省市县
  address: function (paramObj) {
    return post(reqHttp + '/api/index/address', paramObj)
  },
  // 添加或编辑收货地址
  address_save: function (paramObj) {
    return post(reqHttp + '/api/addresshz/address_save', paramObj)
  },
  // 我的信息
  coopera_user_info: function (paramObj) {
    return post(reqHttp + '/api/orderhz/coopera_user_info', paramObj)
  },
  // 我的积分
  coopera_user_integ_log: function (paramObj) {
    return post(reqHttp + '/api/orderhz/coopera_user_integ_log', paramObj)
  },
  // 我的收藏
  shop_goods_col_lists: function (paramObj) {
    return post(reqHttp + '/api/collecthz/shop_goods_col_lists', paramObj)
  },
  //我的订单
  coopera_order_lists: function (paramObj) {
    return post(reqHttp + '/api/orderhz/coopera_order_lists', paramObj)
  },
  // 未付款订单取消订单
  order_cancel: function (paramObj) {
    return post(reqHttp + '/api/orderhz/order_cancel', paramObj)
  },
  // 删除订单
  order_del: function (paramObj) {
    return post(reqHttp + '/api/orderhz/order_del', paramObj)
  },
  // 订单退款
  order_refund: function (paramObj) {
    return post(reqHttp + '/api/orderhz/order_refund', paramObj)
  },
  // 订单收货
  order_receiving: function (paramObj) {
    return post(reqHttp + '/api/orderhz/order_receiving', paramObj)
  },
  // 前端主动关闭规定时间到期后未付款订单
  coopera_close_overdue_prepay_order: function (paramObj) {
    return post(reqHttp + '/api/orderhz/coopera_close_overdue_prepay_order', paramObj)
  },
  // 购物车商品选中或取消选中状态
  cart_checked: function (paramObj) {
    return post(reqHttp + '/api/carthz/cart_checked', paramObj)
  },
  // 删除购物车商品
  cart_delete: function (paramObj) {
    return post(reqHttp + '/api/carthz/cart_delete', paramObj)
  },
  // 购物车商品所在合作社的选中或取消选中状态
  cart_coopera_checked: function (paramObj) {
    return post(reqHttp + '/api/carthz/cart_coopera_checked', paramObj)
  },
  // 获取单个地址详细信息
  address_detail: function (paramObj) {
    return post(reqHttp + '/api/addresshz/address_detail', paramObj)
  },
  // 删除地址
  address_delete: function (paramObj) {
    return post(reqHttp + '/api/addresshz/address_delete', paramObj)
  },
  // 上传图片
  shopUploadImg: function (paramObj) {
    return post(reqHttp + '/api/orderhz/uploadImg', paramObj)
  },
  // 订单详情
  order_detail: function (paramObj) {
    return post(reqHttp + '/api/orderhz/order_detail', paramObj)
  },
  // 订单支付
  parent_orderpay: function (paramObj) {
    return post(reqHttp + '/api/payhz/parent_orderpay', paramObj)
  },
  // 查询订单支付状态
  parent_orderQuery: function (paramObj) {
    return post(reqHttp + '/api/payhz/parent_orderQuery', paramObj)
  },
  //获取用户openid
  get_user_openid: function (paramObj) {
    return post(reqHttp + '/api/shopindexhz/get_user_openid', paramObj)
  },
  // 团长添加商品到自己团队里
  team_owner_add_good: function (paramObj) {
    return post(reqHttp + '/api/shopindexhz/team_owner_add_good', paramObj)
  }
}
