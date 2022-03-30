
export default function Rombo({link,polygon}){
    return(
        <img 
          className={"rombos--img rombos--img"+ polygon}
          src={link}
          alt=""
        />

    );
}