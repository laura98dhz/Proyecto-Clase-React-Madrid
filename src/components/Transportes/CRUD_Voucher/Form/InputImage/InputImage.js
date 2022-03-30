export default function InputImage({ newVoucher, setNewVoucher }) {

  const imageHandler = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload= function(){
      setNewVoucher({...newVoucher, fileInput : reader.result});
    }  
  };

  return (
    <>
      <input
        type="file"
        name="img-upload"
        id="input"
        accept="image/*"
        onChange={(e)=>imageHandler(e.target.files[0])}
      ></input>
      <label htmlFor="input" className="photo">
        <i className="material-icons">photo</i>
        Elige una foto...
      </label>
    </>
  );
}
