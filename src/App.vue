<script setup lang="ts">
import { ref } from 'vue';
import { PriceCalculator } from './context/PriceCalculator';
import { FixedDiscount } from './strategies/FixedDiscount';
import { PercentageDiscount } from './strategies/PercentageDiscount';

const originalPrice = 100000; // 원가: 100,000원
const finalPrice = ref<number>(0);
const strategyName = ref('전략 미선택');

// 1. 초기 전략 설정: 10% 정률 할인으로 Context(계산기) 인스턴스 생성
const initialStrategy = new PercentageDiscount(0.10);
const calculator = new PriceCalculator(initialStrategy);

// 가격 계산 실행 함수
const executeCalculation = (type: 'fixed' | 'percentage') => {
  let newStrategy;

  if (type === 'fixed') {
    // 런타임에 정액 할인(3만원) 전략 객체 생성
    newStrategy = new FixedDiscount(30000);
    strategyName.value = '정액 할인 (30,000원)';
  } else {
    // 런타임에 정률 할인(20%) 전략 객체 생성
    newStrategy = new PercentageDiscount(0.20);
    strategyName.value = '정률 할인 (20%)';
  }

  // 문맥(Calculator)의 전략을 새로 만든 객체로 교체합니다.
  calculator.setStrategy(newStrategy);

  // 계산을 요청합니다. 문맥은 로직을 전략 객체에 위임합니다.
  finalPrice.value = calculator.calculate(originalPrice);

  console.log(`최종 가격: ${finalPrice.value.toLocaleString()}원`);
};
</script>

<template>
  <div class="container">
    <h1>🏃 행위 패턴: Strategy (전략) 패턴 구현</h1>
    <p class="description">
      알고리즘(할인 방식)을 클래스로 분리하고 **런타임에 교체**하여 최종 가격을 계산합니다.
    </p>

    <div class="strategy-controls">
      <p><strong>원가: {{ originalPrice.toLocaleString() }}원</strong></p>

      <div class="buttons">
        <button @click="executeCalculation('percentage')">20% 정률 할인 적용</button>
        <button @click="executeCalculation('fixed')">30,000원 정액 할인 적용</button>
      </div>

      <div class="result-box">
        <p>선택된 전략: <strong>{{ strategyName }}</strong></p>
        <p>최종 결제 가격: <strong class="final-price">{{ finalPrice.toLocaleString() }}원</strong></p>
      </div>
    </div>
    <p class="note">⚠️ **전략 실행 및 교체 과정은 개발자 도구 (Console)에서 확인하세요.**</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #4CAF50; /* 전략 패턴은 초록색으로 */
  border-bottom: 3px solid #6A5ACD;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 40px;
  color: #555;
  font-size: 1.1em;
}

.buttons button {
  margin-right: 10px;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}
.buttons button:hover {
  background-color: #45a049;
}
.result-box {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}
.final-price {
  font-size: 1.5em;
  color: #E91E63;
}

.note {
  color: gray;
  font-size: 0.9em;
  margin-top: 30px;
  padding: 10px;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  border-radius: 4px;
}
</style>
