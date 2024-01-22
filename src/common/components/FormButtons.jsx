const FormButtons = ({btns}) => {
  const {hasAddBtn, hasDeleteBtn, hasDragBtn} = btns;

  return (
    <div className="flex gap-2 absolute top-[8px] right-[8px]">
      {hasAddBtn && <button className="addBtn btn" type="button">+</button>}
      {hasDeleteBtn && <button className="deleteBtn btn" type="button" >-</button>}
      {hasDragBtn && <button className="dragBtn btn" type="button" >:</button>}
    </div>
  )
}

export default FormButtons;