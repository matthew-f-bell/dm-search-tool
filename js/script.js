// const promise = $.ajax({
//     url: "https://www.dnd5eapi.co/api/spells/acid-arrow",
// });
    
// promise.then(
//   (data) => {
//     $('#name').html(data.name);
//     $('#range').html(data.range);
//     $('#damage').html(data['damage']['damage_at_slot_level']['2']);
//   },
//   (error) => {
//     console.log("bad request: ", error);
//   }
// );

$('form').on('submit', (event) => {
  event.preventDefault();
  let userInput = $('input[type="text"]').val();
    userInput=userInput.replace(' ', '-');
    $.ajax({
      url: `https://www.dnd5eapi.co/api/spells/${userInput}`
    }).then(
      (data) => {
        $('#name').html(data.name);
        $('#range').html(data.range);
        $('#damage').html(data['damage']['damage_at_slot_level']['2']);
      },
      (error) => {
        console.log("bad request: ", error);
      }
    );
})