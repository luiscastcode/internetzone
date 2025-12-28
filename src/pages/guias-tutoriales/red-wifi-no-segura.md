---
layout: ../../layouts/LayoutBlog.astro
posttitle: "ᐅ Solucionar el Mensaje Mensaje:Red Wifi No Es Segura"
metatitle: "¿Por qué me sale que mi red wifi no es segura? Solucionado"
pubDate: 8-9-2024
slug: guias-tutoriales/red-wifi-no-segura/ 
autor: lcastcode
description: "Solución al mensaje que a veces sale en windows 10 y que no deja conectar al WIFI debido a una mala configuración del router"
categoria: Seguridad
excerpt: Solución al mensaje que a veces sale en windows y que no deja conectar al WIFI.
image:
  src: ../../assets/img/pub/hacker1.webp
  alt: wifi hack
---

Si alguna vez te ha saltado la alerta de que tu red WiFi no es segura, no te preocupes, no eres el único. Este mensaje suele aparecer cuando tu red está utilizando un protocolo de seguridad que ya no se considera suficientemente robusto. Vamos a desglosar qué significa todo esto y cómo puedes mejorar la seguridad de tu WiFi.

<div class=" flex justify-center items-center mx-auto mb-4">
<img width="70%" src="../../assets/img/pub/hacker1.webp" alt="hacker">
</div>

## Entendiendo la encriptación: WEP, WPA, WPA2, TKIP y AES

Primero, hablemos de los distintos protocolos de seguridad que puedes encontrar en las redes WiFi. La seguridad de tu red depende en gran medida del tipo de encriptación que uses. Aquí es donde entran en juego términos como WEP, WPA, WPA2, TKIP y AES.

1. **1- WEP (Wired Equivalent Privacy):** Este es uno de los primeros protocolos de seguridad para redes WiFi, pero hoy en día está completamente obsoleto. Es extremadamente vulnerable y puede ser hackeado en cuestión de minutos. Si tu red está usando WEP, el mensaje de "red no segura" tiene toda la razón de aparecer, ya que este protocolo no ofrece prácticamente ninguna protección​.
2. **2- WPA (Wi-Fi Protected Access):** WPA fue el sucesor de WEP y fue introducido como una solución temporal mientras se desarrollaba WPA2. Aunque es más seguro que WEP, también tiene vulnerabilidades conocidas que pueden ser explotadas por atacantes​.
3. **3- WPA2:** Este es el estándar de seguridad más común hoy en día. Utiliza dos tipos de encriptación: TKIP (Temporal Key Integrity Protocol) y AES (Advanced Encryption Standard). WPA2-AES es mucho más seguro que WPA2-TKIP, por lo que es recomendable usar AES siempre que sea posible​.


<div class="grid grid-col md:grid-cols-2">
  <a
  href="/proveedor/airtek/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Airtek
    <span>&rarr;</span>
  </h5>
     <p class="text-xs md:text-lg text-gray-700">
  El mejor pveedor de internet de Venezuela
  </p>
</a>
 <a
  href="/internet-en/caracas/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
 Internet en Caracas
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
  Compañias de internet en Caracas
  </p>
</a>
 <a
  href="/internet-en/valencia/"
  rel=""
  target=" "
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
     Internet en Valencia
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
  Compañias de internet en Valencia
  </p>
</a>
 <a
  href="/internet-en/maracaibo/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Internet en Maracaibo
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
   Compañias de internet en Maracaibo
  </p>
</a>

</div>

## TKIP vs. AES: ¿Cuál deberías usar?

Ahora que sabemos que WPA2 es el estándar que deberías estar usando, surge la pregunta: ¿TKIP, AES o TKIP&AES?

**TKIP** fue diseñado como una solución temporal para mejorar la seguridad de WPA sin necesidad de cambiar el hardware existente. Sin embargo, a día de hoy, TKIP es considerado inseguro y está obsoleto. De hecho, muchas redes modernas ni siquiera te permitirán conectarte si intentas usar TKIP.

**AES**, por otro lado, es un estándar de encriptación mucho más seguro y es el que deberías usar en tu red WiFi. Es más resistente a los ataques y ofrece una mejor protección para tus datos. Si tu router y dispositivos soportan WPA2-AES, debes optar por esta configuración.

**TKIP&AES**, combina ambos protocolos pero windows también puede detectar la red como insegura con esta combinación de encriptación.

## ¿Por qué mi red WiFi no es segura?

La mayoría de las veces, este mensaje aparece porque tu red está utilizando WEP, WPA o WPA2 con TKIP. Estos métodos de encriptación son vulnerables y, por lo tanto, no se consideran seguros en la actualidad. La solución es actualizar la configuración de tu router a **WPA2 con AES**. Si tu router es antiguo y no soporta AES, puede ser hora de considerar actualizar a un modelo más reciente que ofrezca mejor seguridad y rendimiento.

## Cómo cambiar la configuración de seguridad de tu red WiFi

Si quieres asegurarte de que tu red es lo más segura posible, sigue estos pasos:

**1-** Accede a la configuración de tu router:

<div class="flex mx-auto my-6">
  <a
  href="/guias-tutoriales/cambiar-clave-wifi-fibex/"
  class="flex justify-center mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-2xl px-8 py-4 text-center me-2 mb-2 w-full"
  >
    ¿Cómo cambiar la contraseña de tu router?
  </a>
</div>

**2-** Busca la sección de seguridad inalámbrica: Aquí deberías ver las opciones para cambiar entre WEP, WPA, WPA2, y posiblemente WPA3 si tienes un router más nuevo.

**3-** Selecciona WPA2 y AES: Asegúrate de que estás usando WPA2 con AES. Si ves que tu router está configurado para usar TKIP, cámbialo a AES.

**4-** Guarda los cambios: Una vez hecho esto, todos tus dispositivos se desconectarán de la red y tendrás que volver a conectarlos utilizando la nueva configuración de seguridad.

## Conclusión: AES es la mejor opción de seguridad

El mensaje de "red WiFi no segura" es un recordatorio de que la tecnología avanza y lo que antes era seguro, hoy ya no lo es. Asegúrate de que tu red está usando WPA2 con encriptación AES para proteger tus datos y evitar que otros puedan acceder a tu red sin tu permiso. Recuerda, la seguridad de tu WiFi no es algo en lo que debas escatimar.

  <h2 class="text-center mt-6 border-b-8 border-amber-500 mb-2">
      No te puedes perder...
    </h2>
    <div class="grid grid-col md:grid-cols-2">
  <a
  href="/guias-tutoriales/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Guias Tutoriales
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
    Aprende a configurar tu wifi y mas..
  </p>
</a>
 <a
  href="/router-wifi/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Routers Wifi 
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
  Los mejores router con mejores seguridad...
  </p>
</a>
 <a
  href="/proveedor/vnet/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Proveedor de Fibra Vnet
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
   Ficha técnica Vnet
  </p>
</a>
 <a
  href="/proveedor/thundernet/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Proveedor de Fibra Thundernet
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
   Ficha técnica Thundernet
  </p>
</a>


</div>
