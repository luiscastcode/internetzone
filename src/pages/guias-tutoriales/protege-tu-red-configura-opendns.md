---
layout: ../../layouts/LayoutBlog.astro
metatitle: "ᐅ Configura OpenDNS Y Protegete Del Contenido Inapropiado"
posttitle: "ᐅ Protege tu Red: Guía Paso a Paso para Configurar OpenDNS"
pubDate: 8-24-2024
slug: guias-tutoriales/protege-tu-red-configura-opendns/
autor: lcastcode
description: "La cantidad de amenazas en línea, desde malware hasta contenido inapropiado, hace que sea esencial proteger nuestra red doméstica."
categoria: Seguridad
excerpt: Configurar OpenDNS en tu router, herramienta indispensable para proteger tu hogar digital
image:
  src: ../../assets/img/pub/wifihack.jpeg
  alt: wifi steam
---


En la actualidad, la seguridad en internet es una prioridad para todos. La cantidad de amenazas en línea, desde malware hasta contenido inapropiado, hace que sea esencial proteger nuestra red doméstica. Una de las formas más efectivas de hacerlo es configurando OpenDNS en tu router Wi-Fi. 

OpenDNS no solo te ayuda a mantener tu red segura, sino que también ofrece beneficios adicionales como una navegación más rápida y estable. En este tutorial, te guiaré paso a paso para configurar OpenDNS en tu router y explicarte por qué es una herramienta indispensable para proteger tu hogar digital.

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1  bg-amber-700 border-0 rounded">     
</div>

## ¿Qué es OpenDNS y por qué es importante?

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1  bg-amber-700 border-0 rounded">     
</div>

Antes de sumergirnos en la configuración, es crucial entender qué es OpenDNS y por qué deberías considerarlo para tu red.

### Definición de OpenDNS

OpenDNS es un servicio de DNS (Domain Name System) que actúa como intermediario entre tu dispositivo y los sitios web que visitas. En lugar de que tu proveedor de servicios de internet (ISP) maneje las solicitudes de DNS, OpenDNS se encarga de estas, ofreciendo filtrado de contenido, bloqueo de sitios maliciosos y otras características de seguridad.

### Ventajas de usar OpenDNS

***Seguridad mejorada:*** OpenDNS ofrece protección contra sitios web maliciosos, phishing y otros tipos de amenazas en línea, ayudando a mantener segura tu red doméstica.

***Control parental:*** Puedes configurar filtros para bloquear contenido inapropiado, lo que es especialmente útil si tienes niños en casa.

***Velocidad y estabilidad:*** Al utilizar los servidores DNS de OpenDNS, a menudo puedes experimentar una mejora en la velocidad de navegación y en la estabilidad de tu conexión.

***Gratuito y fácil de configurar:*** OpenDNS ofrece un servicio gratuito que es fácil de configurar, incluso si no eres un experto en tecnología.

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 bg-amber-700 border-0 rounded">     
</div>
 
## Cómo configurar OpenDNS en tu router Wi-Fi

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 bg-amber-700 border-0 rounded">     
</div>

Ahora que sabes por qué OpenDNS es una herramienta poderosa, vamos a ver cómo puedes configurarlo en tu router Wi-Fi. Aunque los pasos pueden variar ligeramente dependiendo de la marca y modelo de tu router, la configuración básica sigue un patrón similar.

### Paso 1: Accede a la configuración de tu router

Para configurar OpenDNS, primero necesitas acceder a la página de configuración de tu router. 

***Encuentra la dirección IP de tu router:*** Esta dirección suele ser algo como 192.168.0.1 o 192.168.1.1. Puedes encontrarla en la parte posterior de tu router o en el manual de usuario.

***Ingresa la dirección IP en tu navegador:*** Abre tu navegador y escribe la dirección IP en la barra de direcciones, luego presiona Enter.

***Inicia sesión en tu router:*** Necesitarás un nombre de usuario y una contraseña para acceder a la configuración. Esta información también suele estar en el manual o en la parte posterior del router. Si nunca la has cambiado, el nombre de usuario y contraseña por defecto suelen ser algo como admin/admin.

