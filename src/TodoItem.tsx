interface Props {
  item: object;
  id: number;
  handleCheckItem: Function;
  handleDeleteItem: Function;
  handleClearList: Function;
  handleEditItem: Function;
}

export default function TodoItem(props: Props) {
  return (
    <>
      <div className="card">
        {props.item.checked ? (
          <div
            className="check-button-checked"
            onClick={() => props.handleCheckItem(props.id)}
          >
            <img className="checkmark" src="./images/icon-check.svg" />
          </div>
        ) : (
          <div
            className="check-button-unchecked"
            onClick={() => props.handleCheckItem(props.id)}
          ></div>
        )}
        <input
          className={props.item.checked ? "item-input completed" : "item-input"}
          type="text"
          defaultValue={props.item.text}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.handleEditItem(props.id, e.currentTarget.value)
              : null
          }
        ></input>
        <img
          className="cross"
          src="./images/icon-cross.svg"
          onClick={() => props.handleDeleteItem()}
        />
      </div>
    </>
  );
}
