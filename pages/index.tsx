import React from 'react';

const Home = () => {
  const introCards = [
    {
      imageUrl: "https://images.unsplash.com/photo-1601690374587-7f943d2a0637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      text1: "Image1",
      text2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, expedita."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1579769934988-6e1a8fb8fdb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
      text1: "Image2",
      text2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, soluta."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1595378700670-e3ebd7601252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80",
      text1: "Image3",
      text2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, corrupti."
    }
  ]

  const submitContact = () => {

  }

  const cnInput = "w-full p-2 shadow focus:shadow-outline focus:outline-none rounded placeholder-gray-600";
  
  return (

    <main className="mx-auto bg-black text-white">
      {/* SECTION: Hero */}
      <section className="h-screen flex items-center justify-center">
        <div
          className="w-full h-full absolute top-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1579745831743-2bbafb0ab415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)"
          }}
        >
          <span className="absolute top-0 opacity-75 bg-black w-full h-full" />
        </div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl leading-normal mb-5">Random Landing Page</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia inventore neque fugiat tempore voluptatum! Aliquid quod laborum corporis quibusdam blanditiis, harum, commodi mollitia libero, fugit nemo inventore ducimus voluptates facere!
          </p>
        </div>
      </section>
  
      {/* SECTION: Intro */}
      <section className="bg-white text-black py-16">
        <article className="mb-5 container mx-auto text-center">
          <h3 className="text-3xl mb-2">Cards section</h3>
          <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quae?</p>
        </article>

        <article className="flex container mx-auto">
          {introCards.map((item) => (
            <div className="w-1/3 p-2">
              <img
                src={item.imageUrl} alt=""
                className="mb-3 w-full object-cover shadow-lg rounded"
                style={{height: '500px'}}/>
              <h2 className="text-lg mb-3">{item.text1}</h2>
              <p className="text-gray-700">{item.text2}</p>
            </div>
          ))}
        </article>
      </section>

      {/* SECTION: Left - Right */}
      <section className="flex container mx-auto py-64">
        <article className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1598295240767-82a050c15147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
            alt=""
            className="rounded shadow-md object-cover mx-auto"
            style={{width: '300px', height:"500px"}}
          />
        </article>

        <article className="w-1/2 flex flex-col justify-center" style={{maxWidth:'400px'}}>
            <p className="text-sm text-blue-500">Left</p>
            <h3 className="text-3xl mb-2">Left - Right Title</h3>
            <p className="teext-gray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod optio minima ullam ipsam dolores quibusdam autem repudiandae voluptates rerum, quo tenetur facere doloremque saepe blanditiis! Quidem earum laboriosam in error?</p>
        </article>
      </section>

      {/* SECTION: Contact */}
      <section className="bg-blue-600 py-40 relative">
        <div className="container mx-auto" style={{maxWidth: '500px'}}>
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1546931665-73db142e716f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
            }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-black opacity-25" />
          </div>

          <div className="relative mx-4">
            <h3 className="text-3xl">Contact Us</h3>
            <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam illum voluptates dignissimos aspernatur sit maxime vitae nesciunt ipsa consequatur?</p>

            <form onSubmit={submitContact} className="bg-blue-800 p-8 mx-auto mt-8 shadow-xl">
              <h4 className="text-2xl">Want Some More Random?</h4>
              <p className="text-gray-200 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, commodi.</p>
              
              <div className="w-full mb-3">
                <label className="block">Input1</label>
                <input type="text" className={cnInput}/>
              </div>

              <div className="w-full mb-3">
                <label className="block">Input1</label>
                <input type="text" className={cnInput}/>
              </div>

              <div className="w-full mb-3">
                <label className="block">Input1</label>
                <input type="text" className={cnInput}/>
              </div>

              <div className="w-full mb-3">
                <label className="block">Input1</label>
                <input type="text" className={cnInput}/>
              </div>

              <button className="py-2 px-6 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-blue-500 mt-4" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION: Footer */}
      <section className="bg-gray-200 text-gray-700 pt-12">
        <div className="container mx-auto flex justify-between" style={{maxWidth: '960px'}}>
          <div className="">
            <h3 className="text-3xl">Footer</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quidem!</p>
            <div className="flex items-center my-4">
              <div className="shadow-lg bg-blue-500 rounded-full w-8 h-8 p-1 text-center text-white mr-2">A</div>
              <div className="shadow-lg bg-blue-500 rounded-full w-8 h-8 p-1 text-center text-white mr-2">B</div>
              <div className="shadow-lg bg-blue-500 rounded-full w-8 h-8 p-1 text-center text-white mr-2">C</div>
            </div>
          </div>

          <div className="flex ">
            <div className="mr-32">
              <label className="block uppercase font-bold text-gray-600">link1</label>
              <ul className="text-black italic">
                <li>lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
                <li>sit amet</li>
              </ul>
            </div>

            <div className="">
              <label className="block uppercase font-bold text-gray-600">link2</label>
              <ul className="text-black italic">
                <li>lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
                <li>sit amet</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-12 pb-2">Copyright © 2020 ChaCcy Random Landing Page.</p>
      </section>
    </main>
  )
}

export default Home;