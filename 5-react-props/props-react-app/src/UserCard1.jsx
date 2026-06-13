function UserCard1(props){
    return(
        <div>
            <p>My name is {props.name} and I am {props.age} years old. I am consuming the props from the parent component</p>
        </div>
    );
}

export default UserCard1
