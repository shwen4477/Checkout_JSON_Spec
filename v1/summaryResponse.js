{
    "splits" :                   //Массив наборов товаров при разном количестве отправлений
    [
        {
            "id" : int,
            "deliveryDate": string,
            "price": decimal,       //ID сета
            "items" :
            [
                {
                    "id" : int,                   //ID товара
                    "quantity" : int,             //Количество
                    "price" : decimal,            // Цена одной единицы товара
                    "discount" : decimal,         // Скидка за одну единицу товара
                    "discountPrice" : decimal,    // Цена одной единицы товара с учётом скидки
                    
                    "totalPrice": decimal,        // Суммарная цена за всё количество
                    "totalDiscount": decimal,     // Суммарная скидка за всё количество
                    "totalDiscountPrice" : int,   // Суммарная цена со скидкой, если таковая имеется
                    
                    "availableStock" : int,       //Сколько в хорошей доступности
                    "totalStock" : int            //Сколько всего
                }  
            ]
        }
    ],
    "deliveryTypes" :
    [
        {
            "id": int,
            "name": string,                         //ID Типа доставки (курьерская \ самовывоз \ почта россии)
            "isSelected" : bool,              //Признак выбран ли тип доставки
            "minPrice" : decimal,              //Минимальная по больнице минимальная стоимость доставки относительно типа
            "maxPrice" : decimal,                 //Максимальная стоимость доставки относительно типа
            "deliveryVariants":
            [
                {
                    "id" : int,               //ID Способа доставки
                    "isSelected" : bool,      //Признак выбран ли конкретный способ доставки
                    "price" : decimal,        //Стоимость доставки
                    "details":
                    {
                        "name" : string,
                        "address": string,      //Адрес в случае ПВЗ
                        "metro": string,        //Ближайшая станция метро в случае ПВЗ
                        "schedule": string      //Расписание работы (а-ля пн-пт с 00:01 до 00:02 etc)
                    } 

                }
            ],
     ],
     "paymentTypes" :                           //Типы оплаты
     [
         {
             "id" : int,                        //ID типа оплаты
             "name": string,                    //Название типа оплаты
             "isSelected" : bool,               //Признак выбран ли тип
             "paymentVariants" :
             [
                 {
                     "id" : int,                            //ID способа оплаты                       
                     "isSelected" : bool,               //Признак выбран ли способ
                     "type" : ("online" | "offline"),      //Признак онлайн\оффлайн для группировки
                     "details":
                     {
                         "name": string,  //Название способа оплаты
                         "icon": string, //Ссылка на иконочку способа оплаты
                         "description" : string, //Описашка для способа оплаты
                         "hint" : string    //Юзерхинт для способа (есть кейсы, когда его нужно светить юзеру)
                     } 

                 }
             ]
          }
      ],
      "timeSlots" :                      //Тайм слоты на способ доставки
      [
          {
              "id" : guid,               //ID слота
              "isSelected" : bool,      //Признак выбран ли таймслот
              "dateFrom" : datetime,        //От
              "dateTo" : datetime,       //До
              "timeLimit" : time,       //Cut off time
           }
       ],
       "marketingActions" :                          //Сработавшие маркетинговые акции
       [
           {
               "id" : int,                              //ID акции
               "discountValue" : decimal,                //Сколько скинули
               "type" : ("delivery" | "items"),      //Тип маркетинговой акции (на доставку, на товары)
           }
       ],      
       "summary":
        {
          "weight": double, //Вес
          "itemsPrice": double, //Цена за товары
          "totalPrice" : double, //Цена за весь заказ
          "availablePoints": decimal, //Сколько баллов можно потратить
          "availableAccount" : decimal     //Сколько денег с ПС можно потратить
        }
}
