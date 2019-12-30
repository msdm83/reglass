//points page map initialization
function init2() {
  var myMap = new ymaps.Map('map2', {
    center: [60.01,30.67],
    zoom: 11,
    controls: ['zoomControl']
  }),
  objectManager = new ymaps.ObjectManager({
    // Чтобы метки начали кластеризоваться, выставляем опцию.
  //  clusterize: true,
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

      {"type":"Feature","id":162,"geometry":{"type":"Point","coordinates":[60.109984,30.495064]},"properties":{"balloonContentBody":"<h3>Молодёжная улица, 16</h3><p>Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский</p>","name":"Молодёжная улица, 16","text":"Россия, Ленинградская область, Всеволожский район, посёлок городского типа Кузьмоловский, Молодёжная улица, 16","clusterCaption":"Молодёжная улица, 16"}},

    ]};




    let id = 0;
    let fulltext = "";
    function addPoint(address){
      try{
        ymaps.geocode(address).then(function (res) {
          let item = res.geoObjects.get(0);
          let isOkAdress = res.geoObjects.get(0).properties.get("metaDataProperty").GeocoderMetaData.kind=='house';

          let obj ={
            "type": "Feature",
            "id": id++,
            "geometry":
            {"type": "Point",
            "coordinates":item.geometry._coordinates
            },
            "properties":
            {
              balloonContentHeader:item.properties._data.balloonContentHeader,
              balloonContentBody:item.properties._data.balloonContentBody,
              name:item.properties._data.name,
              text:item.properties._data.text,
              clusterCaption:item.properties._data.name,
            }
          };
          if(!isOkAdress){
            obj.options = {"iconColor": "#ff0000"};
          }
      //{"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]}, "properties": {"balloonContent": "Содержимое балуна", "clusterCaption": "Метка с iconContent", "hintContent": "Текст подсказки", "iconContent": "1"}, "options": {"iconColor": "#ff0000", "preset": "islands#blueCircleIcon"}},
      //"balloonContentHeader": "", "balloonContentBody": "", "balloonContentFooter": "", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
      fulltext += JSON.stringify(obj) +',\r\n';
      let styleinline = !isOkAdress ?"style='border: 1px solid #f44a40;border-radius:10px'":"";
      let html ='<div class="col-md-4"'+styleinline+'><div class="single-defination"><h6>'+id+'. '
      +res.geoObjects.get(0).properties.get('name')+'</h6><p><b>адрес поиска:</b> '
      +address+'<br/><i style="color:#ccc">'+res.geoObjects.get(0).properties.get('text')+'</i></p></div></div>';
      listNode.innerHTML +=html;
    });
  }catch(exception){
    console.error(exception);
  }
}


setTimeout(function(){console.log(fulltext)}, 3000);




objectManager.add(allPoints);



/*

addPoint('г.Санкт-Петербург, 	Энергетиков 9/6	 ');
addPoint('г.Санкт-Петербург, 	ЖК «Ланской квартал», Ланское шоссе 14/1	 ');
addPoint('г.Санкт-Петербург, 	Фермское шоссе 12	 ');
addPoint('г.Санкт-Петербург, 	В.О., ул.КИМа 4 	 ');
addPoint('г.Санкт-Петербург, 	Седова 19	 ');
addPoint('г.Санкт-Петербург, 	Седова 162	 ');
addPoint('г.Санкт-Петербург, 	Матюшенко 12	 ');
addPoint('г.Санкт-Петербург, 	Полярников 15	 ');
addPoint('г.Санкт-Петербург, 	Бульвар Красных Зорь 1	 ');
addPoint('г.Санкт-Петербург, 	Бульвар Красных Зорь 7	 ');
addPoint('г.Санкт-Петербург, 	Бульвар Красных Зорь 9	 ');
addPoint('г.Санкт-Петербург, 	Шелгунова 16	 ');
addPoint('г.Санкт-Петербург, 	Легенда-комфорт, Дальневосточный 12	 ');
addPoint('г.Санкт-Петербург, 	Антонова-Овсиенко 12	 ');
addPoint('г.Санкт-Петербург, 	Легенда-Комфорт Оптиков 34к1	 ');
addPoint('г.Санкт-Петербург, 	Яхтенная, 24к2	 ');
addPoint('г.Санкт-Петербург, 	ТСЖ «Олимпийский», ул. Антонова-Овсеенко, 18	 ');

addPoint('г.Всеволожск, 	ул.Доктора Сотникова 13	 ');
addPoint('г.Всеволожск, 	ул.Доктора Сотникова 25	 ');
addPoint('г.Всеволожск, 	ул.Доктора Сотникова 31	 ');
addPoint('г.Всеволожск, 	ул.Центральная, 2	 ');
addPoint('г.Всеволожск, 	ул.Центральная, 6	 ');
addPoint('г.Всеволожск, 	ул.Центральная, 10	 ');
addPoint('Ленинградская обл,	поселок Щеглова,  54	 ');


addPoint('г.Кудрово, Ленинградская 7	 ');
addPoint('г.Кудрово, улица Пражская 7	 ');

addPoint('г.Санкт-Петербург, Невский проспект, 74-76	 ');
addPoint('г.Пушкин, улица Кедринская 6	 ');
addPoint('г.Пушкин, улица Кедринская 12	 ');
addPoint('г.Пушкин, улица Маленовская 12/2	 ');
addPoint('г.Пушкин, улица Архитектора Дании 7 ');

*/
addPoint('ул. Иоанна Кронштадтского, 5, Старая, Ленинградская обл,Россия');
//addPoint('ул. Генерала Чоглокова, 1, Старая, Ленинградская область, Россия	 ');

//addPoint('г.Санкт-Петербург, Большевикоов 43');
//addPoint('г.Санкт-Петербург, Тельмана 49');
}
ymaps.ready(init2);
