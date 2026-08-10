# SlabVault v2 — catálogo de cartas gradeadas

Frontend estático en **HTML + CSS + JavaScript**, sin framework ni backend. Se puede publicar directamente en GitHub Pages.

## Qué incluye

- Visor 3D/360° con fotografías reales frontal y trasera.
- Arrastre con ratón o dedo, inercia, controles por flechas y teclado.
- Auto-rotación opcional y respeto a `prefers-reduced-motion`.
- Reflejo dinámico sobre la slab y canto 3D simulado.
- Vista ampliada de la fotografía.
- Catálogo con buscador, filtros, favoritos y ordenación.
- Diseño responsive para escritorio, tablet y móvil.
- Modales de compra/oferta preparados para conectar posteriormente con WhatsApp, email o checkout.
- Cero dependencias JavaScript.

## Probar en local

Puedes abrir `index.html` directamente. Para una prueba idéntica a GitHub Pages:

```bash
python -m http.server 8000
```

y abre `http://localhost:8000`.

## Publicar en GitHub Pages

1. Sube todo el contenido de esta carpeta a un repositorio.
2. En GitHub: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Rama `main`, carpeta `/ (root)`.

## Añadir una nueva carta

En `app.js`, duplica un objeto dentro de `cardData` y cambia:

- `id`
- `name`
- `set`
- `number`
- `year`
- `grader`
- `grade`
- `cert`
- `price`
- `front`
- `back`

Copia las dos fotos a `assets/`. El catálogo está preparado para crecer sin tener que crear una página HTML por carta.

## Siguiente fase recomendada

Cuando haya varias slabs reales, conviene convertir la ficha principal en un componente dinámico: al pulsar cualquier tarjeta del catálogo, cargar automáticamente sus datos, frontal y trasera en el expositor. También se puede conectar el botón de compra a WhatsApp, Stripe, Shopify o un formulario propio.
