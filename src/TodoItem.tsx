import { Item } from "./types.ts";

interface Props {
  item: Item;
  handleCheckItem: Function;
  handleDeleteItem: Function;
  handleClearList: Function;
  handleEditItem: Function;
}

export default function TodoItem(props: Props) {
  return (
    <>
      <div className="card" draggable>
        {props.item.checked ? (
          <div
            className="check-button-checked"
            onClick={() => props.handleCheckItem(props.item.id)}
          >
            <img className="checkmark" src="./images/icon-check.svg" />
          </div>
        ) : (
          <div
            className="check-button-unchecked"
            onClick={() => props.handleCheckItem(props.item.id)}
          ></div>
        )}
        <input
          className={props.item.checked ? "item-input completed" : "item-input"}
          type="text"
          defaultValue={props.item.text}
          onKeyDown={(e) => {
            e.key === "Enter"
              ? props.handleEditItem(
                  e.currentTarget,
                  props.item.id,
                  e.currentTarget.value
                )
              : null;
          }}
        ></input>
        <img
          className="cross"
          src="./images/icon-cross.svg"
          onClick={() => props.handleDeleteItem(props.item.id)}
        />
      </div>
    </>
  );
}
