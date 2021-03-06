{
	"areaId" : int,  //Идентификатор населенного пункт
	"items" : 						//Товары
      	[
		{
			"id" : int, 				//Идентификатор товара
			"quantity" : int 			//Кол-во
	     	}
      	],
    	"deliveryTypeId" : int,  		//Селектор по типу доставки (возвращаем только этот тип)
	"deliveryVariantId" : int,  	//Селектор по способу доставки (возвращаем только этот способ)
	"paymentTypeId" : int,  		//Селектор по типу оплаты (возвращаем только этот тип)
    	"paymentVariantId" : int, 		//Селектор по способу оплаты (возвращаем только этот способ)
    	"timeSlotId" : int, 			//Селектор по тайм слоту (возвращаем только этот таймслот)
    	"timeSlotDays" : int, 			//Селектор по количеству дней
    	"useSplit" : bool, 				//Флаг, использовать т.н. "сплитование" или нет
    	"option" : ( "cheap" | "fast"), //Опциональный параметр предвыбора способа доставки (cheap - самый дешевый, fast - самый быстрый)
	"payment"
		    {
			    "usedPoints": decimal,    //Количество использованных баллов для оплаты заказа
			    "usedUserAccount" : decimal   //Количество использованных средств с ПС для оплаты заказа
		    }
}
