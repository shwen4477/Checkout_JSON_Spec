{
     "sets":                                             // Массив наборов товаров
    [
        {
            "id" : int,                                  // Идентификатор набора
            "availability" : enum (itstock|takeorder)    // Доступность товаров (на складе|под заказ)
            "date" :
            {
                "deliveryDate" : datetime,               // Дата доставки
                "type" : enum (exact|notexact)           // Тип даты (точная или не точная)
            }                             
            "items" :                                    // Товары
            [
                {
                    "id" : int,                          // Идентификатор товара
                    "quantity" : int,                    // Количество экземпляров
                    "price" : decimal,                   // Цена одного экземпляра
                    "discountPrice" : decimal,           // Цена одного экземпляра после применения маркетинга
                    "totalPrice" : decimal,              // Цена всех экземпляров
                    "totalDiscountPrice" : decimal,      // Цена всех экземпляров после применения маркетинга
                    "discountValue" : decimal,           // Величина скидки одного экземпляра
                    "totalDiscountValue" : decimal,      // Величина скидки всех экземпляров   
                    "freeRest" : int,                    // Количество экземпляров с хорошей доступностью
                    "totalRest" : int                    // Количество экземпляров доступных для заказа
                } 
            ]
        }
    ],
    "deliveryPrice" : decimal,                           // Цена доставки
    "deliveryDiscountPrice" : decimal,                     // Цена доставки после применения маркетинга
    "total" :
    {
        "price" : decimal,                               // Цена всего заказа
        "discountPrice" : decimal                        // Цена всего заказа после применения маркетинга
    },
    "marketingActions" :                                 // Список сработавших маркетинговых акций
    {
        {
            "id" : int,                                    // Идентификатор
            "name" : string,                           // Название
            "discountValue" : decimal,                     // Величина скидки
            "type" : enum (items|delivery|payment|address) // Тип (товары|доставка|оплата|адрес)
        }
    }
}
