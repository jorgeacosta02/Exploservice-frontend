import NavBar from "../../layouts/NavBar/NavBar.tsx";
import HomeImg from "../../components/HomeImg/HomeImg.tsx";
import HomeText from "../../components/HomeText/HomeText.tsx";
import Comments from "../../components/Comments/Comments.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeImg />
      <HomeText />
      <Comments />
      <Footer />
    </div>
  )
}

export default Home
