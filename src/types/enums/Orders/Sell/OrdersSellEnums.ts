/**
 * Статусы заявок на продажу.
 */
export enum SellOrderStatusEnum {
  /** Новая заявка */
  New = "new",
  /** Ожидает встречи */
  Waiting = "waiting",
  /** В работе */
  InWork = "inWork",
  /** Отклонена */
  Declined = "declined",
}
