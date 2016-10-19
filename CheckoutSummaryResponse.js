{
    "sets":                   //Массив наборов товаров при разном количестве отправлений
    [
        {
            "id" : int,       //ID сета
            "items" :
            [
                {
                    "id" : int,               //ID товара
                    "quantity" : int,             //Количество
                    "price" : decimal,            //Цена
                    "discountPrice" : int,        //Цена после маркетинга
                    "freeRest" : int,             //Сколько в хорошей доступности
                    "totalRest" : int             //Сколько всего
                }  
            ]
        }
    ],
    "deliveryTypes":
    [
        {
            "id": int,                            //ID Типа доставки (курьерская \ самовывоз \ почта россии)
            "isSelected" : bool,              //Признак выбран ли тип доставки
            "minPrice" : decimal,              //Минимальная по больнице минимальная стоимость доставки относительно типа
            "maxPrice" : decimal,                 //Максимальная стоимость доставки относительно типа
            "deliveryVariants":
            [
                {
                    "id" : int,               //ID Способа доставки
                    "isSelected" : bool,      //Признак выбран ли конкретный способ доставки
                    "price" : decimal,            //Стоимость доставки
                    "sets":
                    [
                        {
                            "id" : int,       //ID сета
                            "price" : decimal,    //Цена за весь сет
                            "date" : datetime     //Дата доставки
                        }
                    ],
                    "paymentTypes":           //Типы оплаты
                    [
                        {
                            "id" : int,           //ID типа оплаты
                            "isSelected" : bool,  //Признак выбран ли тип
                            "paymentVariants" :
                            [
                                {
                                    "id" : int,           //ID способа оплаты
                                    "isSelected" : bool   //Признак выбран ли способ
                                }
                            ]
                        }
                    ],
                    "timeSlots":                      //Тайм слоты на способ доставки
                    [
                        {
                            "id" : int,               //ID слота
                            "isSelected" : bool,      //Признак выбран ли таймслот
                            "dateFrom" : datetime,        //От
                            "dateTo" : datetime,       //До
                            "timeLimit" : time,       //Cut off time
                        }
                    ]
                }
            ]
        }
    ],
    "marketingActions" :                          //Сработавшие маркетинговые акции
    [
        {
            "id" : int, //ID акции
            "discountValue" : decimal,                //Сколько скинули
            "type" : ("delivery" | "items"),      //Тип скидки (на доставку, на товары)
        }
    ]
}
