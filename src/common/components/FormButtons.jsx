const FormButtons = ({btns, onAdd, onDelete, dragProvided}) => {
  const {hasAddBtn, hasDeleteBtn, hasDragBtn} = btns;

  return (
    <div className="flex gap-2 absolute top-[8px] right-[8px]">
      {hasAddBtn && <button title="新增" className="addBtn btn" type="button" onClick={onAdd}>+</button>}
      {hasDeleteBtn && <button title="刪除" className="deleteBtn btn" type="button" onClick={onDelete}>-</button>}
      {hasDragBtn && <div title="拖曳" className="dragBtn btn" {...dragProvided} >::</div>}
    </div>
  )
}

export default FormButtons;
