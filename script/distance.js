$( document ).ready(function() 
{
    //En javascript pure
    element_kilometre = document.getElementById('input_kilometre');

    //En javascript jquery
    element_mile = document.getElementById('input_mile');

    element_kilometre.addEventListener('keyup', function (e) {Convertion_Distance(e.currentTarget) });
    element_mile.addEventListener('keyup', function (e) {Convertion_Distance(e.currentTarget) });
    

    function Convertion_Distance(element)
    {
      console.log(element);
      mode = element.getAttribute("id");

      if ( mode === 'input_kilometre')
      {
         console.log('convertion mile');
         attribut_mile = element.value;          
         resultat = attribut_mile / 1.609;

         //Manipulation DOOM
         document.getElementById('input_mile').setAttribute('placeholder', resultat);
         
      }
      if ( mode === 'input_mile')
      {
          console.log("convertion_kilometre");      
          attribut_kilometre = element.value;
          resultat = attribut_kilometre * 1.609;

          //Manipulation DOOM
          document.getElementById('input_kilometre').setAttribute('placeholder', resultat);

      }
      
    }
});