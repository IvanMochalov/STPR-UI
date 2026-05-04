---
name: project-health-check
description: Выполняет быстрый и воспроизводимый health-check проекта библиотеки компонентов и Storybook: гигиена репозитория, обязательные quality gates, риски зависимостей и актуальность документации. Использовать, когда пользователь просит project health check, аудит репозитория, проверку готовности к релизу или snapshot рисков сопровождения.
---

# Project Health Check (RU)

## Назначение

Сформировать короткий и однозначный health-check проекта с сигналами pass/fail и приоритизацией самых важных рисков.

## Критические требования (обязательно)

- Все шаги и финальный отчет — только на русском языке.
- Перед финальным отчетом обязательно выполнить команды:
  - `npm run lint`
  - `npm run build`
  - `npm run storybook:build`
- Если команда не выполнена, отсутствует или завершилась с ошибкой, итоговый статус должен быть `ПРОВАЛ`.
- Отчет без проверки `storybook:build` считается невалидным.

## Когда использовать

Используй этот скилл, когда пользователь просит:
- выполнить project health check;
- оценить техническое состояние/поддерживаемость репозитория;
- проверить готовность к релизу;
- быстро выделить ключевые технические риски.

## Порядок проверки

Выполняй проверки в этом порядке. Отчет — краткий и строго на русском языке.

1. **Repository Hygiene**
   - Verify git working tree state (`git status --short`)
   - Identify large or suspicious untracked files
   - Confirm key project files exist (README, package manifest, CI config if expected)

2. **Tooling Readiness**
   - Detect available scripts from package manifests
   - Для этого репозитория (component library + Storybook) **обязателен запуск**:
     - `npm run lint`
     - `npm run build`
     - `npm run storybook:build`
   - Если любой из обязательных скриптов отсутствует в `package.json`, помечай это как `ПРОВАЛ` (а не `N/A`).
   - Дополнительные скрипты (`typecheck`, `test`) запускай при наличии; при отсутствии помечай как `N/A`.

3. **Dependency and Security Signals**
   - Check for dependency drift indicators (lockfile presence, outdated core packages if tooling exists)
   - Run vulnerability scan when supported (for example `npm audit`), then report only actionable findings
   - Highlight deprecated packages only when they affect runtime, security, or maintenance risk

4. **Documentation and Operational Readiness**
   - Ensure setup/run/test instructions exist and are still aligned with scripts
   - Check for changelog/release notes workflow presence
   - Flag missing contribution or ownership guidance only if materially affecting maintainability

5. **Risk Triage**
   - Rank issues by severity: `Critical`, `High`, `Medium`, `Low`
   - Prefer fewer high-confidence findings over long noisy lists
   - Include a concrete next action for each failing check

## Формат вывода (кратко)

Всегда возвращай результат в этой структуре и только на русском:

```markdown
# Проверка здоровья проекта

## Общий статус
`ПРОЙДЕНО | ПРОЙДЕНО С РИСКАМИ | ПРОВАЛ`

## Результаты проверок
- `ПРОЙДЕНО` Гигиена репозитория: <краткая заметка>
- `ПРОЙДЕНО|ПРОВАЛ` `npm run lint`: <краткий итог выполнения>
- `ПРОЙДЕНО|ПРОВАЛ` `npm run build`: <краткий итог выполнения>
- `ПРОЙДЕНО|ПРОВАЛ` `npm run storybook:build`: <краткий итог выполнения>
- `N/A` Дополнительные gates (`typecheck`, `test`): <почему недоступно>
- `ПРОЙДЕНО` Зависимости и безопасность: <краткая заметка>
- `ПРОЙДЕНО` Документация и процесс: <краткая заметка>

## Топ-риски
- **[Критичность]** <риск> — <влияние одной фразой>
- **[Критичность]** <риск> — <влияние одной фразой>

## Следующие шаги
1. <самое важное исправление>
2. <второе исправление>
3. <третье исправление>
```

## Логика итогового статуса

- `ПРОЙДЕНО`: нет провалов, только несущественные замечания.
- `ПРОЙДЕНО С РИСКАМИ`: есть риски Medium/High, но нет блокирующих провалов.
- `ПРОВАЛ`: любой Critical риск или провал обязательных gates (`lint`, `build`, `storybook:build`).

## Ограничения

- По возможности держи отчет в пределах 20 строк.
- Не вставляй сырой вывод команд; давай краткую выжимку фактов.
- Не скрывай отсутствие обязательных скриптов: для `lint`, `build`, `storybook:build` это `ПРОВАЛ`.
- Явно отмечай неопределенность, если доказательств недостаточно.
- Финальный отчет всегда на русском языке.

## Проверка валидности отчета

Перед публикацией отчета обязательно проверь:
- В отчете есть отдельная строка про `storybook:build` с итогом выполнения.
- В отчете есть отдельные строки про `npm run lint`, `npm run build`, `npm run storybook:build`.
- Текст отчета полностью на русском языке.
- Итоговый статус не выше `ПРОВАЛ`, если любой из обязательных gates не выполнен/неуспешен.
