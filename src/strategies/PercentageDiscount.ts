// src/strategies/PercentageDiscount.ts
import type { IDiscountStrategy } from './DiscountStrategy';

/**
 * 구체적인 전략 2: 정률 할인 (설정된 비율만큼 할인)
 */
export class PercentageDiscount implements IDiscountStrategy {
  private percentage: number; // 0.15 = 15%

  constructor(percentage: number) {
    this.percentage = percentage;
  }

  // 인터페이스를 구현하여 정률 할인 로직을 제공합니다.
  public calculateFinalPrice(price: number): number {
    console.log(`[전략] 정률 할인 ${this.percentage * 100}% 적용됨.`);
    return price * (1 - this.percentage);
  }
}
