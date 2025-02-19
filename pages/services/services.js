Page({
  data: {
    name:"Juan David",
    last_names:"Carrillo"
  },
  onLoad() {},
  
  handlechange(e) {
    const btnText = e.target.dataset.text
    
    if(btnText == 'changeName'){
      console.log(btnText)
      this.setData({name:'Juan Sebastian'})
    }else if(btnText == 'changelastname'){
      console.log(btnText);
      this.setData({last_names:'Garcia'})
      
    }
  }
  
});
