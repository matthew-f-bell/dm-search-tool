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

$('#spell-search').on('submit', (event) => {
  event.preventDefault();
  let userInput = $('input[type="text"]').val();
  userInput=userInput.replace(' ', '-');
    $.ajax({
      url: `https://www.dnd5eapi.co/api/spells/${userInput}`
    }).then(
      (data) => {
        $('#name').html(data.name);
        $('#range').html(data.range);
        $('#desc').html(data.desc);
      },
      (error) => {
        console.log("bad request: ", error);
      }
    );
})

$('#random-spell').on('submit', (event) => {
  event.preventDefault();
  let spellArr = ["Acid Splash", "Chill Touch", "Dancing Lights", "Druidcraft", "Eldritch Blast", "Fire Bolt", "Guidance", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Produce Flame", "Resistance", "Sacred Flame", "Shillelagh", "Shocking Grasp", "Thaumaturgy", "True Strike", "Vicious Mockery", "Alarm", "Animal Friendship", "Bane", "Burning Hands", "Charm Person"];
  let i = Math.floor(Math.random()*(((spellArr.length)-0)+0));
  // console.log(i);
  let wildMagic = spellArr[i];
  wildMagic = wildMagic.toLowerCase();
  // console.log(wildMagic);
  wildMagic = wildMagic.replace(' ', '-');
  $.ajax({
    url: `https://www.dnd5eapi.co/api/spells/${wildMagic}`
  }).then(
    (data) => {
      $('#name').html(data.name);
      $('#range').html(data.range);
      $('#desc').html(data.desc);
    },
    (error) => {
      console.log("bad request: ", error);
    }
  );
})