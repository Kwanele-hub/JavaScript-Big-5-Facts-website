
    
    






$('#content_left').html(html);

// this event listener is triggered when the user clicks on an animal name
$('.js-animal-name').on('click', function(e){
    var animal_name = $(e.target).data('id');
    console.log('rendering detail page for '+animal_name);
    for (var i=0;i<animals_data.animals.length;i++){
        var an_animal = animals_data.animals[i];
        if (an_animal.name == animal_name){
            break;
        }
    }
    var source   = $("#animal-detail-template").html();

    var template = Handlebars.compile(source);

    var html    = template(an_animal);

    $('#content_right').html(html);


});
