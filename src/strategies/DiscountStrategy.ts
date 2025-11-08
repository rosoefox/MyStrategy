// src/strategies/DiscountStrategy.ts

//모든 할인 전략이 따라야 할 공통 메서드를 정의한다.

export interface IDiscountStrategy {
    // 원가(price)를 받아 할인된 최종 가격을 반환해야 합니다.
    calculateFinalPrice(price: number): number;
}
