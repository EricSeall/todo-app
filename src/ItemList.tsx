import TodoItem from "./TodoItem.tsx";

interface Props {
  items: string[];
  handleCheck: Function;
}

export default function ItemList(props: Props) {
  return (
    <div className="item-list">
      {props.items.map((item, itemIndex) => {
        return (
          <TodoItem
            key={itemIndex}
            item={item}
            checked={false}
            handleCheck={props.handleCheck}
          />
        );
      })}
      <div className="list-footer">
        <p className="items-left">
          {props.items.length} item{props.items.length === 1 ? "" : "s"} left
        </p>
        <p>
          <a>Clear Completed</a>
        </p>
      </div>
    </div>
  );
}
