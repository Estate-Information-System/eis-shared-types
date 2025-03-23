/**
 * Статусы заявок на продажу.
 */
export enum SellOrderStatusEnum {
  /** Новая заявка */
  NEW = "NEW",
  /** Ожидает встречи */
  WAITING = "WAITING",
  /** В работе */
  IN_WORK = "IN_WORK",
  /** Отклонена */
  DECLINED = "DECLINED",
  /** Успешно обработана и завершена */
  COMPLETED = "COMPLETED",
  /** Отменена клиентом */
  CANCELED = "CANCELED",
  /** Ложная заявка/клиент не ответил */
  FALSE_ORDER = "FALSE_ORDER",
}

/**
 * Отображаемый текст для каждого из статусов
 */
export enum SellOrderStatusDisplayTextEnum {
  /** Новая заявка */
  NEW = "Новая",
  /** Ожидает встречи */
  WAITING = "Ожидает встречи",
  /** В работе */
  IN_WORK = "В работе",
  /** Отклонена */
  DECLINED = "Отклонена",
  /** Успешно обработана и завершена */
  COMPLETED = "Завершена успешно",
  /** Отменена клиентом */
  CANCELED = "Отменена клиентом",
  /** Ложная заявка/клиент не ответил */
  FALSE_ORDER = "Ложная заявка",
}

export const SellOrderStatusColorSchemaConst: Record<
  SellOrderStatusEnum,
  "primary" | "success" | "info" | "warning" | "error" | "default" | "secondary"
> = {
  NEW: "primary",
  WAITING: "warning",
  IN_WORK: "info",
  DECLINED: "error",
  COMPLETED: "success",
  CANCELED: "error",
  FALSE_ORDER: "error",
};
