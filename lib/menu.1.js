/*▄──────────────────▄
  █                  █
  █  Список модулей  █
  █                  █
  ▀──────────────────▀*/
let prompts = require('@inquirer/prompts');

/*▄────────▄
  █        █
  █  Меню  █
  █        █
  ▀────────▀*/
Object.defineProperty($, 'menu', {set: (items) => {
// Получаем список пунктов меню
    this.items = new items;
    
// Проходим по пунктам меню
    Object.getOwnPropertyNames(this.items).forEach((item) => {
        _=item
        this.items[item]()
    });
}});

Promise.resolve().then(f => {

$.menu = class {
    'http-server' = $.entrypoint.HttpServer
    'http-server + watch-dir' = f=>0
}

});