Si no sabes como, ahi te dejo el enlace
<div class="flex justify-center items-center mx-auto mb-6">       
    <a href="/guias-tutoriales/cambiar-clave-wifi-fibex/"
        class="flex justify-center text-white mx-auto bg-gradient-to-r from-blue-400 via-indigo-700 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-xl px-8 py-4 text-center me-2 mt-2 w-full"
      >
    Cambiar clave router Wifi
    </a>       
  </div>

### Paso 2: Configura las direcciones DNS de OpenDNS

Una vez que estés dentro de la configuración de tu router, el siguiente paso es cambiar las direcciones DNS para que utilicen OpenDNS.

***Encuentra la sección de configuración de DNS:*** Esto puede estar en diferentes ubicaciones dependiendo del router, pero comúnmente se encuentra en secciones como "Configuración Avanzada", "Red" o "Internet".



***Introduce las direcciones de OpenDNS:*** Cambia las direcciones DNS por las que proporciona OpenDNS:

**DNS primario: 208.67.222.222**

**DNS secundario: 208.67.220.220**

<div class=" flex justify-center items-center mx-auto mb-4">
<img width="70%" src="../../assets/img/pub/open-dns-en-el-router.webp" alt="wifi steampunk">
</div>

***Guarda los cambios:*** Una vez que hayas introducido las nuevas direcciones, asegúrate de guardar los cambios. Algunos routers pueden requerir un reinicio para aplicar las nuevas configuraciones. 

### Paso 3: Verifica la configuración

Después de cambiar las configuraciones de DNS, es importante asegurarse de que todo esté funcionando correctamente.

