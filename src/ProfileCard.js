function ProfileCard({ title, handle, imageSrc, description }) {
  //const {title, handle} = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is 1by1">
          <img src={imageSrc} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}
// function BrightText({color}){
//     const style ={color:color}
//     return<h1 style={style}> Hello!!!</h1>
// }

export default ProfileCard;
//export default BrightText;
