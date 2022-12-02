import Card from 'react-bootstrap/Card';
import LazyLoad from 'react-lazyload';



function CardLayout( {img, title, style, key,onCardHandler, setCardRef}) {
  const tt = (cardRef)=> {const ttttt = setCardRef(cardRef); return ttttt;};
  return (
    <Card key={key} className={style} onClick={onCardHandler} ref={tt}>
      <LazyLoad style={{height:"100%"}} >
      <img src={img} loading="lazy" alt={title} style={{height:"100%", width:"100%"}} />
      </LazyLoad>
      <Card.Body>
        <Card.Title className='movieTitle'>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardLayout;



