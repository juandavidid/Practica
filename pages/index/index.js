Page({


  // VINCULACION DE DATOS
  // contiene informacion de la pagina
  data:{
    name:"Juan David",
    textBtt:"service",

    userInput:"" // Inicializar una variable para almacenar el texto 

  },

  //VINCULACION DE FUNCIONES
  //1.Funcion Evento Click
  handleclick(e){

    console.log("Captura Evento Click boton");


    // Cambiar el valor de la viriable
    /*
    this.setData({
      name:"Juan Sebastian"
    })
    */
   
    const btnText = e.target.dataset.text
    if(btnText == "services"){
      console.log("Botn 1", btnText);
      my.navigateTo({
        url: '/pages/services/services'
      });


    }else if(btnText == "dataUsers"){
      console.log("Boton 2", btnText);

      my.navigateTo({
        url: '/pages/dataUsers/dataUsers'
      });

    }

    
    
  },

  //2. Funcion Evento Input
  handleInput(e){
    console.log(e);

    this.setData({ 
      userInput: e.detail.value
    })
    console.log("Texto ingresado:", this.data.userInput);


  },

  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },

  onReady() {
    // Page loading is complete

  },

  onShow() {
    // Page display
  },

  onHide() {
    // Page hidden
  },

  onUnload() {
    // Page is closed
  },

  onTitleClick() {
    // Title clicked
  },

  onPullDownRefresh() {
    // Page is pulled down
  },

  onReachBottom() {
    // Page is pulled to the bottom
  },

  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
