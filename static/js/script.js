


 let tabFilm;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
$("#btnGenerer").click(function()
{
    $("#btnGenerer").prop("disabled", "false");

        vaisseau = getRandomInt(2,5);

    $.get("https://swapi.co/api/starships/"+vaisseau,GetValue);
}
);
function GetValue2(data,status)
{
  alert(status);
  if(status==="success")
    {
        console.log(data);
        $('#tableFilms').append('<tr><td>' + data.title + '</td><td>' + data.director + '</td><td>' + data.release_date + '</td></tr>');
    }
    else
    {
            $.get(tabFilm[i+1],GetValue2);
    }



}
function GetValue(data,status)

{
    try {
          if(status==="success")
           {

               console.log(data);
               $("#nom").html(data.name);
               $("#model").html(data.model);
               $("#manufacturer").html(data.manufacturer);
               $("#MGLT").html(data.MGLT);
               $("#length").html(data.length);
               $("#crew").html(data.crew);
               $("#passengers").html(data.passengers);
               $("#starship_class").html(data.starship_class);
               $("#cost_in_credits").html(data.cost_in_credits);
               $('#tablePilotes').append('<tr><td>' + data.pilots.name + '</td><td>' + data.pilots.gender + '</td></tr>');
               tabFilm = data.films.slice();
                           for (let i = 0; i <tabFilm.length; i++)
                           {
                               $.get(tabFilm[i], GetValue2);
                           }
            }

            else
            {
                vaisseau = getRandomInt(2,4);

                $.get("https://swapi.co/api/starships/"+vaisseau,GetValue);
            }

    }catch (e) {
        console.log(e);
    }

}
