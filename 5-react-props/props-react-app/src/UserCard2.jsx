function UserCard2({name, age}){
    return(
        <div>
            <p>My name is {name} and I am {age} years old. I am consuming the props from the parent component</p>
        </div>
    );
}

export default UserCard2