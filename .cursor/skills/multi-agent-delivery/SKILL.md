---
name: multi-agent-delivery
description: Оркестрация разработки компонентных задач через набор специализированных субагентов с единым контрактом передачи результатов.
---

# Multi-Agent Delivery (RU)

## Назначение

Запускает и контролирует сквозной процесс выполнения задачи: план -> реализация -> документация -> проверки -> финальная
валидация.

## Когда использовать

Используй этот скилл, когда задача требует:

- создать новый компонент;
- доработать существующий компонент;
- синхронизировать стори и changelog;
- прогнать quality gates и довести задачу до готовности.

## Роли и ответственность

1. `orchestrator`
    - управляющий потоками работ и зависимостями;
    - агрегирует результат и дает итоговый статус.
2. `planner`
    - декомпозирует задачу на подзадачи с приоритетом и зависимостями.
3. `arch-review`
    - проверяет соответствие `.cursor/rules/*` и структуре проекта.
4. `implementer`
    - вносит изменения в код (основная разработка).
5. `documenter`
    - обновляет stories, docs и `CHANGELOG.md`.
6. `test-runner`
    - запускает `npm run lint`, `npm run build:lib`, `npm run build:storybook`.
7. `debugger`
    - исправляет причины падений проверок.
8. `review`
    - проводит код-ревью и выносит вердикт.
9. `security-auditor` (по необходимости)
    - проверяет критичные security-риски.
10. `refactor` (по необходимости)

- улучшает читаемость/поддерживаемость без изменения поведения.

11. `verifier`

- подтверждает выполнение задачи по DoD.

## Контракт передачи результатов

Каждый субагент обязан вернуть:

```json
{
  "status": "done | needs_changes | blocked",
  "summary": "короткий итог",
  "artifacts": ["файлы", "команды", "проверки"],
  "risks": ["риск 1", "риск 2"],
  "next_role": "имя следующей роли"
}
```

## Базовый pipeline

1. `planner` -> детальный план.
2. `arch-review` -> подтверждение плана или корректировки.
3. `implementer` -> изменения в `src/components/**` и `src/test-stpr-ui-kit.ts` (если нужен публичный экспорт).
4. `documenter` -> обновление `src/stories/**`, `src/documentation/**`, `CHANGELOG.md` (если релевантно).
5. `test-runner` -> запуск quality gates.
6. `debugger` -> исправления при падении quality gates, затем повтор шага 5.
7. `review` -> вердикт по качеству реализации.
8. `verifier` -> подтверждение Definition of Done.
9. `orchestrator` -> итоговый отчет для пользователя.

## Шаблон промпта для orchestrator

Используй этот шаблон как старт:

```text
Ты orchestrator для репозитория test-stpr-ui-kit.
Твоя задача: довести change-request до состояния done.

Ограничения:
- Соблюдай правила из .cursor/rules/*.
- Для компонентных задач соблюдай цепочку:
  src/components -> src/test-stpr-ui-kit.ts -> src/stories -> CHANGELOG.md -> quality gates.
- Критерий готовности: npm run lint, npm run build:lib, npm run build:storybook проходят.

Работай через роли planner, arch-review, implementer, documenter, test-runner, debugger, review, verifier.
После каждой роли сохраняй handoff в формате:
status, summary, artifacts, risks, next_role.
```

## Definition of Done

Считай задачу завершенной только если:

- изменения реализованы и не нарушают структуру проекта;
- story обновлена под актуальный API;
- changelog обновлен для package-значимых изменений;
- quality gates пройдены;
- `review` и `verifier` вернули `done`.
