/**
 * Статусы заявок на продажу.
 */
export declare enum SellOrderStatusEnum {
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
    FALSE_ORDER = "FALSE_ORDER"
}
/**
 * Отображаемый текст для каждого из статусов
 */
export declare enum SellOrderStatusDisplayTextEnum {
    /** Новая заявка */
    NEW = "\u041D\u043E\u0432\u0430\u044F",
    /** Ожидает встречи */
    WAITING = "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u0432\u0441\u0442\u0440\u0435\u0447\u0438",
    /** В работе */
    IN_WORK = "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435",
    /** Отклонена */
    DECLINED = "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430",
    /** Успешно обработана и завершена */
    COMPLETED = "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E",
    /** Отменена клиентом */
    CANCELED = "\u041E\u0442\u043C\u0435\u043D\u0435\u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C",
    /** Ложная заявка/клиент не ответил */
    FALSE_ORDER = "\u041B\u043E\u0436\u043D\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430"
}
export declare const SellOrderStatusColorSchemaConst: Record<SellOrderStatusEnum, "primary" | "success" | "info" | "warning" | "error" | "default" | "secondary">;
//# sourceMappingURL=OrdersSellEnums.d.ts.map