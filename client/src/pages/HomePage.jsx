import React, { useEffect } from "react";
import * as api from "../apis";
function HomePage() {
  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await api.getHome();
      console.log(response);
    };
    fetchDataHome();
  }, []);
  return (
    <div className="pt-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat
      sequi reiciendis esse. Velit hic voluptates illum temporibus? Blanditiis
      aperiam commodi accusantium animi, eius autem reprehenderit recusandae.
      Inventore, ex optio.
    </div>
  );
}

export default HomePage;
