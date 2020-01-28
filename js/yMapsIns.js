//points page map initialization
function init2() {
  var myMap = new ymaps.Map('points_map', {
    center: [59.95,30.67],
    zoom: 9,
    controls: ['zoomControl']
  }),
  objectManager = new ymaps.ObjectManager({
    // Чтобы метки начали кластеризоваться, выставляем опцию.
    clusterize: false,
    // ObjectManager принимает те же опции, что и кластеризатор.
    gridSize: 32,
    clusterDisableClickZoom: false
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
      {"type":"Feature","id":0,"geometry":{"type":"Point","coordinates":[59.937991,30.440132]},"properties":{"balloonContentBody":"<h3>проспект Энергетиков, 9к6</h3><p>Россия, Санкт-Петербург</p>","name":"проспект Энергетиков, 9к6","text":"Россия, Санкт-Петербург, проспект Энергетиков, 9к6","clusterCaption":"проспект Энергетиков, 9к6"}},
{"type":"Feature","id":1,"geometry":{"type":"Point","coordinates":[59.948884,30.242125]},"properties":{"balloonContentBody":"<h3>проспект КИМа, 4</h3><p>Россия, Санкт-Петербург</p>","name":"проспект КИМа, 4","text":"Россия, Санкт-Петербург, проспект КИМа, 4","clusterCaption":"проспект КИМа, 4"}},
{"type":"Feature","id":2,"geometry":{"type":"Point","coordinates":[59.862221,30.448459]},"properties":{"balloonContentBody":"<h3>улица Седова, 162</h3><p>Россия, Санкт-Петербург</p>","name":"улица Седова, 162","text":"Россия, Санкт-Петербург, улица Седова, 162","clusterCaption":"улица Седова, 162"}},
{"type":"Feature","id":3,"geometry":{"type":"Point","coordinates":[59.893037,30.413955]},"properties":{"balloonContentBody":"<h3>улица Седова, 19</h3><p>Россия, Санкт-Петербург</p>","name":"улица Седова, 19","text":"Россия, Санкт-Петербург, улица Седова, 19","clusterCaption":"улица Седова, 19"}},
{"type":"Feature","id":4,"geometry":{"type":"Point","coordinates":[59.993847,30.309436]},"properties":{"balloonContentBody":"<h3>Ланское шоссе, 14к1</h3><p>Россия, Санкт-Петербург</p>","name":"Ланское шоссе, 14к1","text":"Россия, Санкт-Петербург, Ланское шоссе, 14к1","clusterCaption":"Ланское шоссе, 14к1"}},
{"type":"Feature","id":5,"geometry":{"type":"Point","coordinates":[60.012534,30.310784]},"properties":{"balloonContentBody":"<h3>Фермское шоссе, 12А</h3><p>Россия, Санкт-Петербург</p>","name":"Фермское шоссе, 12А","text":"Россия, Санкт-Петербург, Фермское шоссе, 12А","clusterCaption":"Фермское шоссе, 12А"}},
{"type":"Feature","id":6,"geometry":{"type":"Point","coordinates":[59.872837,30.445666]},"properties":{"balloonContentBody":"<h3>бульвар Красных Зорь, 1</h3><p>Россия, Санкт-Петербург</p>","name":"бульвар Красных Зорь, 1","text":"Россия, Санкт-Петербург, бульвар Красных Зорь, 1","clusterCaption":"бульвар Красных Зорь, 1"}},
{"type":"Feature","id":7,"geometry":{"type":"Point","coordinates":[59.877466,30.435883]},"properties":{"balloonContentBody":"<h3>улица Полярников, 15</h3><p>Россия, Санкт-Петербург</p>","name":"улица Полярников, 15","text":"Россия, Санкт-Петербург, улица Полярников, 15","clusterCaption":"улица Полярников, 15"}},
{"type":"Feature","id":8,"geometry":{"type":"Point","coordinates":[59.875732,30.44059]},"properties":{"balloonContentBody":"<h3>переулок Матюшенко, 12</h3><p>Россия, Санкт-Петербург</p>","name":"переулок Матюшенко, 12","text":"Россия, Санкт-Петербург, переулок Матюшенко, 12","clusterCaption":"переулок Матюшенко, 12"}},
{"type":"Feature","id":9,"geometry":{"type":"Point","coordinates":[59.871373,30.438668]},"properties":{"balloonContentBody":"<h3>бульвар Красных Зорь, 9</h3><p>Россия, Санкт-Петербург</p>","name":"бульвар Красных Зорь, 9","text":"Россия, Санкт-Петербург, бульвар Красных Зорь, 9","clusterCaption":"бульвар Красных Зорь, 9"}},
{"type":"Feature","id":10,"geometry":{"type":"Point","coordinates":[59.871775,30.440698]},"properties":{"balloonContentBody":"<h3>бульвар Красных Зорь, 7</h3><p>Россия, Санкт-Петербург</p>","name":"бульвар Красных Зорь, 7","text":"Россия, Санкт-Петербург, бульвар Красных Зорь, 7","clusterCaption":"бульвар Красных Зорь, 7"}},
{"type":"Feature","id":11,"geometry":{"type":"Point","coordinates":[59.998045,30.218221]},"properties":{"balloonContentBody":"<h3>Яхтенная улица, 24к2</h3><p>Россия, Санкт-Петербург</p>","name":"Яхтенная улица, 24к2","text":"Россия, Санкт-Петербург, Яхтенная улица, 24к2","clusterCaption":"Яхтенная улица, 24к2"}},
{"type":"Feature","id":12,"geometry":{"type":"Point","coordinates":[59.90949,30.470989]},"properties":{"balloonContentBody":"<h3>улица Антонова-Овсеенко, 18</h3><p>Россия, Санкт-Петербург</p>","name":"улица Антонова-Овсеенко, 18","text":"Россия, Санкт-Петербург, улица Антонова-Овсеенко, 18","clusterCaption":"улица Антонова-Овсеенко, 18"}},
{"type":"Feature","id":13,"geometry":{"type":"Point","coordinates":[59.865131,30.451891]},"properties":{"balloonContentBody":"<h3>улица Шелгунова, 16</h3><p>Россия, Санкт-Петербург</p>","name":"улица Шелгунова, 16","text":"Россия, Санкт-Петербург, улица Шелгунова, 16","clusterCaption":"улица Шелгунова, 16"}},
{"type":"Feature","id":14,"geometry":{"type":"Point","coordinates":[59.914529,30.436745]},"properties":{"balloonContentBody":"<h3>Дальневосточный проспект, 12к1</h3><p>Россия, Санкт-Петербург</p>","name":"Дальневосточный проспект, 12к1","text":"Россия, Санкт-Петербург, Дальневосточный проспект, 12к1","clusterCaption":"Дальневосточный проспект, 12к1"}},
{"type":"Feature","id":15,"geometry":{"type":"Point","coordinates":[59.999813,30.215841]},"properties":{"balloonContentBody":"<h3>улица Оптиков, 34к1</h3><p>Россия, Санкт-Петербург</p>","name":"улица Оптиков, 34к1","text":"Россия, Санкт-Петербург, улица Оптиков, 34к1","clusterCaption":"улица Оптиков, 34к1"}},
{"type":"Feature","id":16,"geometry":{"type":"Point","coordinates":[59.90949,30.470989]},"properties":{"balloonContentBody":"<h3>улица Антонова-Овсеенко, 18</h3><p>Россия, Санкт-Петербург</p>","name":"улица Антонова-Овсеенко, 18","text":"Россия, Санкт-Петербург, улица Антонова-Овсеенко, 18","clusterCaption":"улица Антонова-Овсеенко, 18"}},
{"type":"Feature","id":17,"geometry":{"type":"Point","coordinates":[59.871893,30.308691]},"properties":{"balloonContentBody":"<h3>Кузнецовская улица, 22</h3><p>Россия, Санкт-Петербург</p>","name":"Кузнецовская улица, 22","text":"Россия, Санкт-Петербург, Кузнецовская улица, 22","clusterCaption":"Кузнецовская улица, 22"}},
{"type":"Feature","id":18,"geometry":{"type":"Point","coordinates":[59.989738,30.32407]},"properties":{"balloonContentBody":"<h3>Земледельческая улица, 5</h3><p>Россия, Санкт-Петербург</p>","name":"Земледельческая улица, 5","text":"Россия, Санкт-Петербург, Земледельческая улица, 5","clusterCaption":"Земледельческая улица, 5"}},
{"type":"Feature","id":19,"geometry":{"type":"Point","coordinates":[59.937229,30.372705]},"properties":{"balloonContentBody":"<h3>8-я Советская улица, 14</h3><p>Россия, Санкт-Петербург</p>","name":"8-я Советская улица, 14","text":"Россия, Санкт-Петербург, 8-я Советская улица, 14","clusterCaption":"8-я Советская улица, 14"}},
{"type":"Feature","id":20,"geometry":{"type":"Point","coordinates":[59.833339,30.389413]},"properties":{"balloonContentBody":"<h3>улица Ярослава Гашека, 6Б</h3><p>Россия, Санкт-Петербург</p>","name":"улица Ярослава Гашека, 6Б","text":"Россия, Санкт-Петербург, улица Ярослава Гашека, 6Б","clusterCaption":"улица Ярослава Гашека, 6Б"}},
{"type":"Feature","id":21,"geometry":{"type":"Point","coordinates":[59.935885,30.330124]},"properties":{"balloonContentBody":"<h3>Невский проспект, 32/34</h3><p>Россия, Санкт-Петербург</p>","name":"Невский проспект, 32/34","text":"Россия, Санкт-Петербург, Невский проспект, 32/34","clusterCaption":"Невский проспект, 32/34"}},
{"type":"Feature","id":22,"geometry":{"type":"Point","coordinates":[59.933992,30.312428]},"properties":{"balloonContentBody":"<h3>Большая Морская улица, 27</h3><p>Россия, Санкт-Петербург</p>","name":"Большая Морская улица, 27","text":"Россия, Санкт-Петербург, Большая Морская улица, 27","clusterCaption":"Большая Морская улица, 27"}},
{"type":"Feature","id":23,"geometry":{"type":"Point","coordinates":[59.834962,30.144281]},"properties":{"balloonContentBody":"<h3>проспект Ветеранов, 160</h3><p>Россия, Санкт-Петербург</p>","name":"проспект Ветеранов, 160","text":"Россия, Санкт-Петербург, проспект Ветеранов, 160","clusterCaption":"проспект Ветеранов, 160"}},
{"type":"Feature","id":24,"geometry":{"type":"Point","coordinates":[60.042923,30.380843]},"properties":{"balloonContentBody":"<h3>проспект Просвещения, 53к1</h3><p>Россия, Санкт-Петербург</p>","name":"проспект Просвещения, 53к1","text":"Россия, Санкт-Петербург, проспект Просвещения, 53к1","clusterCaption":"проспект Просвещения, 53к1"}},
{"type":"Feature","id":25,"geometry":{"type":"Point","coordinates":[60.018228,30.248773]},"properties":{"balloonContentBody":"<h3>Комендантский проспект, 27к1</h3><p>Россия, Санкт-Петербург</p>","name":"Комендантский проспект, 27к1","text":"Россия, Санкт-Петербург, Комендантский проспект, 27к1","clusterCaption":"Комендантский проспект, 27к1"}},
{"type":"Feature","id":26,"geometry":{"type":"Point","coordinates":[59.96357,30.415824]},"properties":{"balloonContentBody":"<h3>Апрельская улица, 6к1</h3><p>Россия, Санкт-Петербург</p>","name":"Апрельская улица, 6к1","text":"Россия, Санкт-Петербург, Апрельская улица, 6к1","clusterCaption":"Апрельская улица, 6к1"}},
{"type":"Feature","id":27,"geometry":{"type":"Point","coordinates":[59.984283,30.641346]},"properties":{"balloonContentBody":"<h3>улица Доктора Сотникова, 13</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"улица Доктора Сотникова, 13","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, улица Доктора Сотникова, 13","clusterCaption":"улица Доктора Сотникова, 13"}},
{"type":"Feature","id":28,"geometry":{"type":"Point","coordinates":[59.982608,30.641705]},"properties":{"balloonContentBody":"<h3>улица Доктора Сотникова, 25</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"улица Доктора Сотникова, 25","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, улица Доктора Сотникова, 25","clusterCaption":"улица Доктора Сотникова, 25"}},
{"type":"Feature","id":29,"geometry":{"type":"Point","coordinates":[59.982032,30.639881]},"properties":{"balloonContentBody":"<h3>улица Доктора Сотникова, 31</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"улица Доктора Сотникова, 31","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, улица Доктора Сотникова, 31","clusterCaption":"улица Доктора Сотникова, 31"}},
{"type":"Feature","id":30,"geometry":{"type":"Point","coordinates":[59.840239,30.337131]},"properties":{"balloonContentBody":"<h3>проспект Юрия Гагарина, 71</h3><p>Россия, Санкт-Петербург</p>","name":"проспект Юрия Гагарина, 71","text":"Россия, Санкт-Петербург, проспект Юрия Гагарина, 71","clusterCaption":"проспект Юрия Гагарина, 71"}},
{"type":"Feature","id":31,"geometry":{"type":"Point","coordinates":[60.028388,30.688723]},"properties":{"balloonContentBody":"<h3>Центральная улица, 10</h3><p>Россия, Ленинградская область, Всеволожск</p>","name":"Центральная улица, 10","text":"Россия, Ленинградская область, Всеволожск, Центральная улица, 10","clusterCaption":"Центральная улица, 10"}},
{"type":"Feature","id":32,"geometry":{"type":"Point","coordinates":[60.028119,30.688337]},"properties":{"balloonContentBody":"<h3>Центральная улица, 2</h3><p>Россия, Ленинградская область, Всеволожск</p>","name":"Центральная улица, 2","text":"Россия, Ленинградская область, Всеволожск, Центральная улица, 2","clusterCaption":"Центральная улица, 2"}},
{"type":"Feature","id":33,"geometry":{"type":"Point","coordinates":[59.993568,30.643196]},"properties":{"balloonContentBody":"<h3>Центральная улица, 6</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"Центральная улица, 6","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, Центральная улица, 6","clusterCaption":"Центральная улица, 6"}},
{"type":"Feature","id":34,"geometry":{"type":"Point","coordinates":[59.907825,30.513983]},"properties":{"balloonContentBody":"<h3>Пражская улица, 7</h3><p>Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово</p>","name":"Пражская улица, 7","text":"Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово, Пражская улица, 7","clusterCaption":"Пражская улица, 7"}},
{"type":"Feature","id":35,"geometry":{"type":"Point","coordinates":[59.915093,30.514135]},"properties":{"balloonContentBody":"<h3>Ленинградская улица, 7</h3><p>Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово</p>","name":"Ленинградская улица, 7","text":"Россия, Ленинградская область, Всеволожский район, Заневское городское поселение, Кудрово, Ленинградская улица, 7","clusterCaption":"Ленинградская улица, 7"}},
{"type":"Feature","id":36,"geometry":{"type":"Point","coordinates":[60.036798,30.74741]},"properties":{"balloonContentBody":"<h3>Луговая улица, 40</h3><p>Россия, Ленинградская область, Всеволожский район, посёлок Щеглово</p>","name":"Луговая улица, 40","text":"Россия, Ленинградская область, Всеволожский район, посёлок Щеглово, Луговая улица, 40","clusterCaption":"Луговая улица, 40"}},
{"type":"Feature","id":37,"geometry":{"type":"Point","coordinates":[60.030955,30.750877]},"properties":{"balloonContentBody":"<h3>посёлок Щеглово, 54</h3><p>Россия, Ленинградская область, Всеволожский район</p>","name":"посёлок Щеглово, 54","text":"Россия, Ленинградская область, Всеволожский район, посёлок Щеглово, 54","clusterCaption":"посёлок Щеглово, 54"}},
{"type":"Feature","id":38,"geometry":{"type":"Point","coordinates":[59.933023,30.347336]},"properties":{"balloonContentBody":"<h3>Невский проспект, 74-76</h3><p>Россия, Санкт-Петербург</p>","name":"Невский проспект, 74-76","text":"Россия, Санкт-Петербург, Невский проспект, 74-76","clusterCaption":"Невский проспект, 74-76"}},
{"type":"Feature","id":39,"geometry":{"type":"Point","coordinates":[59.699113,30.414611]},"properties":{"balloonContentBody":"<h3>Кедринская улица, 6</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"Кедринская улица, 6","text":"Россия, Санкт-Петербург, Пушкин, Кедринская улица, 6","clusterCaption":"Кедринская улица, 6"}},
{"type":"Feature","id":40,"geometry":{"type":"Point","coordinates":[59.69924,30.411718]},"properties":{"balloonContentBody":"<h3>Кедринская улица, 12</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"Кедринская улица, 12","text":"Россия, Санкт-Петербург, Пушкин, Кедринская улица, 12","clusterCaption":"Кедринская улица, 12"}},
{"type":"Feature","id":41,"geometry":{"type":"Point","coordinates":[59.937513,30.640052]},"properties":{"balloonContentBody":"<h3>улица Генерала Чоглокова, 1</h3><p>Россия, Ленинградская область, Всеволожский район, Колтушское сельское поселение, деревня Старая</p>","name":"улица Генерала Чоглокова, 1","text":"Россия, Ленинградская область, Всеволожский район, Колтушское сельское поселение, деревня Старая, улица Генерала Чоглокова, 1","clusterCaption":"улица Генерала Чоглокова, 1"}},
{"type":"Feature","id":42,"geometry":{"type":"Point","coordinates":[59.93562,30.639351]},"properties":{"balloonContentBody":"<h3>улица Иоанна Кронштадтского, 5</h3><p>Россия, Ленинградская область, Всеволожский район, Колтушское сельское поселение, деревня Старая</p>","name":"улица Иоанна Кронштадтского, 5","text":"Россия, Ленинградская область, Всеволожский район, Колтушское сельское поселение, деревня Старая, улица Иоанна Кронштадтского, 5","clusterCaption":"улица Иоанна Кронштадтского, 5"}},
{"type":"Feature","id":43,"geometry":{"type":"Point","coordinates":[59.699085,30.422175]},"properties":{"balloonContentBody":"<h3>Малиновская улица, 10</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"Малиновская улица, 10","text":"Россия, Санкт-Петербург, Пушкин, Малиновская улица, 10","clusterCaption":"Малиновская улица, 10"}},
{"type":"Feature","id":44,"geometry":{"type":"Point","coordinates":[59.824764,30.095934]},"properties":{"balloonContentBody":"<h3>улица Большевиков, 35</h3><p>Россия, Санкт-Петербург</p>","name":"улица Большевиков, 35","text":"Россия, Санкт-Петербург, улица Большевиков, 35","clusterCaption":"улица Большевиков, 35"}},
{"type":"Feature","id":45,"geometry":{"type":"Point","coordinates":[59.695603,30.416497]},"properties":{"balloonContentBody":"<h3>улица Архитектора Данини, 7</h3><p>Россия, Санкт-Петербург, Пушкин</p>","name":"улица Архитектора Данини, 7","text":"Россия, Санкт-Петербург, Пушкин, улица Архитектора Данини, 7","clusterCaption":"улица Архитектора Данини, 7"}},
{"type":"Feature","id":46,"geometry":{"type":"Point","coordinates":[59.891877,30.487851]},"properties":{"balloonContentBody":"<h3>улица Тельмана, 49</h3><p>Россия, Санкт-Петербург</p>","name":"улица Тельмана, 49","text":"Россия, Санкт-Петербург, улица Тельмана, 49","clusterCaption":"улица Тельмана, 49"}},

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
