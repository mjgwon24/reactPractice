import React, {useRef, useState} from 'react';

export default function AddColorForm({onNewColor = f => f}) {
    /**
     * 제어되지 않는 컴포넌트 - useRef
     */
    // const txtTitle = useRef(); // 색 이름 수집 참조
    // const hexColor = useRef(); // 16진 색 값 참조
    //
    // /**
    //  * 폼 제출시 (ADD버튼 클릭시) 실행되는 함수
    //  */
    // const submit = e => {
    //     e.preventDefault(); // form POST 요청 방지
    //     const title = txtTitle.current.value; // ref txtTitle의 input 요소 value를 가져와 title 변수에 저장
    //     const color = hexColor.current.value; // ref hexColor의 input 요소 value를 가져와 color 변수에 저장
    //
    //     onNewColor(title, color); // 함수 프로퍼티를 통해 title과 color를 컴포넌트의 부모에게 전달
    //
    //     // input의 value 속성 값을 재설정해 데이터를 지우고 다른 색을 폼이 입력받을 수 있도록 준비
    //     txtTitle.current.value = "";
    //     hexColor.current.value = "";
    // };
    //
    // return (
    //     <form onSubmit={submit}>
    //         <input ref={txtTitle} type={"text"} placeholder={"color title input.."} required={true} />
    //         <input ref={hexColor} type={"color"} required />
    //         <button>ADD</button>
    //     </form>
    // );

    /**
     * 제어되는 컴포넌트 - useState
     */
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
    };

    return (
        <form onSubmit={submit}>
            <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                type={"text"}
                placeholder={"color title input.."}
                required={true}
            />
            <input
                value={color}
                onChange={event => setColor(event.target.value)}
                type={"color"}
                required={true}
            />
            <button>ADD</button>
        </form>
    );
}