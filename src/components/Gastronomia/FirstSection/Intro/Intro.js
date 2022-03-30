import './Intro.scss';

export default function Intro(props) {
    const text = props.text;
    const gallery = props.gallery;
    return (
        <>
            <div className='intro__box'>
                <div className="intro__text">
                    {text.map(function (line) {
                        return (
                            <>
                                <span key={line.id}>
                                    {line.text}
                                </span>
                                <br />
                            </>
                        )
                    })}
                </div>

                <div className='intro__gallery'>
                    {gallery.map(function (image) {
                        return (
                            <>
                                <div className="intro__gallery--image">
                                    <img className="intro__gallery--image" src={image.img} alt="Img"/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}