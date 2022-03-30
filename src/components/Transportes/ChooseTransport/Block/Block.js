export default function Block({ type, setShow, setTypes }) {
  return (
    <div
      className={`choose__transport_options--option ${type}`}
      onClick={() => {
        setShow(true);
        setTypes(type);
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () {
          window.scrollTo(x, y);
        };
      }}
    ></div>
  );
}
