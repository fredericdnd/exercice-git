$( document ).ready(function() 
{
    //En javascript pure
    element_kilometre = document.getElementById('input_km');

    //En javascript jquery
    element_mile = document.getElementById('input_m');

    element_kilometre.addEventListener('keyup', function (e) {Convertion_Distance(e.currentTarget) });
    element_mile.addEventListener('keyup', function (e) {Convertion_Distance(e.currentTarget) });
    

    function Convertion_Distance(element)
    {
      console.log(element);
      mode = element.getAttribute("id");

      if ( mode === 'input_km')
      {
         console.log('convertion mile');
         attribut_mile = element.value;          
         resultat = attribut_mile / 1.609;

         //Manipulation DOOM
         document.getElementById('input_m').setAttribute('placeholder', resultat);
         
      }
      if ( mode === 'input_m')
      {
          console.log("convertion_kilometre");      
          attribut_kilometre = element.value;
          resultat = attribut_kilometre * 1.609;

          //Manipulation DOOM
          document.getElementById('input_km').setAttribute('placeholder', resultat);

      }
      
    }
});