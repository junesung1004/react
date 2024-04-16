//props값 비 구조화 할당 방식으로 전달받기
export default function Props02({ name, local, job, age }) {
  return (
    <>
      <p>안녕하세요 저는 {name}입니다</p>
      <p>저는 {local}에 살고 있어요</p>
      <p>직업은 {job}입니다</p>
      <p>나이는 {age}입니다.</p>
    </>
  );
}
