/*▄─────────────────▄
  █                 █
  █  Entrypoint     █
  █  • Точка входа  █
  █                 █
  ▀─────────────────▀*/
$.Entrypoint((...args) => {
// Получаем список недоступных файлов (откуда копируем)
    $.model.Files.byAccess().then(files => _=files);
    
// Получаем список уже существующих файлов (куда копируем)
    $.model.Files.toAccess().then(files => _=files);
});
