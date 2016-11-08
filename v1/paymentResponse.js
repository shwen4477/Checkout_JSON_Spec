[
         {
                  "id" : int,                           // ID способа оплаты                       
                  "type" : ("online" | "offline"),      // Признак онлайн\оффлайн для группировки
                  "details": {
                      "name": string,  // Название способа оплаты
                      "icon": string,  // Ссылка на иконочку способа оплаты
                      "description" : string, // Описашка для способа оплаты
                      "hint" : string    // Юзерхинт для способа (есть кейсы, когда его нужно светить юзеру)
                  },
                  "points": {
		    "total": int,
		    "available": int
                  },
                  "balance": {
		    "total": int,
		    "available": int
                  }
         },
         ...
]
