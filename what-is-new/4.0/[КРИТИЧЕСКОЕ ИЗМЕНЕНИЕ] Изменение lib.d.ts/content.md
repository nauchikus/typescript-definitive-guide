## \[КРИТИЧЕСКОЕ ИЗМЕНЕНИЕ\] Изменение lib.d.ts

Изменениям в основной библиотеке `lib.d.ts` подверглись типы описывающие _dom api_. Наиболее значимое изменение удаление `document.origin` которое поддерживалось исключительно для старых версий _IE_ и _Safari_. Взамен _MDN_ рекомендует использовать `self.origin`.  
