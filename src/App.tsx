import "./App.css";
import MyButton from "./components/Mybutton";

function App() {
  return (
    <>
      <h1>Eventos</h1>
      <MyButton />
    </>
  );
  // const user = {
  //   username: "",
  //   email: "luiggie_example@gmail.com",
  //   imageUrl: "https://avatars.githubusercontent.com/u/22944665?s=400&u=8a534a97c6ab962dce06133516a46f3bf38fd5e0&v=4",
  //   loggedIn: true,
  // }

  // //if(user.loggedIn === false){
  // if(!user.loggedIn){
  //   return (
  //     <p>User is not logged In</p>
  //   )
  // }
  // return (
  //   <>
  //     <h1>Hola {user.username ? user.username : "\"Guest User\""}</h1>
  //     <h2>Email: {user.email}</h2>
  //     <img
  //       src={user.imageUrl}
  //       alt={`image-${user.username}`}
  //       width={200}
  //       style={
  //         {
  //           borderRadius: "100%",
  //           margin: "10px"
  //         }
  //       }
  //     />
  //     <MyButton />
  //   </>
  // )
}

export default App;
