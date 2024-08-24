import ReactDOM from "react-dom/client";

export const data = [
    {
        "name": "구운 연어",
        "ingredients": [
            {"name": "연어", "amount": "500g", "measurement": "g"},
            {"name": "잣", "amount": "1/4컵", "measurement": "컵"},
            {"name": "버터 상추", "amount": "2컵", "measurement": "컵"},
            {"name": "옐로 스쿼시", "amount": "1개", "measurement": "개"},
            {"name": "올리브 오일", "amount": "1/2컵", "measurement": "컵"},
            {"name": "마늘", "amount": "3쪽", "measurement": "쪽"}
        ],
        "steps": [
            "1, 오븐을 350도로 예열한다.",
            "2, 연어, 옐로 스쿼시, 마늘을 베이킹 시트에 담는다.",
            "3, 올리브 오일을 연어에 조금 뿌린다.",
            "4, 오븐에서 15분간 익힌다.",
            "5, 연어를 데친다.",
            "6, 상추, 잣을 넣고 마무리한다."
        ]
    },
    {
        "name": "생선 타코",
        "ingredients": [
            {"name": "흰살 생선", "amount": "500g", "measurement": "g"},
            {"name": "치즈", "amount": "1컵", "measurement": "컵"},
            {"name": "아보카도", "amount": "2개", "measurement": "개"},
            {"name": "상추", "amount": "1컵", "measurement": "컵"},
            {"name": "라임", "amount": "2개", "measurement": "개"},
            {"name": "올리브 오일", "amount": "1/2컵", "measurement": "컵"}
        ],
        "steps": [
            "1, 생선을 그릴에 익힌다.",
            "2, 토트리야 치즈, 아보카도를 넣고 마무리한다."
        ]
    }
];

function Recipe({name, ingredients, steps}) {
    return (
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.name}</li>
                    ))}
            </ul>
            <section className="instructions">
                <h2>조리 절차</h2>
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                    ))}
            </section>
        </section>
    );
}

function Menu({title, recipes}) {
    return (
      <article>
          <header>
              <h1>{title}</h1>
          </header>
          <div className="recipes">
              {recipes.map((recipe, i) => (
                  <Recipe key={i} {...recipe} />
              ))}
          </div>
      </article>
    );
}


export function Cat({name}) {
    return (
        <>
            <h1>고양이 이름은 {name}</h1>
            <p>ㅋㅋㅋㅋㅋ</p>
        </>
    );
}

export default Menu;