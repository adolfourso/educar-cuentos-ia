# 🛣️ Roadmap — educar-cuentos-ia

Este archivo define los próximos pasos sugeridos para mejorar y escalar el proyecto `educar-cuentos-ia`. Incluye mejoras técnicas, de experiencia de usuario y de integración con inteligencia artificial.

---

## ✅ Arquitectura y estructura

- [ ] Separar servicios de IA en `IAService` (OpenAI, Ollama, etc.)
- [ ] Modularizar backend NestJS (StoriesModule, UsersModule, PdfModule, etc.)
- [ ] Usar DTOs y validaciones con `class-validator`
- [ ] Agregar manejo de errores centralizado (HttpExceptionFilter)

---

## 🗂️ Persistencia y base de datos

- [ ] Guardar el historial de cuentos generados
- [ ] Asociar cuentos a usuarios (según roles)
- [ ] Guardar fecha, URLs fuente, modelo IA usado
- [ ] Implementar categorías educativas y etiquetas

---

## 👥 Autenticación y roles

- [ ] Implementar autenticación con JWT
- [ ] Controlar rutas por rol (docente, alumno, invitado)
- [ ] Permitir login opcional (email/password o modo visitante)

---

## 💻 Experiencia de usuario

- [ ] Agregar feedback visual (loading, errores, éxito)
- [ ] Previsualizar cuento antes de exportar
- [ ] Comparar cuento generado con textos fuente

---

## 🧪 Testing y calidad

- [ ] Agregar tests unitarios (Jest en NestJS)
- [ ] Tests E2E con Cypress o Playwright en Next.js
- [ ] Logging estructurado (Pino/Winston)
- [ ] Integrar observabilidad (Sentry, LogRocket)

---

## 🤖 Inteligencia artificial

- [ ] Elegir proveedor IA en tiempo real o vía `.env`
- [ ] Integrar Ollama con modelos locales (LLaMA, Mistral, etc.)
- [ ] Permitir resúmenes o mapa de ideas antes del cuento
- [ ] Soporte para múltiples idiomas (traducción automática)

---

## 🚀 DevOps y despliegue

- [ ] Separar entornos: dev, staging, prod
- [ ] Automatizar despliegues con GitHub Actions
- [ ] Subir a Railway, Render o VPS con Podman
- [ ] Generar imágenes optimizadas para producción

---

## 📚 Documentación y colaboración

- [ ] Crear archivo `CONTRIBUTING.md`
- [ ] Publicar demo pública (por ejemplo, con Vercel o Pages)
- [ ] Añadir soporte para exportar en EPUB (`epub-gen`)
- [ ] Mejorar documentación interna del código

---

**Este roadmap puede ser actualizado a medida que se avanza. ¡Contribuciones bienvenidas!**