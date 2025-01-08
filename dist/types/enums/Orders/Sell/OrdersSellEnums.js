/**
 * Статусы заявок на продажу.
 */
export var SellOrderStatusEnum;
(function (SellOrderStatusEnum) {
    /** Новая заявка */
    SellOrderStatusEnum["New"] = "new";
    /** Ожидает встречи */
    SellOrderStatusEnum["Waiting"] = "waiting";
    /** В работе */
    SellOrderStatusEnum["InWork"] = "inWork";
    /** Отклонена */
    SellOrderStatusEnum["Declined"] = "declined";
})(SellOrderStatusEnum || (SellOrderStatusEnum = {}));
