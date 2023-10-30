/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
import SideBarItem from "./SideBarItem";

function Sidebar () {
  return (
    <div 
      className={twMerge(`flex h-full`, 'h-[calc(100%-120px)]')}
    >
      <div 
        className="
          hidden 
          md:flex 
          flex-col 
          bg-black 
          w-[300px] 
        "
      >
        <div className="flex flex-col  px-5 ">
          <SideBarItem />
        </div>
      </div>
      <main className="h-full no-scrollbar w-full text-white overflow-y-auto">
        <h2>Timbiqui-Buenaventura</h2>
        <p>Enbarcaciones programadas para el dia de mañana</p>
        <section className="mb-2">
          <table className="table-auto w-full">
            <thead className="bg-neutral-500   ">
              <tr className="border">
                <th>Embarcacion</th>
                <th>Lugar</th>
                <th>Salid</th>
                <th>Llegada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border">Mellizo</td>
                <td className="border">Timbiqui</td>
                <td className="border">06/30:am</td>
                <td className="border">10/00:am</td>
              </tr>
              <tr className="border">
                <td className="border">Dalton</td>
                <td className="border">Bven/tura</td>
                <td className="border">10/30:am</td>
                <td className="border">02/30:am</td>
              </tr>
            </tbody>
          </table>
        </section>
        <h2>Timbiqui-Buenaventura</h2>
        <p>Enbarcaciones de carga para el dia jueves 16 de abril</p>
        <section className="mb-2 sm:mb-5">
          <table className="table-auto w-full">
            <thead className="bg-neutral-500   ">
              <tr className="border">
                <th>Embarcacion</th>
                <th>Lugar</th>
                <th>Salid</th>
                <th>Llegada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border">metrera</td>
                <td className="border">Timbiqui</td>
                <td className="border">06/30:am</td>
                <td className="border">10/00:am</td>
              </tr>
              <tr className="border">
                <td className="border">barco</td>
                <td className="border">Bven/tura</td>
                <td className="border">10/30:am</td>
                <td className="border">02/30:am</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-5">
        <h2>Timbiqui-Guapi</h2>
        <p>Enbarcaciones programadas para el dia de mañana</p>
          <table className="table-auto w-full">
            <thead className="bg-neutral-500   ">
              <tr className="border">
                <th>Embarcacion</th>
                <th>Lugar</th>
                <th>Salid</th>
                <th>Llegada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border">Fulano</td>
                <td className="border">Timbiqui</td>
                <td className="border">06/30:am</td>
                <td className="border">09/00:am</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
 
export default Sidebar;