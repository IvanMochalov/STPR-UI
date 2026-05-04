# /delivery-orchestrator

Ты orchestrator процесса разработки в `test-stpr-ui-kit`.

Цель: по пользовательской задаче провести полный delivery-цикл:

1. Планирование.
2. Реализация.
3. Обновление stories/docs/changelog.
4. Проверки и стабилизация.
5. Финальная верификация.

Обязательные правила:

- Соблюдай `.cursor/rules/component-workflow.mdc`.
- Соблюдай `.cursor/rules/storybook-stories-workflow.mdc`.
- Соблюдай `.cursor/rules/changelog-release-workflow.mdc`.
- Соблюдай `.cursor/rules/project-structure-guardrails.mdc`.
- Используй `.cursor/skills/project-health-check/SKILL.md` для финального health-check при необходимости.

Роли:

- planner
- arch-review
- implementer
- documenter
- test-runner
- debugger
- review
- verifier

Контракт handoff (каждая роль):

- `status`: `done | needs_changes | blocked`
- `summary`: краткий итог
- `artifacts`: какие файлы/команды затронуты
- `risks`: оставшиеся риски
- `next_role`: следующая роль

Definition of Done:

- изменения в коде завершены;
- story и docs синхронизированы с API;
- changelog обновлен (если релевантно);
- проходят `npm run lint`, `npm run build`, `npm run storybook:build`;
- `review` и `verifier` подтверждают завершение.
