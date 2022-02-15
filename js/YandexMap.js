// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75892609306188, 37.62707117993166],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14

    });
    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108850004083], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/mdi_location_on.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-7, -2]
  });
  myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('control.Manager');
    myMap.controls.remove('listBox');
    myMap.controls.remove('typeSelector');
}
