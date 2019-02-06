// Jade
// .slider-nav
// 	div
// 	div
// 	div
// .slider-for
// 	div
// 	div
// 	div

// $('.slider-for').slick({
//   slidesToShow: 1, // Сколько слайдов показывать на экране
//   slidesToScroll: 1, // Сколько слайдов пролистывать за раз
//   dots: false, // Пагинация
//   arrows: false, // Стрелки
//   fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
//   asNavFor: '.slider-nav' // Связь со слайдерами
// });

var slider = $('.slider').slick({
  slidesToShow: 3, // Сколько слайдов показывать на экране
  slidesToScroll: 1, // Сколько слайдов пролистывать за раз
  // asNavFor: '.slider-for', // Связь со слайдерами
  dots: false, // Пагинация
  arrows: false, // Стрелки
  speed: 500, // Скорость перехода слайдов
  autoplay: false, // Автопрокрутка
  autoplaySpeed: 2000, // Скорость автопрокрутки
  centerMode: false, // Задает класс .slick-center слайду в центре
  focusOnSelect: true, // Выбрать слайд кликом
  infinite: true, // Зацикленное пролистывание
  vertical: false, // Вертикальный слайдер
  rtl: false, // Слайды листаются справа налево
  centerMode: true, // Включить center mode, чтоб увидеть часть крайних слайдов
  centerPadding: '212px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
  adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
  variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
  responsive: [	// Адаптация
    {
    breakpoint: 1400,
      settings: {
        centerPadding: '60px'
      }
    },
    {
    breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: '60px'
      }
    },
    {
	  breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
  // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
});

// Кастомные кнопки "вперед" "назад"
$('.sliderButton_prev').click(function() {
	slider.slick('slickPrev');
});
$('.sliderButton_next').click(function() {
	slider.slick('slickNext');
});

$('.your-slider').slick('unslick'); // Уничтожить слайдер