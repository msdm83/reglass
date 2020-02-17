ymaps.ready(initAdressMap);

function initAdressMap() {
  var myPlacemark,
  myMap = new ymaps.Map('addressVerificationMap', {
    center: [59.9386300, 30.3141300],
    zoom: 9,
    controls: ['zoomControl']
  });

  var addressIsComplete = false;

  // Слушаем клик на карте.
  myMap.events.add('click', function (e) {
    var coords = e.get('coords');

    // Если метка уже создана – просто передвигаем ее.
    if (myPlacemark) {
      myPlacemark.geometry.setCoordinates(coords);
    }
    // Если нет – создаем.
    else {
      myPlacemark = createPlacemark(coords);
      myMap.geoObjects.add(myPlacemark);
      // Слушаем событие окончания перетаскивания на метке.
      myPlacemark.events.add('dragend', function () {
        getAddress(myPlacemark.geometry.getCoordinates());
      });
    }
    getAddress(coords);
  });

  // Создание метки.
  function createPlacemark(coords) {
    return new ymaps.Placemark(coords, {
      iconCaption: 'поиск...'
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true
    });
  }

  // Определяем адрес по координатам (обратное геокодирование).
  function getAddress(coords) {
    myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then(function (res) {
      var firstGeoObject = res.geoObjects.get(0);

      isAddressOk(firstGeoObject);
      $('#requestForm').parsley().validate();

      $("#address").val(firstGeoObject.getAddressLine());
      $("#yMapInfo").html(firstGeoObject.getAddressLine());


      myPlacemark.properties
      .set({
        // Формируем строку с данными об объекте.
        iconCaption: [
          // Название населенного пункта или вышестоящее административно-территориальное образование.
          firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
          // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
          firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
        ].filter(Boolean).join(', '),
        // В качестве контента балуна задаем строку с адресом объекта.
        balloonContent: firstGeoObject.getAddressLine()
      });
    });
  }
  function isAddressOk(geoObject){
    addressIsComplete = false;
    //let hint = "";
    if (geoObject) {
      // Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
      switch (geoObject.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
        case 'exact':
        addressIsComplete = true;
        break;
        case 'number':
        case 'near':
        case 'range':
        case 'street':
        //error = 'Неточный адрес, требуется уточнение';
        //  hint = 'Неточный адрес: уточните номер дома';
        break;
        case 'other':
        default:
        //error = 'Неточный адрес, требуется уточнение';
        //hint = 'Неточный адрес: уточните адрес';
      }
    } else {
      //error = 'Адрес не найден';
      // hint  = 'Адрес не найден: уточните адрес';
    }
    return addressIsComplete;
  }

  window.Parsley.addValidator('address', {
    validateString: function(value) {
      return  addressIsComplete;
    },
    messages: {
      ru: 'Установите маркер с точностью до номера дома'
    }
  });

  $("#requestForm").submit(function(){
    console.log(this.name.value);
        $.ajax({
          method: "POST",
          url: "form.php",
          data: {
            name: this.name.value,
            phone: this.phone.value,
            email: this.email.value,
            address: this.address.value,
            message: this.message.value }
        })
        .done(function( msg ) {
          $("#successMessage").show();
          $("#successMessage").html(msg);
          setTimeout(function(){$("#successMessage").html('');$("#successMessage").hide();}, 5000);
        });
        return false;
  });
}
