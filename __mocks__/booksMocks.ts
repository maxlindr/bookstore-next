import { IBook } from '@/entities/IBook';

const getCover = (raw: any) => {
  return raw.attributes.cover.data.attributes.url;
};

const convert = (raw: any): IBook => {
  return {
    id: raw.id,
    title: raw.attributes.title,
    author: raw.attributes.author,
    publisher: raw.attributes.publisher,
    year: raw.attributes.year,
    cover_type: raw.attributes.cover_type,
    pages: raw.attributes.pages,
    width: raw.attributes.width,
    height: raw.attributes.height,
    isbn: raw.attributes.isbn,
    price: raw.attributes.price,
    available: raw.attributes.available,
    description: raw.attributes.description,
    languages: raw.attributes.languages.data.map((it: any) => ({
      id: it.id,
      code: it.attributes.code,
      name: it.attributes.name,
    })),
    cover: getCover(raw),
    favorite: false,
  };
};

const bookMocksRaw = [
  {
    id: 1,
    attributes: {
      title: 'The Typographic Grid',
      author: 'Hans Rudolf Bosshard',
      publisher: 'Niggli Verlag',
      year: 1999,
      cover_type: 'hardcover',
      pages: 200,
      width: null,
      height: null,
      isbn: '3721203402',
      price: 8000,
      available: true,
      description:
        '<p>Типографская сетка&nbsp;— это порождение конструктивного искусства. В&nbsp;этой книге представлена коллекция из&nbsp;примерно двух десятков типографских работ автора, включая книги, брошюры и&nbsp;художественные каталоги. Работы, задокументированные в&nbsp;виде схематических рисунков и&nbsp;множества отдельных иллюстраций, не&nbsp;предназначены для того, чтобы быть рецептами; вместо этого они должны дать читателю представление о&nbsp;том, как он&nbsp;сам может с&nbsp;самого начала привести в&nbsp;действие процессы проектирования. Многогранность проектирования с&nbsp;использованием грид-систем должна быть очевидна.</p>',
      languages: {
        data: [
          {
            id: 2,
            attributes: {
              code: 'en',
              name: 'Английский',
            },
          },
          {
            id: 3,
            attributes: {
              code: 'de',
              name: 'Немецкий',
              createdAt: '2023-04-18T14:58:57.961Z',
              updatedAt: '2023-04-18T14:58:57.961Z',
            },
          },
        ],
      },
      cover: {
        data: {
          id: 1,
          attributes: {
            name: 'the-typographic-grid.jpg',
            alternativeText: null,
            caption: null,
            width: 779,
            height: 648,
            formats: {
              thumbnail: {
                name: 'thumbnail_the-typographic-grid.jpg',
                hash: 'thumbnail_the_typographic_grid_8346cde364',
                ext: '.jpg',
                mime: 'image/jpeg',
                path: null,
                width: 187,
                height: 156,
                size: 8.12,
                url: '/uploads/thumbnail_the_typographic_grid_8346cde364.jpg',
              },
              small: {
                name: 'small_the-typographic-grid.jpg',
                hash: 'small_the_typographic_grid_8346cde364',
                ext: '.jpg',
                mime: 'image/jpeg',
                path: null,
                width: 500,
                height: 416,
                size: 41.62,
                url: '/uploads/small_the_typographic_grid_8346cde364.jpg',
              },
              medium: {
                name: 'medium_the-typographic-grid.jpg',
                hash: 'medium_the_typographic_grid_8346cde364',
                ext: '.jpg',
                mime: 'image/jpeg',
                path: null,
                width: 750,
                height: 624,
                size: 75.31,
                url: '/uploads/medium_the_typographic_grid_8346cde364.jpg',
              },
            },
            hash: 'the_typographic_grid_8346cde364',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 81.54,
            url: '/the-typographic-grid.jpg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2023-04-18T16:32:22.894Z',
            updatedAt: '2023-04-18T16:32:22.894Z',
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      title: 'Letter Fountain',
      author: 'Joep Pohlen',
      publisher: 'TASCHEN',
      createdAt: '2023-04-18T21:36:29.193Z',
      updatedAt: '2023-04-18T22:53:29.716Z',
      year: 2011,
      cover_type: 'hardcover',
      pages: 640,
      width: null,
      height: null,
      isbn: '3836525097',
      price: 10000,
      available: false,
      description:
        '<p>Все, что вы когда-либо хотели знать о печати букв и цифр</p><p>Оглядываясь назад, на первые попытки человека общаться с помощью визуальных знаков и рисунков, Letter Fountain представляет собой совершенно уникальное руководство по шрифтам: в дополнение к изучению формы и анатомии каждой буквы алфавита (а также знаков препинания и специальных символов), в книге приведены перекрестные ссылки на шрифтовые конструкции с важными произведения искусства и художественные течения со времен Гутенберга до наших дней. &nbsp;Дополнительное внимание уделяется эстетике цифровой эпохи и типографским рекомендациям, таким как выбор правильного шрифта для работы. Завершают руководство подробное сравнение между шрифтами без засечек и с засечками без засечек, эссе об измерительных системах и показаниях, рекомендации по правилам типографии, а также руководство по разработке цифровых шрифтов.</p><p>Подробно обсуждается <strong>более 150 шрифтов</strong>, их происхождение и характеристики шрифта, которые наглядно объясняются таблицами на всю страницу, включая масштаб, вес и приращения наклона. Обширное приложение содержит общий указатель, один по шрифтам (в книге представлено более 300), указатель по <strong>более чем 250 типографским дизайнерам</strong>, исчерпывающий указатель по создателям шрифтов от Гутенберга до наших дней, графический словарь и библиографию для дальнейшего чтения.</p><p>Оригинальное голландское издание Letterfontein получило <strong>Certificate for Typographic Excellence</strong> от Type Directors Club в Нью-Йорке (TDC) в 2010 году и награду <strong>red-dot design award</strong> от Центра дизайна Нордхайн-Вестфален, Германия.</p><p>Специальные функции включают в себя:</p><ul><li>в твердом полульняном переплете с тремя закладками из лент</li><li>приложение на 144 страницах с подробным глоссарием и указателями</li><li>удобная типографская линейка с возможностью преобразования между четырьмя системами измерения и скрытыми сочетаниями клавиш для вашей клавиатуры Apple!</li></ul>',
      languages: {
        data: [
          {
            id: 2,
            attributes: {
              code: 'en',
              name: 'Английский',
              createdAt: '2023-04-18T14:56:31.445Z',
              updatedAt: '2023-04-18T14:56:31.445Z',
            },
          },
        ],
      },
      cover: {
        data: {
          id: 2,
          attributes: {
            name: 'letter-fountain.jpg',
            alternativeText: null,
            caption: null,
            width: 328,
            height: 500,
            formats: {
              thumbnail: {
                name: 'thumbnail_letter-fountain.jpg',
                hash: 'thumbnail_letter_fountain_a504a40327',
                ext: '.jpg',
                mime: 'image/jpeg',
                path: null,
                width: 102,
                height: 156,
                size: 3.53,
                url: '/uploads/thumbnail_letter_fountain_a504a40327.jpg',
              },
            },
            hash: 'letter_fountain_a504a40327',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 26.4,
            url: '/letter-fountain.jpg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2023-04-18T21:36:17.589Z',
            updatedAt: '2023-04-18T21:36:17.589Z',
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      title: 'Orientierungssysteme und Signaletik',
      author: ' Andreas Uebele',
      publisher: 'Verlag Hermann Schmidt',
      createdAt: '2023-04-18T23:27:08.572Z',
      updatedAt: '2023-04-18T23:27:08.572Z',
      year: 2006,
      cover_type: 'hardcover',
      pages: 335,
      width: null,
      height: null,
      isbn: '3874396746',
      price: 10000,
      available: true,
      description:
        '<h1>Отзывы прессы</h1><p>Удачный подзаголовок гласит: Вести Найти бежать. И это в значительной степени описывает, в какой области знаний и знаний идет речь. Чтобы указать путь, который не является указанием пути ( уходи! ) должно быть. Вопрос в том, кто несет ответственность за это, прежде всего, в общественных местах, в функциональных зданиях и соответствующих местах или на дорогах? Архитекторы, дизайнеры, дизайнеры продуктов? Все три , говорится в книге, последовательно не относятся к какой-либо конкретной профессиональной группе, но во многих главах и с чрезвычайно наглядными иллюстрациями и, следовательно, практическими примерами очень хорошо иллюстрируют симбиоз профессиональных задач и задач. Потому что только на первый взгляд вывески (любого типа) представляют собой чистую типографику, правильный цвет и правильный шрифт. К этому добавляется многое, что либо приводит к тому, что искатели больше не видят деревья за пределами леса (то есть больше не могут найти то, что ищут и что им нужно за пределами знаков): свет, расположение и угол обзора, слияние или контраст с конструкцией здания. Когда строительство будет завершено, мы быстро повесим табличку с указанием того, что это не сделано. Как это хорошо и хорошо сделано, более чем на 300 страницах очень поучительно прочитать и посмотреть. Будь то мега-дизайн для целой системы наведения в крупных строительных комплексах (выставочный центр, аэропорт), будь то в качестве ориентиров в клиниках и домах, будь то указатели в музейной зоне или просто знак входа в офис компании или медицинского учреждения, и, прежде всего, будь то вывески снаружи , будь то на улице или в парке, для любой области применения прототипа. это конкретные советы, предложения, примеры для подражания. Подписи к иллюстрациям варьируются от фактического описания до содержательных основных положений и доктрин, они ненавязчивы, но в то же время чрезвычайно информативны. Благодаря тому, что графический материал чрезвычайно неоднороден как по цвету, так и по сюжету, удалось создать дизайн, который великолепно справляется с этим и не допускает смешения разнообразия ни на одной странице. Вводная! --Wenke.net</p><h1>Издатель о книге</h1><p>Награжден премией iF communication award 2007.</p><h1>Об авторе и других участниках</h1><p>Андреас Юбеле — архитектор по специальности и профессор коммуникационного дизайна. Он прекрасно сочетает в себе обе дисциплины. Список его руководителей читается как «кто есть кто», а наградные грамоты заполняют стены. Тем не менее, в его обширную специализированную книгу сознательно включены не только его собственные работы, но и многочисленные примеры, представленные его конкурентами (и им самим).</p>',
      languages: {
        data: [
          {
            id: 3,
            attributes: {
              code: 'de',
              name: 'Немецкий',
              createdAt: '2023-04-18T14:58:57.961Z',
              updatedAt: '2023-04-18T14:58:57.961Z',
            },
          },
        ],
      },
      cover: {
        data: {
          id: 3,
          attributes: {
            name: 'Orientierungssysteme.png',
            alternativeText: null,
            caption: null,
            width: 700,
            height: 700,
            formats: {
              thumbnail: {
                name: 'thumbnail_Orientierungssysteme.png',
                hash: 'thumbnail_Orientierungssysteme_0dca4eb5f1',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 156,
                height: 156,
                size: 34.19,
                url: '/uploads/thumbnail_Orientierungssysteme_0dca4eb5f1.png',
              },
              small: {
                name: 'small_Orientierungssysteme.png',
                hash: 'small_Orientierungssysteme_0dca4eb5f1',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 500,
                height: 500,
                size: 284.7,
                url: '/uploads/small_Orientierungssysteme_0dca4eb5f1.png',
              },
            },
            hash: 'Orientierungssysteme_0dca4eb5f1',
            ext: '.png',
            mime: 'image/png',
            size: 160.8,
            url: '/Orientierungssysteme.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2023-04-18T23:22:31.944Z',
            updatedAt: '2023-04-18T23:22:31.944Z',
          },
        },
      },
    },
  },
  {
    id: 4,
    attributes: {
      title: 'Orientierungssysteme und Signaletik',
      author: ' Andreas Uebele',
      publisher: 'Verlag Hermann Schmidt',
      createdAt: '2023-04-18T23:27:08.572Z',
      updatedAt: '2023-04-18T23:27:08.572Z',
      year: 2006,
      cover_type: 'hardcover',
      pages: 335,
      width: null,
      height: null,
      isbn: '3874396746',
      price: 10000,
      available: true,
      description:
        '<h1>Отзывы прессы</h1><p>Удачный подзаголовок гласит: Вести Найти бежать. И это в значительной степени описывает, в какой области знаний и знаний идет речь. Чтобы указать путь, который не является указанием пути ( уходи! ) должно быть. Вопрос в том, кто несет ответственность за это, прежде всего, в общественных местах, в функциональных зданиях и соответствующих местах или на дорогах? Архитекторы, дизайнеры, дизайнеры продуктов? Все три , говорится в книге, последовательно не относятся к какой-либо конкретной профессиональной группе, но во многих главах и с чрезвычайно наглядными иллюстрациями и, следовательно, практическими примерами очень хорошо иллюстрируют симбиоз профессиональных задач и задач. Потому что только на первый взгляд вывески (любого типа) представляют собой чистую типографику, правильный цвет и правильный шрифт. К этому добавляется многое, что либо приводит к тому, что искатели больше не видят деревья за пределами леса (то есть больше не могут найти то, что ищут и что им нужно за пределами знаков): свет, расположение и угол обзора, слияние или контраст с конструкцией здания. Когда строительство будет завершено, мы быстро повесим табличку с указанием того, что это не сделано. Как это хорошо и хорошо сделано, более чем на 300 страницах очень поучительно прочитать и посмотреть. Будь то мега-дизайн для целой системы наведения в крупных строительных комплексах (выставочный центр, аэропорт), будь то в качестве ориентиров в клиниках и домах, будь то указатели в музейной зоне или просто знак входа в офис компании или медицинского учреждения, и, прежде всего, будь то вывески снаружи , будь то на улице или в парке, для любой области применения прототипа. это конкретные советы, предложения, примеры для подражания. Подписи к иллюстрациям варьируются от фактического описания до содержательных основных положений и доктрин, они ненавязчивы, но в то же время чрезвычайно информативны. Благодаря тому, что графический материал чрезвычайно неоднороден как по цвету, так и по сюжету, удалось создать дизайн, который великолепно справляется с этим и не допускает смешения разнообразия ни на одной странице. Вводная! --Wenke.net</p><h1>Издатель о книге</h1><p>Награжден премией iF communication award 2007.</p><h1>Об авторе и других участниках</h1><p>Андреас Юбеле — архитектор по специальности и профессор коммуникационного дизайна. Он прекрасно сочетает в себе обе дисциплины. Список его руководителей читается как «кто есть кто», а наградные грамоты заполняют стены. Тем не менее, в его обширную специализированную книгу сознательно включены не только его собственные работы, но и многочисленные примеры, представленные его конкурентами (и им самим).</p>',
      languages: {
        data: [
          {
            id: 3,
            attributes: {
              code: 'de',
              name: 'Немецкий',
              createdAt: '2023-04-18T14:58:57.961Z',
              updatedAt: '2023-04-18T14:58:57.961Z',
            },
          },
        ],
      },
      cover: {
        data: {
          id: 3,
          attributes: {
            name: 'Orientierungssysteme.png',
            alternativeText: null,
            caption: null,
            width: 700,
            height: 700,
            formats: {
              thumbnail: {
                name: 'thumbnail_Orientierungssysteme.png',
                hash: 'thumbnail_Orientierungssysteme_0dca4eb5f1',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 156,
                height: 156,
                size: 34.19,
                url: '/uploads/thumbnail_Orientierungssysteme_0dca4eb5f1.png',
              },
              small: {
                name: 'small_Orientierungssysteme.png',
                hash: 'small_Orientierungssysteme_0dca4eb5f1',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 500,
                height: 500,
                size: 284.7,
                url: '/uploads/small_Orientierungssysteme_0dca4eb5f1.png',
              },
            },
            hash: 'Orientierungssysteme_0dca4eb5f1',
            ext: '.png',
            mime: 'image/png',
            size: 160.8,
            url: '/Orientierungssysteme.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2023-04-18T23:22:31.944Z',
            updatedAt: '2023-04-18T23:22:31.944Z',
          },
        },
      },
    },
  },
  {
    id: 5,
    attributes: {
      title: 'Orientierungssysteme und Signaletik',
      author: ' Andreas Uebele',
      publisher: 'Verlag Hermann Schmidt',
      createdAt: '2023-04-18T23:27:08.572Z',
      updatedAt: '2023-04-18T23:27:08.572Z',
      year: 2006,
      cover_type: 'hardcover',
      pages: 335,
      width: null,
      height: null,
      isbn: '3874396746',
      price: 10000,
      available: true,
      description:
        '<h1>Отзывы прессы</h1><p>Удачный подзаголовок гласит: Вести Найти бежать. И это в значительной степени описывает, в какой области знаний и знаний идет речь. Чтобы указать путь, который не является указанием пути ( уходи! ) должно быть. Вопрос в том, кто несет ответственность за это, прежде всего, в общественных местах, в функциональных зданиях и соответствующих местах или на дорогах? Архитекторы, дизайнеры, дизайнеры продуктов? Все три , говорится в книге, последовательно не относятся к какой-либо конкретной профессиональной группе, но во многих главах и с чрезвычайно наглядными иллюстрациями и, следовательно, практическими примерами очень хорошо иллюстрируют симбиоз профессиональных задач и задач. Потому что только на первый взгляд вывески (любого типа) представляют собой чистую типографику, правильный цвет и правильный шрифт. К этому добавляется многое, что либо приводит к тому, что искатели больше не видят деревья за пределами леса (то есть больше не могут найти то, что ищут и что им нужно за пределами знаков): свет, расположение и угол обзора, слияние или контраст с конструкцией здания. Когда строительство будет завершено, мы быстро повесим табличку с указанием того, что это не сделано. Как это хорошо и хорошо сделано, более чем на 300 страницах очень поучительно прочитать и посмотреть. Будь то мега-дизайн для целой системы наведения в крупных строительных комплексах (выставочный центр, аэропорт), будь то в качестве ориентиров в клиниках и домах, будь то указатели в музейной зоне или просто знак входа в офис компании или медицинского учреждения, и, прежде всего, будь то вывески снаружи , будь то на улице или в парке, для любой области применения прототипа. это конкретные советы, предложения, примеры для подражания. Подписи к иллюстрациям варьируются от фактического описания до содержательных основных положений и доктрин, они ненавязчивы, но в то же время чрезвычайно информативны. Благодаря тому, что графический материал чрезвычайно неоднороден как по цвету, так и по сюжету, удалось создать дизайн, который великолепно справляется с этим и не допускает смешения разнообразия ни на одной странице. Вводная! --Wenke.net</p><h1>Издатель о книге</h1><p>Награжден премией iF communication award 2007.</p><h1>Об авторе и других участниках</h1><p>Андреас Юбеле — архитектор по специальности и профессор коммуникационного дизайна. Он прекрасно сочетает в себе обе дисциплины. Список его руководителей читается как «кто есть кто», а наградные грамоты заполняют стены. Тем не менее, в его обширную специализированную книгу сознательно включены не только его собственные работы, но и многочисленные примеры, представленные его конкурентами (и им самим).</p>',
      languages: {
        data: [
          {
            id: 3,
            attributes: {
              code: 'de',
              name: 'Немецкий',
              createdAt: '2023-04-18T14:58:57.961Z',
              updatedAt: '2023-04-18T14:58:57.961Z',
            },
          },
        ],
      },
      cover: {
        data: {
          id: 3,
          attributes: {
            name: 'Orientierungssysteme.png',
            alternativeText: null,
            caption: null,
            width: 700,
            height: 700,
            formats: {
              thumbnail: {
                name: 'thumbnail_Orientierungssysteme.png',
                hash: 'thumbnail_Orientierungssysteme_0dca4eb5f1',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 156,
                height: 156,
                size: 34.19,
                url: '/uploads/thumbnail_Orientierungssysteme_0dca4eb5f1.png',
              },
              small: {
                name: 'small_Orientierungssysteme.png',
                hash: 'small_Orientierungssysteme_0dca4eb5f1',
                ext: '.png',
                mime: 'image/png',
                path: null,
                width: 500,
                height: 500,
                size: 284.7,
                url: '/uploads/small_Orientierungssysteme_0dca4eb5f1.png',
              },
            },
            hash: 'Orientierungssysteme_0dca4eb5f1',
            ext: '.png',
            mime: 'image/png',
            size: 160.8,
            url: '/Orientierungssysteme.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2023-04-18T23:22:31.944Z',
            updatedAt: '2023-04-18T23:22:31.944Z',
          },
        },
      },
    },
  },
];

export const bookMocks = bookMocksRaw.map(convert);