# Patitas Unidas 🐾

> *"Encuentra a tu mejor amigo"*

Prototipo interactivo de una app que conecta personas que quieren adoptar con refugios y rescatistas. Nacida de la idea de que **adoptar no debería ser un trámite burocrático, sino el inicio de una historia**.

---

## El recorrido del adoptante

```
Bienvenida → Buscar → Enamorarse → Solicitar → Seguimiento → ¡Llegó a casa! → Bitácora
```

| Pantalla | Qué pasa aquí |
|----------|---------------|
| `index.html` | Eliges: **"Quiero adoptar"** o **"Soy refugio/rescatista"** |
| `buscar-mascotas.html` | Exploras perritos y gatitos con filtros por zona, raza, edad |
| `mascota-perfil.html` | Ves su historia, fotos, personalidad, compatibilidad (niños, otros perros, gatos) |
| `solicitud-adopcion.html` | Cuentas quién eres: tu casa, experiencia, por qué esa mascota |
| `detalle-adopcion.html` | Mapa del refugio, estado de tu solicitud, próximos pasos |
| `seguimiento-adopcion.html` | **Timeline visual** (visita → contrato → entrega) + **chat directo con el refugio** |
| `confirmar-adopcion.html` | ¡Aprobada! Últimos detalles antes del gran día |
| `mi-mascota.html` | Tu bitácora: fotos, anécdotas, hitos (primera caminata, primer "te quiero") |
| `mis-solicitudes.html` | Bandeja con todas tus solicitudes y su estado |
| `perfil.html` / `configuracion.html` | Tus datos, notificaciones, accesibilidad, guía de adopción responsable |

---

## Detrás de escena (lo que no se ve pero se siente)

**Accesibilidad real (WCAG 2.2 AA)**
- Contraste que pasa auditoría, no solo "se ve bien"
- Navegas entero con teclado (Tab, Enter, Esc) — probado con lector de pantalla
- Áreas táctiles de 44px mínimo (dedo gordo incluido)
- `prefers-reduced-motion` respetado: si el usuario pide menos movimiento, la app obedece
- Skip links, landmarks, live regions para anuncios dinámicos

**Diseño sistemático**
- Paleta propia: verde confianza, naranja hogar, azul seguimiento
- Componentes que se repiten: 4 tipos de botón, cards, chips, inputs, switches, bottom nav
- Tipografía con personalidad: Fredoka (títulos) + Work Sans (lectura)
- Phone frame en desktop, full-screen en móvil — sin breakpoint roto

**Interacciones que importan**
- Toggle contraseña (ojo que abre/cierra)
- Validación inline con foco automático al primer error
- Chat demo funcional (escribe, envía, ve burbujas propias/ajenas)
- Likes en momentos (corazón que late)
- Cancelar solicitud con animación + anuncio a screen readers
- Todo en **vanilla JS** — cero dependencias, cero build, abre y corre

---

## Equipo

| Rol | Nombre | Qué hizo |
|-----|--------|----------|
| **Product & UX** | *Tu nombre* | Definición del flujo, arquitectura de información, criterios de adopción responsable |
| **UI & Design System** | *Tu nombre* | Paleta, tipografía, componentes, estados, dark mode (preparado), iconografía |
| **Frontend & Accesibilidad** | *Tu nombre* | HTML semántico, CSS custom properties, JS vanilla, testing WCAG 2.2 AA |
| **Content & Microcopy** | *Tu nombre* | Textos con voz humana, mensajes de error que ayudan, empty states que abrazan |
| **QA & Testing** | *Tu nombre* | Navegación teclado, lectores de pantalla (NVDA/VoiceOver), móvil, desktop, edge cases |

> ¿Equipo de uno? Pon tu nombre en todas. ¿Equipo real? Reemplaza cada "*Tu nombre*" y presúmanlo.

---

## Cómo probarlo en 10 segundos

```bash
# Opción 1: Doble clic
abre index.html en tu navegador

# Opción 2: Servidor local (recomendado para fetch/API futuras)
npx serve .
# o
python -m http.server 8080
```

Navega con **mouse, teclado o lector de pantalla**. Todo funciona.

---

## Próximos pasos (cuando esto deje de ser prototipo)

- [ ] Backend real (Node/Python/Go + DB)
- [ ] Auth con JWT + refresh tokens
- [ ] Push notifications (Service Workers)
- [ ] Geolocalización real + Mapbox/Leaflet
- [ ] Panel de refugio (gestión mascotas, solicitudes, visitas)
- [ ] Tests E2E (Playwright) + CI/CD
- [ ] Deploy (Vercel/Netlify/Cloudflare Pages)

---

**Hecho con paciencia, café y la convicción de que cada adopción cambia dos vidas.** 🐶❤️🐱