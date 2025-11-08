// src/strategies/FixedDiscount.ts
import type { IDiscountStrategy } from './DiscountStrategy';

/**
 * 구체적인 전략 1: 정액 할인 (고정된 금액만큼 할인)
 */
export class FixedDiscount implements IDiscountStrategy {
  private discountAmount: number;

  constructor(amount: number) {
    this.discountAmount = amount;
  }

  // 인터페이스를 구현하여 정액 할인 로직을 제공합니다.
  public calculateFinalPrice(price: number): number {
    console.log(`[전략] 정액 할인 ${this.discountAmount}원 적용됨.`);
    return Math.max(0, price - this.discountAmount);
  }
}
