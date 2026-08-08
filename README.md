# Patitas Unidas — App de Adopción de Mascotas

Prototipo interactivo de alta fidelidad para una plataforma de adopción responsable de mascotas.

## Flujo principal (Adoptante)

```
index.html → login/registro → buscar-mascotas.html → mascota-perfil.html
    → solicitud-adopcion.html → detalle-adopcion.html → seguimiento-adopcion.html
        → mi-mascota.html
```

## Pantallas

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Bienvenida y elección de rol (Adoptante / Refugio) |
| `login.html` / `registro.html` | Autenticación |
| `buscar-mascotas.html` | Listado con buscador y filtros |
| `mascota-perfil.html` | Detalle de mascota (fotos, datos, compatibilidad) |
| `solicitud-adopcion.html` | Formulario de adopción (vivienda, experiencia, motivos) |
| `detalle-adopcion.html` | Seguimiento de solicitud + mapa del refugio |
| `seguimiento-adopcion.html` | **Timeline de pasos**, chat con refugio, contacto |
| `confirmar-adopcion.html` | Confirmación final + chat |
| `mi-mascota.html` | Bitácora de momentos (fotos, recuerdos) |
| `mis-solicitudes.html` | Bandeja de solicitudes con estados |
| `perfil.html` / `configuracion.html` | Cuenta y ajustes (accesibilidad, notificaciones) |
| `mapa-del-sitio.html` | Vista general de navegación |

## Tech Stack

- **HTML5 semántico** + **CSS3** (Custom Properties, Grid/Flexbox)
- **Vanilla JS** (interacciones: toggle password, validación accesible, chat demo, likes, anuncios ARIA)
- **Fuentes**: Fredoka (display) + Work Sans (body) vía Google Fonts
- **Iconografía**: SVG inline

## Accesibilidad (WCAG 2.2 AA)

- Contraste ≥ 4.5:1 en textos
- Navegación 100% por teclado (focus visible, skip links)
- Áreas táctiles ≥ 44px
- ARIA labels, roles, live regions
- `prefers-reduced-motion` respetado
- Semántica HTML correcta (landmarks, headings, forms)

## Diseño

- Paleta institucional: verde bosque (#2E7D32), naranja cálido (#F57C00), azul cielo (#2196F3)
- Componentes reutilizables: botones (4 variantes), cards, chips, inputs, bottom nav, switches
- Responsive: phone frame en desktop, full-screen en móvil ≤ 460px

## Cómo probar

Abrir `index.html` en navegador. Navegación funcional entre todas las pantallas.