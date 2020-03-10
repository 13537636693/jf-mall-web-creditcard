<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>用户名：</h1><input type="text"  v-model="username"/><p></p>
    <h1>密码：  </h1><input type="text"  v-model="password"/><p></p>
    <button @click="login" >登录</button>
   </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username:'13537636693',
      password:'5*****5',
      msg: '欢迎使用信用卡管理系统'
    }
  },
  methods: {
    async login() {
      const res = await this.$post('auth/login', { mobile: this.username,password:this.password });
      console.log(res);
      if (res &&  res.head.code == '100000') {
        console.log(res);
        this.$router.push({ name: 'list_bill' });
        console.log('this.$router.push({ name: list_bill });');
      }
      else
      {
       console.log(res); 
       this.msg=res.head.msg;
      }
    },
  },
  mounted() {

  },
  beforeDestroy() {
    // 页面离开时
  },
  created() {

  },
};
</script>