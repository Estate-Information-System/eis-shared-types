/** Категории объекта недвижимости */
export enum CategoryEnum {
  /** Категория недвижимости - Квартира */
  Apartment = "apartment",
  /** Категория недвижимости - Дом */
  House = "house",
  /** Категория недвижимости - Коттедж */
  Cottage = "cottage",
  /** Категория недвижимости - Земельный участок */
  Land = "land",
  /** Категория недвижимости - Коммерческая недвижимость */
  Commercial = "commercial",
  /** Категория недвижимости - Бизнес */
  Business = "business",
  /** Категория недвижимости - Заводы и фабрики */
  Factory = "factory",
  /** Категория недвижимости - Другое */
  Other = "other",
  /** Категория недвижимости - Таунхаус */
  Townhouse = "townhouse",
}

/** Рассматривается ли обмен данной недвижимости */
export enum ExchangeEnum {
  Yes = "yes",
  No = "no",
}

/** Находится ли недвижимость в залоге */
export enum PledgeEnum {
  /** Недвижимость в залоге - Нет */
  None = "none",
  /** Недвижимость в залоге - Да, у банка */
  Bank = "bank",
  /** Недвижимость в залоге - Да, арест */
  Police = "police",
}

/** Состояние документов данной недвижимости */
export enum DocumentsEnum {
  /** Документы в порядке */
  Good = "good",
  /** Документы не в порядке, нужно провести работу */
  NeedUpdate = "needUpdate",
  /** Нужно проверить документы */
  NeedCheck = "needCheck",
  /** Есть проблемы с документами */
  Bad = "bad",
}

/** Техническое состояние недвижимости */
export enum HouseConditionEnum {
  Perfect = "perfect",
  Good = "good",
  Bad = "bad",
  Free = "free",
  Build = "build",
  Medium = "medium",
  Clean = "clean",
}

/** Материал стен дома или здания в котором находится недвижимость */
export enum HouseWallMaterialEnum {
  Brick = "brick",
  Wood = "wood",
  GasSilicateBlock = "gasSilicateBlock",
  CinderBlock = "cinderBlock",
  HeatBlock = "heatBlock",
  Panel = "panel",
  Monolith = "monolith",
  Saman = "saman",
  GasConcreteBlock = "gasConcreteBlock",
  FoamBlock = "foamBlock",
}

/** Материал крыши дома или здания в котором находится недвижимость */
export enum HouseRoofMaterialEnum {
  Tile = "tile",
  Soft = "soft",
  Metal = "metal",
  Ondulin = "ondulin",
  MetalTile = "metalTile",
  CorrugatedSheetRoof = "corrugatedSheetRoof",
  Slate = "slate",
}

/** Имеется ли мебель в недвижимости, которая останется после продажи/аренды */
export enum FurnitureEnum {
  /** Полностью мебелирована */
  Part = "part",
  /** Частично мебелирована */
  Full = "full",
  /** Мебели нет */
  None = "none",
}

/** Имеется ли интернет */
export enum EthernetEnum {
  Connected = "connected",
  ToConnect = "toConnect",
  None = "none",
}

/** Тип дома, полностью реализуется дом или частично, например когда дом на 2 хозяина и продается только часть дома */
export enum HouseTypeEnum {
  /** Часть дома */
  Part = "part",
  /** Полностью целый дом */
  Full = "full",
  /** Другое, нестандартный случай */
  Other = "other",
}

export enum ElectricTypeEnum {
  Part = "part",
  Full = "full",
  None = "none",
}

export enum HeatingTypeEnum {
  Central = "central",
  Gas = "gas",
  Solid = "solid",
  Liquid = "liquid",
  None = "none",
}

export enum GasTypeEnum {
  Central = "central",
  Auto = "auto",
  CanConnect = "canConnect",
  None = "none",
}

export enum SewerTypeEnum {
  Central = "central",
  Septic = "septic",
  CanConnect = "canConnect",
  None = "none",
}

export enum ToiletTypeEnum {
  In = "in",
  Out = "out",
}

export enum WaterTypeEnum {
  Central = "central",
  Borehole = "borehole",
  CanConnect = "canConnect",
  None = "none",
}

export enum GarageEnum {
  Has = "has",
  Full = "full",
  Part = "part",
  None = "none",
}

export enum DealTypeEnum {
  Sell = "sell",
  Rent = "rent",
}

export enum BusinessTypeEnum {
  FreeSpace = "freeSpace",
  Cafe = "cafe",
  Office = "office",
  AreaBase = "areaBase",
  Factory = "factory",
  Store = "store",
}

/** Статус объекта недвижимости */
export enum VisibilityStatusEnum {
  /** Активный, доступен для просмотра всем */
  Active = "active",
  /** Продан, доступен для просмотра всем, если задан фильтр */
  Sold = "sold",
  /** Отменен, доступен для просмотра только сотрудникам */
  Canceled = "canceled",
  /** На проверке, доступен для просмотра только сотрудникам */
  Checking = "checking",
  /** Сдан в аренду, доступен для просмотра только сотрудникам */
  Rented = "rented",
}
