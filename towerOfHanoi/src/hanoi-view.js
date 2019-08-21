class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $base = this.$el;
      let $ul = $("<ul>");
      
      $ul.addClass(`unord${i}`);
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.attr("id", `li${j}`);
        $ul.append($li);
      }
      $base.append($ul);
    }

  }
}


module.exports = View;