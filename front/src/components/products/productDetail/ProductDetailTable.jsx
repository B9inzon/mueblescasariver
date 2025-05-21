import React from 'react'

export default function ProductDetailTable({information}) {
  return (
    <div className="flex flex-col  text-[#3c3a36] pl-4 md:px-[14vw]  mt-12 xl:px-[18vw] w-full  ">
        <h2 className="text-2xl lg:text-3xl md:px-0 mb-4 lg:mb-8">
          Información del producto
        </h2>
        <table className="flex w-full h-full  px-1 md:px-0 ">
          <tbody className="flex flex-col justify-center w-full lg:w-[80%]  ">
            {Object.entries(information).map(([key, value]) => (
              <tr
                className="flex flex-row h-fit items-center justify-between py-3 border-b border-[#3c3a36]/20 "
                key={key}
              >
                <td className="w-[30vw] font-semibold capitalize">{key}</td>
                <td className="w-[60vw]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}
