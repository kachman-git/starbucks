import Box from "./components/Box";
import Responsive from "./components/nav/Responsive";
import Showcase from "./components/Showcase";

import box1 from "./assets/img/box-b.png";
import box2 from "./assets/img/box-c.png";
import box3 from "./assets/img/box-d.png";
import box4 from "./assets/img/box-e.jpg";
import box5 from "./assets/img/box-f1.jpg";
import box6 from "./assets/img/box-f2.jpg";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Responsive />
      <Showcase />
      <Box
        color={"bg-pink1"}
        image={box1}
        title={"New to the nice list"}
        p={
          "For a nondairy twist on a holiday cookie classic, try the new Iced Sugar Cookie Almondmilk Latte."
        }
        btn={"Order Now"}
        cols={"grid-cols-2"}
        textColor={"white"}
        borderColor={"white"}
      />
      <Box
        color={"bg-pink1"}
        image={box2}
        title={"Merry moment"}
        p={
          "Treat yourself to a festive Sugar Plum Cheese Danish with a nicely spiced sugar-plum spread."
        }
        btn={"Order Now"}
        cols={"grid-cols-2"}
        textColor={"white"}
        borderColor={"white"}
      />
      <Box
        color={"bg-green1"}
        image={box3}
        title={"Starbucks Thanksgiving Blend"}
        p={
          "This elegant dark roast returns, showcasing flavors from some of the world’s major coffee-growing regions."
        }
        btn={"Order Now"}
        cols={"grid-cols-2"}
        textColor={"white"}
        borderColor={"white"}
      />
      <Box
        color={"bg-pink1"}
        special={"order-2"}
        image={box4}
        title={"Fighting hunger this holiday"}
        p={
          "Hunger is affecting millions of people across America this holiday season. Join us in our commitment to hunger relief and help feed neighbors in need."
        }
        cols={"grid-cols-2"}
        btn={"Order Now"}
        textColor={"white"}
        borderColor={"white"}
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <Box
          color={"bg-gray1"}
          image={box5}
          title={"Let the holiday cheer come to you"}
          p={
            "Make the moment merry. Order Starbucks® holiday favorites on Uber Eats.*"
          }
          btn={"Order Now"}
          cols={"grid-cols-1"}
          textColor={"black"}
          borderColor={"black"}
        />
        <Box
          color={"bg-green1"}
          image={box6}
          title={"Loved Passing on Netflix?"}
          p={
            "Our new social series about film adaptations kicks off with the actors and directors who brought the book to life."
          }
          btn={"Order Now"}
          cols={"grid-cols-1"}
          textColor={"white"}
          borderColor={"white"}
        />
      </div>
      <Footer />
    </>
  );
}
