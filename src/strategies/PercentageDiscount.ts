// src/strategies/PercentageDiscount.ts
import type { IDiscountStrategy } from './DiscountStrategy';

// 정률할인!
export class PercentageDiscount implements IDiscountStrategy {
  private percentage: number; // 0.15 = 15% 할인 비율 저장

  constructor(percentage: number) {
    this.percentage = percentage; // 생성 시 할인 비율 설정
  }

  // 인터페이스 구현, 정률 할인 로직
  public calculateFinalPrice(price: number): number {
    console.log(`정률 할인 ${this.percentage * 100}% 적용!`);
    //비율만큼 가격 할인
    return price * (1 - this.percentage);
  }
}
