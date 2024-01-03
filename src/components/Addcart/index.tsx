import React from 'react'
import Image from "next/image";
import cart from "/public/images/product01.png"

interface Props {
    
}

const Addcart = (props: Props) => {
    return (
      <div>
        <div className="flex flex-col">
          <div>
            <Image src={cart} alt="img" />
          </div>
          <div>
            <title>Premioum collection</title>
            <p>Offbline Instant Age Rewind Eraser.</p>
            <p>Rating</p>
            {/*description */}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus, repellendus. Nam voluptate illo ut quia non sapiente
              provident alias quos laborum incidunt, earum accusamus, natus.
              Vero pariatur ut veniam sequi amet consectetur.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Addcart
