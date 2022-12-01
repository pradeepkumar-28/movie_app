import Card from 'react-bootstrap/Card';
import LazyLoad from 'react-lazyload';



function CardLayout( {img, title, style, key,onCardHandler}) {
  return (
    <Card key={key} className={style} onClick={onCardHandler} >
      <LazyLoad style={{height:"100%"}} >
      <Card.Img variant="top" src={img} style={{height:"100%"}}/>
      </LazyLoad>
      <Card.Body>
        <Card.Title className='movieTitle'>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardLayout;



