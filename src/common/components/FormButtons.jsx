const FormButtons = ({btns, onAdd, onDelete, dragProvided, tooltip}) => {
  const {hasAddBtn, hasDeleteBtn, hasDragBtn} = btns;

  return (
    <div className="flex gap-2 absolute top-[8px] right-[8px]">
      {hasDeleteBtn && <button title={tooltip.delete} className="deleteBtn btn" type="button" onClick={onDelete}>-</button>}
      {hasAddBtn && <button title={tooltip.add} className="addBtn btn" type="button" onClick={onAdd}>+</button>}
      {hasDragBtn && <div title={tooltip.drag} className="dragBtn btn" {...dragProvided} >::</div>}
    </div>
  )
}

export default FormButtons;
