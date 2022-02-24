import React from "react";

export default function Index() {
  return (
    <div>
      {/* landing background image */}
      <img
        src={require("../images/truck.png").default}
        alt="ETH"
        className="h-screen w-screen"
      />
      {/* Content on the landing image */}
      <div className="text-center">
        <h1 className="-mt-96 text-7xl font-extrabold text-white">
          Worldwide Freight
          <br /> Services
        </h1>
        <button className="bg-orange-400 h-16 w-48 mt-5 italic uppercase text-white text-2xl">
          Get Started!
        </button>
      </div>
      {/* The three boxes on home */}
      <div className="grid md:grid-cols-3 p-20 md:items-center -mt-10">
        <div className="p-20 bg-orange-400">
          <svg
            class="h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
        </div>
        <div className="p-20 bg-gray-700">
          <h2>Send Us a Message</h2>
        </div>
        <div className="p-20 bg-orange-400">
          <svg
            class="h-20 font-extralight"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
        </div>
      </div>
      {/* what we offer */}
      <h2 className="uppercase text-center text-4xl text-orange-400 font-bold">
        What we offer
      </h2>
      <div className="grid md:grid-cols-3 md:items-center ">
        <div className="p-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
        </div>
        <div className="p-20">
          <svg
            class="h-20 font-extralight"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
        </div>
        <div className="p-20">
          <svg
            class="h-20 font-extralight"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
        </div>
      </div>
      {/* Pictures of our services */}
      <div className="grid md:grid-cols-4 md:items-center -mt-10">
        <div className="p-20 bg-orange-400"></div>
        <div className="p-20 bg-gray-700"></div>
        <div className="p-20 bg-gray-400"></div>
        <div className="p-20 bg-orange-400"></div>
      </div>
      {/* More Services */}
      <div>
        <h2 className="uppercase text-center text-4xl text-orange-400 font-bold mt-10">
          More Services...
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="p-28">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora,
            adipisci mollitia unde quod ullam. Laudantium vitae explicabo
            deserunt cumque? Eos excepturi perferendis reprehenderit voluptatum
            aliquid! Dignissimos quaerat omnis eligendi.
          </div>
          <img
            src={require("../images/s1.png").default}
            alt="ETH"
            className="h-96 mt-3"
          />
        </div>
      </div>
      {/* Testimonials */}
      <div className="mt-10">
        <h2 className="uppercase text-center text-4xl text-orange-400 font-bold mb-96">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="card2 text-center">
            <img
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full"
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
            </p>
          </div>
          <div className="card2 text-center">
            <img
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full"
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="card2 text-center">
            <img
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full"
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
            </p>
          </div>
          <div className="card2 text-center">
            <img
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full"
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
            </p>
          </div>
          
        </div>
      </div>
      {/* Contact */}
      <div>
        <h2 className="uppercase text-center text-4xl text-orange-400 font-bold mt-10">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2">
          <img
            src={require("../images/c1.png").default}
            alt="ETH"
            className="h-96 mt-3"
          />
          <div className="md:p-28 grid md:grid-cols-2">
            <form className="mt-5">
              <input
                //value={email}
                //onChange={(e) => setEmail(e.target.value)}
                type="Name"
                placeholder="Name"
                className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
              />
              <input
                //value={email}
                //onChange={(e) => setEmail(e.target.value)}
                type="Name"
                placeholder="Email"
                className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
              />
              <br />
              <textarea
                placeholder="Leave a message..."
                className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
              />
              <br />

              <input
                type="submit"
                value="Send Message"
                className="p-2 mt-7 md:ml-24 rounded-sm w-fit cursor-pointer text-white bg-orange-400 opacity-75"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-700 h-96">
        <div className="grid md:grid-cols-2">
          <div className=" text-center">
            <h2 className="uppercase text-2xl text-white font-bold">
              Contact Info
            </h2>
          </div>
          <div className=" text-center">
            <h2 className="uppercase text-2xl text-white font-bold">
              Quick Links
            </h2>
          </div>
        </div>
        <hr />
        <p>Copyright 2022 All rights reserved | Desgin by Phataii</p>
      </div>
    </div>
  );
}
