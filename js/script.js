$.ajax({
    url: "https://www.dnd5eapi.co/api/spells/acid-arrow",
    success: function (spell) {
      console.log(spell);
    },
    error: function (error) {
      console.log("bad request: ", error);
    },
  });