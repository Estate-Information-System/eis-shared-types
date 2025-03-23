/**
 * Статусы заявок на продажу.
 */
export var SellOrderStatusEnum;
(function (SellOrderStatusEnum) {
    /** Новая заявка */
    SellOrderStatusEnum["NEW"] = "NEW";
    /** Ожидает встречи */
    SellOrderStatusEnum["WAITING"] = "WAITING";
    /** В работе */
    SellOrderStatusEnum["IN_WORK"] = "IN_WORK";
    /** Отклонена */
    SellOrderStatusEnum["DECLINED"] = "DECLINED";
    /** Успешно обработана и завершена */
    SellOrderStatusEnum["COMPLETED"] = "COMPLETED";
    /** Отменена клиентом */
    SellOrderStatusEnum["CANCELED"] = "CANCELED";
    /** Ложная заявка/клиент не ответил */
    SellOrderStatusEnum["FALSE_ORDER"] = "FALSE_ORDER";
})(SellOrderStatusEnum || (SellOrderStatusEnum = {}));
/**
 * Отображаемый текст для каждого из статусов
 */
export var SellOrderStatusDisplayTextEnum;
(function (SellOrderStatusDisplayTextEnum) {
    /** Новая заявка */
    SellOrderStatusDisplayTextEnum["NEW"] = "\u041D\u043E\u0432\u0430\u044F";
    /** Ожидает встречи */
    SellOrderStatusDisplayTextEnum["WAITING"] = "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u0432\u0441\u0442\u0440\u0435\u0447\u0438";
    /** В работе */
    SellOrderStatusDisplayTextEnum["IN_WORK"] = "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435";
    /** Отклонена */
    SellOrderStatusDisplayTextEnum["DECLINED"] = "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430";
    /** Успешно обработана и завершена */
    SellOrderStatusDisplayTextEnum["COMPLETED"] = "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E";
    /** Отменена клиентом */
    SellOrderStatusDisplayTextEnum["CANCELED"] = "\u041E\u0442\u043C\u0435\u043D\u0435\u043D\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C";
    /** Ложная заявка/клиент не ответил */
    SellOrderStatusDisplayTextEnum["FALSE_ORDER"] = "\u041B\u043E\u0436\u043D\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430";
})(SellOrderStatusDisplayTextEnum || (SellOrderStatusDisplayTextEnum = {}));
export const SellOrderStatusColorSchemaConst = {
    NEW: "primary",
    WAITING: "warning",
    IN_WORK: "info",
    DECLINED: "error",
    COMPLETED: "success",
    CANCELED: "error",
    FALSE_ORDER: "error",
};
