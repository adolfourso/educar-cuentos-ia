# 📚 Roadmap - Generador de Cuentos Educativos

Fecha de inicio: 2025-04-28

Este roadmap organiza las funcionalidades a implementar y mejoras sugeridas para la aplicación. Cada tarea está clasificada por prioridad y puede adaptarse según feedback o necesidades.

---

## ✅ Mínimo producto viable (ya implementado)

- [x] Generación de cuentos educativos desde dos URLs de educ.ar
- [x] Scraping de contenidos educativos
- [x] Integración con modelo IA Mistral vía Ollama
- [x] Interfaz web en Next.js
- [x] Backend en NestJS
- [x] Base de datos PostgreSQL en Podman

---

## 🟡 Etapa 1 - Mejoras básicas

- [ ] Exportar cuento generado a PDF
  - [ ] Endpoint `/stories/pdf` que genera y sirve PDF
  - [ ] Botón "📄 Descargar como PDF" en frontend

- [ ] Historial de cuentos generados
  - [ ] Crear tabla `stories` en la base de datos
  - [ ] Guardar título, contenido, urls, fecha
  - [ ] Mostrar historial debajo del generador

- [ ] Validación de URLs de educ.ar
  - [ ] Validar formato de URL
  - [ ] Chequear si es alcanzable
  - [ ] Mostrar error útil si falla

---

## 🟢 Etapa 2 - Interacción y personalización

- [ ] Sistema de roles: Docente, Alumno, Invitado
  - [ ] Selección manual de rol desde frontend
  - [ ] Ajustar prompt según rol

- [ ] Estilos de cuento
  - [ ] Agregar opción: Histórico / Lúdico / Narrativo / Informativo
  - [ ] Ajustar prompt del modelo en base al estilo

- [ ] Continuar cuento (modo Chat)
  - [ ] Guardar historia como contexto
  - [ ] Permitir enviar nuevo input para continuar

---

## 🔄 Extensión IA - Soporte para OpenAI (Etapa 2)

- [ ] Permitir elegir motor de IA desde el frontend:
  - [ ] `ollama` (por defecto)
  - [ ] `openai`
- [ ] Agregar variable `USE_OPENAI=true` en `.env`
- [ ] Agregar variables necesarias:
  ```env
  OPENAI_API_KEY=sk-xxxxx
  OPENAI_MODEL=gpt-4-turbo
  OPENAI_BASE_URL=https://api.openai.com/v1/chat/completions
  ```
- [ ] En backend, adaptar servicio para elegir el proveedor dinámicamente
- [ ] Mostrar en el historial cuál fue el modelo utilizado

---

## 🔵 Etapa 3 - Optimización y despliegue

- [ ] `docker-compose.yml` con servicios:
  - [ ] PostgreSQL
  - [ ] Backend (NestJS)
  - [ ] Frontend (Next.js)
  - [ ] Ollama (si posible)

- [ ] Subida del proyecto a GitHub (repos separados o monorepo)
- [ ] Deploy automático con GitHub Actions o `vercel.json`

---

## 🧪 Etapa 4 - Sugerencias avanzadas (a futuro)

- [ ] Clasificación automática del cuento (por época, tema, nivel)
- [ ] Integración con IA generativa para ilustraciones (via DALL·E o Stable Diffusion)
- [ ] Exportación a EPUB
- [ ] Accesibilidad: lectura con voz (TTS)