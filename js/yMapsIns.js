//points page map initialization
function init2() {
  var myMap = new ymaps.Map('points_map', {
    center: [60.01,30.67],
    zoom: 10,
    controls: ['zoomControl']
  }),
  objectManager = new ymaps.ObjectManager({
    // Чтобы метки начали кластеризоваться, выставляем опцию.
    clusterize: true,
    // ObjectManager принимает те же опции, что и кластеризатор.
    gridSize: 32,
    clusterDisableClickZoom: true
  });

  // Чтобы задать опции одиночным объектам и кластерам,
  // обратимся к дочерним коллекциям ObjectManager.
  objectManager.objects.options.set('preset', 'islands#greenDotIcon');
  objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
  myMap.geoObjects.add(objectManager);

  let listNode = document.getElementById('point-list');

  //address to search
  //ex:'г.Всеволожск,  микрорайон южный,	Добровольского 16/15'
  var allPoints = {
    "type": "FeatureCollection",
    "features": [
      {"type":"Feature","id":0,"geometry":{"type":"Point","coordinates":[59.862221,30.448459]},"properties":{"balloonContentBody":"<h3>улица Седова, 162</h3><p>Россия, Санкт-Петербург</p>","name":"улица Седова, 162","text":"Россия, Санкт-Петербург, улица Седова, 162","clusterCaption":"улица Седова, 162"}},
{"type":"Feature","id":1,"geometry":{"type":"Point","coordinates":[59.937991,30.440132]},"properties":{"balloonContentBody":"<h3>проспект Энергетиков, 9к6</h3><p>Россия, Санкт-Петербург</p>","name":"проспект Энергетиков, 9к6","text":"Россия, Санкт-Петербург, проспект Энергетиков, 9к6","clusterCaption":"проспект Энергетиков, 9к6"}},
{"type":"Feature","id":2,"geometry":{"type":"Point","coordinates":[59.948884,30.242125]},"properties":{"balloonContentBody":"<h3>проспект КИМа, 4</h3><p>Россия, Санкт-Петербург</p>","name":"проспект КИМа, 4","text":"Россия, Санкт-Петербург, проспект КИМа, 4","clusterCaption":"проспект КИМа, 4"}},
{"type":"Feature","id":3,"geometry":{"type":"Point","coordinates":[59.993847,30.309436]},"properties":{"balloonContentBody":"<h3>Ланское шоссе, 14к1</h3><p>Россия, Санкт-Петербург</p>","name":"Ланское шоссе, 14к1","text":"Россия, Санкт-Петербург, Ланское шоссе, 14к1","clusterCaption":"Ланское шоссе, 14к1"}},
{"type":"Feature","id":4,"geometry":{"type":"Point","coordinates":[60.012534,30.310784]},"properties":{"balloonContentBody":"<h3>Фермское шоссе, 12А</h3><p>Россия, Санкт-Петербург</p>","name":"Фермское шоссе, 12А","text":"Россия, Санкт-Петербург, Фермское шоссе, 12А","clusterCaption":"Фермское шоссе, 12А"}},
{"type":"Feature","id":5,"geometry":{"type":"Point","coordinates":[59.893037,30.413955]},"properties":{"balloonContentBody":"<h3>улица Седова, 19</h3><p>Россия, Санкт-Петербург</p>","name":"улица Седова, 19","text":"Россия, Санкт-Петербург, улица Седова, 19","clusterCaption":"улица Седова, 19"}},
{"type":"Feature","id":6,"geometry":{"type":"Point","coordinates":[59.875732,30.44059]},"properties":{"balloonContentBody":"<h3>переулок Матюшенко, 12</h3><p>Россия, Санкт-Петербург</p>","name":"переулок Матюшенко, 12","text":"Россия, Санкт-Петербург, переулок Матюшенко, 12","clusterCaption":"переулок Матюшенко, 12"}},
{"type":"Feature","id":7,"geometry":{"type":"Point","coordinates":[59.865131,30.451891]},"properties":{"balloonContentBody":"<h3>улица Шелгунова, 16</h3><p>Россия, Санкт-Петербург</p>","name":"улица Шелгунова, 16","text":"Россия, Санкт-Петербург, улица Шелгунова, 16","clusterCaption":"улица Шелгунова, 16"}},
{"type":"Feature","id":8,"geometry":{"type":"Point","coordinates":[59.877466,30.435883]},"properties":{"balloonContentBody":"<h3>улица Полярников, 15</h3><p>Россия, Санкт-Петербург</p>","name":"улица Полярников, 15","text":"Россия, Санкт-Петербург, улица Полярников, 15","clusterCaption":"улица Полярников, 15"}},
{"type":"Feature","id":9,"geometry":{"type":"Point","coordinates":[59.872837,30.445666]},"properties":{"balloonContentBody":"<h3>бульвар Красных Зорь, 1</h3><p>Россия, Санкт-Петербург</p>","name":"бульвар Красных Зорь, 1","text":"Россия, Санкт-Петербург, бульвар Красных Зорь, 1","clusterCaption":"бульвар Красных Зорь, 1"}},
{"type":"Feature","id":10,"geometry":{"type":"Point","coordinates":[59.871839,30.440851]},"properties":{"balloonContentBody":"<h3>бульвар Красных Зорь, 7</h3><p>Россия, Санкт-Петербург</p>","name":"бульвар Красных Зорь, 7","text":"Россия, Санкт-Петербург, бульвар Красных Зорь, 7","clusterCaption":"бульвар Красных Зорь, 7"}},
{"type":"Feature","id":11,"geometry":{"type":"Point","coordinates":[59.871373,30.438668]},"properties":{"balloonContentBody":"<h3>бульвар Красных Зорь, 9</h3><p>Россия, Санкт-Петербург</p>","name":"бульвар Красных Зорь, 9","text":"Россия, Санкт-Петербург, бульвар Красных Зорь, 9","clusterCaption":"бульвар Красных Зорь, 9"}},
{"type":"Feature","id":13,"geometry":{"type":"Point","coordinates":[59.914529,30.436745]},"properties":{"balloonContentBody":"<h3>Дальневосточный проспект, 12к1</h3><p>Россия, Санкт-Петербург</p>","name":"Дальневосточный проспект, 12к1","text":"Россия, Санкт-Петербург, Дальневосточный проспект, 12к1","clusterCaption":"Дальневосточный проспект, 12к1"}},
{"type":"Feature","id":14,"geometry":{"type":"Point","coordinates":[59.998045,30.218221]},"properties":{"balloonContentBody":"<h3>Яхтенная улица, 24к2</h3><p>Россия, Санкт-Петербург</p>","name":"Яхтенная улица, 24к2","text":"Россия, Санкт-Петербург, Яхтенная улица, 24к2","clusterCaption":"Яхтенная улица, 24к2"}},
{"type":"Feature","id":15,"geometry":{"type":"Point","coordinates":[59.999813,30.215841]},"properties":{"balloonContentBody":"<h3>улица Оптиков, 34к1</h3><p>Россия, Санкт-Петербург</p>","name":"улица Оптиков, 34к1","text":"Россия, Санкт-Петербург, улица Оптиков, 34к1","clusterCaption":"улица Оптиков, 34к1"}},
{"type":"Feature","id":16,"geometry":{"type":"Point","coordinates":[59.984283,30.641346]},"properties":{"balloonContentBody":"<h3>улица Доктора Сотникова, 13</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"улица Доктора Сотникова, 13","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, улица Доктора Сотникова, 13","clusterCaption":"улица Доктора Сотникова, 13"}},
{"type":"Feature","id":17,"geometry":{"type":"Point","coordinates":[59.90949,30.470989]},"properties":{"balloonContentBody":"<h3>улица Антонова-Овсеенко, 18</h3><p>Россия, Санкт-Петербург</p>","name":"улица Антонова-Овсеенко, 18","text":"Россия, Санкт-Петербург, улица Антонова-Овсеенко, 18","clusterCaption":"улица Антонова-Овсеенко, 18"}},
{"type":"Feature","id":18,"geometry":{"type":"Point","coordinates":[59.982608,30.641705]},"properties":{"balloonContentBody":"<h3>улица Доктора Сотникова, 25</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"улица Доктора Сотникова, 25","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, улица Доктора Сотникова, 25","clusterCaption":"улица Доктора Сотникова, 25"}},
{"type":"Feature","id":19,"geometry":{"type":"Point","coordinates":[59.982032,30.639881]},"properties":{"balloonContentBody":"<h3>улица Доктора Сотникова, 31</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"улица Доктора Сотникова, 31","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, улица Доктора Сотникова, 31","clusterCaption":"улица Доктора Сотникова, 31"}},
{"type":"Feature","id":20,"geometry":{"type":"Point","coordinates":[60.030955,30.750877]},"properties":{"balloonContentBody":"<h3>посёлок Щеглово, 54</h3><p>Россия, Ленинградская область, Всеволожский район</p>","name":"посёлок Щеглово, 54","text":"Россия, Ленинградская область, Всеволожский район, посёлок Щеглово, 54","clusterCaption":"посёлок Щеглово, 54"}},
{"type":"Feature","id":21,"geometry":{"type":"Point","coordinates":[59.993568,30.643196]},"properties":{"balloonContentBody":"<h3>Центральная улица, 6</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"Центральная улица, 6","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, Центральная улица, 6","clusterCaption":"Центральная улица, 6"}},
{"type":"Feature","id":22,"geometry":{"type":"Point","coordinates":[60.028388,30.688723]},"properties":{"balloonContentBody":"<h3>Центральная улица, 10</h3><p>Россия, Ленинградская область, Всеволожск</p>","name":"Центральная улица, 10","text":"Россия, Ленинградская область, Всеволожск, Центральная улица, 10","clusterCaption":"Центральная улица, 10"}},
{"type":"Feature","id":23,"geometry":{"type":"Point","coordinates":[60.028119,30.688337]},"properties":{"balloonContentBody":"<h3>Центральная улица, 2</h3><p>Россия, Ленинградская область, Всеволожск</p>","name":"Центральная улица, 2","text":"Россия, Ленинградская область, Всеволожск, Центральная улица, 2","clusterCaption":"Центральная улица, 2"}},
{"type":"Feature","id":24,"geometry":{"type":"Point","coordinates":[59.915093,30.514135]},"properties":{"balloonContentBody":"<h3>Ленинградская улица, 7</h3><p>Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово</p>","name":"Ленинградская улица, 7","text":"Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово, Ленинградская улица, 7","clusterCaption":"Ленинградская улица, 7"}},
{"type":"Feature","id":25,"geometry":{"type":"Point","coordinates":[59.933023,30.347336]},"properties":{"balloonContentBody":"<h3>Невский проспект, 74-76</h3><p>Россия, Санкт-Петербург</p>","name":"Невский проспект, 74-76","text":"Россия, Санкт-Петербург, Невский проспект, 74-76","clusterCaption":"Невский проспект, 74-76"}},
{"type":"Feature","id":26,"geometry":{"type":"Point","coordinates":[59.69924,30.411718]},"properties":{"balloonContentBody":"<h3>Кедринская улица, 12</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"Кедринская улица, 12","text":"Россия, Санкт-Петербург, Пушкин, Кедринская улица, 12","clusterCaption":"Кедринская улица, 12"}},
{"type":"Feature","id":27,"geometry":{"type":"Point","coordinates":[59.699113,30.414611]},"properties":{"balloonContentBody":"<h3>Кедринская улица, 6</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"Кедринская улица, 6","text":"Россия, Санкт-Петербург, Пушкин, Кедринская улица, 6","clusterCaption":"Кедринская улица, 6"}},
{"type":"Feature","id":28,"geometry":{"type":"Point","coordinates":[59.695603,30.416497]},"properties":{"balloonContentBody":"<h3>улица Архитектора Данини, 7</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"улица Архитектора Данини, 7","text":"Россия, Санкт-Петербург, Пушкин, улица Архитектора Данини, 7","clusterCaption":"улица Архитектора Данини, 7"}},
{"type":"Feature","id":29,"geometry":{"type":"Point","coordinates":[59.699085,30.422175]},"properties":{"balloonContentBody":"<h3>Малиновская улица, 10</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"Малиновская улица, 10","text":"Россия, Санкт-Петербург, Пушкин, Малиновская улица, 10","clusterCaption":"Малиновская улица, 10"}},
{"type":"Feature","id":30,"geometry":{"type":"Point","coordinates":[59.907825,30.513983]},"properties":{"balloonContentBody":"<h3>Пражская улица, 7</h3><p>Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово</p>","name":"Пражская улица, 7","text":"Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово, Пражская улица, 7","clusterCaption":"Пражская улица, 7"}},


  ]};
  objectManager.add(allPoints);
}
ymaps.ready(init2);



//contact page map initialization
function init1() {
  var myMap = new ymaps.Map('contact_map', {
    center: [59.935390, 30.451630],
    zoom: 11,
    controls: ['zoomControl']
  });
  /*59.935390, 30.451630*/

  var myPlacemark = new ymaps.Placemark([59.935390, 30.451630], {
    balloonContentHeader: 'улица Латышских Стрелков, 31',
    balloonContentBody: 'Санкт-Петербург, улица Латышских Стрелков, 31',
    hintContent: 'улица Латышских Стрелков, 31',
    balloonContent:'улица Латышских Стрелков, 31',
  });

  myMap.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}
ymaps.ready(init1);
