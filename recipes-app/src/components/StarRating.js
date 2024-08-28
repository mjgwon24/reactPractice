import React, {useState} from 'react';
import {createArray, Star} from "../utils/CommonUtil";

/**
 * StarRating 컴포넌트
 * - 별점을 표시하는 컴포넌트
 * @param style - CSS 스타일
 * @param totalStars - 총 별점 개수
 * @param props - 추가 속성
 */
export default function StarRating({
    totalStars = 5,
    selectedStars = 0,
    onRate = f => f
}) {
    return(
      <>
          {createArray(totalStars).map((_,i) => (
              <Star
                  key={i}
                  selected={selectedStars > i}
                  onSelect={() => onRate(i+1)}
              />
          ))}
          <p>
              {selectedStars} / {totalStars}
          </p>
      </>
    );
}