# 🧠 Roadmap Extendido — educar-cuentos-ia

Este roadmap incorpora las buenas prácticas clave para programadores que utilizan herramientas de inteligencia artificial para acelerar el desarrollo. Está enfocado en elevar la calidad, seguridad y mantenibilidad del proyecto.

---

## 🧾 Etapa 1 - Control de versiones y calidad de código

- [ ] Crear ramas por feature antes de aplicar generación asistida por IA
- [ ] Configurar `husky` + `lint-staged` para validar antes de cada commit
- [ ] Usar mensajes de commit claros y estructurados (Convencional Commits)
- [ ] Añadir `gitmoji` opcional para mejorar lectura del historial

---

## 🧹 Etapa 2 - Linters y formaters

- [ ] Integrar `ESLint` en frontend y backend (Next.js y NestJS)
- [ ] Integrar `Prettier` con reglas coherentes para TypeScript
- [ ] Automatizar con `lint-staged` y `husky`

---

## 📚 Etapa 3 - Documentación inteligente

- [ ] Integrar `Swagger` (OpenAPI) para documentar la API de NestJS
- [ ] Exportar colección de pruebas con `Postman`
- [ ] Documentación interna viva en Markdown o herramienta tipo `Obsidian`/`Notion`

---

## 🧪 Etapa 4 - Testing automatizado

- [x] Agregar `Jest` para backend
- [x] Agregar `Playwright` o `Cypress` para frontend
- [ ] Automatizar tests con CI (GitHub Actions)

---

## ☁️ Etapa 5 - Despliegue y entornos reproducibles

- [x] Contenedores con `Docker` / `Podman`
- [ ] Soporte para entornos `dev`, `staging`, `prod` en `.env`
- [ ] Subida automática a Vercel / Railway / Render para testing
- [ ] Configurar `GitHub Actions` para CI/CD

---

## 📊 Etapa 6 - Observabilidad y monitoreo

- [ ] Integrar `Sentry` para frontend (Next.js)
- [ ] Agregar logs estructurados (`Pino` o `Winston`) en NestJS
- [ ] Considerar `LogRocket` para trazabilidad UX
- [ ] Integrar análisis estático con `SonarQube` o `CodeQL`

---

## 📦 Etapa 7 - Gestión de dependencias

- [ ] Configurar `Dependabot` o `Renovate` para mantener actualizado el proyecto

---

## 🧩 Etapa 8 - Monorepo y contexto compartido

- [ ] Evaluar migración a `Nx` o `Turborepo` si el proyecto crece
- [ ] Compartir tipos, lógica común y configuración entre frontend/backend

---

## 🧠 Etapa 9 - Gestión de prompts y lógica IA

- [ ] Separar prompts de generación en archivos o servicios dedicados
- [ ] Versionar cambios y comportamiento con `PromptLayer` o registro propio
- [ ] Poder alternar entre OpenAI, Ollama, u otro proveedor fácilmente

---

## 🔐 Etapa 10 - Seguridad y gestión de secretos

- [x] Uso de `.env` y `.gitignore`
- [ ] Evitar exposición de claves en código
- [ ] Uso de `GitHub Secrets` o gestor como `Doppler`/`Norpass`