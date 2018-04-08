$(function() {
    $('#charger').click(function(){ 

      var url = 'json/concert.json';
      $.ajax({
        dataType: "json",
        url: url,
        success: function(donnees) {
            $.each(donnees, function (index, voiture){
              $('#r').append('<p><b>Couleur</b> : ' + voiture.couleur + '</p>');
              $('#r').append('<p><b>Voiture</b> : ' + voiture.voiture + '</p>');
              $('#r').append('<p><b>Année</b> : ' + voiture.annee + '</p>');
            });
          },
      });
    });
  });

