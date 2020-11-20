$(function () {
     /*$('.scroll-down').click(function() {
         $('html, body').animate({ scrollTop: $('section.ok').offset().top }, 'slow');
         return false;
     });*/
     $("#home_to_chrono").click(function() { // quand l'utilisateur clique dans la case

         valeur = this.href;
         valeur = valeur.split("/#");
          console.log(valeur);
         if (valeur[1] == "chrono_section") {
             $("#chrono_section").show("fast");
             $("#home_to_chrono").hide("fast");
         }
     });
     $("#chrono_to_stakes").click(function() { // quand l'utilisateur clique dans la case

         valeur = this.href;
         valeur = valeur.split("index.html");
        // console.log(valeur);
         if (valeur[1] == "#stakes_section") {
             $("#stakes_section").show("fast");
             $("#chrono_to_stakes").hide("fast");
         }
     });
     $("#stakes_to_answer").click(function() { // quand l'utilisateur clique dans la case

         valeur = this.href;
         valeur = valeur.split("index.html");
         //console.log(valeur);
         if (valeur[1] == "#answer_section") {
             $("#answer_section").show("fast");
             $("#stakes_to_answer").hide("fast");
         }
     });
     $("#answer_to_map").click(function() { // quand l'utilisateur clique dans la case

         valeur = this.href;
         valeur = valeur.split("index.html");
         //console.log(valeur);
         if (valeur[1] == "#map_section") {
             $("#map_section").show("fast");
             $("#answer_to_map").hide("fast");
         }
     });
     /*  $("#map_to_home").click(function() { // quand l'utilisateur clique dans la case

           valeur = this.href;
           valeur = valeur.split("index.html");
           console.log(valeur);
           if (valeur[1] == "#home_section") {
               $("#map_section").hide("fast");
               $("#answer_section").hide("fast");
               $("#stakes_section").hide("fast");
               $("#chrono_section").hide("fast");
           }
       });*/
     $("#home_to_chrono").hover(function() {
         $("#defilement").show();
         $("#defilement").fadeOut(2000);

     });
     $("#map_to_home").hover(function() {
         $("#haut").show();
         $("#haut").fadeOut(2000);
     });
});
