function ProfileCard({title, handle, imageSrc}) {
    //const {title, handle} = props;
   
    return (
    
    <div>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
        <img src= {imageSrc}/ >
    </div>
    )
};
// function BrightText({color}){
//     const style ={color:color}
//     return<h1 style={style}> Ka Ka Chi CHi!!</h1>
// }

export default ProfileCard;
//export default BrightText;