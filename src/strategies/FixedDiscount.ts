// src/strategies/FixedDiscount.ts
import type { IDiscountStrategy } from './DiscountStrategy';

// 정액할인!

export class FixedDiscount implements IDiscountStrategy {
  private discountAmount: number; // 할인 금액 저장

  constructor(amount: number) {
    this.discountAmount = amount; // 생성 시 할인 금액 저장
  }

  // 인터페이스 구현, 정액 할인 로직.
  public calculateFinalPrice(price: number): number {
    console.log(`정액 할인 ${this.discountAmount}원 적용!.`);
    //가격에서 고정된 할인 금액 빼기.
    return Math.max(0, price - this.discountAmount);
  }
}
