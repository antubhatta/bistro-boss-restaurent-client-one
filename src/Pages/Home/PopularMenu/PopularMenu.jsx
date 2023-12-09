import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const popularItems= data.filter(items=> items.category==='popular')
            setMenu(popularItems)
        })
    },[])
    return (
      
        <div>
            <section>
            <SectionTitle subHeading={`---Check it out---`} headings={`FROM OUR MENU`}></SectionTitle>
            </section>
            <div>
                {
                    menu.map(items=> <MenuItem key={items._id} item={items}></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;