// массив способов разбиения
[
  {
    splitId: int, // идентефикатор разбиения
    packageCount: int, //количество посылок
    sets: [ // разбиение внутри данной посылки
        {
            "id" : int, // ID сета
            "deliveryDate": string, // дата доставки данного разбиения
            "price": decimal,      
            "items" :
            [
                {
                    "id" : int,                   // ID товара
                    "quantity" : int,             // Количество
                    "price" : decimal,            // Цена одной единицы товара
                    "discount" : decimal,         // Скидка за одну единицу товара
                    "discountedPrice" : decimal,    // Цена одной единицы товара с учётом скидки
                                       
                    "availableStock" : int,       // Сколько в хорошей доступности
                    "totalStock" : int            // Сколько всего
                }  
            ]
        }
    ]
  }, 
  {
  //...
  }
]
