$(function(){
 
    //Aqui vai nosso código js.
    $('nav.mobile').click(function(){
        //o que vai acontecer quando clicarmos na nav.mobile!
      
       var listaMenu = $('nav.mobile ul');
       //Abri menu através do fadein
       
       if(listaMenu.is(':hidden') == true){
        listaMenu.fadeIn();
       }
       else{
        listaMenu.fadeOut();
       }
       
    
    })
})