***Visita la página de OpenDNS:*** Para verificar que estás usando OpenDNS correctamente, puedes visitar ***[opendns.com/welcome](https://welcome.opendns.com/ "Ir a la web de OpenDNS")***. Si ves un mensaje de confirmación, significa que todo está configurado correctamente.

***Prueba con dispositivos en tu red:*** Asegúrate de que todos los dispositivos conectados a tu red estén utilizando OpenDNS y no los DNS predeterminados de tu ISP.

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 bg-amber-700 border-0 rounded">     
</div>

## Configuraciones avanzadas y personalización en OpenDNS

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1   bg-amber-700 border-0 rounded">     
</div>

OpenDNS no solo proporciona un filtrado básico de contenido, sino que también te permite personalizar la experiencia según tus necesidades.

### Configuración de control parental

Crear una cuenta en OpenDNS: Para acceder a opciones de filtrado más avanzadas, deberás crear una cuenta gratuita en OpenDNS.

***Configura el filtrado de contenido:*** Una vez que hayas creado tu cuenta, puedes personalizar los niveles de filtrado. OpenDNS te permite elegir entre diferentes categorías de contenido para bloquear, como sitios de contenido para adultos, juegos de azar, redes sociales, etc.

***Reportes y estadísticas:*** OpenDNS también ofrece herramientas para ver reportes y estadísticas sobre la actividad en tu red. Esto puede ser útil para monitorear qué tipos de sitios están siendo visitados y ajustar los filtros en consecuencia.

### Configuración de excepciones y lista blanca

***Añadir excepciones:*** Si necesitas permitir el acceso a un sitio específico que ha sido bloqueado por OpenDNS, puedes añadirlo a una lista blanca.

***Lista negra personalizada:*** Además de las categorías predefinidas, también puedes bloquear manualmente sitios específicos que consideres peligrosos o inapropiados para tu red.

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1  bg-amber-700 border-0 rounded">     
</div>

## Consejos adicionales para mantener segura tu red

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1  bg-amber-700 border-0 rounded">     
</div>

### 1- Combina OpenDNS con un antivirus

Para una mayor protección, considera usar OpenDNS junto con un buen software antivirus. Mientras OpenDNS filtra el tráfico web, un antivirus puede proteger tu dispositivo de malware y otras amenazas que puedan colarse a través de otros métodos.

### 2- Mantén tu router actualizado

Asegúrate de que el firmware de tu router esté siempre actualizado. Las actualizaciones de firmware a menudo incluyen mejoras de seguridad que pueden protegerte contra vulnerabilidades nuevas.

### 3- Usa contraseñas seguras

Además de configurar OpenDNS, es fundamental que protejas tu red Wi-Fi con una contraseña fuerte. Evita contraseñas obvias como "123456" o "password" y opta por combinaciones complejas de letras, números y símbolos.

<div class="flex justify-center items-center mx-auto mb-6">       
    <a href="/guias-tutoriales/red-wifi-no-segura/"
        class="flex justify-center text-white mx-auto bg-gradient-to-r from-blue-400 via-indigo-700 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-lg text-xl px-8 py-4 text-center me-2 mt-2 w-full"
      >
    Por qué tu red sale como: "Red Wifi no segura"
    </a>       
  </div>

## Otros servidores DNS gratuitos

OpenDNS es uno de los servicios de DNS gratuitos más populares pero también puedes utilizar otras alternativas como las de esta lista:

***Cloudflare: (1.1.1.1 y 1.0.0.1)*** es un servicio que ofrece un gran rendimiento y buena privacidad, aunque no ofrece muchos extras. De las mejores cosas que tenemos en este servisor es que nunca guardan nuestra dirección IP.

***Yandex.DNS: (77.88.8.8 y 77.88.8.1)*** es un DNS realmente interesante con muchas alternativas como DNS Safe 77.88.8.88 y 77.88.8.2 para salvarnos de webs peligrosas o DNS Family 77.88.8.7 y 77.88.8.3 para protegernos de contenido explícito y sexual.

***Google Public DNS: (8.8.8.8 y 8.8.4.4)*** especialmente diseñado para aquellos que tiene muy poca experiencia, por eso tiene una cantidad de explicaciones en su web muy amplia, para ayudar a cualqueira que lo necesite. Su mayor bemteaja: borra nuestra IP transcurridas unas 48 horas de sus servidores.

***Norton ConnectSafe: (199.85.126.10 y 199.85.127.10)*** servidores gratuitos de Norton con nivel de seguridad realmente elevado ya que toma como referencia los datos del propio programa.

***Quad9: (9.9.9.9 y 149.112.112.112)*** nos protegerá de páginas maliciosas y al mismo tiempo logra unas velocidades bastante aceptables.

***Comodo Secure DNS: (8.26.56.26 y 8.20.247.20)*** DNS gratuito que se basa en protegernos de páginas maliciosas, de spyware y de malware.

***Public DNS Server List:*** aquí encontraremos un base de datos con DNSW públicos de todos los países del mundo. La cantidad de alternativas lo hacen especial.

## Conclusión
Configurar OpenDNS en tu router Wi-Fi es un paso crucial para asegurar la seguridad de tu red doméstica. No solo te protege a ti y a tu familia de amenazas en línea, sino que también te ofrece herramientas para controlar el tipo de contenido al que se accede desde tu red. 

Con la ayuda de este tutorial, puedes configurar OpenDNS de manera fácil y rápida, garantizando una experiencia en línea más segura y controlada para todos los miembros de tu hogar.

Recuerda que la seguridad en internet es un proceso continuo. Además de configurar OpenDNS, sigue explorando y aplicando otras medidas de seguridad para mantener tu red protegida en todo momento.

 <h2 class="text-center mt-6 border-b-8 border-amber-500 mb-2">
      No te puedes perder...
    </h2>
<div class="grid gird-col md:grid-cols-2">
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
  href="/guias-tutoriales/9-mejores-routers-wifi6-para-comprar-2024/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Top 9 Mejores Routers Wifi 6
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
 Selección de mejores router wifi-6 2024
  </p>
</a>
 <a
  href="/proveedor/airtek/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Proveedor de Fibra Airtek
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
   Ficha técnica Airtek
  </p>
</a>
 <a
  href="/proveedor/galanet/"
  rel=""
  target=""
  class="block max-w-xl p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
   Proveedor de Fibra Galanet
    <span>&rarr;</span>
  </h5>
  <p class="text-xs md:text-lg text-gray-700">
   Ficha técnica Galanet
  </p>
</a>


</div>
