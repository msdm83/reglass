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
  {"type":"Feature","id":11,"geometry":{"type":"Point","coordinates":[59.990404,30.64687]},"properties":{"balloonContentBody":"<h3>Невская улица, 11</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"Невская улица, 11","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, Невская улица, 11","clusterCaption":"Невская улица, 11"}},
  {"type":"Feature","id":12,"geometry":{"type":"Point","coordinates":[59.989342,30.649502]},"properties":{"balloonContentBody":"<h3>Московская улица, 26/8</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"Московская улица, 26/8","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, Московская улица, 26/8","clusterCaption":"Московская улица, 26/8"}},
  {"type":"Feature","id":13,"geometry":{"type":"Point","coordinates":[59.990534,30.650805]},"properties":{"balloonContentBody":"<h3>Московская улица, 19/5</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"Московская улица, 19/5","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, Московская улица, 19/5","clusterCaption":"Московская улица, 19/5"}},
  {"type":"Feature","id":14,"geometry":{"type":"Point","coordinates":[59.990615,30.65385]},"properties":{"balloonContentBody":"<h3>Невская улица, 1/2</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"Невская улица, 1/2","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, Невская улица, 1/2","clusterCaption":"Невская улица, 1/2"}},
  {"type":"Feature","id":15,"geometry":{"type":"Point","coordinates":[59.989319,30.653904]},"properties":{"balloonContentBody":"<h3>улица Малиновского, 6</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"улица Малиновского, 6","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, улица Малиновского, 6","clusterCaption":"улица Малиновского, 6"}},
  {"type":"Feature","id":16,"geometry":{"type":"Point","coordinates":[59.98859,30.653078]},"properties":{"balloonContentBody":"<h3>Знаменская улица, 1/8</h3><p>Россия, Ленинградская область, Всеволожск, микрорайон Южный</p>","name":"Знаменская улица, 1/8","text":"Россия, Ленинградская область, Всеволожск, микрорайон Южный, Знаменская улица, 1/8","clusterCaption":"Знаменская улица, 1/8"}},
  {"type":"Feature","id":95,"geometry":{"type":"Point","coordinates":[60.006035,30.608063]},"properties":{"balloonContentBody":"<h3>улица Победы, 1</h3><p>Россия, Ленинградская область, Всеволожск</p>","name":"улица Победы, 1","text":"Россия, Ленинградская область, Всеволожск, улица Победы, 1","clusterCaption":"улица Победы, 1"}},
  {"type":"Feature","id":96,"geometry":{"type":"Point","coordinates":[60.007218,30.610174]},"properties":{"balloonContentBody":"<h3>улица Дружбы, 4к1</h3><p>Россия, Ленинградская область, Всеволожск</p>","name":"улица Дружбы, 4к1","text":"Россия, Ленинградская область, Всеволожск, улица Дружбы, 4к1","clusterCaption":"улица Дружбы, 4к1"}},
  {"type":"Feature","id":97,"geometry":{"type":"Point","coordinates":[60.004784,30.60668]},"properties":{"balloonContentBody":"<h3>улица Победы, 12</h3><p>Россия, Ленинградская область, Всеволожск</p>","name":"улица Победы, 12","text":"Россия, Ленинградская область, Всеволожск, улица Победы, 12","clusterCaption":"улица Победы, 12"}},
  {"type":"Feature","id":158,"geometry":{"type":"Point","coordinates":[60.108262,30.493465]},"properties":{"balloonContentBody":"<h3>Спортивная улица, 3</h3><p>Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский</p>","name":"Спортивная улица, 3","text":"Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский, Спортивная улица, 3","clusterCaption":"Спортивная улица, 3"}},
  {"type":"Feature","id":159,"geometry":{"type":"Point","coordinates":[60.109984,30.495064]},"properties":{"balloonContentBody":"<h3>Молодёжная улица, 16</h3><p>Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский</p>","name":"Молодёжная улица, 16","text":"Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский, Молодёжная улица, 16","clusterCaption":"Молодёжная улица, 16"}},
  {"type":"Feature","id":160,"geometry":{"type":"Point","coordinates":[60.111262,30.495253]},"properties":{"balloonContentBody":"<h3>Железнодорожная улица, 14</h3><p>Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский</p>","name":"Железнодорожная улица, 14","text":"Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский, Железнодорожная улица, 14","clusterCaption":"Железнодорожная улица, 14"}},
  {"type":"Feature","id":161,"geometry":{"type":"Point","coordinates":[60.119893,30.497579]},"properties":{"balloonContentBody":"<h3>Заозёрная улица, 3</h3><p>Россия, Ленинградская область, Всеволожский район, Кузьмоловское городское поселение, деревня Кузьмолово</p>","name":"Заозёрная улица, 3","text":"Россия, Ленинградская область, Всеволожский район, Кузьмоловское городское поселение, деревня Кузьмолово, Заозёрная улица, 3","clusterCaption":"Заозёрная улица, 3"}},
  {"type":"Feature","id":162,"geometry":{"type":"Point","coordinates":[60.036946,30.749045]},"properties":{"balloonContentBody":"<h3>Луговая улица</h3><p>Россия, Ленинградская область, Всеволожский район, посёлок Щеглово</p>","name":"Луговая улица","text":"Россия, Ленинградская область, Всеволожский район, посёлок Щеглово, Луговая улица","clusterCaption":"Луговая улица"}},

  ]};
  objectManager.add(allPoints);
}
ymaps.ready(init2);



//contact page map initialization
function init1() {
  var myMap = new ymaps.Map('contact_map', {
    center: [59.932749, 30.436764],
    zoom: 11,
    controls: ['zoomControl']
  });
  /*Заневский проспект, 67к2
Санкт-Петербург, Россия, 195112
59.932749, 30.436764*/

  var myPlacemark = new ymaps.Placemark([59.932749, 30.436764], {
    balloonContentHeader: 'Заневский проспект, 67к2',
    balloonContentBody: 'Заневский проспект, 67к2, Санкт-Петербург',
    hintContent: 'Заневский проспект, 67к2',
    balloonContent:'Заневский проспект, 67к2',
  });

  myMap.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}
ymaps.ready(init1);
