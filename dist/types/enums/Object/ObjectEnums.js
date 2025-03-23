/** Категории объекта недвижимости */
export var CategoryEnum;
(function (CategoryEnum) {
    /** Категория недвижимости - Квартира */
    CategoryEnum["Apartment"] = "apartment";
    /** Категория недвижимости - Дом */
    CategoryEnum["House"] = "house";
    /** Категория недвижимости - Коттедж */
    CategoryEnum["Cottage"] = "cottage";
    /** Категория недвижимости - Земельный участок */
    CategoryEnum["Land"] = "land";
    /** Категория недвижимости - Коммерческая недвижимость */
    CategoryEnum["Commercial"] = "commercial";
    /** Категория недвижимости - Бизнес */
    CategoryEnum["Business"] = "business";
    /** Категория недвижимости - Заводы и фабрики */
    CategoryEnum["Factory"] = "factory";
    /** Категория недвижимости - Другое */
    CategoryEnum["Other"] = "other";
    /** Категория недвижимости - Таунхаус */
    CategoryEnum["Townhouse"] = "townhouse";
})(CategoryEnum || (CategoryEnum = {}));
/** Рассматривается ли обмен данной недвижимости */
export var ExchangeEnum;
(function (ExchangeEnum) {
    ExchangeEnum["Yes"] = "yes";
    ExchangeEnum["No"] = "no";
})(ExchangeEnum || (ExchangeEnum = {}));
/** Находится ли недвижимость в залоге */
export var PledgeEnum;
(function (PledgeEnum) {
    /** Недвижимость в залоге - Нет */
    PledgeEnum["None"] = "none";
    /** Недвижимость в залоге - Да, у банка */
    PledgeEnum["Bank"] = "bank";
    /** Недвижимость в залоге - Да, арест */
    PledgeEnum["Police"] = "police";
})(PledgeEnum || (PledgeEnum = {}));
/** Состояние документов данной недвижимости */
export var DocumentsEnum;
(function (DocumentsEnum) {
    /** Документы в порядке */
    DocumentsEnum["Good"] = "good";
    /** Документы не в порядке, нужно провести работу */
    DocumentsEnum["NeedUpdate"] = "needUpdate";
    /** Нужно проверить документы */
    DocumentsEnum["NeedCheck"] = "needCheck";
    /** Есть проблемы с документами */
    DocumentsEnum["Bad"] = "bad";
})(DocumentsEnum || (DocumentsEnum = {}));
/** Техническое состояние недвижимости */
export var HouseConditionEnum;
(function (HouseConditionEnum) {
    HouseConditionEnum["Perfect"] = "perfect";
    HouseConditionEnum["Good"] = "good";
    HouseConditionEnum["Bad"] = "bad";
    HouseConditionEnum["Free"] = "free";
    HouseConditionEnum["Build"] = "build";
    HouseConditionEnum["Medium"] = "medium";
    HouseConditionEnum["Clean"] = "clean";
})(HouseConditionEnum || (HouseConditionEnum = {}));
/** Материал стен дома или здания в котором находится недвижимость */
export var HouseWallMaterialEnum;
(function (HouseWallMaterialEnum) {
    HouseWallMaterialEnum["Brick"] = "brick";
    HouseWallMaterialEnum["Wood"] = "wood";
    HouseWallMaterialEnum["GasSilicateBlock"] = "gasSilicateBlock";
    HouseWallMaterialEnum["CinderBlock"] = "cinderBlock";
    HouseWallMaterialEnum["HeatBlock"] = "heatBlock";
    HouseWallMaterialEnum["Panel"] = "panel";
    HouseWallMaterialEnum["Monolith"] = "monolith";
    HouseWallMaterialEnum["Saman"] = "saman";
    HouseWallMaterialEnum["GasConcreteBlock"] = "gasConcreteBlock";
    HouseWallMaterialEnum["FoamBlock"] = "foamBlock";
})(HouseWallMaterialEnum || (HouseWallMaterialEnum = {}));
/** Материал крыши дома или здания в котором находится недвижимость */
export var HouseRoofMaterialEnum;
(function (HouseRoofMaterialEnum) {
    HouseRoofMaterialEnum["Tile"] = "tile";
    HouseRoofMaterialEnum["Soft"] = "soft";
    HouseRoofMaterialEnum["Metal"] = "metal";
    HouseRoofMaterialEnum["Ondulin"] = "ondulin";
    HouseRoofMaterialEnum["MetalTile"] = "metalTile";
    HouseRoofMaterialEnum["CorrugatedSheetRoof"] = "corrugatedSheetRoof";
    HouseRoofMaterialEnum["Slate"] = "slate";
})(HouseRoofMaterialEnum || (HouseRoofMaterialEnum = {}));
/** Имеется ли мебель в недвижимости, которая останется после продажи/аренды */
export var FurnitureEnum;
(function (FurnitureEnum) {
    /** Полностью мебелирована */
    FurnitureEnum["Part"] = "part";
    /** Частично мебелирована */
    FurnitureEnum["Full"] = "full";
    /** Мебели нет */
    FurnitureEnum["None"] = "none";
})(FurnitureEnum || (FurnitureEnum = {}));
/** Имеется ли интернет */
export var EthernetEnum;
(function (EthernetEnum) {
    EthernetEnum["Connected"] = "connected";
    EthernetEnum["ToConnect"] = "toConnect";
    EthernetEnum["None"] = "none";
})(EthernetEnum || (EthernetEnum = {}));
/** Тип дома, полностью реализуется дом или частично, например когда дом на 2 хозяина и продается только часть дома */
export var HouseTypeEnum;
(function (HouseTypeEnum) {
    /** Часть дома */
    HouseTypeEnum["Part"] = "part";
    /** Полностью целый дом */
    HouseTypeEnum["Full"] = "full";
    /** Другое, нестандартный случай */
    HouseTypeEnum["Other"] = "other";
})(HouseTypeEnum || (HouseTypeEnum = {}));
export var ElectricTypeEnum;
(function (ElectricTypeEnum) {
    ElectricTypeEnum["Part"] = "part";
    ElectricTypeEnum["Full"] = "full";
    ElectricTypeEnum["None"] = "none";
})(ElectricTypeEnum || (ElectricTypeEnum = {}));
export var HeatingTypeEnum;
(function (HeatingTypeEnum) {
    HeatingTypeEnum["Central"] = "central";
    HeatingTypeEnum["Gas"] = "gas";
    HeatingTypeEnum["Solid"] = "solid";
    HeatingTypeEnum["Liquid"] = "liquid";
    HeatingTypeEnum["None"] = "none";
})(HeatingTypeEnum || (HeatingTypeEnum = {}));
export var GasTypeEnum;
(function (GasTypeEnum) {
    GasTypeEnum["Central"] = "central";
    GasTypeEnum["Auto"] = "auto";
    GasTypeEnum["CanConnect"] = "canConnect";
    GasTypeEnum["None"] = "none";
})(GasTypeEnum || (GasTypeEnum = {}));
export var SewerTypeEnum;
(function (SewerTypeEnum) {
    SewerTypeEnum["Central"] = "central";
    SewerTypeEnum["Septic"] = "septic";
    SewerTypeEnum["CanConnect"] = "canConnect";
    SewerTypeEnum["None"] = "none";
})(SewerTypeEnum || (SewerTypeEnum = {}));
export var ToiletTypeEnum;
(function (ToiletTypeEnum) {
    ToiletTypeEnum["In"] = "in";
    ToiletTypeEnum["Out"] = "out";
})(ToiletTypeEnum || (ToiletTypeEnum = {}));
export var WaterTypeEnum;
(function (WaterTypeEnum) {
    WaterTypeEnum["Central"] = "central";
    WaterTypeEnum["Borehole"] = "borehole";
    WaterTypeEnum["CanConnect"] = "canConnect";
    WaterTypeEnum["None"] = "none";
})(WaterTypeEnum || (WaterTypeEnum = {}));
export var GarageEnum;
(function (GarageEnum) {
    GarageEnum["Has"] = "has";
    GarageEnum["Full"] = "full";
    GarageEnum["Part"] = "part";
    GarageEnum["None"] = "none";
})(GarageEnum || (GarageEnum = {}));
export var DealTypeEnum;
(function (DealTypeEnum) {
    DealTypeEnum["Sell"] = "sell";
    DealTypeEnum["Rent"] = "rent";
})(DealTypeEnum || (DealTypeEnum = {}));
export var BusinessTypeEnum;
(function (BusinessTypeEnum) {
    BusinessTypeEnum["FreeSpace"] = "freeSpace";
    BusinessTypeEnum["Cafe"] = "cafe";
    BusinessTypeEnum["Office"] = "office";
    BusinessTypeEnum["AreaBase"] = "areaBase";
    BusinessTypeEnum["Factory"] = "factory";
    BusinessTypeEnum["Store"] = "store";
})(BusinessTypeEnum || (BusinessTypeEnum = {}));
/** Статус объекта недвижимости */
export var VisibilityStatusEnum;
(function (VisibilityStatusEnum) {
    /** Активный, доступен для просмотра всем */
    VisibilityStatusEnum["Active"] = "active";
    /** Продан, доступен для просмотра всем, если задан фильтр */
    VisibilityStatusEnum["Sold"] = "sold";
    /** Отменен, доступен для просмотра только сотрудникам */
    VisibilityStatusEnum["Canceled"] = "canceled";
    /** На проверке, доступен для просмотра только сотрудникам */
    VisibilityStatusEnum["Checking"] = "checking";
    /** Сдан в аренду, доступен для просмотра только сотрудникам */
    VisibilityStatusEnum["Rented"] = "rented";
})(VisibilityStatusEnum || (VisibilityStatusEnum = {}));
/** Источник покупателя */
export var SourceCustomerEnum;
(function (SourceCustomerEnum) {
    /** Агентство Недвижимости Roze */
    SourceCustomerEnum["Roze"] = "roze";
    /** Информационный портал Крыша */
    SourceCustomerEnum["Krisha"] = "krisha";
    /** Аккаунты компании, личного бренда или реклама в Instagram */
    SourceCustomerEnum["Instagram"] = "instagram";
    /** Аккаунты компании, личного бренда или реклама в ТикТок */
    SourceCustomerEnum["TikTok"] = "tiktok";
    /** Частные случаи */
    SourceCustomerEnum["Other"] = "other";
})(SourceCustomerEnum || (SourceCustomerEnum = {}));
/** Чья в итоге сделка. Может быть такое, что была у нас в работе, но клиент сам нашел покупателя. */
export var DealOwnerEnum;
(function (DealOwnerEnum) {
    DealOwnerEnum["Agency"] = "agency";
    DealOwnerEnum["Owner"] = "owner";
    DealOwnerEnum["Other"] = "other";
})(DealOwnerEnum || (DealOwnerEnum = {}));
/** Подходит ли под ипотеку */
export var MortgageEnum;
(function (MortgageEnum) {
    /** Подходит под ипотеку */
    MortgageEnum["Accepted"] = "accepted";
    /** Не подходит под ипотеку */
    MortgageEnum["Declined"] = "declined";
    /** Можно устроить ипотеку */
    MortgageEnum["Possibly"] = "possibly";
})(MortgageEnum || (MortgageEnum = {}));
