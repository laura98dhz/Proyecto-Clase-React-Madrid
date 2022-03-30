const options = [
  { value: "mensual", label: "Mensual", id: "1" },
  { value: "azul", label: "Azul", id: "2" },
  { value: "viajes", label: "Viajes", id: "3" },
];

export default function Select({ newVoucher, setNewVoucher }) {
  function handleChange(e) {
    setNewVoucher({...newVoucher, type : e.target.value});
  }

  return (
    <>
      <label htmlFor="voucher">
        Elige tarjeta
        <select value={newVoucher.type} id="voucher" name="voucher" size={1} onChange={handleChange}>
          {options.map((item) => {
            return (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}
