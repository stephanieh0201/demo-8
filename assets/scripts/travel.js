//overall app logic and loader...
function travelNotes() {
  "use strict";

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val());
    //hide new note to setup fadeIn...
    $note.hide();
    //append note text to note-output
    $(".note-output").append($note,"<button>Delete</button>");
    //fadeIn hidden new note
    $note.fadeIn("slow");
    $note_text.val("");
    }
  }

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    createNote();
  });

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e){
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });
   $(".note-output button").on("click", function(e){
     $("div").remove(".note-output");
 });
function deleteAll() {
    $(".delete-all button").on("click", function(e){
        $("p").remove(".note-output");
    }
                              )
}


};

$(document).ready(travelNotes);
