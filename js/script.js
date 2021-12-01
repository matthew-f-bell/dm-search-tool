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
  // let spellArr = ["Acid Splash", "Blade Ward", "Booming Blade", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Druidcraft", "Eldritch Blast", "Fire Bolt", "Friends", "Frostbite", "Green-Flame Blade", "Guidance", "Gust", "Infestation", "Light", "Lightning Lure", "Mage Hand", "Magic Stone", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Mold Earth", "Poison Spray", "Prestidigitation", "Primal Savagery", "Produce Flame", "Ray of Frost", "Resistance", "Sacred Flame", "Shape Water", "Shillelagh", "Shocking Grasp", "Spare the Dying", "Sword Burst", "Thaumaturgy", "Thorn Whip", "Thunderclap", "Toll the Dead", "True Strike", "Vicious Mockery", "Word of Radiance", "Absorb Elements", "Alarm", "Animal Friendship", "Arcane Weapon", "Armor of Agathys", "Arms of Hadar", "Bane", "Beast Bond", "Bless", "Burning Hands", "Catapult", "Cause Fear", "Ceremony", "Chaos Bolt", "Charm Person", "Chromatic Orb", "Color Spray", "Command", "Compelled Duel", "Comprehend Languages", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Disguise Self", "Dissonant Whispers", "Divine Favor", "Earth Tremor", "Ensnaring Strike", "Entangle", "Expeditious Retreat", "Faerie Fire", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Goodberry", "Grease", "Guiding Bolt", "Hail of Thorns", "Healing Word", "Hellish Rebuke", "Heroism", "Hex", "Hunter's Mark", "Ice Knife", "Identify", "Illusory Script", "Inflict Wounds", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Purify Food and Drink", "Ray of Sickness", "Sanctuary", "Searing Smite", "Shield", "Shield of Faith", "Silent Image", "Sleep", "Snare", "Speak with Animals", "Tasha's Caustic Brew", "Tasha's Hideous Laughter", "Tenser's Floating Disk", "Thunderous Smite", "Thunderwave", "Unseen Servant", "Witch Bolt", "Wrathful Smite", "Zephyr Strike", "Aganazzar's Scorcher", "Aid", "Alter Self", "Animal Messenger"];
  // let i = Math.floor(Math.random()*(((spellArr.length)-0)+0));
  // console.log(i);
  // let wildMagic = spellArr[i];
  // console.log(wildMagic);
  // wildMagic = wildMagic.replace(' ', '-');
  const spellData = () => {
    fetch('https://www.dnd5eapi.co/api/spells')
      .then((res) => {
        return res.json()
      }).then((data) => {
        fetchedData(data)
      })
  }
  fetchedData = (spellData) => {
    console.log(spellData)
  }


})