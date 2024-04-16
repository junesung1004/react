/*
props = property의 약자
상위 컴포넌트가 하위 컴포넌트에게 값을 전달할 때 사용하는 값
props의 가장 큰 특징은 전달받은 값은 변경할 수 없다.
props를 가져올때에는 객체형식으로 전달되며, 비동기 방식으로도 전달할 수 있다.
props는 읽기 전용으로만 불러오기 때문에 값을 변경하거나 어떠한 조작도 불가능하다.
*/
export default function Props(props) {
  console.log(props);
  const changeName = () => {
    props.name = "코린이준성"; // 이상태로 버튼 눌르면 아래의 에러가 뜸
    //Cannot assign to read only property 'name' of object '#<Object>'
    //props에서 속성을 변경하려고 할때 나오는 에러
    //props에서 전달받은 값은 엄격하게 관리되어 컴포넌트의 불변성을 유지를 위해
    //데이터를 단방향으로 관리하기 위하여 엄격하게 제한한다.
  };
  return (
    <>
      <p>안녕하세요 저는 {props.name}입니다</p>
      <p>저는 {props.local}에 살고 있어요</p>
      <p>직업은 {props.job}입니다</p>
      <p>나이는 {props.age}입니다.</p>
      <button onClick={changeName}>Click !</button>
    </>
  );
}
