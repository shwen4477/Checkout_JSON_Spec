[
        {
            "id": int,
            "name": string,                   
            "minPrice" : decimal,              // Минимальная по больнице минимальная стоимость доставки относительно типа
            "maxPrice" : decimal,              // Максимальная стоимость доставки относительно типа
            "minDate": date,                   // Минимальная дата доставки в формате ISO-ХХХХ
            "useCollect": boolean,             // Следует ли дополнительно собирать адрес доставки    
            "deliveryVariants":
            [
                {
                    "id" : int,               //ID Способа доставки
                    "price" : decimal,        //Стоимость доставки
                    "deliveryDate": isoDate,  // Дата доставки    
                    "details": 
                    {
                        "name" : string,
                        "address": string,      //Адрес в случае ПВЗ
                        "metro": string,        //Ближайшая станция метро в случае ПВЗ
                        "schedule": string,      //Расписание работы (а-ля пн-пт с 00:01 до 00:02 etc)
                        "storageLife": string    // Срок хранения заказа    
                    } 

                }
            ],
        }
]
