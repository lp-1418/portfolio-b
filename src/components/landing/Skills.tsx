import React from 'react'

function Skills() {
  return (
    <div className="hero h-content">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='text-left flex justify-center flex-row'>
          <div className='flex gap-6 flex-col'>
            <h2 className='text-3xl font-bold'>Conocimientos técnicos</h2>
            <div className='flex gap-5 '>

              {/* tarjeta */}
              <div className="card bg-base-100 w-72 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              {/* tarjeta  */}
              <div className="card bg-base-100 w-72 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              {/* tarjeta  */}
              <div className="card bg-base-100 w-72 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

            </div>
            <div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
