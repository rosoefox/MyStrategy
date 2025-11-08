// src/context/PriceCalculator.ts
import type { IDiscountStrategy } from '../strategies/DiscountStrategy';

/**
 * Context (문맥) 클래스:
 * - 할인 전략(Strategy)을 참조하며, 클라이언트의 요청을 현재 전략에게 위임합니다.
 * - 전략이 무엇이든(정액이든 정률이든) Context는 동일한 인터페이스로 작동합니다.
 */
export class PriceCalculator {
  // Context는 전략 인터페이스(IDiscountStrategy) 타입의 객체를 참조합니다.
  private strategy: IDiscountStrategy;

  constructor(initialStrategy: IDiscountStrategy) {
    this.strategy = initialStrategy;
  }

  // 런타임에 전략을 교체할 수 있습니다.
  public setStrategy(newStrategy: IDiscountStrategy): void {
    this.strategy = newStrategy;
  }

  /**
   * 최종 가격을 계산하는 메서드:
   * - 실제 계산 로직은 자신이 아닌 현재 설정된 strategy 객체에게 '위임'합니다.
   */
  public calculate(originalPrice: number): number {
    console.log(`[문맥] 원가 ${originalPrice}원에 대해 현재 전략을 실행합니다.`);
    return this.strategy.calculateFinalPrice(originalPrice);
  }
}
