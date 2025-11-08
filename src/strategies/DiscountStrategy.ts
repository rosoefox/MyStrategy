// src/strategies/DiscountStrategy.ts

/**
 * Strategy (전략) 인터페이스:
 * 모든 할인 알고리즘이 따라야 할 공통 계약(메서드)을 정의합니다.
 */
export interface IDiscountStrategy {
    // 원가(price)를 받아 할인된 최종 가격을 반환해야 합니다.
    calculateFinalPrice(price: number): number;
}
