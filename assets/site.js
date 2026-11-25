// 语言记忆、原文显隐、问题地图按家筛选。无外网请求。
(function () {
  var S = { get: function (k) { try { return localStorage.getItem(k) } catch (e) { return null } },
            set: function (k, v) { try { localStorage.setItem(k, v) } catch (e) {} } };
  document.querySelectorAll('.lang a').forEach(function (a) {
    a.addEventListener('click', function () { S.set('ch-lang', a.dataset.lang) });
  });
  var t = document.getElementById('orig-toggle');
  function paint() {
    var hide = S.get('ch-hide-orig') === '1';
    document.body.classList.toggle('hide-orig', hide);
    if (t) t.textContent = hide ? t.dataset.show : t.dataset.hide;
  }
  if (t) t.addEventListener('click', function () { S.set('ch-hide-orig', S.get('ch-hide-orig') === '1' ? '0' : '1'); paint() });
  paint();
  var btns = document.querySelectorAll('.filter button');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      btns.forEach(function (x) { x.classList.toggle('on', x === b) });
      document.querySelectorAll('.cell').forEach(function (c) {
        c.style.display = (b.dataset.b === 'all' || c.dataset.b === b.dataset.b) ? '' : 'none';
      });
    });
  });
})();
