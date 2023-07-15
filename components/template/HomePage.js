import React from "react";
import Card from "../../models/Card";

function HomePage({ customers }) {

  return (
    <div>
      {customers.map((customer) => (
        <>
          <Card {...customer} key={customer._id} />
        </>
      ))}
    </div>
  );
}

export default HomePage;
