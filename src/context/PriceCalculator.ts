// src/context/PriceCalculator.ts
import type { IDiscountStrategy } from '../strategies/DiscountStrategy';

// 가격 계산해줌
export class PriceCalculator {
  private strategy: IDiscountStrategy;

  constructor(initialStrategy: IDiscountStrategy) {
    this.strategy = initialStrategy;
  }

  // setter을 통해 런타임에 전략 교체 가능 (!!유연성!!)
  public setStrategy(newStrategy: IDiscountStrategy): void {
    this.strategy = newStrategy;
  }

  //최종 가격 계산
  public calculate(originalPrice: number): number {
    console.log(`${originalPrice}원에서 할인 들어갑니다!!`);
    //객체에 위임
    return this.strategy.calculateFinalPrice(originalPrice);
  }
}
