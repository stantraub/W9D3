class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
   
    $(".unordered").on("click", "li", (e) => {
      let $square = $(e.currentTarget);
      try {
        this.makeMove($square);
      }
      catch(err) {
        alert("Invalid Move");
        return;
      }

      console.log(this.game.board);

      if (this.game.board.winner()) {
        this.game.swapTurn();
        let mark = this.game.currentPlayer;
        let $header = $("<h1>");
        $header.text(`${mark} won!`);
        this.$el.append($header);
        $(".unordered").off("click");

      } else if (this.game.board.isOver()) {
        let $header = $("<h1>");
        $header.text(` tied!`);
        this.$el.append($header);
        $(".unordered").off("click");
      }


      // if (this.game.board.isOver()) {
      //   this.game.swapTurn();
      //   let mark = this.game.currentPlayer;
      //   let $header = $("<h1>");
      //   $header.text(`${mark} won!`);
      //   this.$el.append($header);
      //   $(".unordered").off("click");
      // }

    })
   
    
  }

  makeMove($square) {
    let mark = this.game.currentPlayer; //[x, o]
    let pos = $square.data("pos");
    this.game.playMove(pos);
    $square.text(mark);
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("unordered");
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    
    this.$el.append($ul);
    console.log(this.$el);
  }
}

module.exports = View;
