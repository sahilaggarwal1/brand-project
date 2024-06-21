import React from "react";
export default function Content() {
  return (
    <div>
      <div>
        <main className="flex py-10 justify-center items-center">
          <div className="flex-row-reverse mx-36 w-4/12 mb-6">
            <h1 className="text-6xl font-extrabold mb-12 my-4">
              Your Feet Deserve The Best
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              adipisci optio neque doloremque a veritatis et voluptatum. Odit
              ullam beatae laudantium minima vero quasi itaque, porro qui
              officia assumenda molestias.
            </p>
            <div className="flex-wrap my-6">
              <button className="bg-red-600 text-white w-1/5">Shop Now</button>
              <button className="mx-6 border border-black w-1/5">
                Category
              </button>
              <div className="my-4 text-gray-400">Also Available On</div>
              <div className="flex space-x-4">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/flipkart.png`}
                  alt="flipkart"
                ></img>
                <img
                  src={`${process.env.PUBLIC_URL}/Images/amazon.png`}
                  alt="amazon"
                ></img>
              </div>
            </div>
          </div>
          <div>
            <img
              className=""
              src={`${process.env.PUBLIC_URL}/Images/shoe_image.png`}
              alt="shoe"
            ></img>
          </div>
        </main>
      </div>
    </div>
  );
}
