<template>
  <div>
    <h1>总欠款：{{ msg }}</h1>
    <table v-for="(item, index) in sortItems ">
      <tr>
      <td align="left"> {{ item.blankName }}</td>
      <td align="left"> {{ item.owner }}</td>
      <td align="left" v-if="item.isAlarm" style="color:red">还款日 {{ item.payBackDate | jftime}}</td>
      <td align="left" v-else>还款日 {{ item.payBackDate | jftime}}</td>
      </tr>
      <tr>
      <td></td>
      <td align="left">后四位 {{ item.cardNO }}</td>
      <td align="left">金额 {{ item.amount }}</td>
      </tr>
    </table>
   </div>
</template>

<script>
export default {
  name: 'list_bill',
  data () {
    return {
      msg:"",
      items: [
          { id: '' ,
            blankName:"",
            owner:"",
            payBackDate:"",
            amount:"",
            cardNO:""
          }
        ]
    }
  },
  methods: {

  },
  async mounted() {
      const res = await this.$post('card/list', {
        id: this.orderId,
      });
      if (res.head && res.head.code == '100000') {
         this.items = res.body.bills;
         this.msg=res.body.total;
      }
      console.log( res)
      console.log( res.body)
      console.log( res.body.bills)
  },
  beforeDestroy() {
    // 页面离开时
  },
  created() {

  },
  computed:{
    sortItems:function()
    {
    return sortKey(this.items,'id')
    }
  }
};
  function sortKey(array,key){
                return array.sort(function(a,b){
                    var x = a[key];
                    var y = b[key];
                    return ((x<y)?-1:(x>y)?1:0)
                })
  }
</script>